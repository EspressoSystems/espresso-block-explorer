import { default as React } from 'react';
import { PageType } from '../../../../../../../../../../../src/components/contexts/PagePathProvider';

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
declare const NavLink: React.FC<NavLinkProps>;
export default NavLink;
