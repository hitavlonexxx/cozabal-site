/**
 * Project mosaic tile — image with an overlaid serif name, location and arrow badge.
 * @startingPoint section="Cards" subtitle="Project mosaic tile" viewport="700x300"
 */
export interface ProjectCardProps {
  name: string;
  location?: string;
  src?: string;
  /** CSS aspect-ratio. Tall tiles use "3 / 4", wide tiles "4 / 3", "auto" fills its grid cell. */
  ratio?: string;
  /** Caption at the image bottom (default) or top, as in the Aurora tile. */
  captionPosition?: 'bottom' | 'top';
  onClick?: () => void;
}
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
