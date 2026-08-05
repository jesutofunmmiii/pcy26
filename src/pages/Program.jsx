import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Badge, Icon } from '../components/index.js';

// Maps the reference's `page` ids to router paths.
const PAGE_PATHS = {
  home: '/',
  about: '/about',
  program: '/program',
  register: '/delegate',
  volunteer: '/volunteer',
};

export default function Program() {
  const navigate = useNavigate();
  const onNavigate = (page) => navigate(PAGE_PATHS[page] || '/');

  // A single flat, chronological run of show for the full day.
  const schedule = [
    { time: '9:00', end: '10:00', type: 'Welcome', title: 'Registration + Breakfast', lead: 'Ushers', purpose: 'Delegates check in, collect their badges and settle in before the day opens.' },
    { time: '10:00', end: '10:10', type: '', title: 'National Anthem & Introduction', lead: '', purpose: '' },
    { time: '10:10', end: '10:25', type: 'Opening', title: 'Theatre Performance', lead: 'Theatre group', purpose: 'A spoken-word / theatre performance that emotionally hooks the audience on the realities of the institutional trust deficit.' },
    { time: '10:25', end: '10:35', type: 'Welcome', title: 'Welcome & Conference Opening', lead: 'Host', purpose: 'The host orients attendees to the day’s theme and structure, setting a candid, solutions-focused tone.' },
    { time: '10:35', end: '10:55', type: '', title: 'Keynote Address', lead: '', purpose: '' },
    { time: '10:55', end: '11:00', type: '', title: 'Audience Polls Open', lead: '', purpose: '' },
    { time: '11:00', end: '11:30', type: 'Panel', title: 'Panel Discussion', lead: 'Panel', purpose: 'A structured panel probing the structural roots of eroded trust — facilitated dialogue with audience Q&A via live Slido submissions.' },
    { time: '11:30', end: '12:00', type: 'Keynote', title: "Founder's Session", lead: 'Founder', purpose: 'The Founder speaks directly to the room as the person who initiated this work — more personal, more forward-looking.' },
    { time: '12:00', end: '12:20', type: 'Competition', title: 'Policy Challenge Finals', lead: 'Top 3 teams', purpose: 'The three finalist teams present reform proposals. Each team: 8 minutes to present + 2 minutes for judge questions.' },
    { time: '12:20', end: '12:40', type: 'Panel', title: 'Fireside Chat', lead: 'Fireside', purpose: 'An intimate, reflective conversation on how trust is rebuilt between citizens and institutions, one interaction at a time.' },
    { time: '12:40', end: '1:40', type: '', title: 'Model National Assembly Session', lead: '', purpose: '' },
    { time: '1:40', end: '2:10', type: 'Break', title: 'Lunch Break', lead: '—', purpose: 'Catered meal, networking tables, and photo wall.' },
    { time: '2:10', end: '2:20', type: '', title: 'Reconvene + Audience Energizer + Ads', lead: '', purpose: '' },
    { time: '2:20', end: '2:35', type: 'Open House', title: 'SpotOn (TEDx-Style Talk 1)', lead: 'Speaker', purpose: 'Opens the afternoon with energy — a bold provocation to set the tone.' },
    { time: '2:35', end: '2:50', type: 'Open House', title: 'SpotOn (TEDx-Style Talk 2)', lead: 'Speaker', purpose: 'A different register — data-driven or comparative, grounding the conversation in evidence.' },
    { time: '2:50', end: '3:05', type: 'Open House', title: 'SpotOn (TEDx-Style Talk 3)', lead: 'Speaker', purpose: 'The midpoint — the Compere invites 2 minutes of live audience reaction via Slido.' },
    { time: '3:05', end: '3:20', type: 'Competition', title: 'Policy Challenge Awards', lead: 'Judges', purpose: 'The winning team is announced; all three finalist briefs are included in the published communiqué.' },
    { time: '3:20', end: '3:30', type: '', title: 'Vision Casting', lead: '', purpose: '' },
    { time: '3:30', end: '3:40', type: 'Closing', title: 'Closing Ceremony & Networking', lead: 'Host', purpose: 'The host closes the day with a vote of thanks and next steps for delegates.' },
  ];

  const typeColor = {
    Opening: 'var(--green-500)', Welcome: 'var(--green-500)', Plenary: 'var(--green-700)',
    Keynote: 'var(--green-700)', Panel: 'var(--green-500)', Workshops: 'var(--green-500)',
    'Open House': 'var(--gold-700)', Competition: 'var(--gold-700)', Closing: 'var(--green-700)',
    Transition: 'var(--text-muted)', Break: 'var(--text-muted)',
  };

  const deepDives = [
    { icon: 'users-round', tag: 'Panel', time: '35 mins', title: 'Panel — "Real Talk: Rebuilding Trust in The Nigerian State"', body: 'A structured, facilitated panel bringing distinct lenses to the trust-deficit question, driving toward actionable synthesis.', points: ['Opening frame + 90-second panelist positions.', 'Structured dialogue: one targeted question per panelist.', 'Synthesis round + audience Q&A via Slido.'] },
    { icon: 'flame', tag: 'Keynote', time: '20 mins', title: "Founder's session", body: 'The Founder speaks to the room as the person who initiated this work. More personal and forward-looking than the panel — ending on a direct challenge to the audience.', points: ['Why this convening exists — and why now.', 'What the Policy Challenge has learned about engaging young Nigerians.', 'A direct challenge: what will you do differently after today?'] },
    { icon: 'layout-grid', tag: 'Workshops', time: '40 mins', title: 'Breakout sessions', body: 'Four simultaneous small-group sessions, each anchored to a track. Groups are facilitated, not lectured — every room produces a concrete one-pager fed into the communiqué.', points: ['Policy & Governance', 'The Creative Economy', 'Technology & Innovation', 'Corporate Careers & Leadership'] },
    { icon: 'presentation', tag: 'Open House', time: '4 talks', title: 'SpotOn talks', body: 'Four speakers, four distinct arguments. Each 10-minute talk makes a single well-argued case rather than surveying a topic broadly — sustaining the intellectual momentum of the afternoon.', points: ['Bold provocation to open the afternoon.', 'Evidence-driven, comparative grounding.', 'Live audience reaction at the midpoint.', 'A bridge into the debate and the close of the day.'] },
    { icon: 'mic', tag: 'Panel', time: '20 mins', title: 'Fireside chat — "The Smallest Unit of Trust"', body: 'An intimate, reflective conversation that brings the day down to human scale — how trust is rebuilt between citizens and institutions, one interaction at a time.', points: ['A slower register after the SpotOn talks.', 'Personal stories over talking points.', 'Closes on what each delegate can rebuild first.'] },
    { icon: 'trophy', tag: 'Competition', time: '30 mins', title: 'Policy Challenge finals', body: 'The finalist teams present reform proposals to the full conference — the culmination of months of research, mentorship and iteration. The winner is announced in the closing act.', points: ['Each team: 8 minutes to present + 2 minutes for judges.', 'Judged on evidence, feasibility, originality and clarity.', 'All three finalist briefs enter the published communiqué.'] },
  ];

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img src="/assets/rising-arc.svg" alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>Full-day programme · 10:00 AM – 4:00 PM</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '15ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
            One working day, <span style={{ color: 'var(--gold-500)' }}>end to end.</span>
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '62ch' }}>
            The day combines plenary engagements — a structured panel and a Founder's address — with four breakout rooms, four SpotOn talks, a fireside chat, and the Policy Challenge finals. Deliberately paced to sustain energy and reward participation.
          </p>
        </div>
      </section>

      {/* timeline */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin) var(--space-8)' }}>
        <p className="eyebrow">Run of show</p>
        <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)' }}>The full programme.</h2>

        <div style={{ borderTop: '1px solid var(--border-default)' }}>
          {schedule.map((s, i) => {
            const muted = s.type === 'Transition' || s.type === 'Break';
            return (
              <div key={i} className="qa-prog-row" style={{
                display: 'grid', gridTemplateColumns: '132px 150px 1fr', gap: 'var(--space-5)',
                padding: muted ? '14px 0' : 'var(--space-5) 0', borderBottom: '1px solid var(--border-default)',
                alignItems: 'start', background: muted ? 'transparent' : 'transparent',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: muted ? 'var(--text-muted)' : 'var(--green-700)', whiteSpace: 'nowrap' }}>
                  {s.time}<span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>–{s.end}</span>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: typeColor[s.type] }}>{s.type}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: muted ? 500 : 600, fontSize: muted ? 15 : 'var(--text-lg)', color: muted ? 'var(--text-body)' : 'var(--text-heading)' }}>{s.title}</div>
                  {!muted && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.lead}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* session deep-dives */}
      <section style={{ background: 'var(--surface-green-tint)', padding: 'var(--space-9) 0' }}>
        <div className="section">
          <p className="eyebrow">Session deep-dives</p>
          <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)', maxWidth: '20ch' }}>What each session is designed to do.</h2>
          <div className="qa-cards-2 reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }}>
            {deepDives.map((d) => (
              <Card key={d.title} className="card-hover" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Icon name={d.icon} size={26} color="var(--green-500)" />
                    <h4 style={{ margin: 0 }}>{d.title}</h4>
                  </div>
                  <Badge variant="gold">{d.time}</Badge>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>{d.body}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, borderTop: '1px solid var(--border-default)', paddingTop: 14 }}>
                  {d.points.map((p, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <Icon name="chevron-right" size={16} color="var(--green-500)" />
                      <span style={{ fontSize: 13.5, color: 'var(--text-body)' }}>{p}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal" style={{ background: 'var(--green-900)' }}>
        <div className="section" style={{ padding: 'var(--space-9) var(--layout-margin)', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', margin: '0 auto var(--space-5)', maxWidth: '22ch' }}>Be in the room for every session.</h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('register')}>Apply now</Button>
            <Button variant="secondary" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' }} onClick={() => onNavigate('volunteer')}>Volunteer with us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
