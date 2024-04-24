import { CurrentSetNavDrawerStateContext } from '@/contexts/NavDrawerStateProvider';
import Close from '@/visual/icons/Close';
import React from 'react';
import IconButton from '../../hid/buttons/icon_button/IconButton';

interface CloseNavDrawerButtonProps {}

/**
 * CloseNavDrawerButton is a button that will Set the Nav Drawer state to
 * closed.
 */
const CloseNavDrawerButton: React.FC<CloseNavDrawerButtonProps> = (props) => {
  const setNavDrawerOpen = React.useContext(CurrentSetNavDrawerStateContext);

  return (
    <IconButton {...props} onClick={() => setNavDrawerOpen(false)}>
      <Close />
    </IconButton>
  );
};

export default CloseNavDrawerButton;
