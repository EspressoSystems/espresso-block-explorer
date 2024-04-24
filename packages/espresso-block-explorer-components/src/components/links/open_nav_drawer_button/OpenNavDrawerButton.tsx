import { CurrentSetNavDrawerStateContext } from '@/contexts/NavDrawerStateProvider';
import Menu from '@/visual/icons/Menu';
import React from 'react';
import IconButton from '../../hid/buttons/icon_button/IconButton';

interface OpenNavDrawerButtonProps {}

/**
 * OpenNavDrawerButton is a button that will trigger the open state of the Nav
 * Drawer to on when clicked.
 */
const OpenNavDrawerButton: React.FC<OpenNavDrawerButtonProps> = (props) => {
  const setNavDrawerOpen = React.useContext(CurrentSetNavDrawerStateContext);

  return (
    <IconButton {...props} onClick={() => setNavDrawerOpen(true)}>
      <Menu />
    </IconButton>
  );
};

export default OpenNavDrawerButton;
