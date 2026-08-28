const { Button, IconButton, Icon, Eyebrow, Heading, HeadingAccent, Divider, ImageFrame, ProjectCard, ServiceCard, InsightCard, StatItem, ProcessStep, Wordmark, NavBar, StatBar, SectionIntro, ContactRow, SocialRow, Footer } = window.COZABALDesignSystem_6929d1;
function HomeScreen({ onNavigate }) {
  const { Section } = window;
  return (
    <div>
      {/* Hero */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(150deg,var(--ink-500),var(--ink-900) 70%)' }}>
        <img src="../../uploads/db3e6628ed11f722c9b29dcb7badc696.jpg" alt="Construction workers silhouetted behind scaffolding at golden hour"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%',
            transform: 'scale(1.04)', filter: 'brightness(.65) blur(3px)' }} />
        <div className="hero-scrim" style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(16,14,11,.55) 0%, rgba(16,14,11,.2) 40%, transparent 60%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <NavBar active="Home" onNavigate={onNavigate} onCta={() => onNavigate('Contact')} />
          </div>
          <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--hero-pad)' }}>
            <Eyebrow>Architecture that inspires</Eyebrow>
            <Heading level={1} size="xl" ground="ink" style={{ marginTop: 20, maxWidth: 'var(--hero-heading-w)' }}>
              We Build <HeadingAccent>Timeless</HeadingAccent> Spaces.<br />Built Around You.
            </Heading>
            <p style={{ margin: '24px 0 0', maxWidth: 'var(--hero-copy-w)', fontSize: 'var(--body-md)', lineHeight: 'var(--lh-body)',
              fontWeight: 'var(--weight-light)', color: 'var(--text-on-ink-muted)' }}>
              From concept to completion, we craft extraordinary spaces that elevate living and stand the test of time.
            </p>
            <div style={{ marginTop: 34 }}>
              <Button variant="primary" size="lg" onClick={() => onNavigate('Projects')}>Explore our work</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stat bar straddling the hero */}
      <div style={{ background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <StatBar style={{ marginTop: 'var(--statbar-overlap)' }}>
            <StatItem icon="award" value="20+" label="Years of Experience" />
            <StatItem icon="building-2" value="320+" label="Projects Completed" />
            <StatItem icon="users" value="98%" label="Client Satisfaction" />
            <StatItem icon="medal" value="25+" label="Industry Awards" />
          </StatBar>
        </div>
      </div>

      {/* Featured projects mosaic */}
      <Section style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--rail-featured)', gap: 56, alignItems: 'start' }}>
          <SectionIntro eyebrow="Featured Projects" title={<>Spaces<br />That Define<br />Excellence</>}
            cta="View all projects" onCta={() => onNavigate('Projects')} />
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--mosaic-cols)', gridTemplateRows: 'var(--mosaic-rows)', gap: 'var(--grid-gap)' }}>
            <div className="mosaic-tall" style={{ gridRow: 'span 2' }}><ProjectCard {...COZ_PROJECTS[0]} ratio="auto" onClick={() => onNavigate('Project')} /></div>
            <ProjectCard {...COZ_PROJECTS[1]} ratio="auto" captionPosition="top" onClick={() => onNavigate('Project')} />
            <div className="mosaic-tall" style={{ gridRow: 'span 2' }}><ProjectCard {...COZ_PROJECTS[3]} ratio="auto" onClick={() => onNavigate('Project')} /></div>
            <ProjectCard {...COZ_PROJECTS[2]} ratio="auto" onClick={() => onNavigate('Project')} />
          </div>
        </div>
      </Section>

      {/* Services on ink */}
      <Section ground="ink">
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--rail-services)', gap: 48, alignItems: 'start' }}>
          <SectionIntro ground="ink" eyebrow="Our Services" title={<>End-to-End<br />Solutions</>}
            copy="Integrated expertise across every stage of design and construction."
            cta="Explore services" ctaVariant="primary" onCta={() => onNavigate('Services')} />
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--services-cols)', gap: 'var(--grid-gap)' }}>
            {COZ_SERVICES.map(([icon, title, copy]) => <ServiceCard key={title} icon={icon} title={title}>{copy}</ServiceCard>)}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--rail-process)', gap: 56, alignItems: 'center' }}>
          <SectionIntro eyebrow="Our Process" title={<>A Seamless Journey From Vision to Reality</>} cta="How we work" />
          <div className="process-row" style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
            <div className="process-line" style={{ position: 'absolute', top: 22, left: '8%', right: '8%',
              borderTop: '1px dashed var(--bone-400)' }} />
            {COZ_PROCESS.map(([n, t, c]) => (
              <div key={n} style={{ position: 'relative' }}><ProcessStep number={n} title={t}>{c}</ProcessStep></div>
            ))}
          </div>
        </div>
      </Section>

      {/* Insights */}
      <Section ground="ink">
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--rail-insights)', gap: 48, alignItems: 'start' }}>
          <SectionIntro ground="ink" eyebrow="Insights" title={<>Ideas. Trends.<br />Inspiration.</>} />
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--insights-cols)', gap: 'var(--grid-gap)' }}>
            {COZ_INSIGHTS.map(([d, t]) => <InsightCard key={t} date={d.toUpperCase()} title={t} />)}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
Object.assign(window, { HomeScreen });