import { uint8ArrayToArrayBufferCodec } from '@/convert/codec/uint8_array';
import { createBufferedDataView } from '@/convert/data_view/buffered_data_view';
import { Endianess } from '@/convert/data_view/endianess';
import { createRLPDeserializer } from '@/convert/rlp/rlp';
import MonetaryValue from '@/models/block_explorer/monetary_value';

/**
 * ETHHeader represents an Ethereum block header as defined within the
 * go-ethereum project:
 * https://github.com/ethereum/go-ethereum/blob/1e4b39ed122f475ac3f776ae66c8d065e845a84e/core/types/block.go#L75
 */
export class EthHeader {
  readonly parentHash: ArrayBuffer;
  readonly shas3Uncles: ArrayBuffer;
  readonly miner: ArrayBuffer;
  readonly stateRoot: ArrayBuffer;
  readonly transactionsRoot: ArrayBuffer;
  readonly receiptsRoot: ArrayBuffer;
  readonly logsBloom: ArrayBuffer;
  readonly difficulty: bigint;
  readonly number: bigint;
  readonly gasLimit: MonetaryValue;
  readonly gasUsed: MonetaryValue;
  readonly timestamp: bigint;
  readonly extra: ArrayBuffer;
  readonly mixDigest: ArrayBuffer;
  readonly nonce: bigint;

  readonly baseFeePerGas: null | bigint;
  readonly withdrawalsRoot: null | ArrayBuffer;
  readonly blobGasUsed: null | bigint;
  readonly excessBlobGas: null | bigint;
  readonly parentBeaconBlockRoot: null | ArrayBuffer;
  readonly requestHash: null | ArrayBuffer;
  constructor(
    parentHash: ArrayBuffer,
    shas3Uncles: ArrayBuffer,
    miner: ArrayBuffer,
    stateRoot: ArrayBuffer,
    transactionsRoot: ArrayBuffer,
    receiptsRoot: ArrayBuffer,
    logsBloom: ArrayBuffer,
    difficulty: bigint,
    number: bigint,
    gasLimit: MonetaryValue,
    gasUsed: MonetaryValue,
    timestamp: bigint,
    extra: ArrayBuffer,
    mixDigest: ArrayBuffer,
    nonce: bigint,
    baseFeePerGas: null | bigint,
    withdrawalsRoot: null | ArrayBuffer,
    blobGasUsed: null | bigint,
    excessBlobGas: null | bigint,
    parentBeaconBlockRoot: null | ArrayBuffer,
    requestHash: null | ArrayBuffer,
  ) {
    this.parentHash = parentHash;
    this.shas3Uncles = shas3Uncles;
    this.miner = miner;
    this.stateRoot = stateRoot;
    this.transactionsRoot = transactionsRoot;
    this.receiptsRoot = receiptsRoot;
    this.logsBloom = logsBloom;
    this.difficulty = difficulty;
    this.number = number;
    this.gasLimit = gasLimit;
    this.gasUsed = gasUsed;
    this.timestamp = timestamp;
    this.extra = extra;
    this.mixDigest = mixDigest;
    this.nonce = nonce;

    this.baseFeePerGas = baseFeePerGas;
    this.withdrawalsRoot = withdrawalsRoot;
    this.blobGasUsed = blobGasUsed;
    this.excessBlobGas = excessBlobGas;
    this.parentBeaconBlockRoot = parentBeaconBlockRoot;
    this.requestHash = requestHash;

    Object.freeze(this);
  }
}

/**
 * decodeEthHeader decodes an Ethereum block Header from the given byte array
 * utilizing RLP deserialization.
 */
export function decodeEthHeader(
  data: Uint8Array,
  mn: (n: bigint) => MonetaryValue = MonetaryValue.ETH,
): EthHeader {
  const deserializer = createRLPDeserializer(
    createBufferedDataView(new Uint8Array(data).buffer, Endianess.big),
  );

  return new EthHeader(
    uint8ArrayToArrayBufferCodec.encode(deserializer.deserializeBytes()),
    uint8ArrayToArrayBufferCodec.encode(deserializer.deserializeBytes()),
    uint8ArrayToArrayBufferCodec.encode(deserializer.deserializeBytes()),
    uint8ArrayToArrayBufferCodec.encode(deserializer.deserializeBytes()),
    uint8ArrayToArrayBufferCodec.encode(deserializer.deserializeBytes()),
    uint8ArrayToArrayBufferCodec.encode(deserializer.deserializeBytes()),
    uint8ArrayToArrayBufferCodec.encode(deserializer.deserializeBytes()),
    deserializer.deserializeUint64(),
    deserializer.deserializeUint64(),
    mn(deserializer.deserializeUint64()),
    mn(deserializer.deserializeUint64()),
    deserializer.deserializeUint64(),

    uint8ArrayToArrayBufferCodec.encode(deserializer.deserializeBytes()),
    uint8ArrayToArrayBufferCodec.encode(deserializer.deserializeBytes()),
    deserializer.deserializeUint64(),

    null, // Not used in this context
    null, // Not used in this context
    null, // Not used in this context
    null, // Not used in this context
    null, // Not used in this context
    null, // Not used in this context
  );
}
