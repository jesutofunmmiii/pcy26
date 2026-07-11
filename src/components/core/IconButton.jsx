import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: 32,
  md: 40,
  lg: 48,
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary-bg)',
    hoverBg: 'var(--action-primary-bg-hover)',
    color: '#fff',
    border: 'none',
  },
  secondary: {
    bg: 'transparent',
    hoverBg: 'var(--surface-green-tint)',
    color: 'var(--action-secondary-text)',
    border: '1.5px solid var(--action-secondary-border)',
  },
  ghost: {
    bg: 'transparent',
    hoverBg: 'var(--neutral-50)',
    color: 'var(--text-body)',
    border: 'none',
  },
};

export function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dim,
        height: dim,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-md)',
        background: disabled ? 'var(--neutral-100)' : hover ? v.hoverBg : v.bg,
        color: disabled ? 'var(--text-muted)' : v.color,
        border: v.border,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--duration-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(dim * 0.45)} />
    </button>
  );
}

export default IconButton;
