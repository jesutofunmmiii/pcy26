import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/index.js';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center',
        padding: 'var(--space-9) clamp(24px, 6vw, 120px)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '46ch' }}>
        <p
          className="eyebrow"
          style={{ color: 'var(--text-gold-safe)' }}
        >
          Error 404
        </p>
        <h1
          style={{
            color: 'var(--text-heading)',
            fontSize: 'var(--text-4xl)',
            fontWeight: 500,
            lineHeight: 'var(--leading-tight)',
            margin: 'var(--space-3) 0 var(--space-4)',
          }}
        >
          This page could not be found.
        </h1>
        <p style={{ color: 'var(--text-body)', margin: '0 0 var(--space-6)' }}>
          The page you were looking for may have moved, or the link was mistyped. Head back to the
          home page to find your way around.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" icon="arrow-right" iconPosition="end" onClick={() => navigate('/')}>
            Back to home
          </Button>
          <Button variant="secondary" onClick={() => navigate('/program')}>
            View the programme
          </Button>
        </div>
      </div>
    </main>
  );
}
