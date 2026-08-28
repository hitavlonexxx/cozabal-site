import React from 'react';

/* Line icons come from Lucide (CDN). The host page must load
   https://unpkg.com/lucide@0.470.0/dist/umd/lucide.js — this component just
   asks Lucide to hydrate its placeholders. */
export function Icon({ name, size = 20, strokeWidth = 1.25, color = 'currentColor', style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const draw = () => window.lucide && window.lucide.createIcons({ nameAttr: 'data-lucide', root: ref.current });
    draw();
    const t = setTimeout(draw, 300);
    return () => clearTimeout(t);
  }, [name, size, strokeWidth]);
  return (
    <span ref={ref} style={{ display: 'inline-flex', color, lineHeight: 0, ...style }} {...rest}>
      <i data-lucide={name} style={{ width: size, height: size, strokeWidth }}></i>
    </span>
  );
}
