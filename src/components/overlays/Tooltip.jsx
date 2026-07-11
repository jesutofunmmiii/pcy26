import React from 'react';

// Small dark tooltip bubble, shown on hover/focus of its child.
export function Tooltip({ label, children, side = 'top' }) {
  const [show, setShow] = React.useState(false);
  const posStyle =
    {
      top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8 },
      bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 8 },
    }[side] || {};
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show ? (
        <span
          role="tooltip"
          style={{
            position: 'absolute',
            ...posStyle,
            background: 'var(--green-900)',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-xs)',
            whiteSpace: 'nowrap',
            zIndex: 10,
            boxShadow: 'var(--shadow-raised)',
          }}
        >
          {label}
        </span>
      ) : null}
    </span>
  );
}

export default Tooltip;
