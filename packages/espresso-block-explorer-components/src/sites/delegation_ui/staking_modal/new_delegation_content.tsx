import Text from '@/components/text/Text';
import WalletAddressText from '@/components/text/WalletAddressText';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { ApproveButton } from './approve_button';
import { BackButton } from './back_button';
import { CloseStakingModalButton } from './close_staking_modal';
import { DelegateButton } from './delegate_button';
import './new_delegation_content.css';
import { NewStakeInstructionsAndProgress } from './new_stake_instructions_and_progress';
import { StakingCompletionArea } from './staking_completion_area';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingInitialSummaryAndInteraction } from './staking_initial_summary_and_interaction';
import { StakingModalTitle } from './staking_modal_title';
import { StakingOverviewArea } from './staking_overview_area';

export const NewDelegationContent: React.FC = () => {
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  return (
    <>
      <StakingHeader>
        <BackButton />
        <StakingModalTitle>
          <Text text="Delegate" />
          <Text text=" / " />
          <WalletAddressText value={new WalletAddress(confirmedValidator)} />
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

const StakingActionsArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-actions-area">
      <ApproveButton />
      <NewStakeInstructionsAndProgress />
      <DelegateButton />
    </div>
  );
};
