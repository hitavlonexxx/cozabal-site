/** Display-serif heading with a brass-accent span helper. */
export interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  ground?: 'light' | 'ink';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Heading(props: HeadingProps): JSX.Element;
export declare function HeadingAccent(props: { children?: React.ReactNode; style?: React.CSSProperties }): JSX.Element;
