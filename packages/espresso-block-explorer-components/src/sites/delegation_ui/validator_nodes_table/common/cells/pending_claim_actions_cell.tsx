import Text from '@/components/text/Text';
import { ModalContext } from '@/sites/delegation_ui/contexts/modal_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmedUndelegateWithdraw,
} from '@/sites/delegation_ui/contexts/validator_selection_context';
import ButtonLarge from '@/sites/delegation_ui/elements/buttons/button_large';
import React from 'react';

export const PendingClaimActionsCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const modalControls = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);

  return (
    <ButtonLarge
      className="action"
      onClick={() => {
        setSelection(
          new ValidatorConfirmedUndelegateWithdraw(validator.address),
        );
        modalControls.open();
      }}
    >
      <Text text="Withdraw" />
    </ButtonLarge>
  );
};
