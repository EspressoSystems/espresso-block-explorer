import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import {
  AvailabilityAPITransactionNMTEntry,
  arrayAvailabilityAPITransactionNMTEntryCodec,
} from './transaction_nmt_entry';

/**
 * AvailabilityAPIPayload represents the payload in the Availability API.
 */
export class AvailabilityAPIPayload {
  constructor(
    public readonly transaction_nmt: AvailabilityAPITransactionNMTEntry[],
  ) {}

  toJSON() {
    return availabilityAPIPayloadCodec.encode(this);
  }
}

export class AvailabilityAPIPayloadDecoder implements Converter<
  unknown,
  AvailabilityAPIPayload
> {
  convert(input: unknown): AvailabilityAPIPayload {
    assertRecordWithKeys(input, 'transaction_nmt');

    return new AvailabilityAPIPayload(
      arrayAvailabilityAPITransactionNMTEntryCodec.decode(
        input.transaction_nmt,
      ),
    );
  }
}

export class AvailabilityAPIPayloadEncoder implements Converter<AvailabilityAPIPayload> {
  convert(input: AvailabilityAPIPayload) {
    assertInstanceOf(input, AvailabilityAPIPayload);

    return {
      transaction_nmt: arrayAvailabilityAPITransactionNMTEntryCodec.encode(
        input.transaction_nmt,
      ),
    };
  }
}

export class AvailabilityAPIPayloadCodec extends TypeCheckingCodec<
  AvailabilityAPIPayload,
  ReturnType<InstanceType<new () => AvailabilityAPIPayloadEncoder>['convert']>
> {
  readonly encoder = new AvailabilityAPIPayloadEncoder();
  readonly decoder = new AvailabilityAPIPayloadDecoder();
}

export const availabilityAPIPayloadCodec = new AvailabilityAPIPayloadCodec();
export const nullableAvailabilityAPIPayloadCodec = new NullCodec(
  new NullDecoder(availabilityAPIPayloadCodec),
  new NullEncoder(availabilityAPIPayloadCodec),
);
