const { Button, IconButton, Icon, Eyebrow, Heading, HeadingAccent, Divider, ImageFrame, ProjectCard, ServiceCard, InsightCard, StatItem, ProcessStep, Wordmark, NavBar, StatBar, SectionIntro, ContactRow, SocialRow, Footer } = window.COZABALDesignSystem_6929d1;
const field = {
  width: '100%', boxSizing: 'border-box', padding: '13px 15px', background: 'var(--surface-card)',
  border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)',
  fontSize: 'var(--body-md)', color: 'var(--text-heading)', outline: 'none',
};
function Field({ label, type = 'text', rows, value, onChange }) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', marginBottom: 8, fontSize: 'var(--label-sm)', letterSpacing: 'var(--ls-label-tight)',
        textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
      {rows
        ? <textarea rows={rows} value={value} onChange={onChange} style={{ ...field, resize: 'vertical' }} />
        : <input type={type} value={value} onChange={onChange} style={field} />}
    </label>
  );
}
function ContactScreen({ onNavigate }) {
  const { Section } = window;
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', brief: '' });
  const set = k => e => setForm({ ...form, [k]: e.target.value });
  return (
    <div>
      <div style={{ background: 'var(--surface-ink)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <NavBar active="Contact" onNavigate={onNavigate} onCta={() => onNavigate('Contact')} />
        </div>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '56px var(--gutter) 72px' }}>
          <Eyebrow>Contact</Eyebrow>
          <Heading level={1} size="lg" ground="ink" style={{ marginTop: 16 }}>Tell Us About Your Site.</Heading>
        </div>
      </div>
      <Section>
        <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: 'var(--contact-cols)', gap: 64, alignItems: 'start' }}>
          <div>
            {sent ? (
              <div style={{ padding: '46px 40px', background: 'var(--surface-card)', borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-card)' }}>
                <Icon name="check" size={26} color="var(--success)" />
                <Heading size="sm" style={{ marginTop: 14 }}>Thank you, {form.name || 'friend'}.</Heading>
                <p style={{ marginTop: 10, fontSize: 'var(--body-md)', lineHeight: 'var(--lh-body)',
                  fontWeight: 'var(--weight-light)', color: 'var(--text-body)' }}>
                  A member of the studio will reply within two working days.
                </p>
                <div style={{ marginTop: 22 }}>
                  <Button variant="outline" size="sm" showIcon={false} onClick={() => setSent(false)}>Send another</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}
                style={{ display: 'grid', gap: 20, maxWidth: 520 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'var(--form-cols)', gap: 20 }}>
                  <Field label="Name" value={form.name} onChange={set('name')} />
                  <Field label="Email" type="email" value={form.email} onChange={set('email')} />
                </div>
                <Field label="About the project" rows={5} value={form.brief} onChange={set('brief')} />
                <div><Button variant="primary" size="md">Send enquiry</Button></div>
              </form>
            )}
          </div>
          <aside>
            <Eyebrow>Studio</Eyebrow>
            <div className="stack-center" style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 16,
              background: 'var(--surface-ink)', padding: 26, borderRadius: 'var(--radius-sm)' }}>
              <ContactRow icon="mail" href="mailto:alex@cozabal.com">alex@cozabal.com</ContactRow>
              <ContactRow icon="phone" href="tel:+34627087019">+34 627 08 70 19</ContactRow>
              <ContactRow icon="map-pin">C/ Fuerteventura 4, OF-9,<br />San Sebastián de los Reyes, Spain</ContactRow>
              <ContactRow icon="clock">Mon–Fri, 9:00–18:00</ContactRow>
              <Divider ground="ink" style={{ margin: '4px 0' }} />
              <Eyebrow>Follow us</Eyebrow>
              <SocialRow />
            </div>
          </aside>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
Object.assign(window, { ContactScreen });