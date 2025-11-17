import Close from '@/components/visual/icons/Close';
import React from 'react';
import ButtonFlat from '../elements/buttons/button_flat';
import './close_staking_modal.css';
import { StakingModalCloseContext } from './contexts/staking_modal_close_context';

export const CloseStakingModalButton: React.FC = () => {
  const close = React.useContext(StakingModalCloseContext);

  return (
    <ButtonFlat className="close-modal-button" title="close" onClick={close}>
      <Close />
    </ButtonFlat>
  );
};
