import {
  CurrentPagePathContext,
  PageType,
} from '@/contexts/page_path_provider';
import React from 'react';
import { InternalLink } from '../link/link';
import './nav_link.css';

export interface NavLinkProps {
  href: string;
  pageType: PageType;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * NavLink represents a top-level Navigation for the Block Explorer Page.  These
 * are relative links instead of fully qualified links to help assist with
 * navigation.
 */
const NavLink: React.FC<NavLinkProps> = (props) => {
  const pagePath = React.useContext(CurrentPagePathContext);

  const linkClasses = [
    'nav-link',
    props.pageType === pagePath ? 'active' : null,
  ];

  const className = linkClasses.filter(Boolean).join(' ');

  return (
    <InternalLink href={props.href} className={className}>
      {props.children}
    </InternalLink>
  );
};

export default NavLink;
