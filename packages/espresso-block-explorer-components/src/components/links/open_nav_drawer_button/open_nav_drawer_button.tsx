import { CurrentSetNavDrawerStateContext } from '@/contexts/nav_drawer_state_provider';
import Menu from '@/visual/icons/menu';
import React from 'react';
import IconButton from '../../hid/buttons/icon_button/icon_button';

interface OpenNavDrawerButtonProps {}

/**
 * OpenNavDrawerButton is a button that will trigger the open state of the Nav
 * Drawer to on when clicked.
 */
const OpenNavDrawerButton: React.FC<OpenNavDrawerButtonProps> = (props) => {
  const setNavDrawerOpen = React.useContext(CurrentSetNavDrawerStateContext);

  return (
    <IconButton
      {...props}
      onClick={() => setNavDrawerOpen(true)}
      title="Open Navigation Drawer"
    >
      <Menu />
    </IconButton>
  );
};

export default OpenNavDrawerButton;
