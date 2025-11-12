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

export const ClaimValidatorExitAsyncIterableContext =
  React.createContext<null | AsyncIterable<PerformClaimValidatorExitState>>(
    null,
  );
export const SetClaimValidatorExitAsyncIterableContext = React.createContext<
  React.Dispatch<
    React.SetStateAction<null | AsyncIterable<PerformClaimValidatorExitState>>
  >
>(() => {});

export const ClaimValidatorExitAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<PerformClaimValidatorExitState>
>(AsyncSnapshot.nothing());

export const ProvideClaimValidatorExitPromiseContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [asyncIterable, setAsyncIterable] =
    React.useState<null | AsyncIterable<PerformClaimValidatorExitState>>(null);

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
  ) as AsyncSnapshot<PerformClaimValidatorExitState>;
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

export abstract class PerformClaimValidatorExitState {}

export class PerformClaimValidatorExitWaiting extends PerformClaimValidatorExitState {
  constructor() {
    super();
  }
}

export class PerformClaimValidatorExitSucceeded extends PerformClaimValidatorExitState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformClaimValidatorExitReceiptWaiting extends PerformClaimValidatorExitState {
  constructor(public readonly transactionHash: `0x${string}`) {
    super();
  }
}

export class PerformClaimValidatorExitReceiptRetrieved extends PerformClaimValidatorExitState {
  constructor(
    public readonly transactionHash: `0x${string}`,
    public readonly receipt: GetTransactionReceiptReturnType<Config>,
  ) {
    super();
  }
}

export async function* performClaimValidatorExit(
  l1Methods: L1Methods<Config, number>,
  stakeTableContract: StakeTableContract,
  validatorAddress: `0x${string}`,
  setL1Timestamp: React.Dispatch<React.SetStateAction<Date>>,
) {
  // Indicate that we are waiting for the ClaimValidatorExit to complete
  yield new PerformClaimValidatorExitWaiting();

  const transactionHash =
    await stakeTableContract.claimValidatorExit(validatorAddress);

  yield new PerformClaimValidatorExitSucceeded(transactionHash);

  // We wait for the transaction receipt
  yield new PerformClaimValidatorExitReceiptWaiting(transactionHash);

  // We'll try multiple times to retrieve the receipt
  try {
    for (let i = 0; i < 24; i++) {
      try {
        const receipt = await l1Methods.getTransactionReceipt({
          hash: transactionHash,
        });

        yield new PerformClaimValidatorExitReceiptRetrieved(
          transactionHash,
          receipt,
        );
        return;
      } catch (err) {
        if (i === 23) {
          console.error(
            '<<<< HERE performClaimValidatorExit failed to retrieve receipt:',
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
