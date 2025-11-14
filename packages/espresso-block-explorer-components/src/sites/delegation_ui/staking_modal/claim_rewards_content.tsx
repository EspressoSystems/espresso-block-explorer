import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import Text from '@/components/text/Text';
import React from 'react';
import { LifetimeClaimedRewardsContext } from '../contexts/claimed_rewards_context';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import { ModalContext } from '../contexts/modal_context';
import { RewardClaimContractContext } from '../contexts/reward_claim_contract_context';
import { EspressoRewardClaimInputContext } from '../contexts/reward_claim_input_context';
import {
  NoValidatorSelected,
  SetValidatorSelectionContext,
} from '../contexts/validator_selection_context';
import ButtonLarge from '../elements/buttons/button_large';
import { BackButton } from './back_button';
import { ClaimableRewardsOverviewArea } from './claimable_reards_overview_area';
import { ClaimableRewardsSummaryAndInteraction } from './claimable_rewards_summary_and_interaction';
import { CloseStakingModalButton } from './close_staking_modal';
import {
  ClaimRewardsAsyncSnapshotContext,
  performClaimRewards,
  PerformClaimRewardsReceiptRetrieved,
  SetClaimRewardsAsyncIterableContext,
} from './contexts/perform_claim_rewards_context';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

export const ClaimRewardsContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <BackButton />
        <StakingModalTitle>
          <Text text="Claim All" />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ClaimableRewardsSummaryAndInteraction />
        <ClaimableRewardsOverviewArea />
        <ClaimRewardsActionsArea />
      </StakingContent>
    </>
  );
};

const ClaimRewardsActionsArea: React.FC = () => {
  const l1Methods = React.useContext(L1MethodsContext);
  const rewardClaimContract = React.useContext(RewardClaimContractContext);
  const rewardClaimInput = React.useContext(EspressoRewardClaimInputContext);
  const claimableRewardsInput = React.useContext(
    EspressoRewardClaimInputContext,
  );
  const lifetimeClaimedRewards =
    React.useContext(LifetimeClaimedRewardsContext) ?? 0n;
  const asyncSnapshot = React.useContext(ClaimRewardsAsyncSnapshotContext);
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const modalControls = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);
  const setClaimRewardsAsyncIterable = React.useContext(
    SetClaimRewardsAsyncIterableContext,
  );
  const claimableRewardsBalance =
    (claimableRewardsInput?.lifetimeRewards ?? lifetimeClaimedRewards) -
    lifetimeClaimedRewards;

  if (
    l1Methods === null ||
    // If the Contracts are not set
    rewardClaimContract === null ||
    // We do not have a reward claim input
    rewardClaimInput === null ||
    // We have no rewards to claim
    claimableRewardsBalance <= 0n
  ) {
    return (
      <div className="staking-modal-unstaking-actions-area">
        <div>&nbsp;</div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Claim Rewards" />
        </ButtonLarge>
      </div>
    );
  }
  const performClaimRewardsAction = () =>
    setClaimRewardsAsyncIterable(
      performClaimRewards(
        l1Methods,
        rewardClaimContract,
        rewardClaimInput,
        setL1Timestamp,
      ),
    );

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    (asyncSnapshot.data &&
      !(asyncSnapshot.data instanceof PerformClaimRewardsReceiptRetrieved))
  ) {
    return (
      <div className="staking-modal-unstaking-actions-area waiting">
        <div>
          <Text text="Claiming..." />
        </div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Claim Rewards" />
        </ButtonLarge>
      </div>
    );
  }

  if (asyncSnapshot.asyncState === AsyncState.done) {
    if (asyncSnapshot.hasError) {
      return (
        <div className="staking-modal-unstaking-actions-area error">
          <div>
            <Text text="Claim Failed" />
          </div>
          <ButtonLarge
            className="btn-undelegate"
            onClick={performClaimRewardsAction}
          >
            <Text text="Retry" />
          </ButtonLarge>
        </div>
      );
    }

    return (
      <div className="staking-modal-unstaking-actions-area succeeded">
        <div>
          <Text text="Claim Successful" />
        </div>
        <ButtonLarge
          onClick={() => {
            setSelection(new NoValidatorSelected());
            modalControls.close();
          }}
        >
          <Text text="Close" />
        </ButtonLarge>
      </div>
    );
  }

  return (
    <div className="staking-modal-unstaking-actions-area">
      <div>&nbsp;</div>
      <ButtonLarge
        className="btn-undelegate"
        onClick={performClaimRewardsAction}
      >
        <Text text="Claim Rewards" />
      </ButtonLarge>
    </div>
  );
};
