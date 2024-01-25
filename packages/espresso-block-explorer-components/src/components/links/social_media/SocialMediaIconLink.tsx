import React from 'react';
import Link from '../link/Link';
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
  <Link
    className="link--social"
    href={props.href}
    title={props.title}
    target="_blank"
  >
    {props.children}
  </Link>
);

export default SocialMediaIconLink;
