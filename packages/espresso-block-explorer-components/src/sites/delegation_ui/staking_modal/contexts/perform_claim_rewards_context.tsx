import { AsyncIterableResolver } from '@/components/data/async_data';
import { AsyncSnapshot } from '@/components/data/async_data/async_snapshot';
import { AsyncSnapshotContext } from '@/components/data/async_data/async_snapshot_context';
import { L1Methods } from '@/contracts/l1/l1_interface';
import { RewardClaimContract } from '@/contracts/reward_claim/reward_claim_interface';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { neverAsyncIterable } from '@/functional/functional_async';
import { RewardClaimInput } from '@/service/hotshot_query_service/reward_state/reward_claim_input';
import { default as React } from 'react';
import { type Config } from 'wagmi';
import { type GetTransactionReceiptReturnType } from 'wagmi/actions';
import {
  FailedToPerformWriteToContract,
  performWriteTransaction,
  PerformWriteTransactionState,
  TransactionReverted,
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

export const ProvideClaimRewardsAsyncIterableContext: React.FC<
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
  accountAddress: `0x${string}`,
  resultCallback: (
    error: unknown,
    result: null | GetTransactionReceiptReturnType<Config>,
  ) => void,
) {
  try {
    yield* performWriteTransaction(
      l1Methods,
      async () =>
        rewardClaimContract.claimRewards(
          rewardClaimInput.lifetimeRewards,
          hexArrayBufferCodec.encode(rewardClaimInput.authData),
        ),
      resultCallback,
    );
  } catch (error) {
    // Note: resultCallback was already invoked by performWriteTransaction
    // with the original TransactionReverted before we re-diagnose here.
    if (!(error instanceof TransactionReverted)) {
      throw error;
    }

    let claimedOnChain: bigint;
    try {
      claimedOnChain = await rewardClaimContract.claimedRewards(accountAddress);
    } catch {
      throw error;
    }

    if (claimedOnChain >= rewardClaimInput.lifetimeRewards) {
      throw new FailedToPerformWriteToContract({
        name: 'ContractFunctionExecutionError',
        cause: {
          name: 'ContractFunctionRevertedError',
          data: { errorName: 'AlreadyClaimed' },
        },
      });
    }

    throw error;
  }
}
