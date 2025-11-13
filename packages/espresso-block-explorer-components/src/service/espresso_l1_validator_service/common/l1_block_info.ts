import {
  bigintCodec,
  numberCodec,
  stdBase64ArrayBufferCodec,
} from '@/convert/codec';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';

/**
 * L1BlockInfo contains information about an L1 block.
 *
 * This type is defined by the Espresso L1 Validator Service API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2952431b68e980c08eb2f6a6c62b9abe
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L42-L51
 */
export class L1BlockInfo {
  constructor(
    public readonly number: bigint,
    public readonly hash: ArrayBuffer,
    public readonly timestamp: Date,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return l1BlockInfoJSONCodec.encode(this);
  }
}

/**
 * L1BlockInfoJSONDecoder decodes L1BlockInfo objects from a JSON object.
 */
class L1BlockInfoJSONDecoder implements Converter<unknown, L1BlockInfo> {
  convert(input: unknown): L1BlockInfo {
    assertRecordWithKeys(input, 'number', 'hash', 'timestamp');

    return new L1BlockInfo(
      bigintCodec.decode(input.number),
      stdBase64ArrayBufferCodec.decode(input.hash),
      new Date(numberCodec.decode(input.timestamp)),
    );
  }
}

/**
 * L1BlockInfoJSONEncoder encodes L1BlockInfo objects to a JSON object.
 */
class L1BlockInfoJSONEncoder implements Converter<L1BlockInfo, unknown> {
  convert(input: L1BlockInfo): unknown {
    return {
      number: bigintCodec.encode(input.number),
      hash: stdBase64ArrayBufferCodec.encode(input.hash),
      timestamp: numberCodec.encode(input.timestamp.valueOf()),
    };
  }
}

/**
 * L1BlockInfoJSONCodec is a codec that encodes and decodes L1BlockInfo
 * objects to and from JSON.
 */
export class L1BlockInfoJSONCodec extends TypeCheckingCodec<
  L1BlockInfo,
  unknown
> {
  readonly encoder = new L1BlockInfoJSONEncoder();
  readonly decoder = new L1BlockInfoJSONDecoder();
}

/**
 * l1BlockInfoJSONCodec is a codec that encodes and decodes L1BlockInfo
 * objects to and from JSON.
 */
export const l1BlockInfoJSONCodec = new L1BlockInfoJSONCodec();
