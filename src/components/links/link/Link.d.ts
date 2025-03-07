import { default as React } from '../../../../../../node_modules/react';

/**
 * InternalLinkAnchorComponentContext is a context that is used to determine the
 * underlying component to use for the internal link. This allows the component
 * to be easily swapped out for a different component if needed.
 *
 * The primary use case for this feature is to facilitate the special Link
 * components provided by NextJS, or other libraries as an enhancement to the
 * standard anchor tag.
 */
export declare const InternalLinkAnchorComponentContext: React.Context<string | React.FunctionComponent<{}> | React.ComponentClass<{}, any>>;
export interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
}
/**
 * InternalLink component represents a simple Anchor tag link. This link is
 * expected to navigate to a different page on the same webpage. This component
 * may be expanded and have many different variations.
 *
 * This component utilizes the AnchorComponentContext to determine the
 * underlying component to use for the link. This allows the component to be
 * easily swapped out for a different component if needed.  The default
 * component specified by AnchorComponentContext is an anchor tag.
 */
export declare const InternalLink: React.FC<LinkProps>;
/**
 * EgressLink is a component that represents a simple Anchor tag link. This
 * is provided separately from InternalLink as a means of adding context as to
 * the intent of the underlying link to navigate away from the current domain.
 */
export declare const EgressLink: React.FC<LinkProps>;
