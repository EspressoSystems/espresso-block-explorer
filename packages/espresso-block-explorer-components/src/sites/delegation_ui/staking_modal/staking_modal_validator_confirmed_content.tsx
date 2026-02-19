import { assert } from '@/assert/assert';
import React from 'react';
import {
  ValidatorConfirmed,
  ValidatorConfirmedExitWithdraw,
  ValidatorConfirmedStake,
  ValidatorConfirmedUndelegate,
  ValidatorConfirmedUndelegateConfirm,
  ValidatorConfirmedUndelegateWithdraw,
  ValidatorSelectionContext,
} from '../contexts/validator_selection_context';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import { ProvideStakingAmountContexts } from './contexts/staking_amount_context';
import { StakingModalHistoryControlsContext } from './contexts/staking_modal_history_context';
import { ManageStakeContent } from './manage_stake_content';
import { NewDelegationContent } from './new_delegation_content';
import { ProvideCurrentStakingInformation } from './provide_staking_information';
import { UndelegationConfirmContent } from './undelegation_confirm_content';
import { UndelegationContent } from './undelegation_content';
import { WithdrawClaimContent } from './withdraw_claim_content';
import { WithdrawExitContent } from './withdraw_exit_content';

/**
 * ValidatorConfirmedContent is the content to render when we have a confirmed
 * validator.
 */
export const ValidatorConfirmedContent: React.FC = () => {
  return (
    <ProvideStakingAmountContexts>
      <ProvideCurrentStakingInformation>
        <ValidatorConfirmedModalContent />
      </ProvideCurrentStakingInformation>
    </ProvideStakingAmountContexts>
  );
};

export const ValidatorConfirmedModalContent: React.FC = () => {
  return <ValidatorConfirmedSpecificContent />;
};

/**
 * ValidatorConfirmedSpecificContent renders the specific content for a
 * confirmed validator based on the specific confirmation value of the
 * enum.
 *
 * This is a routing component to deliver the user to the right content
 * type.
 *
 * NOTE: This is also a decision resolver.  If no more specific state beyond
 * the validator has been confirmed can be determined, then it will attempt
 * to resolve the expected state of the user based on other information, some
 * of which may not be immediately available.  This means that this will
 * actively try to resolve the confirmed state into a more speicfic confirmed
 * state for the user.
 */
const ValidatorConfirmedSpecificContent: React.FC = () => {
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
    return <WithdrawClaimContent />;
  }

  if (selectedValidator instanceof ValidatorConfirmedStake) {
    return <NewDelegationContent />;
  }

  if (selectedValidator instanceof ValidatorConfirmedUndelegate) {
    return <UndelegationContent />;
  }

  if (selectedValidator instanceof ValidatorConfirmedUndelegateConfirm) {
    return <UndelegationConfirmContent />;
  }

  assert(selectedValidator instanceof ValidatorConfirmed);

  // We have a confirmed Validator.
  // We need to know the context in which we are evaluating this
  // validator.
  // Do we have an existing delegation?  If so, we are in manage mode.
  // If not, we are in new delegation mode.

  // We have a current Stake, so we must ask the user how he/she would like
  // to continue.
  return <ManageStakeContent />;
};
