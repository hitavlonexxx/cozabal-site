import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Ink-ground service tile: centred hairline glyph, serif title, small copy. */
export function ServiceCard({ icon = 'compass', title, children, active = false }) {
  const [hover, setHover] = React.useState(false);
  const lit = hover || active;
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ padding: '34px 22px 30px', textAlign: 'center', borderRadius: 'var(--radius-sm)',
        background: lit ? 'var(--ink-600)' : 'var(--surface-card-ink)',
        border: '1px solid ' + (lit ? 'var(--border-brass)' : 'var(--border-hairline-ink)'),
        transition: 'background var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)' }}>
      <Icon name={icon} size={30} color="var(--brass-400)" />
      <div style={{ marginTop: 18, fontFamily: 'var(--font-display)', fontSize: 'var(--display-xs)',
        lineHeight: 1.22, color: 'var(--text-on-ink)' }}>{title}</div>
      <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm)',
        lineHeight: 1.7, color: 'var(--text-on-ink-muted)', fontWeight: 'var(--weight-light)' }}>{children}</p>
    </div>
  );
}
