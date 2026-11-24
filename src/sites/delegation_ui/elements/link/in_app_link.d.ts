import { default as React } from 'react';
export interface InAppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}
/**
 * InAppLink is a link to another Delegation UI view. Plain left clicks
 * navigate within the app when a NavigationContext is provided; modified
 * clicks (new tab, new window) and middle clicks keep normal link behavior.
 */
export declare const InAppLink: React.FC<InAppLinkProps>;
