/** Standard band opener: eyebrow + display heading + optional copy + one button. */
export interface SectionIntroProps {
  eyebrow?: string;
  title: React.ReactNode;
  copy?: string;
  cta?: string;
  ctaVariant?: 'primary' | 'outline' | 'brass' | 'ghost';
  ground?: 'light' | 'ink';
  onCta?: () => void;
  style?: React.CSSProperties;
}
export declare function SectionIntro(props: SectionIntroProps): JSX.Element;
