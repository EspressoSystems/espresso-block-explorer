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

export const ClaimValidatorExitAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformWriteTransactionState>>(null);

export const SetClaimValidatorExitAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformWriteTransactionState>>
  >
>(() => {});

export const ClaimValidatorExitAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformWriteTransactionState>
>(AsyncSnapshot.nothing());

export const ProvideClaimValidatorExitAsyncIterableContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformWriteTransactionState>>(null);

  return (
    <ClaimValidatorExitAsyncIterableContext.Provider value={asyncIterable}>
      <SetClaimValidatorExitAsyncIterableContext.Provider
        value={setAsyncIterable}
      >
        <DrivePerformClaimValidatorExitAsyncIterable>
          {children}
        </DrivePerformClaimValidatorExitAsyncIterable>
      </SetClaimValidatorExitAsyncIterableContext.Provider>
    </ClaimValidatorExitAsyncIterableContext.Provider>
  );
};

const DrivePerformClaimValidatorExitAsyncIterable: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const asyncIterable =
    React.useContext(ClaimValidatorExitAsyncIterableContext) ??
    neverAsyncIterable();

  return (
    <AsyncIterableResolver asyncIterable={asyncIterable}>
      <ConvertClaimValidatorExitAsyncSnapshot>
        {children}
      </ConvertClaimValidatorExitAsyncSnapshot>
    </AsyncIterableResolver>
  );
};

const ConvertClaimValidatorExitAsyncSnapshot: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const asyncSnapshot = React.useContext(
    AsyncSnapshotContext,
  ) as AsyncSnapshot<PerformWriteTransactionState>;
  const asyncIterable = React.useContext(
    ClaimValidatorExitAsyncIterableContext,
  );

  return (
    <ClaimValidatorExitAsyncSnapshotContext.Provider
      value={asyncIterable === null ? AsyncSnapshot.nothing() : asyncSnapshot}
    >
      {children}
    </ClaimValidatorExitAsyncSnapshotContext.Provider>
  );
};

export async function* performClaimValidatorExit(
  l1Methods: L1Methods<Config, number>,
  stakeTableContract: StakeTableContract,
  validatorAddress: `0x${string}`,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  yield* performWriteTransaction(
    l1Methods,
    async () => stakeTableContract.claimValidatorExit(validatorAddress),
    setL1Timestamp,
  );
}
