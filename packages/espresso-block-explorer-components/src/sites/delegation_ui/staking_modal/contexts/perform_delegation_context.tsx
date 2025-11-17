import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { AsyncSnapshot } from '@/components/data/async_data/AsyncSnapshot';
import { AsyncSnapshotContext } from '@/components/data/async_data/AsyncSnapshotContext';
import { L1Methods } from '@/contracts/l1/l1_interface';
import { StakeTableContract } from '@/contracts/stake_table/stake_table_interface';
import { neverAsyncIterable } from '@/functional/functional_async';
import React from 'react';
import { Config } from 'wagmi';
import {
  performWriteTransaction,
  PerformWriteTransactionState,
} from './perform_write_states';

export const DelegateAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformWriteTransactionState>>(null);

export const SetDelegationAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformWriteTransactionState>>
  >
>(() => {});

export const DelegateAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformWriteTransactionState>
>(AsyncSnapshot.nothing());

export const ProvideDelegateAsyncIterableContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformWriteTransactionState>>(null);

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
  ) as AsyncSnapshot<PerformWriteTransactionState>;
  const asyncIterable = React.useContext(DelegateAsyncIterableContext);

  return (
    <DelegateAsyncSnapshotContext.Provider
      value={asyncIterable === null ? AsyncSnapshot.nothing() : asyncSnapshot}
    >
      {children}
    </DelegateAsyncSnapshotContext.Provider>
  );
};

export async function* performDelegation(
  l1Methods: L1Methods<Config, number>,
  stakeTableContract: StakeTableContract,
  validatorAddress: `0x${string}`,
  stakingAmount: bigint,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  yield* performWriteTransaction(
    l1Methods,
    async () => stakeTableContract.delegate(validatorAddress, stakingAmount),
    setL1Timestamp,
  );
}
