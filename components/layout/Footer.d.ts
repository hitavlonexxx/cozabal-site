/**
 * Site footer: three columns on deep ink, hairline rule, legal row.
 * @startingPoint section="Layout" subtitle="Closing invitation footer" viewport="1280x420"
 */
export interface FooterProps {
  headline?: React.ReactNode;
  cta?: string;
  email?: string;
  phone?: string;
  address?: React.ReactNode;
  blurb?: string;
  legal?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
