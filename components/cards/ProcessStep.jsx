import React from 'react';

/** Numbered brass disc, serif-free sans title, short copy — the process timeline. */
export function ProcessStep({ number, title, children, ground = 'light' }) {
  const ink = ground === 'ink';
  return (
    <div style={{ textAlign: 'center', maxWidth: 168 }}>
      <div style={{ width: 44, height: 44, margin: '0 auto', borderRadius: 'var(--radius-pill)',
        background: 'var(--brass-400)', color: 'var(--on-accent)', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm)',
        fontWeight: 'var(--weight-medium)', letterSpacing: '.04em' }}>{number}</div>
      <div style={{ marginTop: 16, fontFamily: 'var(--font-sans)', fontSize: 'var(--body-md)',
        fontWeight: 'var(--weight-medium)', color: ink ? 'var(--text-on-ink)' : 'var(--text-heading)' }}>{title}</div>
      <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-sans)', fontSize: 'var(--body-xs)', lineHeight: 1.65,
        fontWeight: 'var(--weight-light)', color: ink ? 'var(--text-on-ink-muted)' : 'var(--text-muted)' }}>{children}</p>
    </div>
  );
}
