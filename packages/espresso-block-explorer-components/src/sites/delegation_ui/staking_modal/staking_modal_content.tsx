import { compareArrayBuffer } from '@/functional/functional';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import { Ratio } from '@/service/espresso_l1_validator_service/common/ratio';
import React from 'react';
import { AllValidatorsContext } from '../contexts/all_validators_context';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
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
import { ProvideEstimatedFeesPerGas } from './contexts/estimated_fees_per_gas_context';
import { ProvideClaimRewardsPromiseContext } from './contexts/perform_claim_rewards_context';
import { ProvideStakingAmountContexts } from './contexts/staking_amount_context';
import { ProvideCurrentStakingInformation } from './provide_staking_information';
import { ValidatorConfirmedContent } from './staking_modal_validator_confirmed_content';
import { ValidatorSelectionNeededContent } from './validator_selection_needed_content';

export const StakingModalContent: React.FC = () => {
  const allValidators = React.useContext(AllValidatorsContext);
  const selectedValidator = React.useContext(ValidatorSelectionContext);

  if (selectedValidator instanceof ClaimRewards) {
    return (
      <ProvideEstimatedFeesPerGas>
        <ProvideClaimRewardsPromiseContext>
          <ClaimRewardsContent />
        </ProvideClaimRewardsPromiseContext>
      </ProvideEstimatedFeesPerGas>
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
