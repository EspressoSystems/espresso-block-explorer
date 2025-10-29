import { stdBase64ArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

/**
 * ParticipationChange represents a change in validator participation
 * percentage. It includes the validator's address and the new participation
 * percentage.
 *
 * The ParticipationChange type is defined by the Espresso L1 Validator Service
 * API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e9803791a7f90f4d247228
 */
export class ParticipationChange {
  readonly address: ArrayBuffer;
  readonly percentage: number;

  constructor(address: ArrayBuffer, percentage: number) {
    this.address = address;
    this.percentage = percentage;
  }

  toJSON() {
    return participationChangeJSONCodec.encode(this);
  }
}

/**
 * ParticipationChangeJSONDecoder decodes ParticipationChange objects from a
 * JSON object.
 */
class ParticipationChangeJSONDecoder
  implements Converter<unknown, ParticipationChange>
{
  convert(input: unknown): ParticipationChange {
    assertRecordWithKeys(input, 'address', 'percentage');

    return new ParticipationChange(
      stdBase64ArrayBufferCodec.decode(input.address),
      numberCodec.decode(input.percentage),
    );
  }
}

/**
 * ParticipationChangeJSONEncoder encodes ParticipationChange objects to a JSON
 * object.
 */
class ParticipationChangeJSONEncoder
  implements Converter<ParticipationChange, unknown>
{
  convert(input: ParticipationChange): unknown {
    return {
      address: stdBase64ArrayBufferCodec.encode(input.address),
      percentage: numberCodec.encode(input.percentage),
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
