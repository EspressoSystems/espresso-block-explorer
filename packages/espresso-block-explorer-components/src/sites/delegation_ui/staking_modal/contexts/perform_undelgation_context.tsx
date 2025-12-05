import AsyncIterableResolver from '@/components/data/async_data/async_iterable_resolver';
import { AsyncSnapshot } from '@/components/data/async_data/async_snapshot';
import { AsyncSnapshotContext } from '@/components/data/async_data/async_snapshot_context';
import { L1Methods } from '@/contracts/l1/l1_interface';
import { StakeTableContract } from '@/contracts/stake_table/stake_table_interface';
import { neverAsyncIterable } from '@/functional/functional_async';
import React from 'react';
import { Config } from 'wagmi';
import {
  performWriteTransaction,
  PerformWriteTransactionState,
} from './perform_write_states';

export const UndelegateAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformWriteTransactionState>>(null);

export const SetUndelegationAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformWriteTransactionState>>
  >
>(() => {});

export const UndelegateAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformWriteTransactionState>
>(AsyncSnapshot.nothing());

export const ProvideUndelegateAsyncIterableContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformWriteTransactionState>>(null);

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
  ) as AsyncSnapshot<PerformWriteTransactionState>;
  const asyncIterable = React.useContext(UndelegateAsyncIterableContext);

  return (
    <UndelegateAsyncSnapshotContext.Provider
      value={asyncIterable === null ? AsyncSnapshot.nothing() : asyncSnapshot}
    >
      {children}
    </UndelegateAsyncSnapshotContext.Provider>
  );
};

export async function* performUndelegation(
  l1Methods: L1Methods<Config, number>,
  stakeTableContract: StakeTableContract,
  validatorAddress: `0x${string}`,
  stakingAmount: bigint,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  yield* performWriteTransaction(
    l1Methods,
    async () => stakeTableContract.undelegate(validatorAddress, stakingAmount),
    setL1Timestamp,
  );
}
