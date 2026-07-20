import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Badge, Icon } from '../components/index.js';
import VenueMap from './VenueMap.jsx';

// Maps the reference's `page` ids to router paths.
const PAGE_PATHS = {
  home: '/',
  about: '/about',
  program: '/program',
  register: '/delegate',
  volunteer: '/volunteer',
};

export default function Home() {
  const navigate = useNavigate();
  const onNavigate = (page) => navigate(PAGE_PATHS[page] || '/');

  // Hero background slideshow — cycles through the gallery photos
  const heroSlides = ['g13.webp', 'g05.webp', 'g10.webp', 'g01.webp', 'g08.webp', 'g12.webp', 'g04.webp', 'g09.webp'];
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const facts = [
    { icon: 'calendar-days', label: 'Date', value: 'Wed, 12 August 2026' },
    { icon: 'clock', label: 'Time', value: '10:00 AM – 4:00 PM' },
    { icon: 'map-pin', label: 'Venue', value: 'KAAF Auditorium, U. of Ibadan' },
    { icon: 'layout-grid', label: 'Format', value: 'Plenary · Breakouts · Open House' },
  ];

  const tracks = [
    { icon: 'landmark', title: 'Policy & Governance', room: 'Track 1', feature: true },
    { icon: 'palette', title: 'The Creative Economy', room: 'Track 2' },
    { icon: 'cpu', title: 'Technology & Innovation', room: 'Track 3' },
    { icon: 'briefcase', title: 'Corporate Careers & Leadership', room: 'Track 4' },
  ];

  const moments = [
    { time: '10:35', tag: 'Panel', title: 'Panel — "Real Talk: Rebuilding Trust in The Nigerian State"', desc: 'Distinct lenses on why trust keeps falling, with live Slido audience questions.' },
    { time: '11:15', tag: 'Keynote', title: "Founder's session", desc: 'The Founder speaks to why this convening exists — and challenges the room on what happens next.' },
    { time: '11:40', tag: 'Finals', title: 'Policy Challenge finals', desc: 'Three finalist teams present reform proposals to the judges. Winner announced at close.' },
    { time: '2:45', tag: 'Fireside', title: 'Fireside chat — "The Smallest Unit of Trust"', desc: 'An intimate conversation on rebuilding trust between citizens and institutions, one interaction at a time.' },
  ];

  return (
    <div>
      {/* ============ HERO ============ */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        {heroSlides.map((src, i) => (
          <img key={src} src={'/gallery/' + src} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 28%',
            opacity: i === slide ? 1 : 0, transition: 'opacity 1200ms ease-in-out',
          }} />
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,46,16,0.88) 0%, rgba(6,46,16,0.66) 45%, rgba(6,46,16,0.40) 100%)' }} />
        <div style={{ position: 'relative', padding: 'var(--space-8) clamp(24px, 6vw, 120px)', width: '100%' }}>
          <div style={{ maxWidth: 660 }}>
            <span className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>
              Delegate applications open
            </span>
            <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-5xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '15ch', margin: 'var(--space-5) 0 var(--space-5)' }}>
              Rebuilding trust in the <span style={{ color: 'var(--gold-500)' }}>Nigerian state.</span>
            </h1>
            <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'var(--text-lg)', fontStyle: 'italic', maxWidth: '52ch', lineHeight: 1.7 }}>
              A full-day working session convening policymakers, academics, civil society leaders, and emerging young voices — to ethically address the governance deficit, and propose structural pathways forward.
            </p>
            <div className="rise rise-4" style={{ display: 'flex', gap: 16, marginTop: 'var(--space-6)', flexWrap: 'wrap' }}>
              <Button variant="accent" size="sm" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('register')} className="glow-cta" style={{ borderRadius: 'var(--radius-pill)' }}>Apply now</Button>
              <Button variant="secondary" size="sm" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent', borderRadius: 'var(--radius-pill)' }} onClick={() => onNavigate('program')}>Explore the conference</Button>
            </div>
          </div>
        </div>
        {/* scroll cue + slide dots */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 'var(--space-6)', padding: '0 clamp(24px, 6vw, 120px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.5)' }}></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Scroll</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {heroSlides.map((_, i) => (
              <button key={i} aria-label={'Slide ' + (i + 1)} onClick={() => setSlide(i)} style={{
                width: i === slide ? 22 : 8, height: 8, borderRadius: 'var(--radius-pill)', border: 'none', padding: 0, cursor: 'pointer',
                background: i === slide ? 'var(--gold-500)' : 'rgba(255,255,255,0.4)', transition: 'all 300ms var(--ease-out)',
              }}></button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE CONVENING + DETAILS CARD ============ */}
      <section className="section" style={{ padding: 'var(--space-6) var(--layout-margin) var(--space-9)' }}>
        {/* fact row */}
        <div className="qa-cards reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)', paddingBottom: 'var(--space-7)', marginBottom: 'var(--space-8)', borderBottom: '1px solid var(--border-default)' }}>
          {facts.map((f) => (
            <div key={f.label} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Icon name={f.icon} size={22} color="var(--green-700)" />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{f.label}</div>
                <div style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: 15, marginTop: 2 }}>{f.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="qa-stack" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--space-8)', alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow">About the conference</p>
            <h2 style={{ margin: 'var(--space-3) 0 var(--space-5)', maxWidth: '18ch' }}>This is not a conference of just talks. It is a working session.</h2>
            <p style={{ color: 'var(--text-body)' }}>
              Nigeria's democratic experiment has crossed a quarter-century, yet public trust in the judiciary, legislature, executive and civil service continues to erode. Citizens increasingly perceive government as distant, unaccountable and captured by narrow interests.
            </p>
            <p style={{ color: 'var(--text-body)' }}>
              <strong style={{ color: 'var(--text-heading)' }}>Rebuilding Trust in the Nigerian State</strong> brings together policymakers, academics, civil society and emerging voices to interrogate this deficit honestly and propose structural pathways forward — oriented toward reform, not rhetoric.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={() => onNavigate('about')}>Read about FPDI</Button>
              <Button variant="secondary" onClick={() => onNavigate('program')}>How the day is structured</Button>
            </div>
          </div>

          <Card featureCorner corner="top-right" padding="var(--space-6)" style={{ position: 'sticky', top: 92, background: 'linear-gradient(160deg, var(--green-900) 0%, #0c3016 100%)', border: '1px solid rgba(240,193,75,0.18)', boxShadow: '0 24px 60px -24px rgba(4,34,12,0.55)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F4C95D', marginBottom: 'var(--space-4)' }}>Conference details</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['Theme', 'Rebuilding Trust in the Nigerian State'],
                ['Date', 'Wednesday, 12 August 2026'],
                ['Time', '10:00 AM – 4:00 PM'],
                ['Venue', 'KAAF Auditorium, University of Ibadan'],
                ['Format', 'Plenary + Breakouts + Open House'],
                ['Host', 'Future Pathways Development Initiative'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: 10 }}>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{k}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#fff', textAlign: 'right', maxWidth: '62%' }}>{v}</span>
                </div>
              ))}
            </div>
            <Button variant="accent" size="lg" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('register')} style={{ width: '100%', marginTop: 'var(--space-5)', justifyContent: 'center' }}>Apply now</Button>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', textAlign: 'center', margin: '10px 0 0' }}>Delegate places are limited and selection is competitive. Applying is free.</p>
          </Card>
        </div>
      </section>

      {/* ============ REFORM TRACKS ============ */}
      <section style={{ background: 'var(--surface-green-tint)', padding: 'var(--space-9) 0' }}>
        <div className="section">
          <p className="eyebrow">Four breakout tracks</p>
          <h2 style={{ margin: 'var(--space-3) 0 var(--space-2)', maxWidth: '22ch' }}>Where the working sessions dig in.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-7)' }}>Four concurrent, facilitated rooms. Each produces a one-pager of priority recommendations fed into the closing communiqué.</p>
          <div className="qa-cards reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {tracks.map((t) => (
              <Card key={t.title} className="card-hover" featureCorner={t.feature} corner="top-left" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Icon name={t.icon} size={28} color="var(--green-500)" />
                  <Badge variant="neutral">{t.room}</Badge>
                </div>
                <h4 style={{ margin: 0 }}>{t.title}</h4>
              </Card>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, padding: 'var(--space-5)' }}>
              <p style={{ margin: 0, color: 'var(--text-body)', fontSize: 15 }}>Delegates are assigned to a room on the day and help shape the communiqué.</p>
              <Button variant="secondary" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('program')} style={{ alignSelf: 'flex-start' }}>See all sessions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROGRAMME HIGHLIGHTS ============ */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 'var(--space-7)' }}>
          <div>
            <p className="eyebrow">Highlights of the day</p>
            <h2 style={{ margin: 'var(--space-3) 0 0', maxWidth: '18ch' }}>A day paced to sustain energy and reward participation.</h2>
          </div>
          <Button variant="primary" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('program')}>View the full programme</Button>
        </div>
        <div className="qa-cards reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
          {moments.map((m) => (
            <Card key={m.title} className="card-hover" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--green-700)' }}>{m.time}</span>
                <Badge variant="gold">{m.tag}</Badge>
              </div>
              <h4 style={{ margin: 0, fontSize: 'var(--text-lg)' }}>{m.title}</h4>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>{m.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ============ WATCH / IN ACTION ============ */}
      <Watch />

      {/* ============ CONFERENCE FLOOR GALLERY ============ */}
      <Gallery />

      {/* ============ VENUE / GETTING THERE MAP ============ */}
      <VenueMap />

      {/* ============ CLOSING CTA BAND ============ */}
      <HomeCta onNavigate={onNavigate} />
    </div>
  );
}

function HomeCta({ onNavigate }) {
  return (
    <section className="reveal" style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
      <img src="/assets/rising-arc-line.svg" alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '70%', objectFit: 'cover', opacity: 0.4 }} />
      <div className="section" style={{ position: 'relative', padding: 'var(--space-9) var(--layout-margin)', textAlign: 'center' }}>
        <p className="eyebrow" style={{ color: 'var(--gold-500)', textAlign: 'center', margin: '0 auto' }}>12 August 2026 · KAAF Auditorium, Ibadan</p>
        <h2 style={{ color: '#fff', margin: 'var(--space-4) auto var(--space-5)', maxWidth: '20ch' }}>Take a seat where the reform agenda is written.</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '52ch', margin: '0 auto var(--space-6)' }}>
          Delegate places are limited and registration is free. Reserve yours and join the working session.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="accent" size="lg" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('register')}>Apply now</Button>
          <Button variant="secondary" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' }} onClick={() => onNavigate('volunteer')}>Volunteer with us</Button>
        </div>
      </div>
    </section>
  );
}

function Watch() {
  const videos = [
    { vid: 'qeGyxZJyk08', title: "Our Founder, Ayokunnu Ojeniyi's speech" },
    { vid: 'nWJPZUlvsWY', title: 'The Hon. Minister, Dr Jumoke Oduwole' },
    { vid: '3sdingGBu-M', title: 'Team One — Policy Challenge winners' },
  ];
  const fallback = (e, id) => { if (!e.target.dataset.fb) { e.target.dataset.fb = 1; e.target.src = 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg'; } };
  return (
    <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin) 0' }}>
      <p className="eyebrow">Watch</p>
      <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)', maxWidth: '24ch' }}>Excerpts from Policy Conference for Youth 2025</h2>
      <div className="qa-cards reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
        {videos.map((v) => (
          <a key={v.vid} href={'https://www.youtube.com/watch?v=' + v.vid} target="_blank" rel="noopener noreferrer"
            className="card-hover" style={{ display: 'block', background: 'var(--surface-card)', border: 'var(--border-card)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', color: 'inherit' }}>
            <div style={{ position: 'relative', aspectRatio: '16 / 9', background: 'var(--green-900)' }}>
              <img src={'https://img.youtube.com/vi/' + v.vid + '/maxresdefault.jpg'} onError={(e) => fallback(e, v.vid)} alt={v.title}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 58, height: 58, borderRadius: '50%', background: 'rgba(6,46,16,0.78)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-raised)' }}>
                  <Icon name="play" size={24} color="#fff" />
                </div>
              </div>
            </div>
            <div style={{ padding: 'var(--space-5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <h4 style={{ margin: 0, fontSize: 'var(--text-lg)' }}>{v.title}</h4>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-gold-safe)', whiteSpace: 'nowrap' }}>
                Watch <Icon name="external-link" size={13} color="var(--text-gold-safe)" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  // Real photos from the 2025 Policy Conference for Youth — natural-aspect masonry
  const photos = [
    'g13.webp', 'g01.webp', 'g06.jpg', 'g11.webp', 'g08.webp', 'g03.webp', 'g12.webp',
    'g05.webp', 'g07.jpg', 'g02.webp', 'g10.webp', 'g04.webp', 'g09.webp',
  ];
  return (
    <section style={{ background: 'var(--green-900)', marginTop: 'var(--space-9)' }}>
      <div className="section" style={{ padding: 'var(--space-9) var(--layout-margin)' }}>
        <p className="eyebrow" style={{ color: 'var(--gold-500)' }}>PCY·2025</p>
        <h2 style={{ color: '#fff', margin: 'var(--space-3) 0 var(--space-7)', maxWidth: '20ch' }}>Moments from the conference floor.</h2>
        <div className="pcy-masonry reveal-stagger">
          {photos.map((src, i) => (
            <figure key={src}>
              <img src={'/gallery/' + src} alt={'2025 Policy Conference for Youth — moment ' + (i + 1)} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
