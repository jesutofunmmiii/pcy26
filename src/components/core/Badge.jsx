import React from 'react';

const VARIANTS = {
  success: {
    bg: 'var(--status-success-bg)',
    color: 'var(--green-700)',
  },
  error: {
    bg: 'var(--status-error-bg)',
    color: 'var(--status-error)',
  },
  gold: {
    bg: 'var(--surface-gold-tint)',
    color: 'var(--text-gold-safe)',
  },
  neutral: {
    bg: 'var(--neutral-100)',
    color: 'var(--text-body)',
  },
};

export function Badge({ children, variant = 'neutral', style }) {
  const v = VARIANTS[variant] || VARIANTS.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 24,
        padding: '0 10px',
        borderRadius: 'var(--radius-pill)',
        background: v.bg,
        color: v.color,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-eyebrow)',
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
