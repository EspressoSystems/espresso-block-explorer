import React from 'react';
export interface SocialMediaIconLinkProps {
    href: string;
    title: string;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * SocialMediaIconLink represents a Social Media Link to be placed within
 * the footer element of a page.
 */
declare const SocialMediaIconLink: React.FC<SocialMediaIconLinkProps>;
export default SocialMediaIconLink;
