import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { NodeAddressContext } from '../contexts/node_address_context';
import { ProvideValidatorNodeContext } from '../contexts/validator_node_context';
import {
  ClaimRewards,
  ValidatorSelectionContext,
  ValidatorSelectionEnum,
  ValidatorSelectionWithConfirmation,
} from '../contexts/validator_selection_context';
import { ClaimRewardsContent } from './claim_rewards_content';
import { ValidatorConfirmedContent } from './staking_modal_validator_confirmed_content';
import { ValidatorSelectionNeededContent } from './validator_selection_needed_content';

/**
 * ProvideConfirmationContexts creates some local contexts containing address
 * information about the user's current validator selections and
 * confirmations, if they exist.
 */
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

/**
 * isValidatorConfirmed is a type checking fucntion that indicates whether
 * the passed ValidatorSelectionEnum has a selected address specified or
 * not.
 */
function isValidatorConfirmed(
  selectedValidator: ValidatorSelectionEnum,
): selectedValidator is ValidatorSelectionWithConfirmation {
  return selectedValidator instanceof ValidatorSelectionWithConfirmation;
}

/**
 * determineConfirmedValidator returns the confirmed validator address
 * for a given validator.
 *
 * NOTE: This function always returns an address string.  However, if the
 * user does not actually have a confirmed address, it will return an
 * empty address, "0x" to indicate that it doesn't match any specified
 * validator.
 */
function determineConfirmedValidator(
  selectedValidator: ValidatorSelectionEnum,
): `0x${string}` {
  if (isValidatorConfirmed(selectedValidator)) {
    return selectedValidator.validatorAddress;
  }

  return `0x`;
}

/**
 * StakingModalContentRouter is a content router that changes which specific
 * modal content is being displayed to the user based on the state of the
 * ValidatorSelectionEnum.
 */
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

/**
 * StakingModalContent is the content element of the Staking Modal.  All
 * modal content is provided from this component, and the specific contents
 * of this modal depend on the StakingModalContentRouter.
 */
export const StakingModalContent: React.FC = () => {
  return (
    <ProvideConfirmationContexts>
      <StakingModalContentRouter />
    </ProvideConfirmationContexts>
  );
};
