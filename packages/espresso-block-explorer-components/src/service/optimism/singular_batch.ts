import { uint8ArrayToArrayBufferCodec } from '@/convert/codec/uint8_array';
import { createBufferedDataView } from '@/convert/data_view/buffered_data_view';
import { Endianess } from '@/convert/data_view/endianess';
import { createRLPDeserializer } from '@/convert/rlp/rlp';

/**
 * OptimismSingularBatch represents a singular batch in Optimism.
 * It is based on the project's SingularBatch definition.  Based on
 * this definition:
 * https://github.com/ethereum-optimism/optimism/blob/09d9b1effeeb3b848c6a2e0b9d4a02ca327d37be/op-node/rollup/derive/singular_batch.go#L22
 */
export class OptimismSingularBatch {
  readonly parentHash: ArrayBuffer;
  readonly epochNum: bigint;
  readonly epochHash: ArrayBuffer;
  readonly timestamp: bigint;
  readonly transactions: ArrayBuffer[];

  constructor(
    parentHash: ArrayBuffer,
    epochNum: bigint,
    epochHash: ArrayBuffer,
    timestamp: bigint,
    transactions: ArrayBuffer[],
  ) {
    this.parentHash = parentHash;
    this.epochNum = epochNum;
    this.epochHash = epochHash;
    this.timestamp = timestamp;
    this.transactions = transactions;
    Object.freeze(this);
  }
}

/**
 * decodeOptimismSingularBatch decodes a SingularBatch from a byte array
 * using RLP deserialization.
 */
export function decodeOptimismSingularBatch(
  data: Uint8Array,
): OptimismSingularBatch {
  const deserializer = createRLPDeserializer(
    createBufferedDataView(new Uint8Array(data).buffer, Endianess.big),
  );

  const parentHash = uint8ArrayToArrayBufferCodec.encode(
    deserializer.deserializeBytes(),
  );
  const epochNum = deserializer.deserializeUint64();
  const epochHash = uint8ArrayToArrayBufferCodec.encode(
    deserializer.deserializeBytes(),
  );
  const timestamp = deserializer.deserializeUint64();

  return new OptimismSingularBatch(
    parentHash,
    epochNum,
    epochHash,
    timestamp,
    [],
  );
}
