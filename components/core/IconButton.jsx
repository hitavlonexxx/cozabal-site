import React from 'react';
import { Icon } from './Icon.jsx';

/** Circular hairline glyph button — the arrow badge on project cards, social links. */
export function IconButton({ name = 'arrow-right', size = 34, ground = 'ink', filled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const onInk = ground === 'ink';
  return (
    <button
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-pill)', cursor: 'pointer',
        border: '1px solid ' + (filled ? 'transparent' : onInk ? 'rgba(247,243,236,.34)' : 'var(--border-hairline)'),
        background: filled ? (hover ? 'var(--accent-hover)' : 'var(--accent)') : hover ? 'rgba(201,160,99,.18)' : 'transparent',
        color: filled ? 'var(--on-accent)' : onInk ? 'var(--text-on-ink)' : 'var(--text-heading)',
        transition: 'background var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={name} size={Math.round(size * 0.44)} />
    </button>
  );
}
