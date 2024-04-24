import { CurrentNavDrawerStateContext } from '@/contexts/NavDrawerStateProvider';
import { WithUiText100 } from '@/typography/typography';
import React from 'react';
import CloseNavDrawerButton from '../close_nav_drawer_button/CloseNavDrawerButton';
import MainNavLinks from '../main_nav_links/MainNavLinks';
import './nav_drawer.css';

const UIText100Nav = WithUiText100('nav');

const NavDrawer: React.FC = () => {
  const isOpen = React.useContext(CurrentNavDrawerStateContext);

  const className = ['nav--main-drawer', isOpen ? 'active' : null]
    .filter(Boolean)
    .join(' ');

  return (
    <UIText100Nav className={className}>
      <CloseNavDrawerButton />
      <MainNavLinks />
    </UIText100Nav>
  );
};

export default NavDrawer;
