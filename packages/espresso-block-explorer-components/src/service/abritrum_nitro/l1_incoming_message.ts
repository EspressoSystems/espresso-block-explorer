import { assertNotNull } from '@/assert/assert';
import { uint8ArrayToArrayBufferCodec } from '@/convert/codec/uint8_array';
import { createBufferedDataView, Endianess } from '@/convert/data_view';
import { createRLPDeserializer } from '@/convert/rlp';
import WalletAddress from '@/models/wallet_address/wallet_address';

/**
 * NitroL1IncomingMessageHeader represents the header of a Nitro L1
 * Incoming Message.
 *
 * This layout is adapted from the Nitro's code base:
 * https://github.com/OffchainLabs/nitro/blob/52a6bd81a304053f003ec0b3995e9fedca2f8eee/arbos/arbostypes/incomingmessage.go#L38-L45
 */
export class NitroL1IncomingMessageHeader {
  readonly kind: number;
  readonly poster: WalletAddress;
  readonly blockNumber: bigint;
  readonly timestamp: bigint;
  readonly requestID: null | ArrayBuffer;
  readonly l1BaseFee: null | bigint;

  constructor(
    kind: number,
    poster: WalletAddress,
    blockNumber: bigint,
    timestamp: bigint,
    requestID: null | ArrayBuffer = null,
    l1BaseFee: null | bigint = null,
  ) {
    this.kind = kind;
    this.poster = poster;
    this.blockNumber = blockNumber;
    this.timestamp = timestamp;
    this.requestID = requestID;
    this.l1BaseFee = l1BaseFee;
    Object.freeze(this);
  }
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

    return new NitroL1IncomingMessageHeader(
      kind,
      new WalletAddress(uint8ArrayToArrayBufferCodec.encode(poster)),
      blockNumber,
      timestamp,
      requestID.length > 0
        ? uint8ArrayToArrayBufferCodec.encode(requestID)
        : null,
      l1BaseFee > 0n ? l1BaseFee : null,
    );
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
 * https://github.com/OffchainLabs/nitro/blob/52a6bd81a304053f003ec0b3995e9fedca2f8eee/arbos/arbostypes/incomingmessage.go#L63-L71
 */
export class NitroL1IncomingMessage {
  readonly header: NitroL1IncomingMessageHeader;
  readonly l2Msg: ArrayBuffer;
  readonly batchGasCost: null | bigint;

  constructor(
    header: NitroL1IncomingMessageHeader,
    l2Msg: ArrayBuffer,
    batchGasCost: null | bigint = null,
  ) {
    this.header = header;
    this.l2Msg = l2Msg;
    this.batchGasCost = batchGasCost;
    Object.freeze(this);
  }
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

    return new NitroL1IncomingMessage(
      header,
      uint8ArrayToArrayBufferCodec.encode(l2MessageData),
      null,
    );
  } catch (err) {
    console.error('Failed to decode Nitro L1 Incoming Message', err);
    return null;
  }
}
