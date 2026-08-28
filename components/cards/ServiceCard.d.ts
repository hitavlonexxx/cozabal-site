/** Service tile on the ink band: hairline brass glyph, serif title, one sentence of copy. */
export interface ServiceCardProps {
  /** Lucide glyph name, e.g. "compass", "home", "building-2", "armchair", "clipboard-list". */
  icon?: string;
  title: string;
  children?: React.ReactNode;
  active?: boolean;
}
export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
