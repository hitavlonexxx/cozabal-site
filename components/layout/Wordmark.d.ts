/** Typographic brand lockup (no logo asset exists for this brand — type only). */
export interface WordmarkProps {
  name?: string;
  /** Small caps descriptor under the name; pass "" to hide. */
  descriptor?: string;
  ground?: 'light' | 'ink';
  /** Cap height of the name in px. 22 in nav, 26 in footer. */
  size?: number;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
