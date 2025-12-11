import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { NodeAddressContext } from '../contexts/node_address_context';
import { ProvideValidatorNodeContext } from '../contexts/validator_node_context';
import {
  ClaimRewards,
  ValidatorConfirmed,
  ValidatorConfirmedExitWithdraw,
  ValidatorConfirmedStake,
  ValidatorConfirmedUndelegate,
  ValidatorConfirmedUndelegateWithdraw,
  ValidatorSelectionContext,
  ValidatorSelectionEnum,
} from '../contexts/validator_selection_context';
import { ClaimRewardsContent } from './claim_rewards_content';
import { ValidatorConfirmedContent } from './staking_modal_validator_confirmed_content';
import { ValidatorSelectionNeededContent } from './validator_selection_needed_content';

const ProvideConfirmationContexts: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const selectedValidator = React.useContext(ValidatorSelectionContext);
  const confirmedValidator = determineConfirmedValidator(selectedValidator);

  return (
    <NodeAddressContext.Provider value={confirmedValidator}>
      <ConfirmedValidatorContext.Provider value={confirmedValidator}>
        <ProvideValidatorNodeContext>{children}</ProvideValidatorNodeContext>
      </ConfirmedValidatorContext.Provider>
    </NodeAddressContext.Provider>
  );
};

function isValidatorConfirmed(
  selectedValidator: ValidatorSelectionEnum,
): selectedValidator is ValidatorSelectionEnum & {
  validatorAddress: `0x${string}`;
} {
  return (
    selectedValidator instanceof ValidatorConfirmed ||
    selectedValidator instanceof ValidatorConfirmedStake ||
    selectedValidator instanceof ValidatorConfirmedUndelegate ||
    selectedValidator instanceof ValidatorConfirmedExitWithdraw ||
    selectedValidator instanceof ValidatorConfirmedUndelegateWithdraw
  );
}

function determineConfirmedValidator(
  selectedValidator: ValidatorSelectionEnum,
): `0x${string}` {
  if (isValidatorConfirmed(selectedValidator)) {
    return selectedValidator.validatorAddress;
  }

  return `0x`;
}

const StakingModalContentRouter: React.FC = () => {
  const selectedValidator = React.useContext(ValidatorSelectionContext);

  if (selectedValidator instanceof ClaimRewards) {
    return <ClaimRewardsContent />;
  }

  if (isValidatorConfirmed(selectedValidator)) {
    return <ValidatorConfirmedContent />;
  }

  return <ValidatorSelectionNeededContent />;
};

export const StakingModalContent: React.FC = () => {
  return (
    <ProvideConfirmationContexts>
      <StakingModalContentRouter />
    </ProvideConfirmationContexts>
  );
};
