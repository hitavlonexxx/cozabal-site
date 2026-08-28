import React from 'react';

/** Small uppercase letterspaced brass label that opens every section. */
export function Eyebrow({ children, color = 'var(--text-eyebrow)', style, ...rest }) {
  return (
    <div style={{
      fontFamily: 'var(--font-sans)', fontSize: 'var(--label-sm)', fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color, ...style,
    }} {...rest}>{children}</div>
  );
}
