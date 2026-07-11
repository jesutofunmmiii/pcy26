import React from 'react';

// Text input with label, helper text and error state.
export function Input({
  label,
  helperText,
  error,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  style,
  id,
  ...rest
}) {
  const inputId = id || React.useId();
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }}>
      {label ? (
        <label
          htmlFor={inputId}
          style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-heading)' }}
        >
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          height: 'var(--control-height-md)',
          padding: '0 14px',
          borderRadius: 'var(--radius-sm)',
          border: `1.5px solid ${
            error ? 'var(--status-error)' : focused ? 'var(--green-500)' : 'var(--border-default)'
          }`,
          background: disabled ? 'var(--neutral-50)' : '#fff',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-md)',
          color: 'var(--text-body)',
          outline: 'none',
          boxShadow: focused ? '0 0 0 3px var(--surface-green-tint)' : 'none',
          transition:
            'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
        }}
        {...rest}
      />
      {error || helperText ? (
        <span
          style={{
            fontSize: 'var(--text-xs)',
            color: error ? 'var(--status-error)' : 'var(--text-muted)',
          }}
        >
          {error || helperText}
        </span>
      ) : null}
    </div>
  );
}

export default Input;
