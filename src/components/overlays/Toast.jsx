import React from 'react';
import { Icon } from '../core/Icon.jsx';

const VARIANTS = {
  success: { icon: 'check-circle', color: 'var(--green-500)' },
  error: { icon: 'alert-circle', color: 'var(--status-error)' },
  info: { icon: 'info', color: 'var(--text-muted)' },
};

// Bottom-corner notification card.
export function Toast({ variant = 'info', title, description, onClose, style }) {
  const v = VARIANTS[variant] || VARIANTS.info;
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'flex-start',
        width: 340,
        background: 'var(--surface-card)',
        border: 'var(--border-card)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-raised)',
        padding: 'var(--space-4)',
        ...style,
      }}
    >
      <Icon name={v.icon} size={20} color={v.color} style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        <p
          style={{
            margin: 0,
            fontWeight: 600,
            color: 'var(--text-heading)',
            fontSize: 'var(--text-sm)',
          }}
        >
          {title}
        </p>
        {description ? (
          <p style={{ margin: '2px 0 0', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
            {description}
          </p>
        ) : null}
      </div>
      {onClose ? (
        <button
          onClick={onClose}
          aria-label="Dismiss"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            padding: 0,
          }}
        >
          <Icon name="x" size={16} />
        </button>
      ) : null}
    </div>
  );
}

export default Toast;
