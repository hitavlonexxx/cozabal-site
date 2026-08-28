/* @ds-bundle: {"format":4,"namespace":"COZABALDesignSystem_6929d1","components":[{"name":"InsightCard","sourcePath":"components/cards/InsightCard.jsx"},{"name":"ProcessStep","sourcePath":"components/cards/ProcessStep.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"StatItem","sourcePath":"components/cards/StatItem.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Heading","sourcePath":"components/core/Heading.jsx"},{"name":"HeadingAccent","sourcePath":"components/core/Heading.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ImageFrame","sourcePath":"components/core/ImageFrame.jsx"},{"name":"ContactRow","sourcePath":"components/layout/ContactRow.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"NavBar","sourcePath":"components/layout/NavBar.jsx"},{"name":"SectionIntro","sourcePath":"components/layout/SectionIntro.jsx"},{"name":"SocialRow","sourcePath":"components/layout/SocialRow.jsx"},{"name":"StatBar","sourcePath":"components/layout/StatBar.jsx"},{"name":"Wordmark","sourcePath":"components/layout/Wordmark.jsx"}],"sourceHashes":{"components/cards/InsightCard.jsx":"6c194830a779","components/cards/ProcessStep.jsx":"16115ef920bb","components/cards/ProjectCard.jsx":"80bbbf410dcc","components/cards/ServiceCard.jsx":"fd0f5cd61682","components/cards/StatItem.jsx":"fca944c2bd3c","components/core/Button.jsx":"8677e713d360","components/core/Divider.jsx":"5b5e9b83d187","components/core/Eyebrow.jsx":"1883029c353c","components/core/Heading.jsx":"7015020a4a37","components/core/Icon.jsx":"b31e1a280bf1","components/core/IconButton.jsx":"4dcf281b9b0f","components/core/ImageFrame.jsx":"e5f8f58fa757","components/layout/ContactRow.jsx":"87bf2565ef04","components/layout/Footer.jsx":"28313f65b25d","components/layout/NavBar.jsx":"9fb7db503de5","components/layout/SectionIntro.jsx":"661ba81af1c6","components/layout/SocialRow.jsx":"78a8b065a262","components/layout/StatBar.jsx":"a0d7141710a7","components/layout/Wordmark.jsx":"d762e7bdd87d","ui_kits/website/Chrome.jsx":"3027bb7a1e35","ui_kits/website/ContactScreen.jsx":"ad50a890cf40","ui_kits/website/HomeScreen.jsx":"a76c9c7b0d84","ui_kits/website/InsightsScreen.jsx":"01a50b953778","ui_kits/website/ProjectDetailScreen.jsx":"5e5259627481","ui_kits/website/ProjectsScreen.jsx":"3b5e91f3dd48","ui_kits/website/data.jsx":"623811e4ebe6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.COZABALDesignSystem_6929d1 = window.COZABALDesignSystem_6929d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ProcessStep.jsx
try { (() => {
/** Numbered brass disc, serif-free sans title, short copy — the process timeline. */
function ProcessStep({
  number,
  title,
  children,
  ground = 'light'
}) {
  const ink = ground === 'ink';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 168
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      margin: '0 auto',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--brass-400)',
      color: 'var(--on-accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '.04em'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-md)',
      fontWeight: 'var(--weight-medium)',
      color: ink ? 'var(--text-on-ink)' : 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-xs)',
      lineHeight: 1.65,
      fontWeight: 'var(--weight-light)',
      color: ink ? 'var(--text-on-ink-muted)' : 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/** Hairline rule. Vertical form separates stat items; horizontal separates bands. */
function Divider({
  orientation = 'horizontal',
  ground = 'light',
  length = '100%',
  style
}) {
  const c = ground === 'ink' ? 'var(--border-hairline-ink)' : 'var(--border-hairline)';
  return /*#__PURE__*/React.createElement("div", {
    style: orientation === 'horizontal' ? {
      width: length,
      height: 1,
      background: c,
      ...style
    } : {
      height: length,
      width: 1,
      background: c,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small uppercase letterspaced brass label that opens every section. */
function Eyebrow({
  children,
  color = 'var(--text-eyebrow)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--label-sm)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Heading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  xl: 'var(--display-xl)',
  lg: 'var(--display-lg)',
  md: 'var(--display-md)',
  sm: 'var(--display-sm)',
  xs: 'var(--display-xs)'
};

/** Display serif heading. `accent` words render in brass italic-free serif. */
function Heading({
  level = 2,
  size = 'lg',
  ground = 'light',
  children,
  style,
  ...rest
}) {
  const Tag = 'h' + level;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: sizes[size],
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: ground === 'ink' ? 'var(--text-on-ink)' : 'var(--text-heading)',
      textWrap: 'pretty',
      ...style
    }
  }, rest), children);
}

/** Brass emphasis span used inside Heading. */
function HeadingAccent({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Heading, HeadingAccent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Heading.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Line icons come from Lucide (CDN). The host page must load
   https://unpkg.com/lucide@0.470.0/dist/umd/lucide.js — this component just
   asks Lucide to hydrate its placeholders. */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.25,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const draw = () => window.lucide && window.lucide.createIcons({
      nameAttr: 'data-lucide',
      root: ref.current
    });
    draw();
    const t = setTimeout(draw, 300);
    return () => clearTimeout(t);
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      lineHeight: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      strokeWidth
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
/** Ink-ground service tile: centred hairline glyph, serif title, small copy. */
function ServiceCard({
  icon = 'compass',
  title,
  children,
  active = false
}) {
  const [hover, setHover] = React.useState(false);
  const lit = hover || active;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: '34px 22px 30px',
      textAlign: 'center',
      borderRadius: 'var(--radius-sm)',
      background: lit ? 'var(--ink-600)' : 'var(--surface-card-ink)',
      border: '1px solid ' + (lit ? 'var(--border-brass)' : 'var(--border-hairline-ink)'),
      transition: 'background var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    color: "var(--brass-400)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-xs)',
      lineHeight: 1.22,
      color: 'var(--text-on-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm)',
      lineHeight: 1.7,
      color: 'var(--text-on-ink-muted)',
      fontWeight: 'var(--weight-light)'
    }
  }, children));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatItem.jsx
try { (() => {
/** Icon + serif numeral + small label. Used in the floating stat bar over the hero. */
function StatItem({
  icon = 'award',
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26,
    color: "var(--brass-400)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--stat-size)',
      lineHeight: 1,
      color: 'var(--text-on-ink)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-xs)',
      color: 'var(--text-on-ink-muted)'
    }
  }, label)));
}
Object.assign(__ds_scope, { StatItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pad = {
  sm: '10px 18px',
  md: '14px 24px',
  lg: '17px 30px'
};

/**
 * @startingPoint section="Core" subtitle="Brass, outline and ghost buttons" viewport="700x150"
 */
function Button({
  variant = 'primary',
  size = 'md',
  ground = 'light',
  icon = 'arrow-right',
  showIcon = true,
  disabled = false,
  as = 'button',
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const onInk = ground === 'ink';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    padding: pad[size],
    fontFamily: 'var(--font-sans)',
    fontSize: size === 'sm' ? 'var(--label-sm)' : 'var(--label-md)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: 'var(--ls-label-tight)',
    textTransform: 'uppercase',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-base) var(--ease-standard),color var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)',
    opacity: disabled ? 0.4 : 1
  };
  const skins = {
    primary: {
      background: hover && !disabled ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--on-accent)'
    },
    outline: {
      background: hover && !disabled ? onInk ? 'rgba(201,160,99,.12)' : 'rgba(201,160,99,.10)' : 'transparent',
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-heading)',
      borderColor: onInk ? 'var(--border-hairline-ink)' : 'var(--border-hairline)'
    },
    brass: {
      background: hover && !disabled ? 'rgba(201,160,99,.12)' : 'transparent',
      color: 'var(--text-accent)',
      borderColor: 'var(--border-brass)'
    },
    ghost: {
      background: 'transparent',
      padding: 0,
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-heading)'
    }
  };
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...skins[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), showIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 13 : 15,
    style: {
      transform: hover && !disabled ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out-soft)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular hairline glyph button — the arrow badge on project cards, social links. */
function IconButton({
  name = 'arrow-right',
  size = 34,
  ground = 'ink',
  filled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const onInk = ground === 'ink';
  return /*#__PURE__*/React.createElement("button", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (filled ? 'transparent' : onInk ? 'rgba(247,243,236,.34)' : 'var(--border-hairline)'),
      background: filled ? hover ? 'var(--accent-hover)' : 'var(--accent)' : hover ? 'rgba(201,160,99,.18)' : 'transparent',
      color: filled ? 'var(--on-accent)' : onInk ? 'var(--text-on-ink)' : 'var(--text-heading)',
      transition: 'background var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.44)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ImageFrame.jsx
try { (() => {
/**
 * Photography frame. COZABAL imagery is warm, dusk-lit architecture, always
 * inside a 4px-radius box with a bottom protection gradient when text overlays it.
 * With no `src`, renders the brand's placeholder plate.
 */
function ImageFrame({
  src,
  alt = '',
  ratio = '4 / 3',
  radius = 'var(--radius-sm)',
  overlay = false,
  label,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: 'hidden',
      background: src ? 'var(--ink-700)' : 'linear-gradient(150deg,var(--ink-600),var(--ink-900))',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--label-sm)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'rgba(230,207,170,.42)',
      textAlign: 'center',
      padding: 16
    }
  }, label || 'Photography'), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-image)'
    }
  }), children);
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/cards/InsightCard.jsx
try { (() => {
/** Journal teaser: image with overlaid date, serif title and READ MORE. */
function InsightCard({
  date,
  title,
  src,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      position: 'relative',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      transform: hover ? 'translateY(var(--lift))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: src,
    ratio: "4 / 3",
    overlay: true,
    label: title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 20px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--label-sm)',
      letterSpacing: 'var(--ls-label-tight)',
      textTransform: 'uppercase',
      color: 'var(--text-on-ink-muted)'
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-xs)',
      lineHeight: 1.25,
      color: 'var(--text-on-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--label-sm)',
      letterSpacing: 'var(--ls-label-tight)',
      textTransform: 'uppercase',
      color: hover ? 'var(--text-accent)' : 'var(--text-on-ink)',
      transition: 'color var(--dur-base) var(--ease-standard)'
    }
  }, "Read more ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 13
  }))));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
/**
 * Mosaic tile for a project: photo, serif name, location, arrow badge.
 * @startingPoint section="Cards" subtitle="Project mosaic tile" viewport="700x300"
 */
function ProjectCard({
  name,
  location,
  src,
  ratio = '3 / 4',
  captionPosition = 'bottom',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const top = captionPosition === 'top';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      position: 'relative',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      height: ratio === 'auto' ? '100%' : undefined,
      transform: hover ? 'translateY(var(--lift))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: src,
    ratio: ratio,
    overlay: true,
    label: name,
    style: {
      borderRadius: 'var(--radius-sm)',
      height: ratio === 'auto' ? '100%' : undefined
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 18,
      [top ? 'top' : 'bottom']: 20,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-xs)',
      lineHeight: 1.25,
      color: 'var(--text-on-ink)'
    }
  }, name), location && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-xs)',
      color: 'var(--text-on-ink-muted)'
    }
  }, location)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "arrow-right",
    size: 30,
    ground: "ink",
    style: {
      flex: '0 0 auto'
    }
  })));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/ContactRow.jsx
try { (() => {
/** Brass glyph + one or two lines of contact detail. */
function ContactRow({
  icon,
  children,
  href
}) {
  const [hover, setHover] = React.useState(false);
  const body = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: "var(--brass-400)",
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm)',
      lineHeight: 1.55,
      fontWeight: 'var(--weight-light)',
      color: hover ? 'var(--text-accent)' : 'var(--text-on-ink-muted)',
      transition: 'color var(--dur-base) var(--ease-standard)'
    }
  }, children));
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      textDecoration: 'none'
    }
  }, body) : body;
}
Object.assign(__ds_scope, { ContactRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ContactRow.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionIntro.jsx
try { (() => {
/** Left rail of every band: eyebrow, short serif heading, optional copy, one CTA. */
function SectionIntro({
  eyebrow,
  title,
  copy,
  cta,
  ctaVariant = 'outline',
  ground = 'light',
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement(__ds_scope.Heading, {
    size: "lg",
    ground: ground,
    style: {
      marginTop: 16,
      lineHeight: 'var(--lh-display-loose)'
    }
  }, title), copy && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm)',
      lineHeight: 'var(--lh-body)',
      fontWeight: 'var(--weight-light)',
      color: ground === 'ink' ? 'var(--text-on-ink-muted)' : 'var(--text-body)'
    }
  }, copy), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: ctaVariant,
    size: "sm",
    ground: ground,
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { SectionIntro });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionIntro.jsx", error: String((e && e.message) || e) }); }

// components/layout/SocialRow.jsx
try { (() => {
/** Row of circular hairline social discs. */
function SocialRow({
  networks = ['linkedin', 'instagram', 'facebook', 'twitter'],
  size = 30
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, networks.map(n => /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    key: n,
    name: n,
    size: size,
    ground: "ink"
  })));
}
Object.assign(__ds_scope, { SocialRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SocialRow.jsx", error: String((e && e.message) || e) }); }

// components/layout/StatBar.jsx
try { (() => {
/** Floating dark capsule of statistics that straddles the hero and the band below it. */
function StatBar({
  children,
  style
}) {
  const items = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '26px 40px',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--glass-ink)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      boxShadow: 'var(--shadow-float)',
      border: '1px solid var(--border-hairline-ink)',
      ...style
    }
  }, items.map((child, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, child, i < items.length - 1 && /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    orientation: "vertical",
    length: "52px",
    ground: "ink"
  }))));
}
Object.assign(__ds_scope, { StatBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/StatBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Wordmark.jsx
try { (() => {
/**
 * Typographic brand lockup. No logo file was supplied with this brand, so the
 * wordmark is set in plain type: name in letterspaced caps over a hairline-spaced
 * descriptor. Do not substitute an invented mark.
 */
function Wordmark({
  name = 'COZABAL',
  descriptor = 'ARCHITECTURE & CONSTRUCTION',
  ground = 'ink',
  size = 22
}) {
  const ink = ground === 'ink';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size,
      fontWeight: 'var(--weight-light)',
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      lineHeight: 1,
      color: ink ? 'var(--text-on-ink)' : 'var(--text-heading)'
    }
  }, name), descriptor && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: Math.max(7, size * 0.34),
      fontWeight: 'var(--weight-regular)',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: ink ? 'var(--text-on-ink-muted)' : 'var(--text-muted)'
    }
  }, descriptor));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
/**
 * Deep-ink closing band: invitation headline + CTA, contact column, brand column.
 * @startingPoint section="Layout" subtitle="Closing invitation footer" viewport="1280x420"
 */
function Footer({
  headline = /*#__PURE__*/React.createElement(React.Fragment, null, "Let\u2019s Build", /*#__PURE__*/React.createElement("br", null), "Something", /*#__PURE__*/React.createElement("br", null), "Extraordinary"),
  cta = 'Start your project',
  email = 'hello@cozabal.com',
  phone = '+1 (212) 555-0198',
  address = /*#__PURE__*/React.createElement(React.Fragment, null, "123 Design Avenue,", /*#__PURE__*/React.createElement("br", null), "New York, NY 10001"),
  blurb = 'We design and build thoughtful spaces that elevate how people live, work, and connect.',
  legal = '\u00A9 2026 COZABAL. All rights reserved.'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink-deep)',
      color: 'var(--text-on-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px var(--gutter) 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1.1fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Heading, {
    size: "md",
    ground: "ink",
    style: {
      lineHeight: 'var(--lh-display-loose)'
    }
  }, headline), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md"
  }, cta))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ContactRow, {
    icon: "mail",
    href: 'mailto:' + email
  }, email), /*#__PURE__*/React.createElement(__ds_scope.ContactRow, {
    icon: "phone",
    href: 'tel:' + phone.replace(/[^+\d]/g, '')
  }, phone), /*#__PURE__*/React.createElement(__ds_scope.ContactRow, {
    icon: "map-pin"
  }, address), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Follow us")), /*#__PURE__*/React.createElement(__ds_scope.SocialRow, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 26,
    ground: "ink"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      maxWidth: 300,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm)',
      lineHeight: 'var(--lh-body)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-on-ink-muted)'
    }
  }, blurb))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    ground: "ink"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 0 28px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-xs)',
      color: 'var(--grey-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#privacy",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "PRIVACY POLICY"), /*#__PURE__*/React.createElement("a", {
    href: "#terms",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "TERMS OF SERVICE")))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/NavBar.jsx
try { (() => {
/**
 * Transparent header over the hero image: wordmark left, letterspaced links centre,
 * brass-outline CTA plus overflow disc right. Active link carries a brass underline.
 * @startingPoint section="Layout" subtitle="Transparent site header over hero" viewport="1280x110"
 */
function NavBar({
  items = ['Home', 'About', 'Services', 'Projects', 'Insights', 'Contact'],
  active = 'Home',
  onNavigate,
  cta = 'Get in touch',
  onCta
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '26px var(--gutter)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    ground: "ink"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 34
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: '#' + it.toLowerCase(),
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it);
      },
      style: {
        position: 'relative',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--label-md)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--ls-label-tight)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        paddingBottom: 8,
        color: on ? 'var(--text-accent)' : 'var(--text-on-ink)',
        borderBottom: '1px solid ' + (on ? 'var(--brass-400)' : 'transparent'),
        transition: 'color var(--dur-base) var(--ease-standard)'
      }
    }, it);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brass",
    size: "sm",
    showIcon: false,
    onClick: onCta
  }, cta), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "more-horizontal",
    size: 38,
    ground: "ink"
  })));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Eyebrow,
  Heading,
  HeadingAccent,
  Divider,
  ImageFrame,
  ProjectCard,
  ServiceCard,
  InsightCard,
  StatItem,
  ProcessStep,
  Wordmark,
  NavBar,
  StatBar,
  SectionIntro,
  ContactRow,
  SocialRow,
  Footer
} = window.COZABALDesignSystem_6929d1;
const Section = ({
  ground = 'light',
  children,
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background: ground === 'ink' ? 'var(--surface-ink)' : ground === 'deep' ? 'var(--surface-ink-deep)' : 'var(--surface-page)',
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '96px var(--gutter)'
  }
}, children));
Object.assign(window, {
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Eyebrow,
  Heading,
  HeadingAccent,
  Divider,
  ImageFrame,
  ProjectCard,
  ServiceCard,
  InsightCard,
  StatItem,
  ProcessStep,
  Wordmark,
  NavBar,
  StatBar,
  SectionIntro,
  ContactRow,
  SocialRow,
  Footer
} = window.COZABALDesignSystem_6929d1;
const field = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '13px 15px',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--body-md)',
  color: 'var(--text-heading)',
  outline: 'none'
};
function Field({
  label,
  type = 'text',
  rows,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8,
      fontSize: 'var(--label-sm)',
      letterSpacing: 'var(--ls-label-tight)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), rows ? /*#__PURE__*/React.createElement("textarea", {
    rows: rows,
    value: value,
    onChange: onChange,
    style: {
      ...field,
      resize: 'vertical'
    }
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    style: field
  }));
}
function ContactScreen({
  onNavigate
}) {
  const {
    Section
  } = window;
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    brief: ''
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: "Contact",
    onNavigate: onNavigate,
    onCta: () => onNavigate('Contact')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '56px var(--gutter) 72px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    size: "lg",
    ground: "ink",
    style: {
      marginTop: 16
    }
  }, "Tell Us About Your Site."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '46px 40px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 26,
    color: "var(--success)"
  }), /*#__PURE__*/React.createElement(Heading, {
    size: "sm",
    style: {
      marginTop: 14
    }
  }, "Thank you, ", form.name || 'friend', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 'var(--body-md)',
      lineHeight: 'var(--lh-body)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-body)'
    }
  }, "A member of the studio will reply within two working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    showIcon: false,
    onClick: () => setSent(false)
  }, "Send another"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 20,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    value: form.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    value: form.email,
    onChange: set('email')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "About the project",
    rows: 5,
    value: form.brief,
    onChange: set('brief')
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md"
  }, "Send enquiry")))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Studio"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      background: 'var(--surface-ink)',
      padding: 26,
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(ContactRow, {
    icon: "mail",
    href: "mailto:hello@cozabal.com"
  }, "hello@cozabal.com"), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "phone"
  }, "+1 (212) 555-0198"), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "map-pin"
  }, "123 Design Avenue,", /*#__PURE__*/React.createElement("br", null), "New York, NY 10001"), /*#__PURE__*/React.createElement(Divider, {
    ground: "ink",
    style: {
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, null, "Follow us"), /*#__PURE__*/React.createElement(SocialRow, null))))), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Icon,
  Eyebrow,
  Heading,
  HeadingAccent,
  Divider,
  ImageFrame,
  ProjectCard,
  ServiceCard,
  InsightCard,
  StatItem,
  ProcessStep,
  Wordmark,
  NavBar,
  StatBar,
  SectionIntro,
  ContactRow,
  SocialRow,
  Footer
} = window.COZABALDesignSystem_6929d1;
function HomeScreen({
  onNavigate
}) {
  const {
    Section
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'linear-gradient(150deg,var(--ink-500),var(--ink-900) 70%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: "Home",
    onNavigate: onNavigate,
    onCta: () => onNavigate('Contact')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '80px var(--gutter) 120px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Architecture that inspires"), /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    size: "xl",
    ground: "ink",
    style: {
      marginTop: 20,
      maxWidth: 620
    }
  }, "We Build ", /*#__PURE__*/React.createElement(HeadingAccent, null, "Timeless"), " Spaces.", /*#__PURE__*/React.createElement("br", null), "Built Around You."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: 340,
      fontSize: 'var(--body-md)',
      lineHeight: 'var(--lh-body)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-on-ink-muted)'
    }
  }, "From concept to completion, we craft extraordinary spaces that elevate living and stand the test of time."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('Projects')
  }, "Explore our work"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(StatBar, {
    style: {
      marginTop: -56
    }
  }, /*#__PURE__*/React.createElement(StatItem, {
    icon: "award",
    value: "15+",
    label: "Years of Experience"
  }), /*#__PURE__*/React.createElement(StatItem, {
    icon: "building-2",
    value: "320+",
    label: "Projects Completed"
  }), /*#__PURE__*/React.createElement(StatItem, {
    icon: "users",
    value: "98%",
    label: "Client Satisfaction"
  }), /*#__PURE__*/React.createElement(StatItem, {
    icon: "medal",
    value: "25+",
    label: "Industry Awards"
  })))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    eyebrow: "Featured Projects",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Spaces", /*#__PURE__*/React.createElement("br", null), "That Define", /*#__PURE__*/React.createElement("br", null), "Excellence"),
    cta: "View all projects",
    onCta: () => onNavigate('Projects')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gridTemplateRows: 'repeat(2,150px)',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: 'span 2'
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, COZ_PROJECTS[0], {
    ratio: "auto",
    onClick: () => onNavigate('Project')
  }))), /*#__PURE__*/React.createElement(ProjectCard, _extends({}, COZ_PROJECTS[1], {
    ratio: "auto",
    captionPosition: "top",
    onClick: () => onNavigate('Project')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: 'span 2'
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, COZ_PROJECTS[3], {
    ratio: "auto",
    onClick: () => onNavigate('Project')
  }))), /*#__PURE__*/React.createElement(ProjectCard, _extends({}, COZ_PROJECTS[2], {
    ratio: "auto",
    onClick: () => onNavigate('Project')
  }))))), /*#__PURE__*/React.createElement(Section, {
    ground: "ink"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    ground: "ink",
    eyebrow: "Our Services",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "End-to-End", /*#__PURE__*/React.createElement("br", null), "Solutions"),
    copy: "Integrated expertise across every stage of design and construction.",
    cta: "Explore services",
    ctaVariant: "primary",
    onCta: () => onNavigate('Services')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, COZ_SERVICES.map(([icon, title, copy]) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: title,
    icon: icon,
    title: title
  }, copy))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    eyebrow: "Our Process",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "A Seamless Journey From Vision to Reality"),
    cta: "How we work"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 22,
      left: '8%',
      right: '8%',
      borderTop: '1px dashed var(--bone-400)'
    }
  }), COZ_PROCESS.map(([n, t, c]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ProcessStep, {
    number: n,
    title: t
  }, c)))))), /*#__PURE__*/React.createElement(Section, {
    ground: "ink"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    ground: "ink",
    eyebrow: "Insights",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Ideas. Trends.", /*#__PURE__*/React.createElement("br", null), "Inspiration."),
    cta: "View all articles",
    onCta: () => onNavigate('Insights')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, COZ_INSIGHTS.map(([d, t]) => /*#__PURE__*/React.createElement(InsightCard, {
    key: t,
    date: d.toUpperCase(),
    title: t,
    onClick: () => onNavigate('Insights')
  }))))), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InsightsScreen.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Eyebrow,
  Heading,
  HeadingAccent,
  Divider,
  ImageFrame,
  ProjectCard,
  ServiceCard,
  InsightCard,
  StatItem,
  ProcessStep,
  Wordmark,
  NavBar,
  StatBar,
  SectionIntro,
  ContactRow,
  SocialRow,
  Footer
} = window.COZABALDesignSystem_6929d1;
function InsightsScreen({
  onNavigate
}) {
  const {
    Section
  } = window;
  const more = [['Mar 22, 2024', 'What a Good Site Visit Looks Like'], ['Mar 04, 2024', 'Daylight, Measured'], ['Feb 18, 2024', 'Why We Draw by Hand First']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: "Insights",
    onNavigate: onNavigate,
    onCta: () => onNavigate('Contact')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '56px var(--gutter) 72px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Insights"), /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    size: "lg",
    ground: "ink",
    style: {
      marginTop: 16
    }
  }, "Ideas. Trends. Inspiration."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, COZ_INSIGHTS.map(([d, t]) => /*#__PURE__*/React.createElement(InsightCard, {
    key: t,
    date: d.toUpperCase(),
    title: t
  }))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: '48px 0 34px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, more.map(([d, t], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: t
  }, /*#__PURE__*/React.createElement("a", {
    href: "#article",
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 28,
      padding: '22px 0',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 120,
      flex: '0 0 auto',
      fontSize: 'var(--body-xs)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-sm)',
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    color: "var(--brass-600)"
  })), i < more.length - 1 && /*#__PURE__*/React.createElement(Divider, null))))), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  InsightsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InsightsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectDetailScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Icon,
  Eyebrow,
  Heading,
  HeadingAccent,
  Divider,
  ImageFrame,
  ProjectCard,
  ServiceCard,
  InsightCard,
  StatItem,
  ProcessStep,
  Wordmark,
  NavBar,
  StatBar,
  SectionIntro,
  ContactRow,
  SocialRow,
  Footer
} = window.COZABALDesignSystem_6929d1;
function ProjectDetailScreen({
  onNavigate
}) {
  const {
    Section
  } = window;
  const facts = [['Location', 'Los Angeles, CA'], ['Year', '2024'], ['Area', '6,400 sq ft'], ['Services', 'Architecture, Interiors']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'linear-gradient(150deg,var(--ink-500),var(--ink-900) 72%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: "Projects",
    onNavigate: onNavigate,
    onCta: () => onNavigate('Contact')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px var(--gutter) 96px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    ground: "ink",
    size: "sm",
    icon: "arrow-left",
    onClick: () => onNavigate('Projects')
  }, "All projects"), /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    size: "xl",
    ground: "ink",
    style: {
      marginTop: 22
    }
  }, "Horizon Residence"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 'var(--body-md)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-on-ink-muted)'
    }
  }, "Los Angeles, CA \u2014 Completed 2024")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Brief"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-sm)',
      lineHeight: 1.5,
      color: 'var(--text-heading)'
    }
  }, "A hillside home organised around a single continuous terrace, where every room opens to the horizon."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 'var(--body-md)',
      lineHeight: 'var(--lh-body)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-body)'
    }
  }, "The clients asked for a house that would feel open without feeling exposed. We answered with a layered plan: deep overhangs, screened courtyards, and a material palette of board-formed concrete, white oak and bronze that will weather rather than date."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 'var(--grid-gap)',
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    label: "Exterior \u2014 dusk",
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    label: "Terrace",
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    label: "Living room",
    ratio: "4 / 3"
  })))), /*#__PURE__*/React.createElement("aside", {
    style: {
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      padding: 26,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Project Facts"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, facts.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--body-xs)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-xs)',
      color: 'var(--text-heading)'
    }
  }, v)))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: '22px 0'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNavigate('Contact')
  }, "Start a project")))), /*#__PURE__*/React.createElement(Section, {
    ground: "ink",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    ground: "ink",
    eyebrow: "More Work",
    title: "Nearby Projects",
    style: {
      maxWidth: 420
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)',
      marginTop: 32
    }
  }, COZ_PROJECTS.slice(1, 4).map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.name
  }, p, {
    ratio: "4 / 3",
    onClick: () => onNavigate('Project')
  }))))), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  ProjectDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Icon,
  Eyebrow,
  Heading,
  HeadingAccent,
  Divider,
  ImageFrame,
  ProjectCard,
  ServiceCard,
  InsightCard,
  StatItem,
  ProcessStep,
  Wordmark,
  NavBar,
  StatBar,
  SectionIntro,
  ContactRow,
  SocialRow,
  Footer
} = window.COZABALDesignSystem_6929d1;
function ProjectsScreen({
  onNavigate
}) {
  const {
    Section
  } = window;
  const filters = ['All', 'Residential', 'Commercial', 'Interiors'];
  const [filter, setFilter] = React.useState('All');
  const list = COZ_PROJECTS.filter(p => filter === 'All' || p.type === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: "Projects",
    onNavigate: onNavigate,
    onCta: () => onNavigate('Contact')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '56px var(--gutter) 72px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected Work"), /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    size: "lg",
    ground: "ink",
    style: {
      marginTop: 16,
      maxWidth: 520
    }
  }, "Every Project Begins With a Conversation."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 34
    }
  }, filters.map(fl => /*#__PURE__*/React.createElement("button", {
    key: fl,
    onClick: () => setFilter(fl),
    style: {
      padding: '9px 18px',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--label-sm)',
      letterSpacing: 'var(--ls-label-tight)',
      textTransform: 'uppercase',
      border: '1px solid ' + (filter === fl ? 'var(--border-brass)' : 'var(--border-hairline)'),
      background: filter === fl ? 'rgba(201,160,99,.12)' : 'transparent',
      color: filter === fl ? 'var(--text-link)' : 'var(--text-body)',
      transition: 'all var(--dur-base) var(--ease-standard)'
    }
  }, fl))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.name
  }, p, {
    ratio: "4 / 3",
    onClick: () => onNavigate('Project')
  }))))), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  ProjectsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
const COZ_PROJECTS = [{
  name: 'Horizon Residence',
  location: 'Los Angeles, CA',
  ratio: '3 / 4',
  type: 'Residential'
}, {
  name: 'Aurora Office Tower',
  location: 'New York, NY',
  ratio: '4 / 3',
  type: 'Commercial'
}, {
  name: 'Edgewood Villa',
  location: 'Austin, TX',
  ratio: '4 / 3',
  type: 'Residential'
}, {
  name: 'Maple Street Residences',
  location: 'Seattle, WA',
  ratio: '3 / 4',
  type: 'Residential'
}, {
  name: 'Lantern House',
  location: 'Portland, OR',
  ratio: '4 / 3',
  type: 'Interiors'
}, {
  name: 'Foundry Lofts',
  location: 'Chicago, IL',
  ratio: '4 / 3',
  type: 'Commercial'
}];
const COZ_SERVICES = [['compass', 'Architecture', 'Concept-driven designs that blend creativity and functionality.'], ['home', 'Residential Construction', 'Bespoke homes built with precision and care.'], ['building-2', 'Commercial Builds', 'High-performance spaces for modern businesses.'], ['armchair', 'Interiors', 'Beautiful, functional interiors tailored to your lifestyle.'], ['clipboard-list', 'Project Management', 'Seamless execution from concept to completion.']];
const COZ_PROCESS = [['01', 'Discover', 'Understanding your vision, goals, and requirements.'], ['02', 'Design', 'Crafting intelligent designs that inspire and perform.'], ['03', 'Build', 'Expert construction with quality and precision.'], ['04', 'Deliver', 'On-time delivery with attention to every detail.'], ['05', 'Beyond', 'Ongoing support to ensure lasting satisfaction.']];
const COZ_INSIGHTS = [['May 12, 2024', 'The Future of Sustainable Architecture'], ['Apr 28, 2024', 'Designing Homes That Adapt to You'], ['Apr 10, 2024', 'Smart Materials for a Better Tomorrow']];
Object.assign(window, {
  COZ_PROJECTS,
  COZ_SERVICES,
  COZ_PROCESS,
  COZ_INSIGHTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatItem = __ds_scope.StatItem;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.HeadingAccent = __ds_scope.HeadingAccent;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.ContactRow = __ds_scope.ContactRow;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SectionIntro = __ds_scope.SectionIntro;

__ds_ns.SocialRow = __ds_scope.SocialRow;

__ds_ns.StatBar = __ds_scope.StatBar;

__ds_ns.Wordmark = __ds_scope.Wordmark;

})();
