import React from 'react';
import {
  CurrentPagePathContext,
  PageType,
} from '../../contexts/PagePathProvider';
import Link from '../link/Link';
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
    <Link href={props.href} className={className}>
      {props.children}
    </Link>
  );
};

export default NavLink;
