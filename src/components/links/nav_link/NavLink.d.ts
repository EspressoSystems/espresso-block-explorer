import React from 'react';
export interface NavLinkProps {
    href: string;
    activeOverride?: boolean;
    exactOverride?: boolean;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * NavLink represents a top-level Navigation for the Block Explorer Page.  These
 * are relative links instead of fully qualified links to help assist with
 * navigation.
 */
declare const NavLink: React.FC<NavLinkProps>;
export default NavLink;
