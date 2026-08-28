/** Hairline 1px rule. */
export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  ground?: 'light' | 'ink';
  length?: string | number;
  style?: React.CSSProperties;
}
export declare function Divider(props: DividerProps): JSX.Element;
