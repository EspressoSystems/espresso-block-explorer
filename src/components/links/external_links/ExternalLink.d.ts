import React from 'react';
export interface ExternalLinkProps {
    href: string;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ExternalLink represents a general link leading away from the Block Explorer.
 * In this case they will be used exclusively within the Footer of a page and
 * will link to many resources.
 */
declare const ExternalLink: React.FC<ExternalLinkProps>;
export default ExternalLink;
