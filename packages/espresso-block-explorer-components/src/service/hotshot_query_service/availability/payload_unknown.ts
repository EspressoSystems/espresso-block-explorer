import {
  Converter,
  isRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { InvalidTypeError } from '@/errors/invalid_type_error';
import { UnimplementedError } from '@/errors/unimplemented_error';
import { AvailabilityAPIPayloadBase } from './payload_base';
import {
  AvailabilityAPIPayloadV0,
  availabilityAPIPayloadV0Codec,
} from './payload_v0';
import {
  AvailabilityAPIPayloadV1,
  availabilityAPIPayloadV1Codec,
} from './payload_v1';

class AvailabilityAPIPayloadDecoder implements Converter<
  unknown,
  AvailabilityAPIPayloadBase
> {
  convert(input: unknown): AvailabilityAPIPayloadBase {
    if (isRecordWithKeys(input, 'transaction_nmt')) {
      return availabilityAPIPayloadV0Codec.decode(input);
    }

    if (isRecordWithKeys(input, 'ns_table', 'raw_payload')) {
      return availabilityAPIPayloadV1Codec.decode(input);
    }

    throw new InvalidTypeError(typeof input, 'valid payload serialization');
  }
}

class AvailabilityAPIPayloadEncoder implements Converter<AvailabilityAPIPayloadBase> {
  convert(input: AvailabilityAPIPayloadBase): unknown {
    if (input instanceof AvailabilityAPIPayloadV0) {
      return availabilityAPIPayloadV0Codec.encode(input);
    }

    if (input instanceof AvailabilityAPIPayloadV1) {
      return availabilityAPIPayloadV1Codec.encode(input);
    }

    throw new UnimplementedError('unknown or unrecognized payload type');
  }
}

class AvailabilityAPIPayloadCodec extends TypeCheckingCodec<
  AvailabilityAPIPayloadBase,
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
