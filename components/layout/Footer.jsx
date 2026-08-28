import React from 'react';
import { Heading } from '../core/Heading.jsx';
import { Button } from '../core/Button.jsx';
import { Eyebrow } from '../core/Eyebrow.jsx';
import { Divider } from '../core/Divider.jsx';
import { Wordmark } from './Wordmark.jsx';
import { ContactRow } from './ContactRow.jsx';
import { SocialRow } from './SocialRow.jsx';

/**
 * Deep-ink closing band: invitation headline + CTA, contact column, brand column.
 * @startingPoint section="Layout" subtitle="Closing invitation footer" viewport="1280x420"
 */
export function Footer({ headline = <>Let&rsquo;s Build<br />Something<br />Extraordinary</>,
  cta = 'Start your project', email = 'alex@cozabal.com', phone = '+34 627 08 70 19',
  address = <>C/ Fuerteventura 4, OF-9,<br />San Sebasti\u00E1n de los Reyes, 28703</>,
  hours = 'Mon\u2013Fri, 9:00\u201318:00',
  blurb = 'We build spaces that last \u2014 a multidisciplinary team of architects, engineers and designers working across Madrid, M\u00E1laga, Valencia and the Canary Islands.',
  legal = '\u00A9 2026 COZABAL. All rights reserved.' }) {
  return (
    <footer style={{ background: 'var(--surface-ink-deep)', color: 'var(--text-on-ink)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '72px var(--gutter) 40px',
        display: 'grid', gridTemplateColumns: 'var(--footer-cols)', gap: 'var(--footer-gap)' }}>
        <div>
          <Heading size="md" ground="ink" style={{ lineHeight: 'var(--lh-display-loose)' }}>{headline}</Heading>
          <div style={{ marginTop: 28 }}><Button variant="primary" size="md">{cta}</Button></div>
        </div>
        <div className="stack-center" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <ContactRow icon="mail" href={'mailto:' + email}>{email}</ContactRow>
          <ContactRow icon="phone" href={'tel:' + phone.replace(/[^+\d]/g, '')}>{phone}</ContactRow>
          <ContactRow icon="map-pin">{address}</ContactRow>
          <ContactRow icon="clock">{hours}</ContactRow>
          <div style={{ marginTop: 12 }}><Eyebrow>Follow us</Eyebrow></div>
          <SocialRow />
        </div>
        <div>
          <Wordmark size={26} ground="ink" />
          <p style={{ margin: '22px 0 0', maxWidth: 300, fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm)',
            lineHeight: 'var(--lh-body)', fontWeight: 'var(--weight-light)', color: 'var(--text-on-ink-muted)' }}>{blurb}</p>
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <Divider ground="ink" />
        <div className="footer-legal" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0 28px',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--body-xs)', color: 'var(--grey-400)' }}>
          <span>{legal}</span>
          <span style={{ display: 'flex', gap: 28 }}>
            <a href="#privacy" style={{ color: 'inherit', textDecoration: 'none' }}>PRIVACY POLICY</a>
            <a href="#terms" style={{ color: 'inherit', textDecoration: 'none' }}>TERMS OF SERVICE</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
