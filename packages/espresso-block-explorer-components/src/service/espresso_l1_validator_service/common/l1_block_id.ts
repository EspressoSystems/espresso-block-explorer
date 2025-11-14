import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { bigintCodec } from '@/convert/codec/bigint';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';

/**
 * L1BlockID contains information about an L1 block.
 *
 * This type is defined by the Espresso L1 Validator Service API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e98063aeccd2c7cbfc86c5
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L55-L64
 */
export class L1BlockID {
  constructor(
    public readonly number: bigint,
    public readonly hash: ArrayBuffer,
    public readonly parent: ArrayBuffer,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return l1BlockIDJSONCodec.encode(this);
  }
}

/**
 * L1BlockIDJSONDecoder decodes L1BlockId objects from a JSON object.
 */
class L1BlockIDJSONDecoder implements Converter<unknown, L1BlockID> {
  convert(input: unknown): L1BlockID {
    assertRecordWithKeys(input, 'number', 'hash', 'parent');

    return new L1BlockID(
      bigintCodec.decode(input.number),
      hexArrayBufferCodec.decode(input.hash),
      hexArrayBufferCodec.decode(input.parent),
    );
  }
}

/**
 * L1BlockIDJSONEncoder encodes L1BlockId objects to a JSON object.
 */
class L1BlockIDJSONEncoder implements Converter<L1BlockID, unknown> {
  convert(input: L1BlockID): unknown {
    return {
      number: bigintCodec.encode(input.number),
      hash: hexArrayBufferCodec.encode(input.hash),
      parent: hexArrayBufferCodec.encode(input.parent),
    };
  }
}

/**
 * L1BlockIDJSONCodec is a codec that encodes and decodes L1BlockId
 * objects to and from JSON.
 */
export class L1BlockIDJSONCodec extends TypeCheckingCodec<L1BlockID, unknown> {
  readonly encoder = new L1BlockIDJSONEncoder();
  readonly decoder = new L1BlockIDJSONDecoder();
}

/**
 * L1BlockIdJSONCodec is a codec that encodes and decodes L1BlockId
 * objects to and from JSON.
 */
export const l1BlockIDJSONCodec = new L1BlockIDJSONCodec();
