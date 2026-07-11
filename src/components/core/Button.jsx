import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 36, paddingInline: 14, fontSize: 'var(--text-sm)', gap: 6, iconSize: 16 },
  md: { height: 48, paddingInline: 20, fontSize: 'var(--text-md)', gap: 8, iconSize: 18 },
  lg: { height: 56, paddingInline: 28, fontSize: 'var(--text-lg)', gap: 8, iconSize: 20 },
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-text)',
    border: '1px solid transparent',
    hoverBg: 'var(--action-primary-bg-hover)',
  },
  accent: {
    background: 'var(--action-accent-bg)',
    color: 'var(--action-accent-text)',
    border: '1px solid transparent',
    hoverBg: 'var(--action-accent-bg-hover)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--action-secondary-text)',
    border: '1.5px solid var(--action-secondary-border)',
    hoverBg: 'var(--surface-green-tint)',
  },
};

// Primary/accent/secondary button per FPDI brand: green fill + white text,
// gold fill + dark text (use once per view), or green outline. 48px tall (md).
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'start',
  disabled = false,
  children,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        padding: `0 ${s.paddingInline}px`,
        borderRadius: 'var(--radius-md)',
        background: disabled ? 'var(--neutral-100)' : hover ? v.hoverBg : v.background,
        color: disabled ? 'var(--text-muted)' : v.color,
        border: v.border,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-body-semibold)',
        fontSize: s.fontSize,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: `background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)`,
        transform: hover && !disabled ? 'translateY(-1px)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {icon && iconPosition === 'start' ? <Icon name={icon} size={s.iconSize} /> : null}
      {children}
      {icon && iconPosition === 'end' ? <Icon name={icon} size={s.iconSize} /> : null}
    </button>
  );
}

export default Button;
