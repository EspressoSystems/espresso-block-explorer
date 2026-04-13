import { assertInstanceOf } from '@/assert/assert';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';

/**
 * AvailabilityFeeInfo represents the fee information in the Availability API.
 */
export class AvailabilityFeeInfo {
  constructor(
    public readonly account: ArrayBuffer,
    public readonly amount: ArrayBuffer,
  ) {}

  toJSON() {
    return availabilityFeeInfoCodec.encode(this);
  }
}

class AvailabilityFeeInfoDecoder implements Converter<
  unknown,
  AvailabilityFeeInfo
> {
  convert(input: unknown): AvailabilityFeeInfo {
    assertRecordWithKeys(input, 'account', 'amount');

    return new AvailabilityFeeInfo(
      hexArrayBufferCodec.decode(input.account),
      hexArrayBufferCodec.decode(input.amount),
    );
  }
}

class AvailabilityFeeInfoEncoder implements Converter<AvailabilityFeeInfo> {
  convert(input: AvailabilityFeeInfo) {
    assertInstanceOf(input, AvailabilityFeeInfo);

    return {
      account: hexArrayBufferCodec.encode(input.account),
      amount: hexArrayBufferCodec.encode(input.amount),
    };
  }
}

class AvailabilityFeeInfoCodec extends TypeCheckingCodec<
  AvailabilityFeeInfo,
  ReturnType<InstanceType<new () => AvailabilityFeeInfoEncoder>['convert']>
> {
  readonly encoder = new AvailabilityFeeInfoEncoder();
  readonly decoder = new AvailabilityFeeInfoDecoder();
}

export const availabilityFeeInfoCodec = new AvailabilityFeeInfoCodec();
