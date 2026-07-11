import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  style,
  id,
}) {
  const selectId = id || React.useId();
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }}>
      {label ? (
        <label
          htmlFor={selectId}
          style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-heading)' }}
        >
          {label}
        </label>
      ) : null}
      <div style={{ position: 'relative' }}>
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            appearance: 'none',
            height: 'var(--control-height-md)',
            padding: '0 40px 0 14px',
            borderRadius: 'var(--radius-sm)',
            border: `1.5px solid ${focused ? 'var(--green-500)' : 'var(--border-default)'}`,
            background: disabled ? 'var(--neutral-50)' : '#fff',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-md)',
            color: value ? 'var(--text-body)' : 'var(--text-muted)',
            outline: 'none',
          }}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <Icon
          name="chevron-down"
          size={16}
          color="var(--text-muted)"
          style={{ position: 'absolute', right: 14, top: 12, pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
}

export default Select;
