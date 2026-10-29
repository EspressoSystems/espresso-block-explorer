import { Now } from '@/contexts/now_provider';
import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import { Text } from '@/components/text';
import { CurrentDelegationsContext } from '@/sites/delegation_ui/contexts/current_delegations_context';
import { ModalContext } from '@/sites/delegation_ui/contexts/modal_context';
import { PendingExitsContext } from '@/sites/delegation_ui/contexts/pending_exits_context';
import { PendingUndelegationsContext } from '@/sites/delegation_ui/contexts/pending_undelegations_context';
import { ValidatorDetailsModalContext } from '@/sites/delegation_ui/contexts/validator_details_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmed,
  ValidatorConfirmedExitWithdraw,
  ValidatorConfirmedStake,
  ValidatorConfirmedUndelegateWithdraw,
} from '@/sites/delegation_ui/contexts/validator_selection_context';
import { default as ButtonLarge } from '@/sites/delegation_ui/elements/buttons/button_large';
import { ExitingChip } from '@/sites/delegation_ui/elements/chips/exiting_chip';
import { UndelegatingChip } from '@/sites/delegation_ui/elements/chips/undelegating_chip';
import { default as React } from 'react';

/**
 * ActionsCell is a table cell that represents the actions that a user
 * can take to open a modal context for the user in question.
 */
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
  const validatorDetails = React.useContext(ValidatorDetailsModalContext);

  // When the validator details modal is available, Delegate and Manage open
  // it first so the user can review the validator before staking.
  const openValidatorDetails = validatorDetails
    ? () => validatorDetails.open(validator.addressText)
    : null;

  if (!address || rainbowModalControls.connectModalOpen) {
    return (
      <>
        <ButtonLarge
          className="action"
          onClick={
            openValidatorDetails ?? rainbowModalControls.openConnectModal
          }
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
      // Ready to claim: show the validator popup, which offers the claim.
      return (
        <ButtonLarge
          className="action claim"
          onClick={
            openValidatorDetails ??
            (() => {
              setSelection(
                new ValidatorConfirmedExitWithdraw(validator.addressText),
              );
              modalControls.open();
            })
          }
        >
          <Text text="Claim" />
        </ButtonLarge>
      );
    }

    return <ExitingChip />;
  }

  if (pendingUndelegation) {
    // We have a pending undelegation
    if (pendingUndelegation.availableTime.valueOf() < now.valueOf()) {
      // Ready to claim: show the validator popup, which offers the claim.
      return (
        <ButtonLarge
          className="action claim"
          onClick={
            openValidatorDetails ??
            (() => {
              setSelection(
                new ValidatorConfirmedUndelegateWithdraw(validator.addressText),
              );
              modalControls.open();
            })
          }
        >
          <Text text="Claim" />
        </ButtonLarge>
      );
    }

    return <UndelegatingChip />;
  }

  if (currentDelegations.has(validatorAddress)) {
    // We have an existing Delegation
    return (
      <ButtonLarge
        className="action manage"
        onClick={
          openValidatorDetails ??
          (() => {
            setSelection(new ValidatorConfirmed(validator.addressText));
            modalControls.open();
          })
        }
      >
        <Text text="Manage" />
      </ButtonLarge>
    );
  }

  return (
    <ButtonLarge
      className="action"
      onClick={
        openValidatorDetails ??
        (() => {
          setSelection(new ValidatorConfirmedStake(validator.addressText));
          modalControls.open();
        })
      }
    >
      <Text text="Delegate" />
    </ButtonLarge>
  );
};
