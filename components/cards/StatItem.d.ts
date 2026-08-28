/** Single statistic: hairline brass glyph, display-serif numeral, sans label. */
export interface StatItemProps {
  icon?: string;
  /** e.g. "15+", "320+", "98%". */
  value: string;
  label: string;
}
export declare function StatItem(props: StatItemProps): JSX.Element;
