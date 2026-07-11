import React from 'react';

export function Switch({ label, checked = false, onChange, disabled = false, style }) {
  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{ position: 'absolute', width: 1, height: 1, opacity: 0 }}
      />
      <span
        style={{
          width: 40,
          height: 24,
          borderRadius: 'var(--radius-pill)',
          background: checked ? 'var(--green-500)' : 'var(--neutral-border)',
          position: 'relative',
          transition: 'background var(--duration-fast) var(--ease-out)',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 3,
            left: checked ? 19 : 3,
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#fff',
            boxShadow: 'var(--shadow-sm)',
            transition: 'left var(--duration-fast) var(--ease-out)',
          }}
        />
      </span>
      {label ? (
        <span style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)' }}>{label}</span>
      ) : null}
    </label>
  );
}

export default Switch;
