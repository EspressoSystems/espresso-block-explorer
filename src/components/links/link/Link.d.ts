import { default as React } from '../../../../../../node_modules/react';

export interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
}
/**
 * Link component represents a simple Anchor tag link.  This component
 * may be expanded and have many different variations.
 */
declare const Link: React.FC<LinkProps>;
export default Link;
