import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
  assertRecordWithKeys,
  Converter,
  stdBase64ArrayBufferCodec,
  TypeCheckingCodec,
} from '@/convert/codec';

/**
 * CurrentEpochValidatorSetEntry represents a validator in the current epoch
 * of the Espresso L1 Validator Service API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e980b699c5ed84c82199bf
 */
export class CurrentEpochValidatorSetEntry {
  readonly address: ArrayBuffer;

  constructor(address: ArrayBuffer) {
    this.address = address;
  }

  toJSON() {
    return currentEpochValidatorSetEntryJSONCodec.encode(this);
  }
}

/**
 * CurrentEpochValidatorSetEntryJSONDecoder decodes
 * CurrentEpochValidatorSetEntry objects from a JSON object.
 */
class CurrentEpochValidatorSetEntryJSONDecoder
  implements Converter<unknown, CurrentEpochValidatorSetEntry>
{
  convert(input: unknown): CurrentEpochValidatorSetEntry {
    assertRecordWithKeys(input, 'address');

    return new CurrentEpochValidatorSetEntry(
      stdBase64ArrayBufferCodec.decode(input.address),
    );
  }
}

/**
 * CurrentEpochValidatorSetEntryJSONEncoder encodes
 * CurrentEpochValidatorSetEntry objects to a JSON object.
 */
class CurrentEpochValidatorSetEntryJSONEncoder
  implements Converter<CurrentEpochValidatorSetEntry, unknown>
{
  convert(input: CurrentEpochValidatorSetEntry): unknown {
    return {
      address: stdBase64ArrayBufferCodec.encode(input.address),
    };
  }
}

/**
 * CurrentEpochValidatorSetEntryJSONCodec is a codec that encodes and decodes
 * CurrentEpochValidatorSetEntry objects to and from JSON.
 */
class CurrentEpochValidatorSetEntryJSONCodec extends TypeCheckingCodec<
  CurrentEpochValidatorSetEntry,
  unknown
> {
  readonly encoder = new CurrentEpochValidatorSetEntryJSONEncoder();
  readonly decoder = new CurrentEpochValidatorSetEntryJSONDecoder();
}

/**
 * currentEpochValidatorSetEntryJSONCodec is a codec that encodes and decodes
 * CurrentEpochValidatorSetEntry objects to and from JSON.
 */
export const currentEpochValidatorSetEntryJSONCodec =
  new CurrentEpochValidatorSetEntryJSONCodec();

/**
 * currentEpochValidatorSetEntryArrayJSONCodec is a codec that encodes and
 * decodes arrays of CurrentEpochValidatorSetEntry objects to and from JSON.
 */
export const currentEpochValidatorSetEntryArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(currentEpochValidatorSetEntryJSONCodec),
  new ArrayEncoder(currentEpochValidatorSetEntryJSONCodec),
);
