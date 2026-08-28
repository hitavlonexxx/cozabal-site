import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

/** Row of circular hairline social discs. */
export function SocialRow({ networks = ['linkedin', 'instagram', 'facebook', 'twitter'], size = 30 }) {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      {networks.map((n) => <IconButton key={n} name={n} size={size} ground="ink" />)}
    </div>
  );
}
