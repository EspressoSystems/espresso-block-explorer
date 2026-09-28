import { default as React } from 'react';
export interface AnchorButtonProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    disabled?: boolean;
}
/**
 * AnchorButton is a link styled as a button. It navigates like InternalLink
 * (without a page reload in the app); disabled, it is a plain anchor.
 */
declare const AnchorButton: React.FC<AnchorButtonProps>;
export default AnchorButton;
