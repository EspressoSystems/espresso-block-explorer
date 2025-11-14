import Text from '@/components/text/Text';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import {
  ValidatorConfirmedStake,
  ValidatorConfirmedUndelegate,
} from '../contexts/validator_selection_context';
import ButtonLarge from '../elements/buttons/button_large';
import { CloseStakingModalButton } from './close_staking_modal';
import { StakingModalHistoryControlsContext } from './contexts/staking_modal_history_context';
import './manage_stake_content.css';
import { ManageStakeInitialSummary } from './manage_stake_initial_summary';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

export const ManageStakeContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
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
  const historyControls = React.useContext(StakingModalHistoryControlsContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  return (
    <div className="staking-modal-manage-stake-actions-area">
      <ButtonLarge
        onClick={() => {
          historyControls.push(new ValidatorConfirmedStake(confirmedValidator));
        }}
      >
        <Text text="Delegate More" />
      </ButtonLarge>

      <ButtonLarge
        onClick={() => {
          historyControls.push(
            new ValidatorConfirmedUndelegate(confirmedValidator),
          );
        }}
      >
        <Text text="Undelegate" />
      </ButtonLarge>
    </div>
  );
};
