import React from 'react';
import { Icon } from './Icon.jsx';

const pad = { sm: '10px 18px', md: '14px 24px', lg: '17px 30px' };

/**
 * @startingPoint section="Core" subtitle="Brass, outline and ghost buttons" viewport="700x150"
 */
export function Button({
  variant = 'primary', size = 'md', ground = 'light',
  icon = 'arrow-right', showIcon = true, disabled = false,
  as = 'button', href, children, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const onInk = ground === 'ink';
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 12, padding: pad[size],
    fontFamily: 'var(--font-sans)', fontSize: size === 'sm' ? 'var(--label-sm)' : 'var(--label-md)',
    fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--ls-label-tight)', textTransform: 'uppercase',
    border: '1px solid transparent', borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none', whiteSpace: 'nowrap',
    transition: 'background var(--dur-base) var(--ease-standard),color var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)',
    opacity: disabled ? 0.4 : 1,
  };
  const skins = {
    primary: {
      background: hover && !disabled ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--on-accent)',
    },
    outline: {
      background: hover && !disabled ? (onInk ? 'rgba(201,160,99,.12)' : 'rgba(201,160,99,.10)') : 'transparent',
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-heading)',
      borderColor: onInk ? 'var(--border-hairline-ink)' : 'var(--border-hairline)',
    },
    brass: {
      background: hover && !disabled ? 'rgba(201,160,99,.12)' : 'transparent',
      color: 'var(--text-accent)', borderColor: 'var(--border-brass)',
    },
    ghost: {
      background: 'transparent', padding: 0,
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-heading)',
    },
  };
  const Tag = as === 'a' ? 'a' : 'button';
  return (
    <Tag
      href={href} disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...skins[variant], ...style }} {...rest}
    >
      <span>{children}</span>
      {showIcon && (
        <Icon name={icon} size={size === 'sm' ? 13 : 15}
          style={{ transform: hover && !disabled ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out-soft)' }} />
      )}
    </Tag>
  );
}
