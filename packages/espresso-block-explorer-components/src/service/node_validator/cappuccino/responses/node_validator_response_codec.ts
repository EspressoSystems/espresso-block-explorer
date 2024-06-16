import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  CappuccinoHistogramSnapshot,
  cappuccinoHistogramSnapshotCodec,
  kCappuccinoHistogramSnapshotType,
} from './histogram_snapshot';
import {
  CappuccinoLatestBlockSnapshot,
  cappuccinoLatestBlockSnapshotCodec,
  kCappuccinoLatestBlockSnapshotType,
} from './latest_block';
import {
  CappuccinoNodeIdentitySnapshot,
  cappuccinoNodeIdentitySnapshotCodec,
  kCappuccinoNodeIdentitySnapshotType,
} from './node_identity_snapshot';
import CappuccinoNodeValidatorResponse from './node_validator_response';

class CappuccinoNodeValidatorResponseDecoder
  implements Converter<unknown, CappuccinoNodeValidatorResponse>
{
  convert(input: unknown): CappuccinoNodeValidatorResponse {
    assertRecordWithKeys(input, 'type');

    switch (input.type) {
      case kCappuccinoNodeIdentitySnapshotType:
        return cappuccinoNodeIdentitySnapshotCodec.decode(input);

      case kCappuccinoLatestBlockSnapshotType:
        return cappuccinoLatestBlockSnapshotCodec.decode(input);

      case kCappuccinoHistogramSnapshotType:
        return cappuccinoHistogramSnapshotCodec.decode(input);
    }

    throw new UnimplementedError();
  }
}

class CappuccinoNodeValidatorResponseEncoder
  implements Converter<CappuccinoNodeValidatorResponse>
{
  convert(input: CappuccinoNodeValidatorResponse) {
    if (input instanceof CappuccinoNodeIdentitySnapshot) {
      return cappuccinoNodeIdentitySnapshotCodec.encode(input);
    }

    if (input instanceof CappuccinoLatestBlockSnapshot) {
      return cappuccinoLatestBlockSnapshotCodec.encode(input);
    }

    if (input instanceof CappuccinoHistogramSnapshot) {
      return cappuccinoHistogramSnapshotCodec.encode(input);
    }

    throw new UnimplementedError();
  }
}

class CappuccinoNodeValidatorResponseCodec extends TypeCheckingCodec<
  CappuccinoNodeValidatorResponse,
  ReturnType<
    InstanceType<new () => CappuccinoNodeValidatorResponseEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoNodeValidatorResponseEncoder();
  readonly decoder = new CappuccinoNodeValidatorResponseDecoder();
}

export const cappuccinoNodeValidatorResponseCodec =
  new CappuccinoNodeValidatorResponseCodec();
