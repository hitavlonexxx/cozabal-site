import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Brass glyph + one or two lines of contact detail. */
export function ContactRow({ icon, children, href }) {
  const [hover, setHover] = React.useState(false);
  const body = (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <Icon name={icon} size={17} color="var(--brass-400)" style={{ marginTop: 3 }} />
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm)', lineHeight: 1.55,
        fontWeight: 'var(--weight-light)', color: hover ? 'var(--text-accent)' : 'var(--text-on-ink-muted)',
        transition: 'color var(--dur-base) var(--ease-standard)' }}>{children}</div>
    </div>
  );
  return href
    ? <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ textDecoration: 'none' }}>{body}</a>
    : body;
}
