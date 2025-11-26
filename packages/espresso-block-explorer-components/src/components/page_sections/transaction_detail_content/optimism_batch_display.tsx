import { CopyHex, DateTimeText, MoneyText } from '@/components/text';
import CopyWalletAddress from '@/components/text/CopyWalletAddress';
import WalletAddressText from '@/components/text/WalletAddressText';
import { uint8ArrayToArrayBufferCodec } from '@/convert/codec';
import { createBufferedDataView, Endianess } from '@/convert/data_view';
import { createRLPDeserializer } from '@/convert/rlp';
import TableLabeledValue from '@/layout/table_labeled_value/TableLabeledValue';
import { decodeEthHeader, EthHeader } from '@/service/ethereum/header';
import {
  decodeEthTransaction,
  EthTransaction,
} from '@/service/ethereum/transaction';
import {
  OptimismDepositTx,
  optimismTransactionExtension,
} from '@/service/optimism/deposit';
import {
  decodeOptimismSingularBatch,
  OptimismSingularBatch,
} from '@/service/optimism/singular_batch';
import HexText from '@/text/HexText';
import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
import React from 'react';
import { TransactionDetailContext } from './TransactionDetailLoader';
import { HexDumpAndCopyButtons } from './copy_as';
import {
  EthHeaderContext,
  EthHeaderDisplay,
  EthTransactionContext,
  EthTransactionDisplay,
  EthTransactionExtensionComponentContext,
} from './ethereum_display';

/**
 * OptimismEspressoBatchV0 represents the data that is submitted to Espresso
 * from optimism.
 */
export class OptimismEspressoBatchV0 {
  readonly batchHeader: EthHeader;
  readonly singularBatch: OptimismSingularBatch;
  readonly l1DepositInfo: EthTransaction;

  constructor(
    batchHeader: EthHeader,
    singularBatch: OptimismSingularBatch,
    l1DepositInfo: EthTransaction,
  ) {
    this.batchHeader = batchHeader;
    this.singularBatch = singularBatch;
    this.l1DepositInfo = l1DepositInfo;
    Object.freeze(this);
  }
}

/**
 * decodeOptimismEspressoBatch decodes an OptimismEspressoBatchV0 from the
 * given payload it is assumed to be RLP encoded.
 */
export function decodeOptimismEspressoBatch(
  payload: Uint8Array,
): OptimismEspressoBatchV0 {
  const deserializer0 = createRLPDeserializer(
    createBufferedDataView(new Uint8Array(payload).buffer, Endianess.big),
  );

  const structBytes = deserializer0.deserializeBytes();

  const deserializer = createRLPDeserializer(
    createBufferedDataView(new Uint8Array(structBytes).buffer, Endianess.big),
  );

  const batchHeaderBytes = deserializer.deserializeBytes();
  const singularBatchBytes = deserializer.deserializeBytes();
  const l1DepositInfoBytes = deserializer.deserializeBytes();

  return new OptimismEspressoBatchV0(
    decodeEthHeader(batchHeaderBytes),
    decodeOptimismSingularBatch(singularBatchBytes),
    decodeEthTransaction(
      l1DepositInfoBytes,
      undefined,
      optimismTransactionExtension,
    ),
  );
}

/**
 * OptimismBatchV0 represents an OptimismBatch that is submitted to Espresso.
 * It contains a signature and the OptimismEspressoBatch.
 */
export class OptimismBatchV0 {
  readonly signature: ArrayBuffer;
  readonly batch: OptimismEspressoBatchV0;

  constructor(signature: ArrayBuffer, batch: OptimismEspressoBatchV0) {
    this.signature = signature;
    this.batch = batch;
    Object.freeze(this);
  }
}

/**
 * extractOptimismBatch extracts an OptimismBatchV0 from the given payload.
 */
export function extractOptimismBatch(
  payload: Uint8Array,
): null | OptimismBatchV0 {
  let i = 0;
  const signatureLength = 65;

  // 32 bytes for the signature
  const signature = payload.subarray(i, i + Number(signatureLength));
  // Validate the Signature?
  i += signature.byteLength;

  const batchBytes = new Uint8Array(payload.subarray(i));

  return new OptimismBatchV0(
    uint8ArrayToArrayBufferCodec.encode(signature),
    decodeOptimismEspressoBatch(batchBytes),
  );
}

/**
 * OptimismBatchDecodeAndDisplay is a component that displays the Optimism Batch
 * information successfully parsed from data stored within a
 * TransactionDetail.
 */
export const OptimismBatchDecodeAndDisplay: React.FC = () => {
  const details = React.useContext(TransactionDetailContext);
  const data = details.tree;

  if (data.namespace !== 22266222) {
    // Only Display information for Nitro based project namespaces.
    return <></>;
  }

  const nitroBatch = extractOptimismBatch(new Uint8Array(data.data));
  if (!nitroBatch) {
    return <></>;
  }

  return (
    <OptimismBatchContext.Provider value={nitroBatch}>
      <TableLabeledValue className="card--padding nitro--section">
        <Text text="OptimismBatch" />
        <OptimismBatchDisplay />
      </TableLabeledValue>
    </OptimismBatchContext.Provider>
  );
};

/**
 * OptimismBatchContext provides a React context for an OptimismBatchV0.
 */
export const OptimismBatchContext = React.createContext<null | OptimismBatchV0>(
  null,
);

/**
 * OptimismBatchDisplay provides a React component to display an
 * OptimismBatchV0.
 */
export const OptimismBatchDisplay: React.FC = () => {
  const optimismBatch = React.useContext(OptimismBatchContext);
  if (!optimismBatch) {
    return <></>;
  }

  return (
    <>
      <TableLabeledValue>
        <Text text="Signature" />
        <HexDumpAndCopyButtons data={optimismBatch.signature} />
      </TableLabeledValue>

      {/* Singular Batch Data */}
      <OptimismSingularBatchContext.Provider
        value={optimismBatch.batch.singularBatch}
      >
        <OptimismSingularBatchDisplay />
      </OptimismSingularBatchContext.Provider>

      {/* ETH Header Fields */}
      <EthHeaderContext.Provider value={optimismBatch.batch.batchHeader}>
        <EthHeaderDisplay />
      </EthHeaderContext.Provider>

      {/* ETH Transaction Display */}
      <EthTransactionContext.Provider value={optimismBatch.batch.l1DepositInfo}>
        <EthTransactionExtensionComponentContext.Provider
          value={OptimismTransactionExtensionComponent}
        >
          <EthTransactionDisplay />
        </EthTransactionExtensionComponentContext.Provider>
      </EthTransactionContext.Provider>
    </>
  );
};

/**
 * OptimismSingularBatchContext provides a React context for an
 * OptimismSingularBatch.
 */
export const OptimismSingularBatchContext =
  React.createContext<null | OptimismSingularBatch>(null);
/**
 * OptimismSingularBatchDisplay provides a React component to display an
 * OptimismSingularBatch.
 */

export const OptimismSingularBatchDisplay: React.FC = () => {
  const singularBatch = React.useContext(OptimismSingularBatchContext);
  if (!singularBatch) {
    return <></>;
  }

  return (
    <TableLabeledValue>
      <Text text="Singular Batch" />
      <>
        <TableLabeledValue>
          <Text text="Parent Hash" />
          <CopyHex value={singularBatch.parentHash}>
            <HexText value={singularBatch.parentHash} />
          </CopyHex>
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Epoch Number" />
          <NumberText number={singularBatch.epochNum} />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Epoch Hash" />
          <CopyHex value={singularBatch.epochHash}>
            <HexText value={singularBatch.epochHash} />
          </CopyHex>
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Timestamp" />
          <DateTimeText
            date={new Date(Number(singularBatch.timestamp) * 1000)}
          />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Number of Transactions" />
          <NumberText number={singularBatch.transactions.length} />
        </TableLabeledValue>
      </>
    </TableLabeledValue>
  );
};

/**
 * OptimismDepositTransactionContext provides a React context for an
 * OptimismDepositTx.
 */
export const OptimismDepositTransactionContext =
  React.createContext<null | OptimismDepositTx>(null);

/**
 * OptimismTransactionExtensionComponent provides a React component to display
 * an extension to an Ethereum transaction for Optimism deposit transactions.
 */
const OptimismTransactionExtensionComponent: React.FC = () => {
  const tx = React.useContext(EthTransactionContext);
  if (tx instanceof OptimismDepositTx) {
    return (
      <OptimismDepositTransactionContext.Provider value={tx}>
        <OptimismDepositTransactionDisplay />
      </OptimismDepositTransactionContext.Provider>
    );
  }

  return <></>;
};

/**
 * OptimismDepositTransactionDisplay provides a React component to display an
 * OptimismDepositTx.
 */
export const OptimismDepositTransactionDisplay: React.FC = () => {
  const depositTx = React.useContext(OptimismDepositTransactionContext);
  if (!depositTx) {
    return <></>;
  }

  return (
    <TableLabeledValue>
      <Text text="Optimism Deposit Transaction" />
      <>
        <TableLabeledValue>
          <Text text="Source Hash" />
          <CopyHex value={depositTx.sourceHash}>
            <HexText value={depositTx.sourceHash} />
          </CopyHex>
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="From" />
          <CopyWalletAddress value={depositTx.from}>
            <WalletAddressText value={depositTx.from} />
          </CopyWalletAddress>
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="To" />
          {!depositTx.to ? (
            <Text text="-" />
          ) : (
            <CopyWalletAddress value={depositTx.to}>
              <WalletAddressText value={depositTx.to} />
            </CopyWalletAddress>
          )}
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Mint" />
          {depositTx.mint !== null ? (
            <MoneyText money={depositTx.mint} />
          ) : (
            <Text text="N/A" />
          )}
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Value" />
          {depositTx.value !== null ? (
            <MoneyText money={depositTx.value} />
          ) : (
            <Text text="N/A" />
          )}
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Gas" />
          <MoneyText money={depositTx.gas} />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Is System Transaction" />
          <Text text={depositTx.isSystemTransaction ? 'Yes' : 'No'} />
        </TableLabeledValue>
        <br />
        <Text text="Data" />
        <br />
        <br />
        <HexDumpAndCopyButtons data={depositTx.data} />
      </>
    </TableLabeledValue>
  );
};
