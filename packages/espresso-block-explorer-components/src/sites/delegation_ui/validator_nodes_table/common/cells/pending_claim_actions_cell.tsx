import { Now } from '@/contexts/now_provider';
import Text from '@/components/text/text';
import TimeLeftText from '@/components/text/time_left_text';
import { ModalContext } from '@/sites/delegation_ui/contexts/modal_context';
import { NodeAddressContext } from '@/sites/delegation_ui/contexts/node_address_context';
import { PendingUndelegationsContext } from '@/sites/delegation_ui/contexts/pending_undelegations_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmedUndelegateWithdraw,
} from '@/sites/delegation_ui/contexts/validator_selection_context';
import ButtonLarge from '@/sites/delegation_ui/elements/buttons/button_large';
import React from 'react';

/**
 * PendingClaimActionsCell is a component that displays
 * the actions available for a validator node with pending claims.
 * If a claim is available for withdrawal, it shows a "Withdraw" button.
 * If the claim is not yet available, it shows the time left until it
 * becomes available.
 */
export const PendingClaimActionsCell: React.FC = () => {
  const now = React.useContext(Now);
  const nodeAddress = React.useContext(NodeAddressContext);
  const pendingClaims = React.useContext(PendingUndelegationsContext);

  const pendingClaim = pendingClaims.get(nodeAddress) ?? null;

  if (!pendingClaim) {
    return <></>;
  }

  const timeRemaining = pendingClaim.availableTime.valueOf() - now.valueOf();
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
 * Action component represents the "Withdraw" button for pending claims.
 */
const Action: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const modalControls = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);

  return (
    <ButtonLarge
      className="action"
      onClick={() => {
        setSelection(
          new ValidatorConfirmedUndelegateWithdraw(validator.addressText),
        );
        modalControls.open();
      }}
    >
      <Text text="Withdraw" />
    </ButtonLarge>
  );
};
