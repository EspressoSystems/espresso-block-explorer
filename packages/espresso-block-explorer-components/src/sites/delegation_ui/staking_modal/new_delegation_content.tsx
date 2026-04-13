import { Text } from '@/components/text';
import { default as React } from 'react';
import { RetrieveMinimumDelegationAmount } from '../contexts/minimum_delegation_amount_context';
import { ValidatorName } from '../elements/validator/validator_name';
import { ApproveButton } from './approve_button';
import { CloseStakingModalButton } from './close_staking_modal';
import { ProvideCurrentAllowanceToStakeTable } from './contexts/current_allowance_context';
import { ProvideEpochCurrentStakeToValidator } from './contexts/current_epoch_stake_to_validator_context';
import { DelegateButton } from './delegate_button';
import './new_delegation_content.css';
import { NewStakeInstructionsAndProgress } from './new_stake_instructions_and_progress';
import { StakingCompletionArea } from './staking_completion_area';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingInitialSummaryAndInteraction } from './staking_initial_summary_and_interaction';
import { StakingModalTitle } from './staking_modal_title';
import { StakingOverviewArea } from './staking_overview_area';

/**
 * NewDelegationContent is the main component for new delegations
 * in the staking modal.
 */
export const NewDelegationContent: React.FC = () => {
  return (
    <RetrieveMinimumDelegationAmount>
      <ProvideCurrentAllowanceToStakeTable>
        <ProvideEpochCurrentStakeToValidator>
          <NewDelegationModalContent />
        </ProvideEpochCurrentStakeToValidator>
      </ProvideCurrentAllowanceToStakeTable>
    </RetrieveMinimumDelegationAmount>
  );
};

/**
 * NewDelegationModalContent is the content for new delegations
 * in the staking modal.
 */
export const NewDelegationModalContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <span className="accent">
            <Text text="Delegate" />
            &nbsp;
            <Text text="/" />
            &nbsp;
          </span>
          <ValidatorName />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <StakingInitialSummaryAndInteraction />
        <StakingOverviewArea />
        <StakingActionsArea />
        <StakingCompletionArea />
      </StakingContent>
    </>
  );
};

/**
 * StakingActionsArea is a React component that displays the actions area
 * for new delegations in the staking modal.
 */
const StakingActionsArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-actions-area">
      <ApproveButton />
      <NewStakeInstructionsAndProgress />
      <DelegateButton />
    </div>
  );
};
