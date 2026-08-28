import React from 'react';
import { Wordmark } from './Wordmark.jsx';
import { Button } from '../core/Button.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Icon } from '../core/Icon.jsx';

/**
 * Transparent header over the hero image: wordmark left, letterspaced links centre,
 * brass-outline CTA plus overflow disc right. Active link carries a brass underline.
 * Below 767px the link row becomes a full-screen overlay toggled by a burger button.
 * @startingPoint section="Layout" subtitle="Transparent site header over hero" viewport="1280x110"
 */
export function NavBar({ items = ['Home', 'About', 'Services', 'Projects', 'Contact'],
  active = 'Home', onNavigate, cta = 'Get in touch', onCta }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  const go = (it) => { setOpen(false); onNavigate && onNavigate(it); };

  const links = items.map((it) => {
    const on = it === active;
    return (
      <a key={it} href={'#' + it.toLowerCase()} onClick={(e) => { e.preventDefault(); go(it); }}
        style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: 'var(--label-md)',
          fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--ls-label-tight)', textTransform: 'uppercase',
          textDecoration: 'none', paddingBottom: 8,
          color: on ? 'var(--text-accent)' : 'var(--text-on-ink)',
          borderBottom: '1px solid ' + (on ? 'var(--brass-400)' : 'transparent'),
          transition: 'color var(--dur-base) var(--ease-standard)' }}>{it}</a>
    );
  });

  // Portalled to document.body: a fixed-position overlay nested inside the hero's
  // overflow:hidden wrapper risks being clipped or mispositioned in some browsers.
  // Rendering it at the body root sidesteps that entirely. It's inline display:none
  // by default, so on desktop it has zero layout footprint regardless of DOM position.
  const overlay = ReactDOM.createPortal(
    <nav className={open ? 'nav-links open' : 'nav-links'} style={{ display: 'none' }}>
      {links}
      <div className="nav-links-cta" style={{ display: 'none' }}>
        <Button variant="brass" size="sm" showIcon={false} onClick={() => { setOpen(false); onCta && onCta(); }}>{cta}</Button>
      </div>
    </nav>,
    document.body
  );

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '26px var(--gutter)', gap: 32 }}>
      <Wordmark ground="ink" />
      <nav className="navbar-links-desktop" style={{ display: 'flex', gap: 34 }}>{links}</nav>
      <div className="navbar-actions-desktop" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Button variant="brass" size="sm" showIcon={false} onClick={onCta}>{cta}</Button>
        <IconButton name="more-horizontal" size={38} ground="ink" />
      </div>
      <button className="navbar-burger" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}
        style={{ display: 'none', alignItems: 'center', justifyContent: 'center', background: 'none',
          border: 'none', cursor: 'pointer', padding: 8 }}>
        <Icon name={open ? 'x' : 'menu'} size={26} color="var(--text-on-ink)" />
      </button>
      {overlay}
    </header>
  );
}
