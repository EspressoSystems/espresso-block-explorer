import { CurrentSetNavDrawerStateContext } from '@/contexts/nav_drawer_state_provider';
import Close from '@/visual/icons/close';
import React from 'react';
import IconButton from '../../hid/buttons/icon_button/icon_button';

interface CloseNavDrawerButtonProps {}

/**
 * CloseNavDrawerButton is a button that will Set the Nav Drawer state to
 * closed.
 */
const CloseNavDrawerButton: React.FC<CloseNavDrawerButtonProps> = (props) => {
  const setNavDrawerOpen = React.useContext(CurrentSetNavDrawerStateContext);

  return (
    <IconButton
      {...props}
      onClick={() => setNavDrawerOpen(false)}
      title="Close Navigation Drawer"
    >
      <Close />
    </IconButton>
  );
};

export default CloseNavDrawerButton;
