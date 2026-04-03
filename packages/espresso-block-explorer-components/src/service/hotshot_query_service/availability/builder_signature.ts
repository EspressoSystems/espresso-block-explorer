import { assertInstanceOf } from '@/assert/assert';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

/**
 * AvailabilityBuilderSignature represents the signature of a builder in the
 * Availability API.
 */
export class AvailabilityBuilderSignature {
  constructor(
    public readonly r: ArrayBuffer,
    public readonly s: ArrayBuffer,
    public readonly v: number,
  ) {}

  toJSON() {
    return availabilityBuilderSignatureCodec.encode(this);
  }
}

class AvailabilityBuilderSignatureDecoder implements Converter<
  unknown,
  AvailabilityBuilderSignature
> {
  convert(input: unknown): AvailabilityBuilderSignature {
    assertRecordWithKeys(input, 'r', 's', 'v');

    return new AvailabilityBuilderSignature(
      hexArrayBufferCodec.decode(input.r),
      hexArrayBufferCodec.decode(input.s),
      numberCodec.decode(input.v),
    );
  }
}

class AvailabilityBuilderSignatureEncoder implements Converter<AvailabilityBuilderSignature> {
  convert(input: AvailabilityBuilderSignature) {
    assertInstanceOf(input, AvailabilityBuilderSignature);

    return {
      r: hexArrayBufferCodec.encode(input.r),
      s: hexArrayBufferCodec.encode(input.s),
      v: numberCodec.encode(input.v),
    };
  }
}

class AvailabilityBuilderSignatureCodec extends TypeCheckingCodec<
  AvailabilityBuilderSignature,
  ReturnType<
    InstanceType<new () => AvailabilityBuilderSignatureEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityBuilderSignatureEncoder();
  readonly decoder = new AvailabilityBuilderSignatureDecoder();
}

export const availabilityBuilderSignatureCodec =
  new AvailabilityBuilderSignatureCodec();
