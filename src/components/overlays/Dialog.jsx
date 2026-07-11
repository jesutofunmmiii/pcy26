import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

// Modal dialog: dark scrim + white card, header with close button, body, footer actions.
export function Dialog({ open, onClose, title, children, footer, width = 480 }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(6, 46, 16, 0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width,
          maxWidth: '90vw',
          background: 'var(--surface-card)',
          borderRadius: 'var(--radius-lg)',
          border: 'var(--border-card)',
          boxShadow: 'var(--shadow-raised)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--space-5) var(--space-6)',
            borderBottom: 'var(--border-card)',
          }}
        >
          <h4 style={{ margin: 0 }}>{title}</h4>
          <IconButton icon="x" label="Close" onClick={onClose} />
        </div>
        <div style={{ padding: 'var(--space-6)' }}>{children}</div>
        {footer ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 'var(--space-3)',
              padding: 'var(--space-5) var(--space-6)',
              borderTop: 'var(--border-card)',
              background: 'var(--surface-sunken)',
            }}
          >
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dialog;
