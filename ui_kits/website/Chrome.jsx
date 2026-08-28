const { Button, IconButton, Icon, Eyebrow, Heading, HeadingAccent, Divider, ImageFrame, ProjectCard, ServiceCard, InsightCard, StatItem, ProcessStep, Wordmark, NavBar, StatBar, SectionIntro, ContactRow, SocialRow, Footer } = window.COZABALDesignSystem_6929d1;
const Section = ({ ground = 'light', children, style }) => (
  <section style={{ background: ground === 'ink' ? 'var(--surface-ink)' : ground === 'deep' ? 'var(--surface-ink-deep)' : 'var(--surface-page)', ...style }}>
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>{children}</div>
  </section>
);
Object.assign(window, { Section });