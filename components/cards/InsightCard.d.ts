/** Insights/journal teaser card with overlaid date, serif title and READ MORE affordance. */
export interface InsightCardProps {
  /** Uppercase short date, e.g. "MAY 12, 2024". */
  date: string;
  title: string;
  src?: string;
  onClick?: () => void;
}
export declare function InsightCard(props: InsightCardProps): JSX.Element;
