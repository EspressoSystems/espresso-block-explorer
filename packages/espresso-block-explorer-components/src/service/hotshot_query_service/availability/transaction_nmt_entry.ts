import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberArrayCodec, numberCodec } from '@/convert/codec/number';

/**
 * AvailabilityAPITransactionNMTEntry represents a transaction NMT entry in the
 * Availability API.
 */
export class AvailabilityAPITransactionNMTEntry {
  constructor(
    public readonly vm: number,
    public readonly payload: number[],
  ) {}

  toJSON() {
    return availabilityAPITransactionNMTEntryCodec.encode(this);
  }
}

export class AvailabilityAPITransactionNMTEntryDecoder implements Converter<
  unknown,
  AvailabilityAPITransactionNMTEntry
> {
  convert(input: unknown): AvailabilityAPITransactionNMTEntry {
    assertRecordWithKeys(input, 'vm', 'payload');

    return new AvailabilityAPITransactionNMTEntry(
      numberCodec.decode(input.vm),
      numberArrayCodec.decode(input.payload),
    );
  }
}

export class AvailabilityAPITransactionNMTEntryEncoder implements Converter<AvailabilityAPITransactionNMTEntry> {
  convert(input: AvailabilityAPITransactionNMTEntry) {
    assertInstanceOf(input, AvailabilityAPITransactionNMTEntry);

    return {
      vm: numberCodec.encode(input.vm),
      payload: numberArrayCodec.encode(input.payload),
    };
  }
}

export class AvailabilityAPITransactionNMTEntryCodec extends TypeCheckingCodec<
  AvailabilityAPITransactionNMTEntry,
  ReturnType<
    InstanceType<new () => AvailabilityAPITransactionNMTEntryEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityAPITransactionNMTEntryEncoder();
  readonly decoder = new AvailabilityAPITransactionNMTEntryDecoder();
}

export const availabilityAPITransactionNMTEntryCodec =
  new AvailabilityAPITransactionNMTEntryCodec();
export const arrayAvailabilityAPITransactionNMTEntryCodec = new ArrayCodec(
  new ArrayDecoder(availabilityAPITransactionNMTEntryCodec),
  new ArrayEncoder(availabilityAPITransactionNMTEntryCodec),
);
