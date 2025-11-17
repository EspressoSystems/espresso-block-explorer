import { assert } from '@/assert/assert';
import React from 'react';
import {
  ValidatorConfirmed,
  ValidatorConfirmedExitWithdraw,
  ValidatorConfirmedStake,
  ValidatorConfirmedUndelegate,
  ValidatorConfirmedUndelegateWithdraw,
  ValidatorSelectionContext,
} from '../contexts/validator_selection_context';
import { ProvideCurrentPendingUndelegationToValidator } from './contexts/current_pending_undelegation_from_validator_context';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import { StakingModalHistoryControlsContext } from './contexts/staking_modal_history_context';
import { ManageStakeContent } from './manage_stake_content';
import { NewDelegationContent } from './new_delegation_content';
import { UndelegationContent } from './undelegation_content';
import { WithdrawClaimContent } from './withdraw_claim_content';
import { WithdrawExitContent } from './withdraw_exit_content';

export const ValidatorConfirmedContent: React.FC = () => {
  const selectedValidator = React.useContext(ValidatorSelectionContext);
  const historyControls = React.useContext(StakingModalHistoryControlsContext);
  const currentStakeToValidator = React.useContext(
    CurrentStakeToValidatorContext,
  );
  React.useEffect(() => {
    if (!(selectedValidator instanceof ValidatorConfirmed)) {
      return;
    }

    if (
      currentStakeToValidator === null ||
      currentStakeToValidator === undefined ||
      currentStakeToValidator > 0n
    ) {
      return;
    }

    historyControls.replace(
      new ValidatorConfirmedStake(selectedValidator.validatorAddress),
    );
    return () => {};
  }, [selectedValidator, historyControls, currentStakeToValidator]);

  if (selectedValidator instanceof ValidatorConfirmedExitWithdraw) {
    return <WithdrawExitContent />;
  }

  if (selectedValidator instanceof ValidatorConfirmedUndelegateWithdraw) {
    return (
      <ProvideCurrentPendingUndelegationToValidator>
        <WithdrawClaimContent />
      </ProvideCurrentPendingUndelegationToValidator>
    );
  }

  if (selectedValidator instanceof ValidatorConfirmedStake) {
    return <NewDelegationContent />;
  }

  if (selectedValidator instanceof ValidatorConfirmedUndelegate) {
    return <UndelegationContent />;
  }

  if (!(selectedValidator instanceof ValidatorConfirmed)) {
    assert(false);
  }

  // We have a confirmed Validator.
  // We need to know the context in which we are evaluating this
  // validator.
  // Do we have an existing delegation?  If so, we are in manage mode.
  // If not, we are in new delegation mode.

  if (currentStakeToValidator === null) {
    // We haven't loaded our stake yet, we don't know which component to
    // render, so we wait.
    return <></>;
  }

  if (currentStakeToValidator <= 0n) {
    // We don't have any current stake, so we are considered to be a
    // brand new Delegation.

    return <></>;
  }

  // We have a current Stake, so we must ask the user how he/she would like
  // to continue.
  return <ManageStakeContent />;
};
