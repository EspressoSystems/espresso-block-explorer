import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { Ratio, ratioCodec } from './ratio';

/**
 * ParticipationChange represents a change in validator participation
 * percentage. It includes the validator's address and the new participation
 * percentage.
 *
 * The ParticipationChange type is defined by the Espresso L1 Validator Service
 * API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e9803791a7f90f4d247228
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/a2317eb04e89fae58421080dd8f5db1524748476/src/types/common.rs#L104C12-L110
 */
export class ParticipationChange {
  constructor(
    public readonly node: number,
    public readonly ratio: Ratio,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return participationChangeJSONCodec.encode(this);
  }
}

/**
 * ParticipationChangeJSONDecoder decodes ParticipationChange objects from a
 * JSON object.
 */
class ParticipationChangeJSONDecoder implements Converter<
  unknown,
  ParticipationChange
> {
  convert(input: unknown): ParticipationChange {
    assertRecordWithKeys(input, 'node', 'percentage');

    return new ParticipationChange(
      numberCodec.decode(input.node),
      ratioCodec.decode(input.percentage),
    );
  }
}

/**
 * ParticipationChangeJSONEncoder encodes ParticipationChange objects to a JSON
 * object.
 */
class ParticipationChangeJSONEncoder implements Converter<
  ParticipationChange,
  unknown
> {
  convert(input: ParticipationChange): unknown {
    return {
      node: numberCodec.encode(input.node),
      percentage: ratioCodec.encode(input.ratio),
    };
  }
}

/**
 * ParticipationChangeJSONCodec is a codec that encodes and decodes
 * ParticipationChange objects to and from JSON.
 */
class ParticipationChangeJSONCodec extends TypeCheckingCodec<
  ParticipationChange,
  unknown
> {
  readonly encoder = new ParticipationChangeJSONEncoder();
  readonly decoder = new ParticipationChangeJSONDecoder();
}

/**
 * participationChangeJSONCodec is a codec that encodes and decodes
 * ParticipationChange objects to and from JSON.
 */
export const participationChangeJSONCodec = new ParticipationChangeJSONCodec();

/**
 * participationChangeArrayJSONCodec is a codec that encodes and decodes
 * ParticipationChange arrays to and from JSON.
 */
export const participationChangeArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(participationChangeJSONCodec),
  new ArrayEncoder(participationChangeJSONCodec),
);
