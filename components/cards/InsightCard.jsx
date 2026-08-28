import React from 'react';
import { ImageFrame } from '../core/ImageFrame.jsx';
import { Icon } from '../core/Icon.jsx';

/** Journal teaser: image with overlaid date, serif title and READ MORE. */
export function InsightCard({ date, title, src, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick}
      style={{ position: 'relative', cursor: 'pointer', borderRadius: 'var(--radius-sm)', overflow: 'hidden',
        transform: hover ? 'translateY(var(--lift))' : 'none', transition: 'transform var(--dur-base) var(--ease-standard)' }}>
      <ImageFrame src={src} ratio="4 / 3" overlay label={title} />
      <div style={{ position: 'absolute', inset: 'auto 20px 20px 20px' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--label-sm)', letterSpacing: 'var(--ls-label-tight)',
          textTransform: 'uppercase', color: 'var(--text-on-ink-muted)' }}>{date}</div>
        <div style={{ marginTop: 8, fontFamily: 'var(--font-display)', fontSize: 'var(--display-xs)',
          lineHeight: 1.25, color: 'var(--text-on-ink)' }}>{title}</div>
        <div style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-sans)', fontSize: 'var(--label-sm)', letterSpacing: 'var(--ls-label-tight)',
          textTransform: 'uppercase', color: hover ? 'var(--text-accent)' : 'var(--text-on-ink)',
          transition: 'color var(--dur-base) var(--ease-standard)' }}>
          Read more <Icon name="arrow-right" size={13} />
        </div>
      </div>
    </div>
  );
}
