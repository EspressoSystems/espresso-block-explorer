import { stdBase64ArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';

/**
 * ValidatorExitEntry represents a single entry for a validator exit event.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e98015ab44d3893d141b8f
 */
export class ValidatorExitEntry {
  readonly address: ArrayBuffer;
  readonly exitTime: Date;

  constructor(address: ArrayBuffer, exitTime: Date) {
    this.address = address;
    this.exitTime = exitTime;
  }

  toJSON() {
    return validatorExitEntryJSONCodec.encode(this);
  }
}

/**
 * ValidatorExitEntryJSONDecoder decodes ValidatorExitEntry objects from a JSON
 * object.
 */
class ValidatorExitEntryJSONDecoder
  implements Converter<unknown, ValidatorExitEntry>
{
  convert(input: unknown): ValidatorExitEntry {
    assertRecordWithKeys(input, 'address', 'exit_time');

    return new ValidatorExitEntry(
      stdBase64ArrayBufferCodec.decode(input.address),
      new Date(input.exit_time as string),
    );
  }
}

/**
 * ValidatorExitEntryJSONEncoder encodes ValidatorExitEntry objects to a JSON
 * object.
 */
class ValidatorExitEntryJSONEncoder
  implements Converter<ValidatorExitEntry, unknown>
{
  convert(input: ValidatorExitEntry): unknown {
    return {
      address: stdBase64ArrayBufferCodec.encode(input.address),
      exit_time: input.exitTime.toISOString(),
    };
  }
}

/**
 * ValidatorExitEntryJSONCodec is a codec that encodes and decodes
 * ValidatorExitEntry objects to and from JSON.
 */
class ValidatorExitEntryJSONCodec extends TypeCheckingCodec<
  ValidatorExitEntry,
  unknown
> {
  readonly encoder = new ValidatorExitEntryJSONEncoder();
  readonly decoder = new ValidatorExitEntryJSONDecoder();
}

/**
 * validatorExitEntryJSONCodec is a codec that encodes and decodes
 * ValidatorExitEntry objects to and from JSON.
 */
export const validatorExitEntryJSONCodec = new ValidatorExitEntryJSONCodec();
