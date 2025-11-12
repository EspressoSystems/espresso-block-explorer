import Text from '@/components/text/Text';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmedStake,
  ValidatorConfirmedUndelegate,
} from '../contexts/validator_selection_context';
import ButtonLarge from '../elements/buttons/button_large';
import { BackButton } from './back_button';
import { CloseStakingModalButton } from './close_staking_modal';
import './manage_stake_content.css';
import { ManageStakeInitialSummary } from './manage_stake_initial_summary';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

export const ManageStakeContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <BackButton />
        <StakingModalTitle>
          <Text text="Manage Stake" />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ManageStakeInitialSummary />
        <ManageStakeActionsArea />
      </StakingContent>
    </>
  );
};

const ManageStakeActionsArea: React.FC = () => {
  const setValidatorSelection = React.useContext(SetValidatorSelectionContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  return (
    <div className="staking-modal-manage-stake-actions-area">
      <ButtonLarge
        onClick={() => {
          setValidatorSelection(
            new ValidatorConfirmedStake(confirmedValidator),
          );
        }}
      >
        <Text text="Delegate More" />
      </ButtonLarge>

      <ButtonLarge
        onClick={() => {
          setValidatorSelection(
            new ValidatorConfirmedUndelegate(confirmedValidator),
          );
        }}
      >
        <Text text="Undelegate" />
      </ButtonLarge>
    </div>
  );
};
