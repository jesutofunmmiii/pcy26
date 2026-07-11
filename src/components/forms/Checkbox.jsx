import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, checked = false, onChange, disabled = false, style }) {
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
          width: 20,
          height: 20,
          flexShrink: 0,
          borderRadius: 5,
          border: checked ? 'none' : '1.5px solid var(--border-default)',
          background: checked ? 'var(--green-500)' : '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {checked ? <Icon name="check" size={14} color="#fff" strokeWidth={3} /> : null}
      </span>
      {label ? (
        <span style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)' }}>{label}</span>
      ) : null}
    </label>
  );
}

export default Checkbox;
