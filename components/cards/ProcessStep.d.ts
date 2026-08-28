/** One step in the process timeline: brass numbered disc, sans title, short copy. */
export interface ProcessStepProps {
  /** Zero-padded string: "01", "02", … */
  number: string;
  title: string;
  children?: React.ReactNode;
  ground?: 'light' | 'ink';
}
export declare function ProcessStep(props: ProcessStepProps): JSX.Element;
