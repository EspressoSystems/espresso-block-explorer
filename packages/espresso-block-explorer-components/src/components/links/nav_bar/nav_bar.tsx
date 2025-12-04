import { ProvideCurrentNavDrawerState } from '@/contexts/nav_drawer_state_provider';
import { addClassToClassName } from '@/higher_order';
import React from 'react';
import MainNavLinks from '../main_nav_links/main_nav_links';
import NavDrawer from '../nav_drawer/nav_drawer';
import OpenNavDrawerButton from '../open_nav_drawer_button/open_nav_drawer_button';
import './nav_bar.css';

export interface NavBarProps {
  className?: string;
}

/**
 * NavBar represents the main navigation bar for the Block Explorer.
 */
const NavBar: React.FC<NavBarProps> = (props) => (
  <ProvideCurrentNavDrawerState>
    <nav
      {...props}
      className={addClassToClassName(props.className, 'nav--main')}
      aria-label="Main Navigation"
    >
      <MainNavLinks />
      <OpenNavDrawerButton />
      <NavDrawer />
    </nav>
  </ProvideCurrentNavDrawerState>
);

export default NavBar;
