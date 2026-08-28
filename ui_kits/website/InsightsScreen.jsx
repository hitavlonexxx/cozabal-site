const { Button, IconButton, Icon, Eyebrow, Heading, HeadingAccent, Divider, ImageFrame, ProjectCard, ServiceCard, InsightCard, StatItem, ProcessStep, Wordmark, NavBar, StatBar, SectionIntro, ContactRow, SocialRow, Footer } = window.COZABALDesignSystem_6929d1;
function InsightsScreen({ onNavigate }) {
  const { Section } = window;
  const more = [
    ['Mar 22, 2024', 'What a Good Site Visit Looks Like'],
    ['Mar 04, 2024', 'Daylight, Measured'],
    ['Feb 18, 2024', 'Why We Draw by Hand First'],
  ];
  return (
    <div>
      <div style={{ background: 'var(--surface-ink)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <NavBar active="Insights" onNavigate={onNavigate} onCta={() => onNavigate('Contact')} />
        </div>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '56px var(--gutter) 72px' }}>
          <Eyebrow>Insights</Eyebrow>
          <Heading level={1} size="lg" ground="ink" style={{ marginTop: 16 }}>Ideas. Trends. Inspiration.</Heading>
        </div>
      </div>
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--insights-list-cols)', gap: 'var(--grid-gap)' }}>
          {COZ_INSIGHTS.map(([d, t]) => <InsightCard key={t} date={d.toUpperCase()} title={t} />)}
        </div>
        <Divider style={{ margin: '48px 0 34px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {more.map(([d, t], i) => (
            <React.Fragment key={t}>
              <a href="#article" className="more-row" style={{ display: 'flex', alignItems: 'baseline', gap: 28, padding: '22px 0',
                textDecoration: 'none' }}>
                <span className="more-date" style={{ width: 120, flex: '0 0 auto', fontSize: 'var(--body-xs)', letterSpacing: '.1em',
                  textTransform: 'uppercase', color: 'var(--text-muted)' }}>{d}</span>
                <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontSize: 'var(--display-sm)',
                  color: 'var(--text-heading)' }}>{t}</span>
                <Icon name="arrow-right" size={16} color="var(--brass-600)" />
              </a>
              {i < more.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
}
Object.assign(window, { InsightsScreen });