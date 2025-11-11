import { sleep } from '@/async/sleep';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { AsyncSnapshot } from '@/components/data/async_data/AsyncSnapshot';
import { AsyncSnapshotContext } from '@/components/data/async_data/AsyncSnapshotContext';
import { ESPTokenContract } from '@/contracts/esp_token/esp_token_interface';
import { L1Methods } from '@/contracts/l1/l1_interface';
import { StakeTableContract } from '@/contracts/stake_table/stake_table_interface';
import { neverAsyncIterable } from '@/functional/functional_async';
import React from 'react';
import { Config } from 'wagmi';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';

export const ApproveAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformApproveState>>(null);

export const SetApproveAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformApproveState>>
  >
>(() => {});
export const ApproveAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformApproveState>
>(AsyncSnapshot.nothing());

export const ProvideApprovePromiseContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformApproveState>>(null);

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
  ) as AsyncSnapshot<PerformApproveState>;
  const promise = React.useContext(ApproveAsyncIterableContext);

  return (
    <ApproveAsyncSnapshotContext.Provider
      value={promise === null ? AsyncSnapshot.nothing() : asyncSnapshot}
    >
      {children}
    </ApproveAsyncSnapshotContext.Provider>
  );
};

export abstract class PerformApproveState {}

export class PerformApproveWaiting extends PerformApproveState {
  constructor() {
    super();
  }
}

export class PerformApproveDone extends PerformApproveState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformApproveReceiptWaiting extends PerformApproveState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformApproveReceiptReceived extends PerformApproveState {
  constructor(
    public readonly transactionHash: `0x${string}`,
    public readonly receipt: GetTransactionReceiptReturnType<Config>,
  ) {
    super();
  }
}

export async function* performApprove(
  l1Methods: L1Methods<Config, number>,
  espContract: ESPTokenContract,
  stakeTableContract: StakeTableContract,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  yield new PerformApproveWaiting();

  const transactionHash = await espContract.approve(
    stakeTableContract.address,
    0xffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffffn,
  );

  yield new PerformApproveDone(transactionHash);

  yield new PerformApproveReceiptWaiting(transactionHash);

  try {
    for (let i = 0; i < 24; i++) {
      try {
        const receipt = await l1Methods.getTransactionReceipt({
          hash: transactionHash,
        });

        yield new PerformApproveReceiptReceived(transactionHash, receipt);
        return;
      } catch (err) {
        if (i === 23) {
          console.error(
            '<<<< HERE performApprove failed to retrieve receipt:',
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
