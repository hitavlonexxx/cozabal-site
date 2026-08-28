const { Button, IconButton, Icon, Eyebrow, Heading, HeadingAccent, Divider, ImageFrame, ProjectCard, ServiceCard, InsightCard, StatItem, ProcessStep, Wordmark, NavBar, StatBar, SectionIntro, ContactRow, SocialRow, Footer } = window.COZABALDesignSystem_6929d1;
function ProjectsScreen({ onNavigate }) {
  const { Section } = window;
  const filters = ['All', 'Residential', 'Commercial', 'Interiors'];
  const [filter, setFilter] = React.useState('All');
  const list = COZ_PROJECTS.filter(p => filter === 'All' || p.type === filter);
  return (
    <div>
      <div style={{ background: 'var(--surface-ink)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <NavBar active="Projects" onNavigate={onNavigate} onCta={() => onNavigate('Contact')} />
        </div>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '56px var(--gutter) 72px' }}>
          <Eyebrow>Selected Work</Eyebrow>
          <Heading level={1} size="lg" ground="ink" style={{ marginTop: 16, maxWidth: 520 }}>
            Every Project Begins With a Conversation.
          </Heading>
        </div>
      </div>
      <Section>
        <div className="filter-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 34 }}>
          {filters.map(fl => (
            <button key={fl} onClick={() => setFilter(fl)} style={{
              padding: '9px 18px', cursor: 'pointer', borderRadius: 'var(--radius-pill)',
              fontFamily: 'var(--font-sans)', fontSize: 'var(--label-sm)', letterSpacing: 'var(--ls-label-tight)',
              textTransform: 'uppercase',
              border: '1px solid ' + (filter === fl ? 'var(--border-brass)' : 'var(--border-hairline)'),
              background: filter === fl ? 'rgba(201,160,99,.12)' : 'transparent',
              color: filter === fl ? 'var(--text-link)' : 'var(--text-body)',
              transition: 'all var(--dur-base) var(--ease-standard)',
            }}>{fl}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--projects-cols)', gap: 'var(--grid-gap)' }}>
          {list.map(p => <ProjectCard key={p.name} {...p} ratio="4 / 3" onClick={() => onNavigate('Project')} />)}
        </div>
      </Section>
      <Footer />
    </div>
  );
}
Object.assign(window, { ProjectsScreen });