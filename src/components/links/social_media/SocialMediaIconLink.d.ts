import React from 'react';
export interface SocialMediaIconLinkProps {
    href: string;
    title: string;
    children: React.ReactNode | React.ReactNode[];
}
declare const SocialMediaIconLink: React.FC<SocialMediaIconLinkProps>;
export default SocialMediaIconLink;
