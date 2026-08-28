import React from 'react';

/** Hairline rule. Vertical form separates stat items; horizontal separates bands. */
export function Divider({ orientation = 'horizontal', ground = 'light', length = '100%', style, className }) {
  const c = ground === 'ink' ? 'var(--border-hairline-ink)' : 'var(--border-hairline)';
  return <div className={className} style={orientation === 'horizontal'
    ? { width: length, height: 1, background: c, ...style }
    : { height: length, width: 1, background: c, ...style }} />;
}
