import React from 'react';
import { EgressLink } from '../link/link';
import './social_media_icon_link.css';

export interface SocialMediaIconLinkProps {
  href: string;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * SocialMediaIconLink represents a Social Media Link to be placed within
 * the footer element of a page.
 */
const SocialMediaIconLink: React.FC<SocialMediaIconLinkProps> = (props) => (
  <EgressLink
    className="link--social"
    href={props.href}
    title={props.title}
    target="_blank"
  >
    {props.children}
  </EgressLink>
);

export default SocialMediaIconLink;
