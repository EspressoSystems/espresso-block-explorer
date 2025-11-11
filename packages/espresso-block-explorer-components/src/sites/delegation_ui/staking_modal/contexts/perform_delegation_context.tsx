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

export const DelegateAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformDelegateState>>(null);
export const SetDelegationAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformDelegateState>>
  >
>(() => {});

export const DelegateAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformDelegateState>
>(AsyncSnapshot.nothing());

export const ProvideDelegatePromiseContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformDelegateState>>(null);

  return (
    <DelegateAsyncIterableContext.Provider value={asyncIterable}>
      <SetDelegationAsyncIterableContext.Provider value={setAsyncIterable}>
        <DrivePerformDelegationAsyncIterable>
          {children}
        </DrivePerformDelegationAsyncIterable>
      </SetDelegationAsyncIterableContext.Provider>
    </DelegateAsyncIterableContext.Provider>
  );
};

const DrivePerformDelegationAsyncIterable: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const asyncIterable =
    React.useContext(DelegateAsyncIterableContext) ?? neverAsyncIterable();

  return (
    <AsyncIterableResolver asyncIterable={asyncIterable}>
      <ConvertDelegationAsyncSnapshot>
        {children}
      </ConvertDelegationAsyncSnapshot>
    </AsyncIterableResolver>
  );
};

const ConvertDelegationAsyncSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const asyncSnapshot = React.useContext(
    AsyncSnapshotContext,
  ) as AsyncSnapshot<PerformDelegateState>;
  const asyncIterable = React.useContext(DelegateAsyncIterableContext);

  return (
    <DelegateAsyncSnapshotContext.Provider
      value={asyncIterable === null ? AsyncSnapshot.nothing() : asyncSnapshot}
    >
      {children}
    </DelegateAsyncSnapshotContext.Provider>
  );
};

export abstract class PerformDelegateState {}

export class PerformDelegationWaiting extends PerformDelegateState {
  constructor() {
    super();
  }
}

export class PerformDelegationSucceeded extends PerformDelegateState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformDelegationReceiptWaiting extends PerformDelegateState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformDelegationReceiptRetrieved extends PerformDelegateState {
  constructor(
    public readonly transactionHash: `0x${string}`,
    public readonly receipt: GetTransactionReceiptReturnType<Config>,
  ) {
    super();
  }
}

export async function* performDelegation(
  l1Methods: L1Methods<Config, number>,
  stakeTableContract: StakeTableContract,
  validatorAddress: `0x${string}`,
  stakingAmount: bigint,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  // Indicate that we are waiting for the delegation to complete
  yield new PerformDelegationWaiting();

  const transactionHash = await stakeTableContract.delegate(
    validatorAddress,
    stakingAmount,
  );

  yield new PerformDelegationSucceeded(transactionHash);

  // We wait for the transaction receipt
  yield new PerformDelegationReceiptWaiting(transactionHash);

  // We'll try multiple times to retrieve the receipt
  try {
    for (let i = 0; i < 24; i++) {
      try {
        const receipt = await l1Methods.getTransactionReceipt({
          hash: transactionHash,
        });

        yield new PerformDelegationReceiptRetrieved(transactionHash, receipt);
        return;
      } catch (err) {
        if (i === 23) {
          console.error(
            '<<<< HERE performDelegation failed to retrieve receipt:',
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
