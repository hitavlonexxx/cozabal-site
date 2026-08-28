# COZABAL Design System

COZABAL is an architecture and construction studio: it designs and builds residential
and commercial spaces end to end, from concept through project management. The brand
speaks the way a good studio pitch does — restrained, confident, oriented around the
client's site rather than the studio's own portfolio.

The visual identity is a single, tight system: warm near-black grounds, warm off-white
paper, one brass accent, a high-contrast display serif for every headline and a
geometric sans for everything functional. Photography of dusk-lit architecture carries
most of the emotional weight; the interface stays out of its way.

## Sources given

| Source | What it is | Notes |
| --- | --- | --- |
| `uploads/28d39aa324291cc3a2e349a12d4a3f3e.jpg` | One full-page desktop web comp, 736px wide | The only material supplied. No codebase, Figma file, font binaries, or image assets. |

**Two things a reader should know up front.** The comp is branded **ARCOVA**; the brief
named the company **COZABAL**. This system carries the COZABAL name and the comp's
visual language. Second, everything here is reconstructed from a single low-resolution
raster comp, so numeric values are measured estimates, not extracted source values.
Where the comp was silent (form controls, detail pages, hover states) the system
extrapolates from adjacent patterns and says so.

**No logo file was supplied.** The brand mark is set in plain type by
`components/layout/Wordmark.jsx` — name in letterspaced caps over a small-caps
descriptor. Nothing was drawn or reconstructed. Supply the real mark and the wordmark
component is the one place to swap it.

## Products

One surface exists in the source material: the **marketing website**
(`ui_kits/website/`). No app, dashboard, docs site, or deck template was provided, so
none were invented.

---

## Content fundamentals

**Voice.** First-person plural, present tense. The studio is "we"; the reader is "you".
"We Build Timeless Spaces. Built Around You." — the client is the object of nearly
every sentence, and the studio's own competence is stated once and then dropped.

**Register.** Declarative and plain. Sentences are short and end in periods, even in
fragments used as headings ("Ideas. Trends. Inspiration."). No exclamation marks, no
questions to the reader, no jokes, no metaphor beyond the literal ("timeless",
"seamless"). Nothing is hedged and nothing is oversold; there are no superlatives like
"world-class" or "industry-leading".

**Casing.** Three registers, used consistently:
- Headlines: **Title Case**, display serif, 2–3 short lines. "Spaces That Define Excellence".
- Eyebrows, buttons, nav, labels: **ALL CAPS** with wide tracking. "FEATURED PROJECTS", "EXPLORE OUR WORK", "READ MORE".
- Body and card copy: **sentence case**, one sentence where possible. "Bespoke homes built with precision and care."

**Length discipline.** Eyebrow: 2–3 words. Headline: under 26 characters per line.
Card body: one sentence, 8–14 words. Intro paragraph: one or two sentences, never three.
CTA: 2–3 words, verb first ("Explore our work", "Start your project", "How we work").

**Numbers.** Written as compact figures with their qualifier attached: `15+`, `320+`,
`98%`, `25+`. Labels underneath are sentence-case noun phrases: "Years of Experience",
"Client Satisfaction". Never spelled out, never rounded away.

**Process and service naming.** Single-word or two-word nouns — Discover, Design,
Build, Deliver, Beyond; Architecture, Interiors, Project Management. Steps are numbered
`01`–`05`, zero-padded.

**Emoji: never.** No emoji anywhere in the brand — not in copy, not as icons, not in
UI. Unicode is used only for typographic punctuation (`&rsquo;`, `&copy;`, `&middot;`,
`&mdash;`).

**Words the brand uses:** craft, elevate, bespoke, integrated, seamless, precision,
concept to completion, thoughtful, lasting, timeless.
**Words it avoids:** innovative, cutting-edge, solutions-driven, unlock, empower,
game-changing, revolutionary.

---

## Visual foundations

**Grounds.** Only two, alternating band by band: warm near-black ink (`--ink-800`
`#16130F`) and warm paper (`--bone-100` `#F8F5EE`). The footer drops to `--ink-900`.
There is no third background colour and no tinted brand section — brass never fills a
large area.

**Accent.** One accent, brass (`--brass-400` `#C9A063`). It appears as: the solid
primary button, the eyebrow labels, hairline icon strokes, the emphasised word in a
headline, numbered process discs, the active-nav underline, and hover-state text.
Roughly 3–5% of any screen's pixels. No second accent, no gradient accent, and
explicitly no blue or violet anywhere in the system.

**Type.** Display sans (Manrope substitute) for *every* heading, project
name, service title, statistic and lead paragraph — light weight, tight leading (1.14
at display sizes), slightly negative tracking. Geometric sans (Jost substitute) at 300
and 500 for body, labels, nav and buttons. Labels carry 0.12–0.18em tracking and the
wordmark 0.26em. The sans is never used for a headline; the serif is never used for a
button.

**Layout.** 1180px container inside 40px gutters. Every band is a two-column split: a
narrow (280–300px) left rail holding eyebrow + heading + one CTA, and a wide content
grid to the right. Vertical rhythm is 96px between bands, 64px when tight. Card grids
use a 14px gap — tighter than the surrounding whitespace, which makes mosaics read as
one object. The project mosaic deliberately mixes tall (3:4) and wide (4:3) tiles in a
three-column grid. Nothing is fixed or sticky: the header scrolls away with the page.

**Backgrounds and imagery.** Full-bleed dusk photography of buildings, warm-toned,
artificially lit, shot at golden hour or blue hour — never bright midday, never cool,
never black-and-white, no grain or texture overlays. Interiors are warm neutrals. The
one non-photographic background element is a faint white line-drawing of a building in
the process and footer bands, at very low opacity. No repeating patterns, no noise, no
illustration.

**Overlays and protection.** Text over an image always sits on a gradient, never on a
capsule or scrim box: `--overlay-image` (transparent to 88% ink, bottom-up) for card
captions, `--overlay-hero` (a left-to-right ink wash) for the hero. Gradients exist
only for legibility — never decoratively.

**Corner radii.** Small and consistent: 4px on cards, images and buttons; 2px on
micro-elements; 24px only on the floating stat capsule; full pill on circular icon
buttons and process discs. Nothing else is heavily rounded.

**Cards.** Two kinds. *Image cards* (projects, insights) are a photo with a radius of
4px, no border, no shadow — the overlay gradient does the separating work. *Panel cards*
(services, facts) are a flat fill one step off the ground colour with a 1px hairline
border and no shadow on ink; on paper they take `--shadow-card` and a hairline. No card
anywhere has a coloured left border.

**Shadows.** Two, plus one hover step. `--shadow-card` for panels on paper,
`--shadow-card-hover` on hover, and `--shadow-float` (a deep 60px ink shadow) used
exactly once, on the stat capsule that straddles the hero. Inner shadows are limited to
a 1px light inset on ink surfaces.

**Transparency and blur.** Used in one place only: the stat capsule, at
`rgba(22,19,15,.72)` with a 14px backdrop blur, so the hero image reads faintly through
it. Hairline borders on ink are `rgba(230,207,170,.16)`; on paper `rgba(16,14,11,.12)`.
No frosted panels, no glassmorphism elsewhere.

**Borders and rules.** Everything is 1px. Hairline rules separate the footer legal row
and list items; vertical hairlines separate stat items; the process rail is a 1px
*dashed* line in `--bone-400`. There are no thick rules and no double borders.

**Motion.** Slow and eased, never playful. 240ms base with
`cubic-bezier(.22,.61,.36,1)`; 700ms for image scale. Cards lift `-2px` on hover with no
shadow jump on ink; button arrows slide `+3px` right; images scale to 1.04 inside their
frame. No bounce, no spring, no rotation, no entrance animations beyond a fade-and-rise
on scroll.

**Hover states.** Brass fill lightens one step (`--brass-400` → `--brass-500`); outline
buttons gain a 10–12% brass wash rather than changing border colour; text links and
"READ MORE" turn brass; icon discs gain an 18% brass wash. Never opacity-based, never
darker-on-dark.

**Press states.** A 0.985 scale and the next brass step down (`--brass-600`). No colour
inversion, no shadow removal.

**Focus.** A 1px brass ring (`--ring-brass`) — the same hairline language as everything else.

---

## Iconography

No icon assets, icon font, or sprite existed in the supplied material — the only source
was a raster comp. **Icons are therefore substituted from [Lucide](https://lucide.dev)
0.470.0 via CDN**, which is the closest available match to the comp's hairline
single-weight line glyphs. Flagged as a substitution: swap in the real set when it exists.

- **Style.** Outline only, `strokeWidth: 1.25`, no fills, no two-tone, no duotone. All
  icons are brass or inherit the ground's text colour.
- **Sizes.** 13–16px inside buttons and links, 17px in contact rows, 20px default,
  26px in stat items, 30px for service glyphs.
- **Usage.** `components/core/Icon.jsx` wraps Lucide; the host page must load
  `https://unpkg.com/lucide@0.470.0/dist/umd/lucide.js`.
- **The glyph vocabulary in the comp**, mapped to Lucide names: `compass` (architecture),
  `home` (residential), `building-2` (commercial), `armchair` (interiors),
  `clipboard-list` (project management), `award` / `medal` (statistics), `users`
  (satisfaction), `arrow-right` (every forward affordance), `arrow-left` (back),
  `more-horizontal` (nav overflow), `mail` / `phone` / `map-pin` (contact),
  `linkedin` / `instagram` / `facebook` / `twitter` (social).
- **Arrows carry all navigation meaning.** A right arrow inside a circle means "open
  this thing"; a bare right arrow after uppercase text means "go".
- **No emoji, ever.** No PNG icons. No hand-drawn SVG: the one line-drawing motif in the
  comp's background is decorative architectural linework, not an icon, and no
  reproduction of it ships here.

### Intentional additions

Beyond the families visible in the comp, three additions were needed and are flagged:

* **`Icon`** — a wrapper so the substituted Lucide set has one call site.
* **`ImageFrame`** — a photo container; the comp shows photography everywhere but no
  imagery was supplied, so this component owns the placeholder plate.
* **Filter pills** (in `ui_kits/website/ProjectsScreen.jsx`) and **form fields** (in
  `ContactScreen.jsx`) — the comp had neither; both are styled strictly from existing
  tokens and exist only inside the UI kit, not as design-system components.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css` (webfont substitution), `colors.css`, `typography.css`,
`spacing.css`, `elevation.css`, `motion.css`.

**`guidelines/`** — 17 specimen cards: Colors (ink, brass, bone, neutrals, semantic,
ground pairings), Type (display, body, labels, numerals), Spacing (scale, layout
rhythm, radii), Brand (elevation, overlays, motion, wordmark).

**Components** — `components/<group>/<Name>.jsx` + `.d.ts` + `.prompt.md`.

| Group | Components |
| --- | --- |
| `components/core/` | `Button`, `IconButton`, `Icon`, `Eyebrow`, `Heading` (+ `HeadingAccent`), `Divider`, `ImageFrame` |
| `components/cards/` | `ProjectCard`, `ServiceCard`, `InsightCard`, `StatItem`, `ProcessStep` |
| `components/layout/` | `Wordmark`, `NavBar`, `StatBar`, `SectionIntro`, `ContactRow`, `SocialRow`, `Footer` |

**UI kits**
- `ui_kits/website/` — the marketing site: `index.html` (click-through),
  `HomeScreen.jsx`, `ProjectsScreen.jsx`, `ProjectDetailScreen.jsx`,
  `InsightsScreen.jsx`, `ContactScreen.jsx`, `Chrome.jsx`, `data.jsx`, `README.md`.

**Starting points** — `Button`, `ProjectCard`, `NavBar`, `Footer`, and the website kit.

## Open substitutions

1. **Fonts.** Manrope and Jost stand in for the comp's display serif and
   geometric sans. Send the real font files and `tokens/fonts.css` becomes local
   `@font-face` rules.
2. **Icons.** Lucide 0.470.0 via CDN, as described above.
3. **Photography.** None supplied; all image slots render placeholders.
4. **Logo.** None supplied; the wordmark is plain type.
