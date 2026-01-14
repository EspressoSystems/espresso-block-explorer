import { Now } from '@/contexts/now_provider';
import Text from '@/components/text/text';
import TimeLeftText from '@/components/text/time_left_text';
import { ModalContext } from '@/sites/delegation_ui/contexts/modal_context';
import { NodeAddressContext } from '@/sites/delegation_ui/contexts/node_address_context';
import { PendingExitsContext } from '@/sites/delegation_ui/contexts/pending_exits_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmedExitWithdraw,
} from '@/sites/delegation_ui/contexts/validator_selection_context';
import ButtonLarge from '@/sites/delegation_ui/elements/buttons/button_large';
import React from 'react';

/**
 * PendingExitActionsCell is a component that displays
 * the actions available for a validator node with pending exits.
 * If an exit is available for withdrawal, it shows a "Withdraw" button.
 * If the exit is not yet available, it shows the time left until it
 * becomes available.
 */
export const PendingExitActionsCell: React.FC = () => {
  const now = React.useContext(Now);
  const nodeAddress = React.useContext(NodeAddressContext);
  const pendingExits = React.useContext(PendingExitsContext);

  const pendingExit = pendingExits.get(nodeAddress) ?? null;

  if (!pendingExit) {
    return <></>;
  }

  const timeRemaining = pendingExit.availableTime.valueOf() - now.valueOf();
  if (timeRemaining > 0) {
    return <>
      <Text text="Claim in" />
      &nbsp;
      <TimeLeftText durationInMilliseconds={timeRemaining} />
    </>;
  }

  return <Action />;
};

/**
 * Action component represents the "Withdraw" button for pending exits.
 */
const Action: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const modalControls = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);

  return (
    <ButtonLarge
      className="action"
      onClick={() => {
        setSelection(new ValidatorConfirmedExitWithdraw(validator.addressText));
        modalControls.open();
      }}
    >
      <Text text="Withdraw" />
    </ButtonLarge>
  );
};
