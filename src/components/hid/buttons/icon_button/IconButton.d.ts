import { default as React } from '../../../../../../../node_modules/react';
import { ButtonProps } from '../button/Button';

/**
 * IconButton represents a Button with a simple icon within it.  It is styled
 * for a simple 24px x 24px icon to be contained within it, and as such it has
 * styles that account for this.
 */
declare const IconButton: React.FC<ButtonProps>;
export default IconButton;
export interface PresentationButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}
export declare const PresentationIconButton: React.FC<PresentationButtonProps>;
