import { AsyncIterableResolver } from '@/components/data/async_data';
import { AsyncSnapshot } from '@/components/data/async_data/async_snapshot';
import { AsyncSnapshotContext } from '@/components/data/async_data/async_snapshot_context';
import { ESPTokenContract } from '@/contracts/esp_token/esp_token_interface';
import { L1Methods } from '@/contracts/l1/l1_interface';
import { StakeTableContract } from '@/contracts/stake_table/stake_table_interface';
import { neverAsyncIterable } from '@/functional/functional_async';
import { default as React } from 'react';
import { type Config } from 'wagmi';
import { type GetTransactionReceiptReturnType } from 'wagmi/actions';
import {
  performWriteTransaction,
  PerformWriteTransactionState,
} from './perform_write_states';

export const ApproveAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformWriteTransactionState>>(null);

export const SetApproveAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformWriteTransactionState>>
  >
>(() => {});
export const ApproveAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformWriteTransactionState>
>(AsyncSnapshot.nothing());

export const ProvideApproveAsyncIterableContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformWriteTransactionState>>(null);

  return (
    <ApproveAsyncIterableContext.Provider value={asyncIterable}>
      <SetApproveAsyncIterableContext.Provider value={setAsyncIterable}>
        <DriveApproveAsyncIterable>{children}</DriveApproveAsyncIterable>
      </SetApproveAsyncIterableContext.Provider>
    </ApproveAsyncIterableContext.Provider>
  );
};

const DriveApproveAsyncIterable: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const asyncIterable =
    React.useContext(ApproveAsyncIterableContext) ?? neverAsyncIterable();

  return (
    <AsyncIterableResolver asyncIterable={asyncIterable}>
      <ConvertApproveAsyncSnapshot>{children}</ConvertApproveAsyncSnapshot>
    </AsyncIterableResolver>
  );
};

const ConvertApproveAsyncSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const asyncSnapshot = React.useContext(
    AsyncSnapshotContext,
  ) as AsyncSnapshot<PerformWriteTransactionState>;
  const promise = React.useContext(ApproveAsyncIterableContext);

  return (
    <ApproveAsyncSnapshotContext.Provider
      value={promise === null ? AsyncSnapshot.nothing() : asyncSnapshot}
    >
      {children}
    </ApproveAsyncSnapshotContext.Provider>
  );
};

export async function* performApprove(
  l1Methods: L1Methods<Config, number>,
  espContract: ESPTokenContract,
  stakeTableContract: StakeTableContract,
  amount: bigint,
  resultCallback: (
    error: unknown,
    result: null | GetTransactionReceiptReturnType<Config>,
  ) => void,
) {
  yield* performWriteTransaction(
    l1Methods,
    async () => espContract.approve(stakeTableContract.address, amount),
    resultCallback,
  );
}
