import React from 'react';

/**
 * Photography frame. COZABAL imagery is warm, dusk-lit architecture, always
 * inside a 4px-radius box with a bottom protection gradient when text overlays it.
 * With no `src`, renders the brand's placeholder plate.
 */
export function ImageFrame({ src, alt = '', ratio = '4 / 3', radius = 'var(--radius-sm)', overlay = false, label, children, style }) {
  return (
    <div style={{
      position: 'relative', aspectRatio: ratio, borderRadius: radius, overflow: 'hidden',
      background: src ? 'var(--ink-700)' : 'linear-gradient(150deg,var(--ink-600),var(--ink-900))', ...style,
    }}>
      {src
        ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        : <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--label-sm)', letterSpacing: 'var(--ls-label)',
            textTransform: 'uppercase', color: 'rgba(230,207,170,.42)', textAlign: 'center', padding: 16,
          }}>{label || 'Photography'}</div>}
      {overlay && <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-image)' }} />}
      {children}
    </div>
  );
}
