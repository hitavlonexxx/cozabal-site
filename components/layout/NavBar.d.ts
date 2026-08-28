/**
 * Site header. Sits transparent on top of the hero image; no background, no shadow.
 * @startingPoint section="Layout" subtitle="Transparent site header over hero" viewport="1280x110"
 */
export interface NavBarProps {
  items?: string[];
  active?: string;
  onNavigate?: (item: string) => void;
  cta?: string;
  onCta?: () => void;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
