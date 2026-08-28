import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Icon + serif numeral + small label. Used in the floating stat bar over the hero. */
export function StatItem({ icon = 'award', value, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flex: 1, padding: '0 8px' }}>
      <Icon name={icon} size={26} color="var(--brass-400)" />
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--stat-size)', lineHeight: 1,
          color: 'var(--text-on-ink)' }}>{value}</div>
        <div style={{ marginTop: 6, fontFamily: 'var(--font-sans)', fontSize: 'var(--body-xs)',
          color: 'var(--text-on-ink-muted)' }}>{label}</div>
      </div>
    </div>
  );
}
