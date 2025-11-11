import Close from '@/components/visual/icons/Close';
import React from 'react';
import { ModalContext } from '../contexts/modal_context';
import {
  NoValidatorSelected,
  SetValidatorSelectionContext,
} from '../contexts/validator_selection_context';
import ButtonFlat from '../elements/buttons/button_flat';
import './close_staking_modal.css';

export const CloseStakingModalButton: React.FC = () => {
  const setSelection = React.useContext(SetValidatorSelectionContext);
  const modalControls = React.useContext(ModalContext);

  return (
    <ButtonFlat
      className="close-modal-button"
      onClick={() => {
        setSelection(new NoValidatorSelected());
        modalControls.close();
      }}
    >
      <Close />
    </ButtonFlat>
  );
};
