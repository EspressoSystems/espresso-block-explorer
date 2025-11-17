import { Now } from '@/components/contexts/NowProvider';
import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import Text from '@/components/text/Text';
import React from 'react';
import { CurrentDelegationsContext } from 'sites/delegation_ui/contexts/current_delegations_context';
import { ModalContext } from 'sites/delegation_ui/contexts/modal_context';
import { PendingExitsContext } from 'sites/delegation_ui/contexts/pending_exits_context';
import { PendingUndelegationsContext } from 'sites/delegation_ui/contexts/pending_undelegations_context';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmed,
} from 'sites/delegation_ui/contexts/validator_selection_context';
import ButtonLarge from 'sites/delegation_ui/elements/buttons/button_large';
import { ExitedChip } from 'sites/delegation_ui/elements/chips/exited_chip';
import { ExitingChip } from 'sites/delegation_ui/elements/chips/exiting_chip';
import { UndelegatedChip } from 'sites/delegation_ui/elements/chips/undelegated_chip';
import { UndelegatingChip } from 'sites/delegation_ui/elements/chips/undelegating_chip';

export const ActionsCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const address = React.useContext(RainbowKitAccountAddressContext);
  const rainbowModalControls = React.useContext(RainbowKitModalContext);
  const now = React.useContext(Now);
  const modalControls = React.useContext(ModalContext);
  const pendingExits = React.useContext(PendingExitsContext);
  const pendingUndelegations = React.useContext(PendingUndelegationsContext);
  const currentDelegations = React.useContext(CurrentDelegationsContext);
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

  const validatorAddress = validator.addressText;
  const pendingExit = pendingExits.get(validatorAddress) ?? null;
  const pendingUndelegation =
    pendingUndelegations.get(validatorAddress) ?? null;

  if (pendingExit) {
    // We have a pending exit
    if (pendingExit.availableTime.valueOf() < now.valueOf()) {
      return <ExitedChip />;
    }

    return <ExitingChip />;
  }

  if (pendingUndelegation) {
    // We have a pending undelegation
    if (pendingUndelegation.availableTime.valueOf() < now.valueOf()) {
      return <UndelegatedChip />;
    }

    return <UndelegatingChip />;
  }

  if (currentDelegations.has(validatorAddress)) {
    // We have an existing Delegation
    return (
      <ButtonLarge
        className="action"
        onClick={() => {
          setSelection(new ValidatorConfirmed(validator.address));
          modalControls.open();
        }}
      >
        <Text text="Manage" />
      </ButtonLarge>
    );
  }

  return (
    <ButtonLarge
      className="action"
      onClick={() => {
        setSelection(new ValidatorConfirmed(validator.address));
        modalControls.open();
      }}
    >
      <Text text="Delegate" />
    </ButtonLarge>
  );
};
