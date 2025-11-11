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
  ValidatorConfirmed,
  ValidatorSelectionContext,
} from '../contexts/validator_selection_context';
import { ProvideCurrentAllowanceToStakeTable } from './contexts/current_allowance_context';
import {
  CurrentStakeToValidatorContext,
  ProvideCurrentStakeToValidator,
} from './contexts/current_stake_to_validator_context';
import { ProvideApprovePromiseContext } from './contexts/perform_approve_delegation_context';
import { ProvideDelegatePromiseContext } from './contexts/perform_delegation_context';
import { ProvideStakingAmountContexts } from './contexts/staking_amount_context';
import { NewDelegationContent } from './new_delegation_content';
import './staking_modal.css';
import { ValidatorSelectionNeededContent } from './validator_selection_needed_content';

export const StakingModal: React.FC = () => {
  return (
    <DialogModal className="staking-modal" closedby="none">
      <StakingModalContent />
    </DialogModal>
  );
};

const StakingModalContent: React.FC = () => {
  const allValidators = React.useContext(AllValidatorsContext);
  const selectedValidator = React.useContext(ValidatorSelectionContext);

  if (selectedValidator instanceof ValidatorConfirmed) {
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
        <ProvideApprovePromiseContext>
          <ProvideDelegatePromiseContext>
            {children}
          </ProvideDelegatePromiseContext>
        </ProvideApprovePromiseContext>
      </ProvideCurrentAllowanceToStakeTable>
    </ProvideCurrentStakeToValidator>
  );
};

const ValidatorConfirmedContent: React.FC = () => {
  // We have a confirmed Validator.
  // We need to know the context in which we are evaluating this
  // validator.
  // Do we have an existing delegation?  If so, we are in manage mode.
  // If not, we are in new delegation mode.
  const currentStakeToValidator = React.useContext(
    CurrentStakeToValidatorContext,
  );

  if (currentStakeToValidator === null) {
    // We haven't loaded our stake yet, we don't know which component to
    // render, so we wait.
    return <></>;
  }

  if (currentStakeToValidator <= 0n) {
    // We don't have any current stake, so we are considered to be a
    // brand new Delegation.
    return <NewDelegationContent />;
  }

  // We have existing Stake to this Validator, so we must now ask questions
  // about what they wish to do.

  // Do don't have that context yet, so we'll just assume a new Delegation

  return <NewDelegationContent />;
};
