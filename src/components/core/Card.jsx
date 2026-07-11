import React from 'react';

// White card, 16px radius, 1px neutral border, soft green-tinted shadow.
// featureCorner echoes the logo's folded gold panel: one oversized 24px corner.
export function Card({
  children,
  featureCorner = false,
  corner = 'top-left',
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  const radii = {
    borderRadius: 'var(--radius-lg)',
  };
  if (featureCorner) {
    const map = {
      'top-left': { borderTopLeftRadius: 'var(--radius-feature-corner)' },
      'top-right': { borderTopRightRadius: 'var(--radius-feature-corner)' },
      'bottom-left': { borderBottomLeftRadius: 'var(--radius-feature-corner)' },
      'bottom-right': { borderBottomRightRadius: 'var(--radius-feature-corner)' },
    };
    Object.assign(radii, map[corner] || map['top-left']);
  }
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: 'var(--border-card)',
        boxShadow: 'var(--shadow-card)',
        padding,
        ...radii,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
