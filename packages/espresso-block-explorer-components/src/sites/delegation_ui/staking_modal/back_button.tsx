import Text from '@/components/text/Text';
import React from 'react';
import {
  NoValidatorSelected,
  SetValidatorSelectionContext,
} from '../contexts/validator_selection_context';
import ButtonFlat from '../elements/buttons/button_flat';
import './back_button.css';

export const BackButton: React.FC = () => {
  const setSelection = React.useContext(SetValidatorSelectionContext);

  return (
    <ButtonFlat
      className="back-modal-button"
      onClick={() => setSelection(new NoValidatorSelected())}
    >
      <Text text="Back" />
    </ButtonFlat>
  );
};
