import React from 'react';

/**
 * Typographic brand lockup. No logo file was supplied with this brand, so the
 * wordmark is set in plain type: name in letterspaced caps over a hairline-spaced
 * descriptor. Do not substitute an invented mark.
 */
export function Wordmark({ name = 'COZABAL', descriptor = 'PROJECTS & CONSTRUCTION', ground = 'ink', size = 22 }) {
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
