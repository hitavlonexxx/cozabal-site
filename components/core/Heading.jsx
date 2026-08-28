import React from 'react';

const sizes = { xl: 'var(--display-xl)', lg: 'var(--display-lg)', md: 'var(--display-md)', sm: 'var(--display-sm)', xs: 'var(--display-xs)' };

/** Display serif heading. `accent` words render in brass italic-free serif. */
export function Heading({ level = 2, size = 'lg', ground = 'light', children, style, ...rest }) {
  const Tag = 'h' + level;
  return (
    <Tag style={{
      margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-regular)',
      fontSize: sizes[size], lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)',
      color: ground === 'ink' ? 'var(--text-on-ink)' : 'var(--text-heading)', textWrap: 'pretty', ...style,
    }} {...rest}>{children}</Tag>
  );
}

/** Brass emphasis span used inside Heading. */
export function HeadingAccent({ children, style }) {
  return <span style={{ color: 'var(--text-accent)', ...style }}>{children}</span>;
}
