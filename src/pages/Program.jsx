import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Badge, Icon } from '../components/index.js';

// Maps the reference's `page` ids to router paths.
const PAGE_PATHS = {
  home: '/',
  about: '/about',
  program: '/program',
  register: '/register',
  volunteer: '/volunteer',
};

export default function Program() {
  const navigate = useNavigate();
  const onNavigate = (page) => navigate(PAGE_PATHS[page] || '/');

  // A single coherent full-day schedule (10:00 AM – 4:00 PM), consolidating the
  // programme's activities, leads and purposes.
  const schedule = [
    { time: '10:00', end: '10:20', type: 'Opening', title: 'Opening ceremony & performance', lead: 'Theatre group', purpose: 'A spoken-word / theatre performance that emotionally hooks the audience on the realities of the institutional trust deficit.' },
    { time: '10:20', end: '10:30', type: 'Welcome', title: 'Welcome & conference opening', lead: 'Arinola', purpose: 'The host orients attendees to the day’s theme and structure, setting a candid, solutions-focused tone.' },
    { time: '10:30', end: '11:00', type: 'Plenary', title: 'Keynote address', lead: 'Minister', purpose: 'A senior government official frames Nigeria’s institutional trust deficit from a governance perspective and signals reform priorities.' },
    { time: '11:00', end: '11:05', type: 'Transition', title: 'Transition', lead: 'MC', purpose: 'MC bridges to the panel, shares live poll results, and introduces panelists.' },
    { time: '11:05', end: '11:40', type: 'Panel', title: 'Panel discussion — Alpha', lead: 'Seun Fakorede · Seyi Adisa · Ayokunnu O.', purpose: 'A structured panel probing the structural roots of eroded trust — facilitated dialogue with audience Q&A via live Slido submissions.' },
    { time: '11:40', end: '11:45', type: 'Transition', title: 'Transition', lead: 'MC', purpose: 'MC closes the panel segment and introduces the Founder’s session.' },
    { time: '11:45', end: '12:15', type: 'Keynote', title: "Founder's session", lead: 'AO', purpose: 'AO speaks directly to the room as the person who initiated this work — more personal, more forward-looking.' },
    { time: '12:15', end: '12:20', type: 'Transition', title: 'Transition to breakout rooms', lead: 'MC', purpose: 'MC assigns attendees to breakout rooms and explains the theme and format for each room.' },
    { time: '12:20', end: '12:50', type: 'Workshops', title: 'Breakout sessions (4 simultaneous)', lead: 'Room facilitators', purpose: 'Four concurrent thematic sessions where attendees deep-dive on specific reform tracks. Each room produces a one-pager for the communiqué.' },
    { time: '12:50', end: '1:20', type: 'Break', title: 'Networking lunch', lead: '—', purpose: 'Delegates are encouraged to continue conversations across disciplines.' },
    { time: '1:20', end: '1:30', type: 'Transition', title: 'Reconvene & audience energizer', lead: 'MC', purpose: 'MC shares highlights from the breakout rooms and runs a brief energizer before the afternoon.' },
    { time: '1:30', end: '1:45', type: 'Open House', title: 'Open House talk 1', lead: 'Speaker', purpose: 'Opens the afternoon with energy — a bold provocation to set the tone.' },
    { time: '1:45', end: '2:00', type: 'Open House', title: 'Open House talk 2', lead: 'Speaker', purpose: 'A different register — data-driven or comparative, grounding the conversation in evidence.' },
    { time: '2:00', end: '2:15', type: 'Open House', title: 'Open House talk 3', lead: 'Speaker', purpose: 'The midpoint — the MC invites 2 minutes of live audience reaction via Slido.' },
    { time: '2:15', end: '2:30', type: 'Open House', title: 'Open House talk 4', lead: 'Speaker', purpose: 'Connects directly to the Policy Challenge themes — bridging Open House to the finals.' },
    { time: '2:30', end: '3:00', type: 'Competition', title: 'Policy Challenge finals', lead: 'Top 3 teams', purpose: 'The three finalist teams present reform proposals. Each team: 8 minutes to present + 2 minutes for judge questions.' },
    { time: '3:00', end: '3:05', type: 'Transition', title: 'Transition', lead: 'MC', purpose: 'Brief MC transition and setup for the final Open House talk.' },
    { time: '3:05', end: '3:20', type: 'Open House', title: 'Open House talk 5', lead: 'Speaker', purpose: 'The closing talk — synthesises, provokes, and sends the room away with something to act on.' },
    { time: '3:20', end: '3:40', type: 'Competition', title: 'Winner announcement — Policy Challenge', lead: 'AO / Arinola', purpose: 'The winning team is announced; all three finalist briefs are included in the published communiqué.' },
    { time: '3:40', end: '4:00', type: 'Closing', title: 'Communiqué & closing remarks', lead: 'AO / Arinola', purpose: 'Key takeaways are read out, the draft communiqué is previewed, and the day closes with a vote of thanks.' },
  ];

  const typeColor = {
    Opening: 'var(--green-500)', Welcome: 'var(--green-500)', Plenary: 'var(--green-700)',
    Keynote: 'var(--green-700)', Panel: 'var(--green-500)', Workshops: 'var(--green-500)',
    'Open House': 'var(--gold-700)', Competition: 'var(--gold-700)', Closing: 'var(--green-700)',
    Transition: 'var(--text-muted)', Break: 'var(--text-muted)',
  };

  const deepDives = [
    { icon: 'mic', tag: 'Plenary', time: '30 mins', title: 'Keynote address', body: 'The intellectual anchor of the morning — a serving or former minister speaks candidly about the state of institutional trust, what has failed, and what reform is most urgent.', points: ['Frame the problem: where does Nigeria stand on institutional legitimacy today?', 'Reflect on what has worked and failed in recent reform efforts.', 'Offer a vision: what does a trustworthy state look like in 10 years?'] },
    { icon: 'users-round', tag: 'Panel', time: '30 mins', title: 'Panel discussion — Alpha', body: 'A structured, facilitated panel of three speakers — Alpha, Beta and Omega — each bringing a distinct lens to the trust-deficit question, driving toward actionable synthesis.', points: ['Opening frame + 90-second panelist positions.', 'Structured dialogue: one targeted question per panelist.', 'Synthesis round + audience Q&A via Slido.'] },
    { icon: 'flame', tag: 'Keynote', time: '30 mins', title: "Founder's session", body: 'AO speaks to the room as the person who initiated this work. More personal and forward-looking than the panel — ending on a direct challenge to the audience.', points: ['Why this convening exists — and why now.', 'What the Policy Challenge has learned about engaging young Nigerians.', 'A direct challenge: what will you do differently after today?'] },
    { icon: 'layout-grid', tag: 'Workshops', time: '30 mins', title: 'Breakout sessions', body: 'Four simultaneous small-group sessions, each anchored to a reform track. Groups are facilitated, not lectured — every room produces a concrete one-pager fed into the communiqué.', points: ['Policy & Governance', 'The Creative Economy', 'Technology & Innovation', 'Corporate Careers & Leadership'] },
    { icon: 'presentation', tag: 'Open House', time: '5 talks', title: 'Open House talks', body: 'Five speakers, five distinct arguments. Each 12–15 minute talk makes a single well-argued case rather than surveying a topic broadly — sustaining the intellectual momentum of the afternoon.', points: ['Bold provocation to open the afternoon.', 'Evidence-driven, comparative grounding.', 'Live audience reaction at the midpoint.', 'A closing talk that ties the day’s threads together.'] },
    { icon: 'trophy', tag: 'Competition', time: '30 mins', title: 'Policy Challenge finals', body: 'The finalist teams present reform proposals to the full conference — the culmination of months of research, mentorship and iteration. The winner is announced before the final Open House talk.', points: ['Each team: 8 minutes to present + 2 minutes for judges.', 'Judged on evidence, feasibility, originality and clarity.', 'All three finalist briefs enter the published communiqué.'] },
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
            The day combines plenary engagements — a ministerial keynote, a structured panel and a Founder's address — with four breakout rooms, five Open House talks, and the Policy Challenge finals. Deliberately paced to sustain energy and reward participation.
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
                  {!muted && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', margin: '4px 0 6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.lead}</div>}
                  <p style={{ margin: muted ? 0 : '2px 0 0', fontSize: 14, color: 'var(--text-body)', maxWidth: '64ch' }}>{s.purpose}</p>
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
