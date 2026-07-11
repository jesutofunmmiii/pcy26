import React from 'react';
import { Icon } from './Icon.jsx';

// Filter/category chip — optionally removable.
export function Tag({
  children,
  selected = false,
  removable = false,
  onRemove,
  onClick,
  style,
}) {
  const interactive = !!onClick;
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 32,
        padding: '0 12px',
        borderRadius: 'var(--radius-sm)',
        background: selected ? 'var(--surface-green-tint)' : 'var(--surface-sunken)',
        color: selected ? 'var(--green-700)' : 'var(--text-body)',
        border: selected ? '1px solid var(--green-500)' : '1px solid var(--border-default)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
      {removable ? (
        <span
          role="button"
          aria-label="Remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove && onRemove();
          }}
          style={{ display: 'inline-flex', cursor: 'pointer' }}
        >
          <Icon name="x" size={14} />
        </span>
      ) : null}
    </span>
  );
}

export default Tag;
