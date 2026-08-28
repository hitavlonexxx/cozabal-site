/** Footer contact line: brass hairline glyph plus detail text. */
export interface ContactRowProps {
  /** Lucide name: "mail", "phone", "map-pin". */
  icon: string;
  children?: React.ReactNode;
  href?: string;
}
export declare function ContactRow(props: ContactRowProps): JSX.Element;
