// _ds_bundle.js is a pre-compiled snapshot of components/**/*.jsx — editing those source
// files does NOT change what the browser runs, since index.html only loads the bundle.
// This file re-declares the components we've since changed and patches them onto
// window.COZABALDesignSystem_6929d1 before any screen reads it, so edits here take effect
// without needing to regenerate the bundle. Keep in sync with the matching source file
// under components/ whenever one of them changes.
const { Heading, Button, Eyebrow, IconButton, ContactRow, SocialRow, Icon } = window.COZABALDesignSystem_6929d1;

function Divider({ orientation = 'horizontal', ground = 'light', length = '100%', style, className }) {
  const c = ground === 'ink' ? 'var(--border-hairline-ink)' : 'var(--border-hairline)';
  return <div className={className} style={orientation === 'horizontal'
    ? { width: length, height: 1, background: c, ...style }
    : { height: length, width: 1, background: c, ...style }} />;
}

function Wordmark({ name = 'COZABAL', descriptor = 'PROJECTS & CONSTRUCTION', ground = 'ink', size = 22 }) {
  const ink = ground === 'ink';
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: size, fontWeight: 'var(--weight-light)',
        letterSpacing: '.26em', textTransform: 'uppercase', lineHeight: 1,
        color: ink ? 'var(--text-on-ink)' : 'var(--text-heading)' }}>{name}</div>
      {descriptor && <div style={{ fontFamily: 'var(--font-sans)', fontSize: Math.max(7, size * 0.34),
        fontWeight: 'var(--weight-regular)', letterSpacing: '.2em', textTransform: 'uppercase',
        color: ink ? 'var(--text-on-ink-muted)' : 'var(--text-muted)' }}>{descriptor}</div>}
    </div>
  );
}

function SectionIntro({ eyebrow, title, copy, cta, ctaVariant = 'outline', ground = 'light', onCta, style }) {
  return (
    <div className="section-intro" style={{ maxWidth: 300, ...style }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading size="lg" ground={ground} style={{ marginTop: 16, lineHeight: 'var(--lh-display-loose)' }}>{title}</Heading>
      {copy && <p style={{ margin: '18px 0 0', fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm)',
        lineHeight: 'var(--lh-body)', fontWeight: 'var(--weight-light)',
        color: ground === 'ink' ? 'var(--text-on-ink-muted)' : 'var(--text-body)' }}>{copy}</p>}
      {cta && <div style={{ marginTop: 26 }}>
        <Button variant={ctaVariant} size="sm" ground={ground} onClick={onCta}>{cta}</Button>
      </div>}
    </div>
  );
}

function NavBar({ items = ['Home', 'About', 'Services', 'Projects', 'Contact'],
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

function StatItem({ icon = 'award', value, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flex: 1, padding: '0 8px' }}>
      <Icon name={icon} size={26} color="var(--brass-400)" />
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--stat-size)', lineHeight: 1,
          color: 'var(--text-on-ink)' }}>{value}</div>
        <div style={{ marginTop: 6, fontFamily: 'var(--font-sans)', fontSize: 'var(--body-xs)',
          color: 'var(--text-on-ink-muted)' }}>{label}</div>
      </div>
    </div>
  );
}

function StatBar({ children, style }) {
  const items = React.Children.toArray(children);
  const ref = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  function onMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -5, y: px * 6 });
  }
  function onLeave() {
    setHover(false);
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div ref={ref} className="stat-bar" onMouseEnter={() => setHover(true)} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '26px 40px', borderRadius: 'var(--radius-xl)', background: 'var(--glass-ink)',
        backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)',
        border: '1px solid var(--border-hairline-ink)',
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hover ? -6 : 0}px)`,
        boxShadow: hover
          ? 'var(--shadow-inset-ink), 0 4px 14px rgba(16,14,11,.4), 0 32px 70px rgba(16,14,11,.34)'
          : 'var(--shadow-inset-ink), var(--shadow-float)',
        transition: 'transform 220ms var(--ease-out-soft), box-shadow 220ms var(--ease-out-soft)',
        willChange: 'transform', ...style }}>
      {items.map((child, i) => (
        <React.Fragment key={i}>
          {child}
          {i < items.length - 1 && <Divider orientation="vertical" length="52px" ground="ink" className="stat-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function Footer({ headline = <>Let&rsquo;s Build<br />Something<br />Extraordinary</>,
  cta = 'Start your project', email = 'alex@cozabal.com', phone = '+34 627 08 70 19',
  address = <>C/ Fuerteventura 4, OF-9,<br />San Sebastián de los Reyes, 28703</>,
  hours = 'Mon–Fri, 9:00–18:00',
  blurb = 'We build spaces that last — a multidisciplinary team of architects, engineers and designers working across Madrid, Málaga, Valencia and the Canary Islands.',
  legal = '© 2026 COZABAL. All rights reserved.' }) {
  return (
    <footer style={{ background: 'var(--surface-ink-deep)', color: 'var(--text-on-ink)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '72px var(--gutter) 40px',
        display: 'grid', gridTemplateColumns: 'var(--footer-cols)', gap: 'var(--footer-gap)' }}>
        <div>
          <Heading size="md" ground="ink" style={{ lineHeight: 'var(--lh-display-loose)' }}>{headline}</Heading>
          <div style={{ marginTop: 28 }}><Button variant="primary" size="md">{cta}</Button></div>
        </div>
        <div className="stack-center" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <ContactRow icon="mail" href={'mailto:' + email}>{email}</ContactRow>
          <ContactRow icon="phone" href={'tel:' + phone.replace(/[^+\d]/g, '')}>{phone}</ContactRow>
          <ContactRow icon="map-pin">{address}</ContactRow>
          <ContactRow icon="clock">{hours}</ContactRow>
          <div style={{ marginTop: 12 }}><Eyebrow>Follow us</Eyebrow></div>
          <SocialRow />
        </div>
        <div>
          <Wordmark size={26} ground="ink" />
          <p style={{ margin: '22px 0 0', maxWidth: 300, fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm)',
            lineHeight: 'var(--lh-body)', fontWeight: 'var(--weight-light)', color: 'var(--text-on-ink-muted)' }}>{blurb}</p>
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <Divider ground="ink" />
        <div className="footer-legal" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0 28px',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--body-xs)', color: 'var(--grey-400)' }}>
          <span>{legal}</span>
          <span style={{ display: 'flex', gap: 28 }}>
            <a href="#privacy" style={{ color: 'inherit', textDecoration: 'none' }}>PRIVACY POLICY</a>
            <a href="#terms" style={{ color: 'inherit', textDecoration: 'none' }}>TERMS OF SERVICE</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window.COZABALDesignSystem_6929d1, { Divider, Wordmark, SectionIntro, NavBar, StatBar, StatItem, Footer });
