import React from 'react';
import { Divider } from '../core/Divider.jsx';

/**
 * Floating dark capsule of statistics that straddles the hero and the band below it.
 * Tracks the cursor with a light 3D tilt and lifts on hover, so it reads as a physical
 * panel resting above the page rather than a flat section of it.
 */
export function StatBar({ children, style }) {
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
