import { DataContext } from '@/components/contexts';
import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import PromiseResolver from '@/components/data/async_data/PromiseResolver';
import Text from '@/components/text/Text';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { neverPromise } from '@/functional/functional_async';
import React from 'react';
import { LifetimeClaimedRewardsContext } from '../contexts/claimed_rewards_context';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import {
  RewardClaimContractContext,
  RewardClaimContractGasEstimatorContext,
} from '../contexts/reward_claim_contract_context';
import { EspressoRewardClaimInputContext } from '../contexts/reward_claim_input_context';
import ButtonLarge from '../elements/buttons/button_large';
import { ClaimableRewardsOverviewArea } from './claimable_rewards_overview_area';
import { ClaimableRewardsSummaryAndInteraction } from './claimable_rewards_summary_and_interaction';
import { CloseStakingModalButton } from './close_staking_modal';
import { EstimatedContractGasContext } from './contexts/estimate_contract_gas_context';
import {
  ClaimRewardsAsyncSnapshotContext,
  performClaimRewards,
  SetClaimRewardsAsyncIterableContext,
} from './contexts/perform_claim_rewards_context';
import { PerformWriteTransactionReceiptRetrieved } from './contexts/perform_write_states';
import { StakingModalCloseContext } from './contexts/staking_modal_close_context';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

export const ClaimRewardsContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <Text text="Claim All" />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ProvideContractGasEstimate>
          <ClaimableRewardsSummaryAndInteraction />
          <ClaimableRewardsOverviewArea />
          <ClaimRewardsActionsArea />
        </ProvideContractGasEstimate>
      </StakingContent>
    </>
  );
};

const ProvideContractGasEstimate: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const claimRewardsInput = React.useContext(EspressoRewardClaimInputContext);
  const rewardClaimGasEstimator = React.useContext(
    RewardClaimContractGasEstimatorContext,
  );

  const promise =
    !claimRewardsInput || !rewardClaimGasEstimator
      ? neverPromise
      : rewardClaimGasEstimator.claimRewards(
          claimRewardsInput.lifetimeRewards,
          hexArrayBufferCodec.encode(claimRewardsInput.authData),
        );

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToGasEstimate>{children}</TransformDataToGasEstimate>
    </PromiseResolver>
  );
};

const TransformDataToGasEstimate: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ?? null) as null | bigint;

  return (
    <EstimatedContractGasContext.Provider value={data}>
      {children}
    </EstimatedContractGasContext.Provider>
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
  const close = React.useContext(StakingModalCloseContext);
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
      !(asyncSnapshot.data instanceof PerformWriteTransactionReceiptRetrieved))
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
        <ButtonLarge onClick={close}>
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
