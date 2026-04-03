import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import {
  AvailabilityAPIHeader,
  availabilityAPIHeaderCodec,
} from './block_header';
import {
  AvailabilityAPITransactionNMTEntry,
  availabilityAPITransactionNMTEntryCodec,
} from './transaction_nmt_entry';

/**
 * AvailabilityDerivedTransactionSummary represents a Transaction summary that
 * is derived from other primitives in the Availability API.
 */
export class AvailabilityDerivedTransactionSummary {
  constructor(
    public readonly hash: TaggedBase64,
    public readonly header: AvailabilityAPIHeader,
    public readonly offset: number,
    public readonly transaction: AvailabilityAPITransactionNMTEntry,
  ) {}

  toJSON() {
    return availabilityDerivedTransactionSummaryCodec.encode(this);
  }
}

export class AvailabilityDerivedTransactionSummaryDecoder implements Converter<
  unknown,
  AvailabilityDerivedTransactionSummary
> {
  convert(input: unknown): AvailabilityDerivedTransactionSummary {
    assertRecordWithKeys(input, 'hash', 'header', 'offset', 'transaction');

    return new AvailabilityDerivedTransactionSummary(
      taggedBase64Codec.decode(input.hash),
      availabilityAPIHeaderCodec.decode(input.header),
      numberCodec.decode(input.offset),
      availabilityAPITransactionNMTEntryCodec.decode(input.transaction),
    );
  }
}

export class AvailabilityDerivedTransactionSummaryEncoder implements Converter<AvailabilityDerivedTransactionSummary> {
  convert(input: AvailabilityDerivedTransactionSummary) {
    assertInstanceOf(input, AvailabilityDerivedTransactionSummary);

    return {
      hash: taggedBase64Codec.encode(input.hash),
      header: availabilityAPIHeaderCodec.encode(input.header),
      offset: numberCodec.encode(input.offset),
      transaction: availabilityAPITransactionNMTEntryCodec.encode(
        input.transaction,
      ),
    };
  }
}

export class AvailabilityDerivedTransactionSummaryCodec extends TypeCheckingCodec<
  AvailabilityDerivedTransactionSummary,
  ReturnType<
    InstanceType<
      new () => AvailabilityDerivedTransactionSummaryEncoder
    >['convert']
  >
> {
  readonly encoder = new AvailabilityDerivedTransactionSummaryEncoder();
  readonly decoder = new AvailabilityDerivedTransactionSummaryDecoder();
}

export const availabilityDerivedTransactionSummaryCodec =
  new AvailabilityDerivedTransactionSummaryCodec();

export const listAvailabilityDerivedTransactionSummaryCodec = new ArrayCodec(
  new ArrayDecoder(availabilityDerivedTransactionSummaryCodec),
  new ArrayEncoder(availabilityDerivedTransactionSummaryCodec),
);
