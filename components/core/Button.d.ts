/**
 * Uppercase letterspaced action. Primary is solid brass on ink text; outline is a
 * hairline box; brass is an outlined brass-text variant; ghost is a bare arrow link.
 * @startingPoint section="Core" subtitle="Brass, outline and ghost buttons" viewport="700x150"
 */
export interface ButtonProps {
  variant?: 'primary' | 'outline' | 'brass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Which ground the button sits on — flips outline/ghost colours. Default "light". */
  ground?: 'light' | 'ink';
  /** Lucide icon name for the trailing glyph. Default "arrow-right". */
  icon?: string;
  showIcon?: boolean;
  disabled?: boolean;
  as?: 'button' | 'a';
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
