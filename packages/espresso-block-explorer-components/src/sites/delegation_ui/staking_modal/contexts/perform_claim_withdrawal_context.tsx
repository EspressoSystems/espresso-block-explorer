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

export const ClaimWithdrawalAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformWriteTransactionState>>(null);

export const SetClaimWithdrawalAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformWriteTransactionState>>
  >
>(() => {});

export const ClaimWithdrawalAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformWriteTransactionState>
>(AsyncSnapshot.nothing());

export const ProvideClaimWithdrawalAsyncIterableContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformWriteTransactionState>>(null);

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
  ) as AsyncSnapshot<PerformWriteTransactionState>;
  const asyncIterable = React.useContext(ClaimWithdrawalAsyncIterableContext);

  return (
    <ClaimWithdrawalAsyncSnapshotContext.Provider
      value={asyncIterable === null ? AsyncSnapshot.nothing() : asyncSnapshot}
    >
      {children}
    </ClaimWithdrawalAsyncSnapshotContext.Provider>
  );
};

export async function* performClaimWithdrawal(
  l1Methods: L1Methods<Config, number>,
  stakeTableContract: StakeTableContract,
  validatorAddress: `0x${string}`,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  yield* performWriteTransaction(
    l1Methods,
    async () => stakeTableContract.claimWithdrawal(validatorAddress),
    setL1Timestamp,
  );
}
