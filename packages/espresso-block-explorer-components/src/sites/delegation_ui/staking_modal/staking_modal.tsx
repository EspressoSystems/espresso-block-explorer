import { assert } from '@/assert/assert';
import { compareArrayBuffer } from '@/functional/functional';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import { Ratio } from '@/service/espresso_l1_validator_service/common/ratio';
import React from 'react';
import { AllValidatorsContext } from '../contexts/all_validators_context';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { DialogModal } from '../contexts/modal_context';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import {
  ClaimRewards,
  ValidatorConfirmed,
  ValidatorConfirmedExitWithdraw,
  ValidatorConfirmedStake,
  ValidatorConfirmedUndelegate,
  ValidatorConfirmedUndelegateWithdraw,
  ValidatorSelectionContext,
} from '../contexts/validator_selection_context';
import { ClaimRewardsContent } from './claim_rewards_content';
import { ProvideCurrentAllowanceToStakeTable } from './contexts/current_allowance_context';
import { ProvideCurrentPendingUndelegationToValidator } from './contexts/current_pending_undelegation_from_validator_context';
import {
  CurrentStakeToValidatorContext,
  ProvideCurrentStakeToValidator,
} from './contexts/current_stake_to_validator_context';
import { ProvideClaimValidatorExitPromiseContext } from './contexts/perfom_claim_validator_exit_context';
import { ProvideApproveAsyncIterableContext } from './contexts/perform_approve_delegation_context';
import { ProvideClaimRewardsPromiseContext } from './contexts/perform_claim_rewards_context';
import { ProvideClaimWithdrawalPromiseContext } from './contexts/perform_claim_withdrawal_context';
import { ProvideDelegateAsyncIterableContext } from './contexts/perform_delegation_context';
import { ProvideUndelegateAsyncIterableContext } from './contexts/perform_undelgation_context';
import { ProvideStakingAmountContexts } from './contexts/staking_amount_context';
import { ProvideStakingModalClose } from './contexts/staking_modal_close_context';
import {
  ProvideStakingHistory,
  StakingModalHistoryControlsContext,
} from './contexts/staking_modal_history_context';
import { ManageStakeContent } from './manage_stake_content';
import { NewDelegationContent } from './new_delegation_content';
import './staking_modal.css';
import { UndelegationContent } from './undelegation_content';
import { ValidatorSelectionNeededContent } from './validator_selection_needed_content';
import { WithdrawClaimContent } from './withdraw_claim_content';
import { WithdrawExitContent } from './withdraw_exit_content';

export const StakingModal: React.FC = () => {
  return (
    <DialogModal className="staking-modal" closedby="none">
      <ProvideStakingHistory>
        <ProvideStakingModalClose>
          <StakingModalContent />
        </ProvideStakingModalClose>
      </ProvideStakingHistory>
    </DialogModal>
  );
};

const StakingModalContent: React.FC = () => {
  const allValidators = React.useContext(AllValidatorsContext);
  const selectedValidator = React.useContext(ValidatorSelectionContext);

  if (selectedValidator instanceof ClaimRewards) {
    return (
      <ProvideClaimRewardsPromiseContext>
        <ClaimRewardsContent />
      </ProvideClaimRewardsPromiseContext>
    );
  }

  if (
    selectedValidator instanceof ValidatorConfirmed ||
    selectedValidator instanceof ValidatorConfirmedStake ||
    selectedValidator instanceof ValidatorConfirmedUndelegate ||
    selectedValidator instanceof ValidatorConfirmedExitWithdraw ||
    selectedValidator instanceof ValidatorConfirmedUndelegateWithdraw
  ) {
    const foundValidator =
      allValidators?.nodes.find(
        (validator) =>
          compareArrayBuffer(
            validator.address,
            selectedValidator.validatorAddress,
          ) === 0,
      ) ??
      new NodeSetEntry(
        selectedValidator.validatorAddress,
        new TaggedBase64('', new ArrayBuffer(0)),
        0n,
        new Ratio(0),
      );

    return (
      <ValidatorNodeContext.Provider value={foundValidator}>
        <ConfirmedValidatorContext.Provider
          value={selectedValidator.validatorAddress}
        >
          <ProvideStakingAmountContexts>
            <ProvideCurrentStakingInformation>
              <ValidatorConfirmedContent />
            </ProvideCurrentStakingInformation>
          </ProvideStakingAmountContexts>
        </ConfirmedValidatorContext.Provider>
      </ValidatorNodeContext.Provider>
    );
  }

  return <ValidatorSelectionNeededContent />;
};

const ProvideCurrentStakingInformation: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProvideCurrentStakeToValidator>
      <ProvideCurrentAllowanceToStakeTable>
        <ProvideApproveAsyncIterableContext>
          <ProvideDelegateAsyncIterableContext>
            <ProvideUndelegateAsyncIterableContext>
              <ProvideClaimWithdrawalPromiseContext>
                <ProvideClaimValidatorExitPromiseContext>
                  <ProvideClaimRewardsPromiseContext>
                    {children}
                  </ProvideClaimRewardsPromiseContext>
                </ProvideClaimValidatorExitPromiseContext>
              </ProvideClaimWithdrawalPromiseContext>
            </ProvideUndelegateAsyncIterableContext>
          </ProvideDelegateAsyncIterableContext>
        </ProvideApproveAsyncIterableContext>
      </ProvideCurrentAllowanceToStakeTable>
    </ProvideCurrentStakeToValidator>
  );
};

const ValidatorConfirmedContent: React.FC = () => {
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
