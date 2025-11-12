import { sleep } from '@/async/sleep';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { AsyncSnapshot } from '@/components/data/async_data/AsyncSnapshot';
import { AsyncSnapshotContext } from '@/components/data/async_data/AsyncSnapshotContext';
import { L1Methods } from '@/contracts/l1/l1_interface';
import { StakeTableContract } from '@/contracts/stake_table/stake_table_interface';
import { neverAsyncIterable } from '@/functional/functional_async';
import React from 'react';
import { Config } from 'wagmi';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';

export const ClaimWithdrawalAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformClaimWithdrawalState>>(null);
export const SetClaimWithdrawalAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformClaimWithdrawalState>>
  >
>(() => {});

export const ClaimWithdrawalAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformClaimWithdrawalState>
>(AsyncSnapshot.nothing());

export const ProvideClaimWithdrawalPromiseContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformClaimWithdrawalState>>(null);

  return (
    <ClaimWithdrawalAsyncIterableContext.Provider value={asyncIterable}>
      <SetClaimWithdrawalAsyncIterableContext.Provider value={setAsyncIterable}>
        <DrivePerformClaimWithdrawalAsyncIterable>
          {children}
        </DrivePerformClaimWithdrawalAsyncIterable>
      </SetClaimWithdrawalAsyncIterableContext.Provider>
    </ClaimWithdrawalAsyncIterableContext.Provider>
  );
};

const DrivePerformClaimWithdrawalAsyncIterable: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const asyncIterable =
    React.useContext(ClaimWithdrawalAsyncIterableContext) ??
    neverAsyncIterable();

  return (
    <AsyncIterableResolver asyncIterable={asyncIterable}>
      <ConvertClaimWithdrawalAsyncSnapshot>
        {children}
      </ConvertClaimWithdrawalAsyncSnapshot>
    </AsyncIterableResolver>
  );
};

const ConvertClaimWithdrawalAsyncSnapshot: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const asyncSnapshot = React.useContext(
    AsyncSnapshotContext,
  ) as AsyncSnapshot<PerformClaimWithdrawalState>;
  const asyncIterable = React.useContext(ClaimWithdrawalAsyncIterableContext);

  return (
    <ClaimWithdrawalAsyncSnapshotContext.Provider
      value={asyncIterable === null ? AsyncSnapshot.nothing() : asyncSnapshot}
    >
      {children}
    </ClaimWithdrawalAsyncSnapshotContext.Provider>
  );
};

export abstract class PerformClaimWithdrawalState {}

export class PerformClaimWithdrawalWaiting extends PerformClaimWithdrawalState {
  constructor() {
    super();
  }
}

export class PerformClaimWithdrawalSucceeded extends PerformClaimWithdrawalState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformClaimWithdrawalReceiptWaiting extends PerformClaimWithdrawalState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformClaimWithdrawalReceiptRetrieved extends PerformClaimWithdrawalState {
  constructor(
    public readonly transactionHash: `0x${string}`,
    public readonly receipt: GetTransactionReceiptReturnType<Config>,
  ) {
    super();
  }
}

export async function* performClaimWithdrawal(
  l1Methods: L1Methods<Config, number>,
  stakeTableContract: StakeTableContract,
  validatorAddress: `0x${string}`,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  // Indicate that we are waiting for the ClaimWithdrawal to complete
  yield new PerformClaimWithdrawalWaiting();

  const transactionHash =
    await stakeTableContract.claimWithdrawal(validatorAddress);

  yield new PerformClaimWithdrawalSucceeded(transactionHash);

  // We wait for the transaction receipt
  yield new PerformClaimWithdrawalReceiptWaiting(transactionHash);

  // We'll try multiple times to retrieve the receipt
  try {
    for (let i = 0; i < 24; i++) {
      try {
        const receipt = await l1Methods.getTransactionReceipt({
          hash: transactionHash,
        });

        yield new PerformClaimWithdrawalReceiptRetrieved(
          transactionHash,
          receipt,
        );
        return;
      } catch (err) {
        if (i === 23) {
          console.error(
            '<<<< HERE performClaimWithdrawal failed to retrieve receipt:',
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
