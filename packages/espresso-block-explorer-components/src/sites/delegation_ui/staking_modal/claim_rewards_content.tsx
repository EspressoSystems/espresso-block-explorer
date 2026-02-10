import { AsyncState } from '@/components/data/async_data/async_snapshot';
import Text from '@/components/text/text';
import { L1MethodsContext } from '@/contexts/l1_methods_context';
import { RewardClaimContractContext } from '@/contexts/reward_claim_contract_context';
import React from 'react';
import { LifetimeClaimedRewardsContext } from '../contexts/claimed_rewards_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import { EspressoRewardClaimInputContext } from '../contexts/reward_claim_input_context';
import ButtonLarge from '../elements/buttons/button_large';
import { ClaimableRewardsOverviewArea } from './claimable_rewards_overview_area';
import { ClaimableRewardsSummaryAndInteraction } from './claimable_rewards_summary_and_interaction';
import { CloseStakingModalButton } from './close_staking_modal';
import {
  ClaimRewardsAsyncSnapshotContext,
  performClaimRewards,
  ProvideClaimRewardsAsyncIterableContext,
  SetClaimRewardsAsyncIterableContext,
} from './contexts/perform_claim_rewards_context';
import { PerformWriteTransactionStatus } from './contexts/perform_write_states';
import { StakingModalCloseContext } from './contexts/staking_modal_close_context';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

/**
 * ClaimRewardsContent is a React component that displays the content
 * for claiming rewards in the staking modal.
 */
export const ClaimRewardsContent: React.FC = () => {
  return (
    <ProvideClaimRewardsAsyncIterableContext>
      <ClaimRewardsModalContent />
    </ProvideClaimRewardsAsyncIterableContext>
  );
};

export const ClaimRewardsModalContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
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

/**
 * ClaimRewardsActionsArea is a React component that displays the actions area
 * for claiming rewards in the staking modal.
 */
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
  const close = React.useContext(StakingModalCloseContext);
  const setClaimRewardsAsyncIterable = React.useContext(
    SetClaimRewardsAsyncIterableContext,
  );
  const claimableRewardsBalance =
    (claimableRewardsInput?.lifetimeRewards ?? lifetimeClaimedRewards) -
    lifetimeClaimedRewards;
  const debounceGuard = React.useRef(false);
  const performClaimRewardsAction = React.useMemo(
    () => () => {
      if (debounceGuard.current) {
        return;
      }

      if (!l1Methods || !rewardClaimContract || !rewardClaimInput) {
        return;
      }

      debounceGuard.current = true;

      setClaimRewardsAsyncIterable(
        performClaimRewards(
          l1Methods,
          rewardClaimContract,
          rewardClaimInput,
          () => {
            setL1Timestamp(new Date());
          },
        ),
      );
    },
    [
      l1Methods,
      rewardClaimContract,
      rewardClaimInput,
      setL1Timestamp,
      setClaimRewardsAsyncIterable,
    ],
  );

  // Reset the Debounce Guard when applicable
  React.useEffect(() => {
    if (!debounceGuard.current) {
      return;
    }
    if (asyncSnapshot.asyncState !== AsyncState.done) {
      return;
    }

    debounceGuard.current = false;
  }, [asyncSnapshot]);

  if (
    // If the Contracts are not set
    l1Methods === null ||
    rewardClaimContract === null ||
    // We do not have a reward claim input
    rewardClaimInput === null
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

  if (asyncSnapshot.hasError) {
    // There was an error claiming rewards
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

  if (
    asyncSnapshot.hasData &&
    (asyncSnapshot.data?.status ?? 0) >=
      PerformWriteTransactionStatus.receiptRetrieved
  ) {
    // We have received the receipt, we *should* be good to go
    return (
      <div className="staking-modal-unstaking-actions-area succeeded">
        <div>
          <Text text="Claim Successful" />
        </div>
        <ButtonLarge onClick={close}>
          <Text text="Close" />
        </ButtonLarge>
      </div>
    );
  }

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    asyncSnapshot.asyncState == AsyncState.active
  ) {
    // We are waiting for the transaction to be completed
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

  if (claimableRewardsBalance <= 0n) {
    // We have no rewards to claim
    return (
      <div className="staking-modal-unstaking-actions-area">
        <div>&nbsp;</div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Claim Rewards" />
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
