import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { AsyncSnapshot } from '@/components/data/async_data/AsyncSnapshot';
import { AsyncSnapshotContext } from '@/components/data/async_data/AsyncSnapshotContext';
import { L1Methods } from '@/contracts/l1/l1_interface';
import { RewardClaimContract } from '@/contracts/reward_claim/reward_claim_interface';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { neverAsyncIterable } from '@/functional/functional_async';
import { RewardClaimInput } from '@/service/hotshot_query_service/cappuccino/reward_state/reward_claim_input';
import React from 'react';
import { Config } from 'wagmi';
import {
  performWriteTransaction,
  PerformWriteTransactionState,
} from './perform_write_states';

export const PerformClaimRewardsAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformWriteTransactionState>>(null);

export const SetClaimRewardsAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformWriteTransactionState>>
  >
>(() => {});

export const ClaimRewardsAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformWriteTransactionState>
>(AsyncSnapshot.nothing());

export const ProvideClaimRewardsPromiseContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformWriteTransactionState>>(null);

  return (
    <PerformClaimRewardsAsyncIterableContext.Provider value={asyncIterable}>
      <SetClaimRewardsAsyncIterableContext.Provider value={setAsyncIterable}>
        <DrivePerformClaimRewardsAsyncIterable>
          {children}
        </DrivePerformClaimRewardsAsyncIterable>
      </SetClaimRewardsAsyncIterableContext.Provider>
    </PerformClaimRewardsAsyncIterableContext.Provider>
  );
};

const DrivePerformClaimRewardsAsyncIterable: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const asyncIterable =
    React.useContext(PerformClaimRewardsAsyncIterableContext) ??
    neverAsyncIterable();

  return (
    <AsyncIterableResolver asyncIterable={asyncIterable}>
      <ConvertClaimRewardsAsyncSnapshot>
        {children}
      </ConvertClaimRewardsAsyncSnapshot>
    </AsyncIterableResolver>
  );
};

const ConvertClaimRewardsAsyncSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const asyncSnapshot = React.useContext(
    AsyncSnapshotContext,
  ) as AsyncSnapshot<PerformWriteTransactionState>;
  const asyncIterable = React.useContext(
    PerformClaimRewardsAsyncIterableContext,
  );

  return (
    <ClaimRewardsAsyncSnapshotContext.Provider
      value={asyncIterable === null ? AsyncSnapshot.nothing() : asyncSnapshot}
    >
      {children}
    </ClaimRewardsAsyncSnapshotContext.Provider>
  );
};

export async function* performClaimRewards(
  l1Methods: L1Methods<Config, number>,
  rewardClaimContract: RewardClaimContract,
  rewardClaimInput: RewardClaimInput,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  yield* performWriteTransaction(
    l1Methods,
    async () =>
      rewardClaimContract.claimRewards(
        rewardClaimInput.lifetimeRewards,
        hexArrayBufferCodec.encode(rewardClaimInput.authData),
      ),
    setL1Timestamp,
  );
}
