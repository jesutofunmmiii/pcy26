function GalleryPage({ onNavigate }) {
  const { Button, Card, Icon } = window.FPDIDesignSystem_ca687e;
  const photos = window.PCY_GALLERY;
  const drive = 'https://drive.google.com/drive/u/0/folders/1UtZhvmWKdPOBtPP_2V4eG9mHDOYVCV_N';

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img data-no-reveal src={window.asset('assets/rising-arc.svg')} alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '58%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>Gallery · PCY 2026</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '17ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
The conference, <span style={{ color: 'var(--gold-500)' }}>in photographs.</span>
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '60ch' }}>
Registration, the keynote, the panel, the Model National Assembly floor and the awards — 12 August 2026 at the KAAF Auditorium, University of Ibadan. A selection is shown here; the complete archive is in the Drive folder below.
          </p>
        </div>
      </section>

      {/* photographs */}
      <section className="section" style={{ padding: 'var(--space-8) var(--layout-margin) var(--space-9)' }}>
        <div className="pcy-masonry pcy-masonry--light">
          {photos.map((src, i) => (
            <figure key={src}>
              <img src={window.asset('gallery/' + src)} alt={'Policy Conference for Youth 2026 — photograph ' + (i + 1)} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </section>

      {/* full archive */}
      <section style={{ background: 'var(--surface-green-tint)', padding: 'var(--space-9) 0' }}>
        <div className="section" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">The full set</p>
            <h2 style={{ margin: 'var(--space-3) 0 var(--space-4)', maxWidth: '22ch' }}>Every photograph, at full resolution.</h2>
            <p style={{ margin: 0, color: 'var(--text-body)', maxWidth: 'var(--measure-max)' }}>
The complete archive from the conference floor lives in our Drive folder — press, partners and delegates are free to download and use the images with credit to FPDI.
            </p>
          </div>
          <Card featureCorner corner="top-right" padding="var(--space-7)" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Icon name="folder-open" size={26} color="var(--green-500)" />
            <div>
              <h3 style={{ margin: '0 0 6px', fontSize: 'var(--text-xl)' }}>PCY 2026 photo archive</h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Google Drive · Full resolution</div>
            </div>
            <a href={drive} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>
              <Button variant="primary" icon="external-link" iconPosition="end">Open the Drive folder</Button>
            </a>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--green-900)' }}>
        <div className="section" style={{ padding: 'var(--space-9) var(--layout-margin)', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', margin: '0 auto var(--space-5)', maxWidth: '24ch' }}>Read what the room proposed.</h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" icon="download" iconPosition="end" onClick={window.downloadCompendium}>Download the compendium</Button>
            <Button variant="secondary" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' }} onClick={() => onNavigate('challenge')}>See who won</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.GalleryPage = GalleryPage;
