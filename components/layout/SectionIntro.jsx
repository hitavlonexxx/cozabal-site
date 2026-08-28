import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';
import { Heading } from '../core/Heading.jsx';
import { Button } from '../core/Button.jsx';

/** Left rail of every band: eyebrow, short serif heading, optional copy, one CTA. */
export function SectionIntro({ eyebrow, title, copy, cta, ctaVariant = 'outline', ground = 'light', onCta, style }) {
  return (
    <div className="section-intro" style={{ maxWidth: 300, ...style }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading size="lg" ground={ground} style={{ marginTop: 16, lineHeight: 'var(--lh-display-loose)' }}>{title}</Heading>
      {copy && <p style={{ margin: '18px 0 0', fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm)',
        lineHeight: 'var(--lh-body)', fontWeight: 'var(--weight-light)',
        color: ground === 'ink' ? 'var(--text-on-ink-muted)' : 'var(--text-body)' }}>{copy}</p>}
      {cta && <div style={{ marginTop: 26 }}>
        <Button variant={ctaVariant} size="sm" ground={ground} onClick={onCta}>{cta}</Button>
      </div>}
    </div>
  );
}
