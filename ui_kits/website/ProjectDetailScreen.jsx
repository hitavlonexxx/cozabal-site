const { Button, IconButton, Icon, Eyebrow, Heading, HeadingAccent, Divider, ImageFrame, ProjectCard, ServiceCard, InsightCard, StatItem, ProcessStep, Wordmark, NavBar, StatBar, SectionIntro, ContactRow, SocialRow, Footer } = window.COZABALDesignSystem_6929d1;
function ProjectDetailScreen({ onNavigate }) {
  const { Section } = window;
  const facts = [['Location', 'Los Angeles, CA'], ['Year', '2024'], ['Area', '6,400 sq ft'], ['Services', 'Architecture, Interiors']];
  return (
    <div>
      <div style={{ position: 'relative', background: 'linear-gradient(150deg,var(--ink-500),var(--ink-900) 72%)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-hero)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <NavBar active="Projects" onNavigate={onNavigate} onCta={() => onNavigate('Contact')} />
          </div>
          <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '72px var(--gutter) 96px' }}>
            <Button variant="ghost" ground="ink" size="sm" icon="arrow-left" onClick={() => onNavigate('Projects')}>All projects</Button>
            <Heading level={1} size="xl" ground="ink" style={{ marginTop: 22 }}>Horizon Residence</Heading>
            <div style={{ marginTop: 14, fontSize: 'var(--body-md)', fontWeight: 'var(--weight-light)', color: 'var(--text-on-ink-muted)' }}>
              Los Angeles, CA — Completed 2024
            </div>
          </div>
        </div>
      </div>
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--detail-cols)', gap: 64, alignItems: 'start' }}>
          <div>
            <Eyebrow>The Brief</Eyebrow>
            <p style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontSize: 'var(--display-sm)',
              lineHeight: 1.5, color: 'var(--text-heading)' }}>
              A hillside home organised around a single continuous terrace, where every room opens to the horizon.
            </p>
            <p style={{ marginTop: 20, fontSize: 'var(--body-md)', lineHeight: 'var(--lh-body)',
              fontWeight: 'var(--weight-light)', color: 'var(--text-body)' }}>
              The clients asked for a house that would feel open without feeling exposed. We answered with a
              layered plan: deep overhangs, screened courtyards, and a material palette of board-formed
              concrete, white oak and bronze that will weather rather than date.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'var(--detail-img-cols)', gap: 'var(--grid-gap)', marginTop: 34 }}>
              <ImageFrame label="Exterior — dusk" ratio="4 / 3" />
              <div style={{ display: 'grid', gap: 'var(--grid-gap)' }}>
                <ImageFrame label="Terrace" ratio="4 / 3" />
                <ImageFrame label="Living room" ratio="4 / 3" />
              </div>
            </div>
          </div>
          <aside style={{ border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)',
            background: 'var(--surface-card)', padding: 26, boxShadow: 'var(--shadow-card)' }}>
            <Eyebrow>Project Facts</Eyebrow>
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {facts.map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: 'var(--body-xs)', letterSpacing: '.08em', textTransform: 'uppercase',
                    color: 'var(--text-muted)' }}>{k}</div>
                  <div style={{ marginTop: 4, fontFamily: 'var(--font-display)', fontSize: 'var(--display-xs)',
                    color: 'var(--text-heading)' }}>{v}</div>
                </div>
              ))}
            </div>
            <Divider style={{ margin: '22px 0' }} />
            <Button variant="primary" size="sm" onClick={() => onNavigate('Contact')}>Start a project</Button>
          </aside>
        </div>
      </Section>
      <Section ground="ink" style={{ paddingTop: 0 }}>
        <SectionIntro ground="ink" eyebrow="More Work" title="Nearby Projects" style={{ maxWidth: 420 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--nearby-cols)', gap: 'var(--grid-gap)', marginTop: 32 }}>
          {COZ_PROJECTS.slice(1, 4).map(p => <ProjectCard key={p.name} {...p} ratio="4 / 3" onClick={() => onNavigate('Project')} />)}
        </div>
      </Section>
      <Footer />
    </div>
  );
}
Object.assign(window, { ProjectDetailScreen });