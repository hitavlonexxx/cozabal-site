/** Photo container with optional bottom protection gradient; falls back to a brand placeholder plate. */
export interface ImageFrameProps {
  src?: string;
  alt?: string;
  /** CSS aspect-ratio, e.g. "4 / 3", "3 / 4", "16 / 9". */
  ratio?: string;
  radius?: string;
  /** Add the dark bottom-up gradient for overlaid captions. */
  overlay?: boolean;
  /** Placeholder caption when no src is supplied. */
  label?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ImageFrame(props: ImageFrameProps): JSX.Element;
