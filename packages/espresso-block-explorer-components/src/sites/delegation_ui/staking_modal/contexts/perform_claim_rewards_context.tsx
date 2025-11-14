import { sleep } from '@/async/sleep';
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
import { GetTransactionReceiptReturnType } from 'wagmi/actions';

export const PerformClaimRewardsAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformClaimRewardsState>>(null);
export const SetClaimRewardsAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformClaimRewardsState>>
  >
>(() => {});

export const ClaimRewardsAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformClaimRewardsState>
>(AsyncSnapshot.nothing());

export const ProvideClaimRewardsPromiseContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformClaimRewardsState>>(null);

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
  ) as AsyncSnapshot<PerformClaimRewardsState>;
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

export abstract class PerformClaimRewardsState {}

export class PerformClaimRewardsWaiting extends PerformClaimRewardsState {
  constructor() {
    super();
  }
}

export class PerformClaimRewardsSucceeded extends PerformClaimRewardsState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformClaimRewardsReceiptWaiting extends PerformClaimRewardsState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformClaimRewardsReceiptRetrieved extends PerformClaimRewardsState {
  constructor(
    public readonly transactionHash: `0x${string}`,
    public readonly receipt: GetTransactionReceiptReturnType<Config>,
  ) {
    super();
  }
}

export async function* performClaimRewards(
  l1Methods: L1Methods<Config, number>,
  rewardClaimContract: RewardClaimContract,
  rewardClaimInput: RewardClaimInput,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  // Indicate that we are waiting for the ClaimRewards to complete
  yield new PerformClaimRewardsWaiting();

  const transactionHash = await rewardClaimContract.claimRewards(
    rewardClaimInput.lifetimeRewards,
    hexArrayBufferCodec.encode(rewardClaimInput.authData),
  );

  yield new PerformClaimRewardsSucceeded(transactionHash);

  // We wait for the transaction receipt
  yield new PerformClaimRewardsReceiptWaiting(transactionHash);

  // We'll try multiple times to retrieve the receipt
  try {
    for (let i = 0; i < 24; i++) {
      try {
        const receipt = await l1Methods.getTransactionReceipt({
          hash: transactionHash,
        });

        yield new PerformClaimRewardsReceiptRetrieved(transactionHash, receipt);
        return;
      } catch (err) {
        if (i === 23) {
          console.error(
            '<<<< HERE performClaimRewards failed to retrieve receipt:',
            err,
          );
          throw err;
        }
        //  TODO: Inspect the errors before blindly retrying

        // Sleep for a second before retrying
        await sleep(1000);
      }
    }
  } finally {
    setL1Timestamp(new Date());
  }

  throw new Error('no receipt received');
}
