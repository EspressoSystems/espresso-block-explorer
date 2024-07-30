import { default as React } from '../../../../../../../node_modules/react';

export interface AnchorButtonProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    disabled?: boolean;
}
/**
 * AnchorButton is a simple wrapper around an Anchor tag with the purpose of
 * making the anchor visually look like a button.
 */
declare const AnchorButton: React.FC<AnchorButtonProps>;
export default AnchorButton;
