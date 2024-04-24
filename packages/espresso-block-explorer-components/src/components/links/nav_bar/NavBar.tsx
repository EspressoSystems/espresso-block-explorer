import { ProvideCurrentNavDrawerState } from '@/contexts/NavDrawerStateProvider';
import { addClassToClassName } from '@/higher_order';
import React from 'react';
import MainNavLinks from '../main_nav_links/MainNavLinks';
import NavDrawer from '../nav_drawer/NavDrawer';
import OpenNavDrawerButton from '../open_nav_drawer_button/OpenNavDrawerButton';
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
    >
      <MainNavLinks />
      <OpenNavDrawerButton />
      <NavDrawer />
    </nav>
  </ProvideCurrentNavDrawerState>
);

export default NavBar;
