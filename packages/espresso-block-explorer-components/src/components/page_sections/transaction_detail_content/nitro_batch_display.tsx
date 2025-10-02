import { assertNotNull } from '@/assert/assert';
import { DateTimeText } from '@/components/text';
import WalletAddressText from '@/components/text/WalletAddressText';
import { createBufferedDataView, Endianess } from '@/convert/data_view';
import { createRLPDeserializer } from '@/convert/rlp';
import TableLabeledValue from '@/layout/table_labeled_value/TableLabeledValue';
import { isNitroIntegrationNamespace } from '@/models/block_explorer/rollup_entry/data';
import WalletAddress from '@/models/wallet_address/wallet_address';
import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
import React from 'react';
import { TransactionDetailContext } from './TransactionDetailLoader';
import { HexDumpAndCopyButtons } from './copy_as';

/**
 * NitroL1IncomingMessageHeader represents the header of a Nitro L1
 * Incoming Message.
 *
 * This layout is adapted from the Nitro's code base:
 * https://github.com/EspressoSystems/nitro-espresso-integration/blob/828cc2a47358a8aac2a4931fe087f07037351164/arbos/arbostypes/incomingmessage.go#L38-L45
 */
export interface NitroL1IncomingMessageHeader {
  readonly kind: number;
  readonly poster: Uint8Array;
  readonly blockNumber: bigint;
  readonly timestamp: bigint;
  readonly requestID: null | Uint8Array;
  readonly l1BaseFee: null | bigint;
}

/**
 * decodeNitroL1IncomingMessageHeader attempts to decode a Nitro L1
 * Incoming Message Header from the provided data.
 *
 * This data is RLP encoded.
 */
export function decodeNitroL1IncomingMessageHeader(
  data: Uint8Array,
): null | NitroL1IncomingMessageHeader {
  const deserializer = createRLPDeserializer(
    createBufferedDataView(new Uint8Array(data).buffer, Endianess.big),
  );

  try {
    const kind = deserializer.deserializeUint8();
    const poster = deserializer.deserializeBytes();
    const blockNumber = deserializer.deserializeUint64();
    const timestamp = deserializer.deserializeUint64();
    const requestID = deserializer.deserializeBytes();
    const l1BaseFee = deserializer.deserializeUint64();

    return {
      kind,
      poster,
      blockNumber,
      timestamp,
      requestID: requestID.length > 0 ? requestID : null,
      l1BaseFee: l1BaseFee > 0n ? l1BaseFee : null,
    };
  } catch (err) {
    console.debug(
      'failed to decode nitro l1 incoming message header due to error',
      err,
    );
    return null;
  }
}

/**
 * NitroL1IncomingMessage represents a Nitro L1 Incoming Message.
 *
 * This layout is adapted from the Nitro's code base:
 * https://github.com/EspressoSystems/nitro-espresso-integration/blob/828cc2a47358a8aac2a4931fe087f07037351164/arbos/arbostypes/incomingmessage.go#L58-L64
 */
export interface NitroL1IncomingMessage {
  readonly header: NitroL1IncomingMessageHeader;
  readonly l2Msg: Uint8Array;
  readonly batchGasCost: null | bigint;
}

/**
 * decodeNitroL1IncomingMessage attempts to decode a Nitro L1
 * Incoming Message from the provided data.
 *
 * This data is RLP encoded.
 */
export function decodeNitroL1IncomingMessage(
  data: Uint8Array,
): null | NitroL1IncomingMessage {
  const deserializer = createRLPDeserializer(
    createBufferedDataView(new Uint8Array(data).buffer, Endianess.big),
  );

  try {
    const headerData = deserializer.deserializeBytes();
    const l2MessageData = deserializer.deserializeBytes();
    // const batchGasCost = deserializer.deserializeUint64();

    const header = decodeNitroL1IncomingMessageHeader(headerData);
    assertNotNull(header);

    return {
      header,
      l2Msg: l2MessageData,
      batchGasCost: null,
    };
  } catch (err) {
    console.error('Failed to decode Nitro L1 Incoming Message', err);
    return null;
  }
}

/**
 * NitroMessageWithMetadata represents a Nitro Message with metadata
 * that is stored as part of a batch submitted for Nitro integration projects.
 *
 * This layout is adapted from the Nitro's code base:
 * https://github.com/EspressoSystems/nitro-espresso-integration/blob/828cc2a47358a8aac2a4931fe087f07037351164/arbos/arbostypes/messagewithmeta.go#L17-L20
 */
export interface NitroMessageWithMetadata {
  readonly message: NitroL1IncomingMessage;
  readonly delayedMessagesRead: bigint;
}

/**
 * decodeNitroMessageWithMetadata attempts to decode a Nitro Message with
 * metadata from the provided data.
 *
 * This data is RLP encoded.
 */
export function decodeNitroMessageWithMetadata(
  data: Uint8Array,
): null | NitroMessageWithMetadata {
  const deserializer = createRLPDeserializer(
    createBufferedDataView(new Uint8Array(data).buffer, Endianess.big),
  );

  try {
    const messageWithMetadataRLP = deserializer.deserializeBytes();
    const messageWithMetadataDeserializer = createRLPDeserializer(
      createBufferedDataView(
        new Uint8Array(messageWithMetadataRLP).buffer,
        Endianess.big,
      ),
    );

    const messageData = messageWithMetadataDeserializer.deserializeBytes();
    const delayedMessagesRead =
      messageWithMetadataDeserializer.deserializeUint64();

    const message = decodeNitroL1IncomingMessage(messageData);
    assertNotNull(message);
    return {
      message,
      delayedMessagesRead,
    };
  } catch (err) {
    console.debug('Failed to decode Nitro Message with Metadata', err);
    return null;
  }
}
/**
 * NitroMessageV0 represents an opaque Nitro Message that is stored as part of a
 * batch submitted for Nitro integration projects that are submitted to
 * Espresso.
 */
export interface NitroMessageV0 {
  readonly index: bigint;
  readonly length: bigint;
  readonly contents: Uint8Array;

  readonly messageWithMetadata: null | NitroMessageWithMetadata;
}

/**
 * NitroBatchV0 represents a Nitro Batch that is submitted to Espresso.
 * It contains a signature and a list of NitroMessages.
 */
export interface NitroBatchV0 {
  readonly signature: Uint8Array;
  readonly messages: NitroMessageV0[];
}

/**
 * extractNitroBatch extracts a Nitro Batch from the provided payload.
 */
export function extractNitroBatch(payload: Uint8Array): null | NitroBatchV0 {
  const messages: NitroMessageV0[] = [];

  // Data encoding may change / be modified by different versioning in the
  // future.

  // Data is expected to be a 32 byte Signature
  //
  // Afterwards, until the payload is all accounted for it should be the
  // following elements:
  //
  // - Message Index (uint64)
  // - Message Length (uint64)
  // - Message Contents (Uint8Array of Message Length bytes)

  let i = 0;
  const dv = new DataView(payload.buffer);
  const signatureLength = dv.getBigUint64(0, false);
  i += 8;

  // 32 bytes for the signature
  const signature = payload.subarray(i, i + Number(signatureLength));
  // Validate the Signature?
  i += signature.byteLength;

  const l = payload.byteLength;
  for (; i < l; ) {
    const messageIndex = dv.getBigUint64(i, false);

    i += 8;
    const dataSize = dv.getBigUint64(i, false);
    i += 8;

    const size = Number(dataSize);
    if (i + size > l) {
      console.error(
        'nitro batch data is malformed, message size exceeds data length',
        i,
        size,
        l,
      );
      break;
    }

    const messageContents = payload.subarray(i, i + Number(dataSize));
    i += Number(dataSize);

    const nitroMessageWithMetadata =
      decodeNitroMessageWithMetadata(messageContents);

    messages.push({
      index: messageIndex,
      length: dataSize,
      contents: messageContents,

      messageWithMetadata: nitroMessageWithMetadata,
    });
  }

  return {
    signature,
    messages,
  };
}

/**
 * NitroBatchDisplay is a component that displays the Nitro Batch
 * information successfully parsed from data stored within a
 * TransactionDetail.
 */
export const NitroBatchDetectAndDisplay: React.FC = () => {
  const details = React.useContext(TransactionDetailContext);
  const data = details.tree;

  if (!isNitroIntegrationNamespace(data.namespace)) {
    // Only Display information for Nitro based project namespaces.
    return <></>;
  }

  const nitroBatch = extractNitroBatch(new Uint8Array(data.data));
  if (!nitroBatch) {
    return <></>;
  }

  return (
    <NitroBatchContext.Provider value={nitroBatch}>
      <TableLabeledValue className="card--padding nitro--section">
        <Text text="Nitro Batch" />
        <NitroBatchDisplay />
      </TableLabeledValue>
    </NitroBatchContext.Provider>
  );
};

/**
 * NitroBatchContext is a React Context that contains the Nitro Batch
 * information.
 */
export const NitroBatchContext = React.createContext<null | NitroBatchV0>(null);

/**
 * NitroBatchDisplay is a component that displays the Nitro Batch detail contained
 * within the NitroBatchContext.
 */
export const NitroBatchDisplay: React.FC = () => {
  const nitroBatch = React.useContext(NitroBatchContext);
  if (!nitroBatch) {
    return <></>;
  }

  return (
    <>
      <TableLabeledValue>
        <Text text="Signature" />
        <HexDumpAndCopyButtons data={nitroBatch.signature} />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Number of Messages" />
        <NumberText number={nitroBatch.messages.length} />
      </TableLabeledValue>
      {nitroBatch.messages.map((message, index) => (
        <NitroMessageContext.Provider value={message} key={index}>
          <NitroMessageIndexContext.Provider value={index}>
            <NitroMessageDisplay key={index} />
          </NitroMessageIndexContext.Provider>
        </NitroMessageContext.Provider>
      ))}
    </>
  );
};

/**
 * NitroMessageContext is a React Context that contains the Nitro Message
 * information.
 */
export const NitroMessageContext = React.createContext<null | NitroMessageV0>(
  null,
);

/**
 * NitroMessageIndexContext is a React Context that contains the index offset of
 * the Nitro Message within the batch.
 */
export const NitroMessageIndexContext = React.createContext<number>(0);

/**
 * NitroMessageDisplay is a component that displays the Nitro Message
 * information successfully parsed from data.
 */

export const NitroMessageDisplay: React.FC = () => {
  const index = React.useContext(NitroMessageIndexContext);
  const message = React.useContext(NitroMessageContext);
  if (!message) {
    return null;
  }

  return (
    <TableLabeledValue>
      <>
        <Text text="Message" />
        <Text text="&nbsp;" />
        <NumberText number={index} />
      </>
      <>
        <TableLabeledValue>
          <Text text="Rollup Block Number" />
          <NumberText number={message.index} />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Length" />
          <NumberText number={message.length} />
        </TableLabeledValue>
        <br />
        <HexDumpAndCopyButtons data={message.contents} />
        <br />
        <NitroMessageWithMetadataDisplay data={message.messageWithMetadata} />
      </>
    </TableLabeledValue>
  );
};

export interface NitroMessageWithMetadataDisplayProps {
  data: null | NitroMessageWithMetadata;
}

/**
 * NitroMessageWithMetadataDisplay is a component that displays the Nitro
 * Message with Metadata information successfully parsed from data stored
 * within a TransactionDetail.
 */
export const NitroMessageWithMetadataDisplay: React.FC<
  NitroMessageWithMetadataDisplayProps
> = ({ data }) => {
  if (!data) {
    return <></>;
  }

  return (
    <>
      <br />

      <strong>
        <Text text="Nitro Message with Metadata" />
      </strong>
      <br />

      {/* Header Details */}
      <TableLabeledValue>
        <Text text="Kind" />
        <NumberText number={data.message.header.kind} />
      </TableLabeledValue>

      <TableLabeledValue>
        <Text text="Poster" />
        <WalletAddressText
          value={new WalletAddress(data.message.header.poster.buffer)}
        />
      </TableLabeledValue>

      <TableLabeledValue>
        <Text text="L1 Block Number" />
        <NumberText number={data.message.header.blockNumber} />
      </TableLabeledValue>

      <TableLabeledValue>
        <Text text="Timestamp" />
        <DateTimeText
          date={new Date(Number(data.message.header.timestamp) * 1000)}
        />
      </TableLabeledValue>

      {/* Delayed Messages */}
      <TableLabeledValue>
        <Text text="Delayed Messages Read" />
        <NumberText number={data.delayedMessagesRead} />
      </TableLabeledValue>

      <br />
      <Text text="L2 Message" />
      <br />
      <HexDumpAndCopyButtons data={data.message.l2Msg} />
    </>
  );
};
