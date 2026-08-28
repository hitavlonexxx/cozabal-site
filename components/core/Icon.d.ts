/** Thin-stroke Lucide line icon. Requires the Lucide UMD script on the page. */
export interface IconProps {
  /** Lucide icon name, e.g. "arrow-right", "mail", "instagram". */
  name: string;
  /** Pixel box. Default 20. */
  size?: number;
  /** Default 1.25 — COZABAL uses hairline strokes. */
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
