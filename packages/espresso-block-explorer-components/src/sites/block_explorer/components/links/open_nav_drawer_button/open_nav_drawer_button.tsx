import { CurrentSetNavDrawerStateContext } from '@/block_explorer/contexts/nav_drawer_state_provider';
import { default as Menu } from '@/visual/icons/menu';
import { default as React } from 'react';
import { default as IconButton } from '../../hid/buttons/icon_button/icon_button';

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
