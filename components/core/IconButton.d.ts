/** Circular hairline icon button: card arrow badges, social links, nav overflow. */
export interface IconButtonProps {
  name?: string;
  /** Diameter in px. 34 on cards, 30 for social, 40 in nav. */
  size?: number;
  ground?: 'light' | 'ink';
  /** Solid brass fill instead of hairline outline. */
  filled?: boolean;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
