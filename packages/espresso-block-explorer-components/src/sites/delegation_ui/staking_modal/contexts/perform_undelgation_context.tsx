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

export const UndelegateAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformUndelegateState>>(null);
export const SetUndelegationAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformUndelegateState>>
  >
>(() => {});

export const UndelegateAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformUndelegateState>
>(AsyncSnapshot.nothing());

export const ProvideUndelegateAsyncIterableContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformUndelegateState>>(null);

  return (
    <UndelegateAsyncIterableContext.Provider value={asyncIterable}>
      <SetUndelegationAsyncIterableContext.Provider value={setAsyncIterable}>
        <DrivePerformUndelegationAsyncIterable>
          {children}
        </DrivePerformUndelegationAsyncIterable>
      </SetUndelegationAsyncIterableContext.Provider>
    </UndelegateAsyncIterableContext.Provider>
  );
};

const DrivePerformUndelegationAsyncIterable: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const asyncIterable =
    React.useContext(UndelegateAsyncIterableContext) ?? neverAsyncIterable();

  return (
    <AsyncIterableResolver asyncIterable={asyncIterable}>
      <ConvertUndelegationAsyncSnapshot>
        {children}
      </ConvertUndelegationAsyncSnapshot>
    </AsyncIterableResolver>
  );
};

const ConvertUndelegationAsyncSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const asyncSnapshot = React.useContext(
    AsyncSnapshotContext,
  ) as AsyncSnapshot<PerformUndelegateState>;
  const asyncIterable = React.useContext(UndelegateAsyncIterableContext);

  return (
    <UndelegateAsyncSnapshotContext.Provider
      value={asyncIterable === null ? AsyncSnapshot.nothing() : asyncSnapshot}
    >
      {children}
    </UndelegateAsyncSnapshotContext.Provider>
  );
};

export abstract class PerformUndelegateState {}

export class PerformUndelegationWaiting extends PerformUndelegateState {
  constructor() {
    super();
  }
}

export class PerformUndelegationSucceeded extends PerformUndelegateState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformUndelegationReceiptWaiting extends PerformUndelegateState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformUndelegationReceiptRetrieved extends PerformUndelegateState {
  constructor(
    public readonly transactionHash: `0x${string}`,
    public readonly receipt: GetTransactionReceiptReturnType<Config>,
  ) {
    super();
  }
}

export async function* performUndelegation(
  l1Methods: L1Methods<Config, number>,
  stakeTableContract: StakeTableContract,
  validatorAddress: `0x${string}`,
  stakingAmount: bigint,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  // Indicate that we are waiting for the Undelegation to complete
  yield new PerformUndelegationWaiting();

  const transactionHash = await stakeTableContract.undelegate(
    validatorAddress,
    stakingAmount,
  );

  yield new PerformUndelegationSucceeded(transactionHash);

  // We wait for the transaction receipt
  yield new PerformUndelegationReceiptWaiting(transactionHash);

  // We'll try multiple times to retrieve the receipt
  try {
    for (let i = 0; i < 24; i++) {
      try {
        const receipt = await l1Methods.getTransactionReceipt({
          hash: transactionHash,
        });

        yield new PerformUndelegationReceiptRetrieved(transactionHash, receipt);
        return;
      } catch (err) {
        if (i === 23) {
          console.error(
            '<<<< HERE performUndelegation failed to retrieve receipt:',
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
