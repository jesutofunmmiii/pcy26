import React from 'react';

export function Radio({ label, checked = false, onChange, name, disabled = false, style }) {
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
        type="radio"
        name={name}
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
          borderRadius: '50%',
          border: `1.5px solid ${checked ? 'var(--green-500)' : 'var(--border-default)'}`,
          background: '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {checked ? (
          <span
            style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--green-500)' }}
          />
        ) : null}
      </span>
      {label ? (
        <span style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)' }}>{label}</span>
      ) : null}
    </label>
  );
}

export default Radio;
