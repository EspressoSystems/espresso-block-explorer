import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import Text from '@/components/text/Text';
import React from 'react';
import { ModalContext } from 'sites/delegation_ui/contexts/modal_context';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmed,
} from 'sites/delegation_ui/contexts/validator_selection_context';
import ButtonLarge from 'sites/delegation_ui/elements/buttons/button_large';

export const ActionsCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const address = React.useContext(RainbowKitAccountAddressContext);
  const rainbowModalControls = React.useContext(RainbowKitModalContext);
  const modalControls = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);

  if (!address || rainbowModalControls.connectModalOpen) {
    return (
      <>
        <ButtonLarge
          className="action"
          onClick={rainbowModalControls.openConnectModal}
        >
          <Text text="Delegate" />
        </ButtonLarge>
      </>
    );
  }

  return (
    <>
      <ButtonLarge
        className="action"
        onClick={() => {
          setSelection(new ValidatorConfirmed(validator.address));
          modalControls.open();
        }}
      >
        <Text text="Delegate" />
      </ButtonLarge>
    </>
  );
};
