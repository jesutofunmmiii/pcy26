import React from 'react';

// Underlined tab bar — active tab gets a green underline + heading color.
export function Tabs({ tabs = [], value, onChange, style }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-6)',
        borderBottom: '1.5px solid var(--border-default)',
        ...style,
      }}
    >
      {tabs.map((tab) => {
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            onClick={() => onChange && onChange(tab.value)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0 0 12px 0',
              marginBottom: -1.5,
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-md)',
              fontWeight: active ? 600 : 500,
              color: active ? 'var(--text-heading)' : 'var(--text-muted)',
              borderBottom: active ? '2.5px solid var(--green-500)' : '2.5px solid transparent',
              transition: 'color var(--duration-fast) var(--ease-out)',
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
