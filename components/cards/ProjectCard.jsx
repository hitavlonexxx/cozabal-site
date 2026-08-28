import React from 'react';
import { ImageFrame } from '../core/ImageFrame.jsx';
import { IconButton } from '../core/IconButton.jsx';

/**
 * Mosaic tile for a project: photo, serif name, location, arrow badge.
 * @startingPoint section="Cards" subtitle="Project mosaic tile" viewport="700x300"
 */
export function ProjectCard({ name, location, src, ratio = '3 / 4', captionPosition = 'bottom', onClick }) {
  const [hover, setHover] = React.useState(false);
  const top = captionPosition === 'top';
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick}
      style={{ position: 'relative', cursor: 'pointer', borderRadius: 'var(--radius-sm)', overflow: 'hidden',
        height: ratio === 'auto' ? '100%' : undefined,
        transform: hover ? 'translateY(var(--lift))' : 'none', transition: 'transform var(--dur-base) var(--ease-standard)' }}>
      <ImageFrame src={src} ratio={ratio} overlay label={name} style={{ borderRadius: 'var(--radius-sm)', height: ratio === 'auto' ? '100%' : undefined }} />
      <div style={{ position: 'absolute', left: 20, right: 18, [top ? 'top' : 'bottom']: 20,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--display-xs)', lineHeight: 1.25,
            color: 'var(--text-on-ink)' }}>{name}</div>
          {location && <div style={{ marginTop: 6, fontFamily: 'var(--font-sans)', fontSize: 'var(--body-xs)',
            color: 'var(--text-on-ink-muted)' }}>{location}</div>}
        </div>
        <IconButton name="arrow-right" size={30} ground="ink" style={{ flex: '0 0 auto' }} />
      </div>
    </div>
  );
}
