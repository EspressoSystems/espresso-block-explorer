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
import { AvailabilityAPIPayloadBase } from './payload_base';

/**
 * AvailabilityAPIPayloadV0 represents the payload in the Availability API.
 */
export class AvailabilityAPIPayloadV0 extends AvailabilityAPIPayloadBase {
  constructor(
    public readonly transaction_nmt: AvailabilityAPITransactionNMTEntry[],
  ) {
    super();
  }

  toJSON() {
    return availabilityAPIPayloadV0Codec.encode(this);
  }
}

export function isPayloadV0(
  payload: AvailabilityAPIPayloadBase,
): payload is AvailabilityAPIPayloadV0 {
  return payload instanceof AvailabilityAPIPayloadV0;
}

export class AvailabilityAPIPayloadV0Decoder implements Converter<
  unknown,
  AvailabilityAPIPayloadV0
> {
  convert(input: unknown): AvailabilityAPIPayloadV0 {
    assertRecordWithKeys(input, 'transaction_nmt');

    return new AvailabilityAPIPayloadV0(
      arrayAvailabilityAPITransactionNMTEntryCodec.decode(
        input.transaction_nmt,
      ),
    );
  }
}

export class AvailabilityAPIPayloadV0Encoder implements Converter<AvailabilityAPIPayloadV0> {
  convert(input: AvailabilityAPIPayloadV0) {
    assertInstanceOf(input, AvailabilityAPIPayloadV0);

    return {
      transaction_nmt: arrayAvailabilityAPITransactionNMTEntryCodec.encode(
        input.transaction_nmt,
      ),
    };
  }
}

export class AvailabilityAPIPayloadV0Codec extends TypeCheckingCodec<
  AvailabilityAPIPayloadV0,
  ReturnType<InstanceType<new () => AvailabilityAPIPayloadV0Encoder>['convert']>
> {
  readonly encoder = new AvailabilityAPIPayloadV0Encoder();
  readonly decoder = new AvailabilityAPIPayloadV0Decoder();
}

export const availabilityAPIPayloadV0Codec =
  new AvailabilityAPIPayloadV0Codec();
export const nullableAvailabilityAPIPayloadV0Codec = new NullCodec(
  new NullDecoder(availabilityAPIPayloadV0Codec),
  new NullEncoder(availabilityAPIPayloadV0Codec),
);
