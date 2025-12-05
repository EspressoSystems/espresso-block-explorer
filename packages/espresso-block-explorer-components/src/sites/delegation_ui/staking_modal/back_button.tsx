import Text from '@/components/text/text';
import React from 'react';
import ButtonFlat from '../elements/buttons/button_flat';
import './back_button.css';
import { StakingModalHistoryControlsContext } from './contexts/staking_modal_history_context';

/**
 * BackButton component renders a button that allows users to navigate back in
 * the staking modal history.
 *
 * It will display nothing if there is no history to go back to.
 */
export const BackButton: React.FC = () => {
  const historyControls = React.useContext(StakingModalHistoryControlsContext);

  if (!historyControls.canGoBack) {
    return null;
  }

  return (
    <ButtonFlat className="back-modal-button" onClick={historyControls.back}>
      <Text text="Back" />
    </ButtonFlat>
  );
};
