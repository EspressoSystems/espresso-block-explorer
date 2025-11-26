import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
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
  ValidatorSelectionEnum,
} from '../contexts/validator_selection_context';
import { ClaimRewardsContent } from './claim_rewards_content';
import { ValidatorConfirmedContent } from './staking_modal_validator_confirmed_content';
import { ValidatorSelectionNeededContent } from './validator_selection_needed_content';

const ProvideConfirmationContexts: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const allValidators = React.useContext(AllValidatorsContext);
  const selectedValidator = React.useContext(ValidatorSelectionContext);

  const foundValidator = determineValidator(allValidators, selectedValidator);
  const confirmedValidator = determineConfirmedValidator(selectedValidator);

  return (
    <ValidatorNodeContext.Provider value={foundValidator}>
      <ConfirmedValidatorContext.Provider value={confirmedValidator}>
        {children}
      </ConfirmedValidatorContext.Provider>
    </ValidatorNodeContext.Provider>
  );
};

function isValidatorConfirmed(
  selectedValidator: ValidatorSelectionEnum,
): selectedValidator is ValidatorSelectionEnum & {
  validatorAddress: ArrayBuffer;
} {
  return (
    selectedValidator instanceof ValidatorConfirmed ||
    selectedValidator instanceof ValidatorConfirmedStake ||
    selectedValidator instanceof ValidatorConfirmedUndelegate ||
    selectedValidator instanceof ValidatorConfirmedExitWithdraw ||
    selectedValidator instanceof ValidatorConfirmedUndelegateWithdraw
  );
}

function determineValidator(
  allValidators: null | { nodes: NodeSetEntry[] },
  selectedValidator: ValidatorSelectionEnum,
): NodeSetEntry {
  if (isValidatorConfirmed(selectedValidator)) {
    return (
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
        Ratio.floatingPoint(0),
      )
    );
  }

  return new NodeSetEntry(
    new ArrayBuffer(0),
    new TaggedBase64('', new ArrayBuffer(0)),
    0n,
    Ratio.floatingPoint(0),
  );
}

function determineConfirmedValidator(
  selectedValidator: ValidatorSelectionEnum,
): `0x${string}` {
  if (isValidatorConfirmed(selectedValidator)) {
    return hexArrayBufferCodec.encode(selectedValidator.validatorAddress);
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
