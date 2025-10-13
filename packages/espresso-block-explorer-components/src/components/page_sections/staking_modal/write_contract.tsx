import { sleep } from '@/async/sleep';
import {
  AsyncSnapshot,
  AsyncState,
} from '@/components/data/async_data/AsyncSnapshot';
import CopyHex from '@/components/text/CopyHex';
import HexText from '@/components/text/HexText';
import NumberText from '@/components/text/NumberText';
import Text from '@/components/text/Text';
import { hexArrayBufferCodec, isRecordWithKeys } from '@/convert/codec';
import UnimplementedError from '@/errors/UnimplementedError';
import React from 'react';
import { Config } from 'wagmi';
import { getTransaction, getTransactionReceipt } from 'wagmi/actions';
import './staking_modal.css';

export const TransactionHashText: React.FC = () => {
  const state = React.useContext(WriteContractAsyncStateContext);

  if (state.transactionHash.asyncState === AsyncState.waiting) {
    return <Text text="Submitting..." />;
  }

  if (state.transactionHash.asyncState !== AsyncState.done) {
    return null;
  }

  if (state.transactionHash.hasError && state.transactionHash.error) {
    const error = state.transactionHash.error;
    return <Text text={`Error submitting transaction: ${error.toString()}`} />;
  }

  if (!state.transactionHash.data) {
    throw new UnimplementedError();
  }

  const hash = state.transactionHash.data;

  const buffer = hexArrayBufferCodec.decode(hash);

  return (
    <>
      <Text text="Submitted, hash:" />
      &nbsp;
      <CopyHex value={buffer}>
        <HexText value={buffer} />
      </CopyHex>
    </>
  );
};

export const TransactionReceiptText: React.FC = () => {
  const state = React.useContext(WriteContractAsyncStateContext);
  if (state.receipt.asyncState === AsyncState.waiting) {
    return <Text text="Waiting for receipt..." />;
  }

  if (state.receipt.asyncState !== AsyncState.done) {
    return null;
  }

  if (state.receipt.hasError && state.receipt.error) {
    const error = state.receipt.error;
    return <Text text={`Error retrieving receipt: ${error.toString()}`} />;
  }

  if (!state.receipt.data) {
    throw new UnimplementedError();
  }

  // const receipt = state.receipt.data;
  return (
    <>
      <Text text="Received Receipt" />
      {/* &nbsp;
      <NumberText number={receipt.blockNumber} /> */}
    </>
  );
};

export const TransactionText: React.FC = () => {
  const state = React.useContext(WriteContractAsyncStateContext);
  if (state.transaction.asyncState === AsyncState.waiting) {
    return <Text text="Waiting for transaction..." />;
  }

  if (state.transaction.asyncState !== AsyncState.done) {
    return null;
  }

  if (state.transaction.hasError && state.transaction.error) {
    const error = state.transaction.error;
    return <Text text={`Error retrieving transaction: ${error.toString()}`} />;
  }

  if (!state.transaction.data) {
    throw new UnimplementedError();
  }

  const transaction = state.transaction.data;
  return (
    <>
      <Text text="Posted, block:" />
      &nbsp;
      <NumberText number={transaction.blockNumber} />
      {/* <MoneyText money={MonetaryValue.ETH(transaction.gas)} /> */}
    </>
  );
};

const MAX_RECEIPT_RETRIEVE_ATTEMPTS = 100;
const RECEIPT_RETRIEVE_DELAY_MS = 250;

async function performRetrievalWithRetries<T>(
  retrieve: () => Promise<T>,
  delay: number = RECEIPT_RETRIEVE_DELAY_MS,
  maxAttempts: number = MAX_RECEIPT_RETRIEVE_ATTEMPTS,
): Promise<T> {
  let lastError: unknown = null;
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await sleep(delay);
      const result = await retrieve();
      if (result) {
        return result;
      }
    } catch (err) {
      // Inspect the specific error type to see if its a non-recoverable
      lastError = err;
    }
  }

  throw lastError;
}

export function createWriteContractAsyncHandler(
  wagmiConfig: Config,
  state: WriteContractAsyncState,
  setState: (state: WriteContractAsyncState) => void,
  trigger: () => Promise<TransactionHash>,
  onSuccess: (
    hash: TransactionHash,
    receipt: TransactionReceipt,
    tx: Transaction,
  ) => void = () => {},
) {
  return async () => {
    let localState = state;

    localState = localState.withTransactionHash(AsyncSnapshot.waiting());
    setState(localState);

    // Submit the Transaction
    let transactionHash: null | TransactionHash = null;
    try {
      transactionHash = await trigger();
    } catch (err) {
      // Try to handle the error
      // This is expected to be a WriteContractErrorType from Wagmi, though
      // it *could* be something else.

      if (!isRecordWithKeys(err, 'name')) {
        localState = localState.withTransactionHash(
          AsyncSnapshot.withError(AsyncState.done, err),
        );
        setState(localState);
        return;
      }

      if (typeof err !== 'object' || err === null) {
        // Well... that's just odd.
        localState = WriteContractAsyncState.withNothing();
        setState(localState);
        return;
      }

      if (err.name === 'ConnectorNotFoundError') {
        localState = WriteContractAsyncState.withNothing();
        setState(localState);
        return;
      }

      // Did the user cancel the transaction?
      if (/user denied transaction/gi.test(String(err))) {
        localState = WriteContractAsyncState.withNothing();
        setState(localState);
        return;
      }

      localState = localState.withTransactionHash(
        AsyncSnapshot.withError(AsyncState.done, err as Error),
      );
      setState(localState);
      return;
    }

    localState = localState.withTransactionHash(
      AsyncSnapshot.withData(AsyncState.done, transactionHash),
    );
    localState = localState.withTransactionReceipt(AsyncSnapshot.waiting());
    setState(localState);

    // Retrieve the Receipt
    let receipt: null | TransactionReceipt = null;
    try {
      receipt = await performRetrievalWithRetries(() =>
        getTransactionReceipt(wagmiConfig, {
          hash: transactionHash as `0x${string}`,
        }),
      );
    } catch (err) {
      // Inspect the specific error type to see if its a non-recoverable
      localState = localState.withTransactionReceipt(
        AsyncSnapshot.withError(AsyncState.waiting, err as Error),
      );
      setState(localState);
    }

    if (!receipt) {
      localState = localState.withTransactionReceipt(
        AsyncSnapshot.withError(
          AsyncState.done,
          new Error('Failed to retrieve transaction receipt'),
        ),
      );
      return;
    }

    localState = localState.withTransactionReceipt(
      AsyncSnapshot.withData(AsyncState.done, receipt),
    );

    localState = localState.withTransaction(AsyncSnapshot.waiting());
    setState(localState);

    // Retrieve the Transaction
    let transaction: null | Transaction = null;
    try {
      transaction = await performRetrievalWithRetries(() =>
        getTransaction(wagmiConfig, {
          hash: transactionHash,
        }),
      );
    } catch (err) {
      // Inspect the specific error type to see if its a non-recoverable
      localState = localState.withTransaction(
        AsyncSnapshot.withError(AsyncState.waiting, err as Error),
      );
      setState(localState);
    }

    if (!transaction) {
      localState = localState.withTransaction(
        AsyncSnapshot.withError(
          AsyncState.done,
          new Error('Failed to retrieve transaction'),
        ),
      );
      setState(localState);
      return;
    }

    localState = localState.withTransaction(
      AsyncSnapshot.withData(AsyncState.done, transaction),
    );
    setState(localState);
    onSuccess(transactionHash, receipt, transaction);
  };
}

export type TransactionHash = `0x${string}`;
export type TransactionReceipt = Awaited<
  ReturnType<typeof getTransactionReceipt>
>;
export type Transaction = Awaited<ReturnType<typeof getTransaction>>;

/**
 * We want to handle generic writeContract operations in more-or-less the
 * same way.  That way our processing logic can be shared, and have a
 * consistent unified representation that makes it easier to follow.
 */
export class WriteContractAsyncState {
  public readonly transactionHash: AsyncSnapshot<TransactionHash>;
  public readonly receipt: AsyncSnapshot<TransactionReceipt>;
  public readonly transaction: AsyncSnapshot<Transaction>;

  private constructor(
    transactionHash: AsyncSnapshot<TransactionHash>,
    receipt: AsyncSnapshot<TransactionReceipt>,
    transaction: AsyncSnapshot<Transaction>,
  ) {
    this.transactionHash = transactionHash;
    this.receipt = receipt;
    this.transaction = transaction;
    Object.freeze(this);
  }

  static withNothing(): WriteContractAsyncState {
    return new WriteContractAsyncState(
      AsyncSnapshot.nothing(),
      AsyncSnapshot.nothing(),
      AsyncSnapshot.nothing(),
    );
  }

  private with(object: {
    transactionHash?: AsyncSnapshot<TransactionHash>;
    receipt?: AsyncSnapshot<TransactionReceipt>;
    transaction?: AsyncSnapshot<Transaction>;
  }): WriteContractAsyncState {
    const {
      transactionHash = this.transactionHash,
      receipt = this.receipt,
      transaction = this.transaction,
    } = object;

    return new WriteContractAsyncState(transactionHash, receipt, transaction);
  }

  withTransactionHash(
    transactionHash: AsyncSnapshot<TransactionHash>,
  ): WriteContractAsyncState {
    return this.with({ transactionHash });
  }

  withTransactionReceipt(
    receipt: AsyncSnapshot<TransactionReceipt>,
  ): WriteContractAsyncState {
    return this.with({ receipt });
  }

  withTransaction(
    transaction: AsyncSnapshot<Transaction>,
  ): WriteContractAsyncState {
    return this.with({ transaction });
  }
}

export const WriteContractAsyncStateContext =
  React.createContext<WriteContractAsyncState>(
    WriteContractAsyncState.withNothing(),
  );
export const WriteContractAsyncComponentIdleContext =
  React.createContext<React.FC>(() => <></>);

export const WriteContractAsyncSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<WriteContractAsyncState>>
>(() => {});

export const WriteContractAsyncComponentInvokingContext =
  React.createContext<React.FC>(() => (
    <ol>
      <li>
        <TransactionHashText />
      </li>
    </ol>
  ));

export const WriteContractAsyncComponentReceiptContext =
  React.createContext<React.FC>(() => (
    <ol>
      <li>
        <TransactionHashText />
      </li>
      <li>
        <TransactionReceiptText />
      </li>
    </ol>
  ));

export const WriteContractAsyncComponentTransactionContext =
  React.createContext<React.FC>(() => (
    <ol>
      <li>
        <TransactionHashText />
      </li>
      <li>
        <TransactionReceiptText />
      </li>
      <li>
        <TransactionText />
      </li>
    </ol>
  ));

interface WriteContractAsyncProps {
  initialState?: WriteContractAsyncState;
}

export const WriteContractAsync: React.FC<WriteContractAsyncProps> = (
  props: WriteContractAsyncProps,
) => {
  const { initialState = WriteContractAsyncState.withNothing() } = props;
  const [state, setState] = React.useState(initialState);

  // We inspect the states to figure out what state we're in, and how we
  // want to progress.
  return (
    <WriteContractAsyncStateContext.Provider value={state}>
      <WriteContractAsyncSetStateContext.Provider value={setState}>
        <WriteContractAsyncContent />
      </WriteContractAsyncSetStateContext.Provider>
    </WriteContractAsyncStateContext.Provider>
  );
};

const WriteContractAsyncContent: React.FC = () => {
  const state = React.useContext(WriteContractAsyncStateContext);
  const Idle = React.useContext(WriteContractAsyncComponentIdleContext);
  const Invoking = React.useContext(WriteContractAsyncComponentInvokingContext);
  const Receipt = React.useContext(WriteContractAsyncComponentReceiptContext);
  const Transaction = React.useContext(
    WriteContractAsyncComponentTransactionContext,
  );

  if (state.transaction.asyncState !== AsyncState.none) {
    // We're processing the transaction data
    return <Transaction />;
  }

  if (state.receipt.asyncState !== AsyncState.none) {
    // We're processing the transaction hash
    return <Receipt />;
  }

  if (state.transactionHash.asyncState !== AsyncState.none) {
    // We're processing the transaction receipt
    return <Invoking />;
  }

  // We're idling, waiting for the invocation to be kicked off.
  return <Idle />;
};
