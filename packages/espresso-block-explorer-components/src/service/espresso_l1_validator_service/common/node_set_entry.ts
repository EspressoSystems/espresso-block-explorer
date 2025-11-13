import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec';
import { stdBase64ArrayBufferCodec } from '@/convert/codec/array_buffer';
import { bigintCodec } from '@/convert/codec/bigint';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { TaggedBase64, taggedBase64Codec } from '@/models/espresso';
import { Ratio, ratioCodec } from './ratio';

/**
 * NodeSetEntry represents a single entry in the node set.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e980e3b356cf32d1531d95
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L26-L38
 */
export class NodeSetEntry {
  constructor(
    public readonly address: ArrayBuffer,
    public readonly stakingKey: TaggedBase64,
    public readonly stake: bigint,
    public readonly commission: Ratio,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return nodeSetEntryJSONCodec.encode(this);
  }
}

/**
 * NodeSetEntryJSONDecoder decodes NodeSetEntry objects from a JSON
 * object.
 */
class NodeSetEntryJSONDecoder implements Converter<unknown, NodeSetEntry> {
  convert(input: unknown): NodeSetEntry {
    assertRecordWithKeys(
      input,
      'address',
      'staking_key',
      'stake',
      'commission',
    );

    return new NodeSetEntry(
      stdBase64ArrayBufferCodec.decode(input.address),
      taggedBase64Codec.decode(input.staking_key),
      bigintCodec.decode(input.stake),
      ratioCodec.decode(input.commission),
    );
  }
}

/**
 * NodeSetEntryJSONEncoder encodes NodeSetEntry objects to a JSON
 * object.
 */
class NodeSetEntryJSONEncoder implements Converter<NodeSetEntry, unknown> {
  convert(input: NodeSetEntry): unknown {
    return {
      address: stdBase64ArrayBufferCodec.encode(input.address),
      staking_key: taggedBase64Codec.encode(input.stakingKey),
      stake: bigintCodec.encode(input.stake),
      commission: ratioCodec.encode(input.commission),
    };
  }
}

/**
 * NodeSetEntryJSONCodec is a codec that encodes and decodes
 * NodeSetEntry objects to and from JSON.
 */
class NodeSetEntryJSONCodec extends TypeCheckingCodec<NodeSetEntry, unknown> {
  readonly encoder = new NodeSetEntryJSONEncoder();
  readonly decoder = new NodeSetEntryJSONDecoder();
}

/**
 * nodeSetEntryJSONCodec is a codec that encodes and decodes
 * NodeSetEntry objects to and from JSON.
 */
export const nodeSetEntryJSONCodec = new NodeSetEntryJSONCodec();

/**
 * nodeSetEntryArrayJSONCodec is a codec that encodes and decodes
 * arrays of NodeSetEntry objects to and from JSON.
 */
export const nodeSetEntryArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(nodeSetEntryJSONCodec),
  new ArrayEncoder(nodeSetEntryJSONCodec),
);
