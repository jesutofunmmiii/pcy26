import React from 'react';
import { ICONS } from './icons.js';

// Renders a Lucide icon by name. The reference sourced icons from the Lucide
// CDN global (window.lucide); here we map the same kebab-case name 1:1 to the
// lucide-react component via the tree-shakeable ICONS registry. Wrapper markup,
// props and the missing-icon fallback are preserved from the reference.
export function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  ...rest
}) {
  const LucideIcon = ICONS[name];
  if (!LucideIcon) {
    return (
      <span
        style={{
          display: 'inline-block',
          width: size,
          height: size,
          borderRadius: 2,
          background: 'var(--neutral-border)',
          ...style,
        }}
        aria-hidden="true"
        {...rest}
      />
    );
  }
  return (
    <span
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
        lineHeight: 0,
        ...style,
      }}
      {...rest}
    >
      <LucideIcon size={size} color={color} strokeWidth={strokeWidth} />
    </span>
  );
}

export default Icon;
