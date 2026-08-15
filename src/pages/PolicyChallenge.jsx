import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Badge, Icon } from '../components/index.js';
import { downloadCompendium } from '../lib/compendium.js';

const PAGE_PATHS = {
  home: '/', about: '/about', program: '/program', speakers: '/speakers', challenge: '/challenge', gallery: '/gallery',
};

export default function PolicyChallenge() {
  const navigate = useNavigate();
  const onNavigate = (page) => navigate(PAGE_PATHS[page] || '/');

  const metrics = [
    { label: 'Expressions of interest', value: '1,371', prev: 'from 734 last edition', icon: 'hand' },
    { label: 'Policy submissions', value: '322', prev: 'from 134 last edition', icon: 'file-text' },
    { label: 'States represented', value: '33 / 36', prev: 'across the federation', icon: 'map' },
    { label: 'Tertiary institutions', value: '67', prev: 'where we now hold roots', icon: 'graduation-cap' },
  ];

  const prizes = [
    { icon: 'trophy', text: 'Team SMETrust — ₦2,000,000 grand prize, on rebuilding trust in Nigeria’s tax system' },
    { icon: 'award', text: 'Team Astrum — ₦1,000,000 first runner-up, on reforming the electricity sector' },
    { icon: 'award', text: 'Team Nikao — ₦750,000 second runner-up, on the Police Force’s motto and its reality' },
    { icon: 'briefcase', text: 'All three teams: paid policy internships and continued engagement with FPDI’s network' },
  ];

  const compendia = [
    {
      year: '2026', badge: 'New',
      title: 'From 1,371 to 5: The Policy Proposals That Made It.',
      sub: 'Policy Challenge 2026 Compendium',
      body: 'The proposals shortlisted from a field of 1,371 expressions of interest and 322 submissions — including the three defended on stage in Ibadan.',
      feature: true,
    },
    {
      year: '2025', badge: 'Archive',
      title: 'Where the work started.',
      sub: 'Policy Challenge 2025 Compendium',
      body: 'The proposals from the previous cycle — 734 expressions of interest and 134 submissions.',
    },
  ];

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img data-no-reveal src="/assets/rising-arc.svg" alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '58%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>The Policy Challenge · 2026 result</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '19ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
            A landmark year, <span style={{ color: 'var(--gold-500)' }}>and a decided one.</span>
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '62ch' }}>
            The 2026 cycle of FPDI’s flagship programme grew on every metric that matters, and closed on 12 August with three teams on stage at the University of Ibadan. Team SMETrust took the ₦2 million grand prize for its proposal to rebuild trust in Nigeria’s tax system.
          </p>
        </div>
      </section>

      {/* metrics */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin) var(--space-8)' }}>
        <p className="eyebrow">The 2026 cycle in numbers</p>
        <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)', maxWidth: '24ch' }}>Nearly double the previous edition, on both sides of the funnel.</h2>
        <div className="qa-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
          {metrics.map((m) => (
            <Card key={m.label} className="card-hover" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Icon name={m.icon} size={24} color="var(--green-500)" />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 600, color: 'var(--text-heading)', lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-gold-safe)' }}>{m.label}</div>
              <div style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{m.prev}</div>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-7)', maxWidth: 'var(--measure-max)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <p style={{ margin: 0, color: 'var(--text-body)' }}>
            The 2026 cycle drew 1,371 expressions of interest and 322 policy submissions — nearly double the 734 interests and 134 submissions recorded in the previous edition.
          </p>
          <p style={{ margin: 0, color: 'var(--text-body)' }}>
            More significantly, submissions arrived from 33 of Nigeria’s 36 states, with the organisation now holding roots in 67 tertiary institutions nationwide.
          </p>
        </div>
      </section>

      {/* prizes */}
      <section style={{ background: 'var(--surface-green-tint)', padding: 'var(--space-9) 0' }}>
        <div className="section qa-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">What the winners walked away with</p>
            <h2 style={{ margin: 'var(--space-3) 0 var(--space-5)', maxWidth: '20ch' }}>Recognised on stage, and backed afterwards.</h2>
            <p style={{ margin: 0, color: 'var(--text-body)', maxWidth: 'var(--measure-max)' }}>
              Three finalist teams defended their proposals before a live panel of judges at 12:00, and the awards closed the day at 3:05. ₦3.75 million was awarded in total, alongside pathways into paid policy internships and continued engagement with FPDI’s network of policy practitioners and governance reform professionals.
            </p>
          </div>
          <Card featureCorner corner="top-right" padding="var(--space-7)" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-gold-safe)' }}>The 2026 result</div>
              <Badge variant="gold">₦3.75m awarded</Badge>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {prizes.map((p) => (
                <div key={p.text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Icon name={p.icon} size={18} color="var(--green-500)" />
                  <span style={{ fontSize: 15, color: 'var(--text-body)' }}>{p.text}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: 14 }}>
              <p style={{ margin: 0, fontSize: 13.5, color: 'var(--text-muted)' }}>Judged live in act two; awarded in act four, before the closing ceremony.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* compendia */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin)' }}>
        <p className="eyebrow">Read the proposals</p>
        <h2 style={{ margin: 'var(--space-3) 0 var(--space-3)', maxWidth: '22ch' }}>The 2026 compendium is out.</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-7)', maxWidth: 'var(--measure-max)' }}>It goes to government officials, development partners and newsrooms as a formal record of what this generation is proposing. Read the two cycles side by side and the shift between them is visible on the page.</p>
        <div className="qa-cards-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
          {compendia.map((c) => (
            <Card key={c.year} className="card-hover" featureCorner={c.feature} corner="top-right" padding="var(--space-7)" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--green-700)' }}>{c.year}</div>
                <Badge variant={c.feature ? 'gold' : 'neutral'}>{c.badge}</Badge>
              </div>
              <div>
                <h3 style={{ margin: '0 0 6px', fontSize: 'var(--text-xl)', maxWidth: '24ch' }}>{c.title}</h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{c.sub}</div>
              </div>
              <p style={{ margin: 0, fontSize: 14.5, color: 'var(--text-body)' }}>{c.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 6, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                {c.feature ? (
                  <React.Fragment>
                    <Button variant="primary" icon="download" iconPosition="end" onClick={downloadCompendium}>Download the compendium</Button>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>PDF · free</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Button variant="secondary" icon="download" iconPosition="end" disabled>Download the compendium</Button>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Available shortly</span>
                  </React.Fragment>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--green-900)' }}>
        <div className="section" style={{ padding: 'var(--space-9) var(--layout-margin)', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', margin: '0 auto var(--space-5)', maxWidth: '24ch' }}>Read the proposals the judges heard.</h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" icon="download" iconPosition="end" onClick={downloadCompendium}>Download the compendium</Button>
            <Button variant="secondary" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' }} onClick={() => onNavigate('program')}>How the day ran</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
