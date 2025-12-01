import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import CappuccinoNodeValidatorRequest, {
  kRequestBlocksSnapshotValue,
  kRequestHistogramSnapshotValue,
  kRequestNodeIdentitySnapshotValue,
  kRequestStakeTableSnapshotValue,
  kRequestValidatorsSnapshotValue,
  kRequestVotersSnapshotValue,
  kSubscribeLatestBockValue,
  kSubscribeNodeIdentityValue,
  kSubscribeStakeTablesValue,
  kSubscribeValidatorsValue,
  kSubscribeVotersValue,
  RequestBlocksSnapshot,
  RequestHistogramSnapshot,
  RequestNodeIdentitySnapshot,
  RequestStakeTableSnapshot,
  RequestValidatorsSnapshot,
  RequestVotersSnapshot,
  SubscribeLatestBlock,
  SubscribeNodeIdentity,
  SubscribeStakeTables,
  SubscribeValidators,
  SubscribeVoters,
} from './node_validator_request';

class CappuccinoNodeValidatorRequestEncoder implements Converter<
  CappuccinoNodeValidatorRequest,
  string
> {
  convert(input: CappuccinoNodeValidatorRequest): string {
    return input.valueOf();
  }
}

class CappuccinoNodeValidatorRequestDecoder implements Converter<
  unknown,
  CappuccinoNodeValidatorRequest
> {
  convert(input: unknown): CappuccinoNodeValidatorRequest {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    switch (input) {
      case kSubscribeNodeIdentityValue:
        return new SubscribeNodeIdentity();
      case kSubscribeLatestBockValue:
        return new SubscribeLatestBlock();
      case kSubscribeVotersValue:
        return new SubscribeVoters();
      case kRequestNodeIdentitySnapshotValue:
        return new RequestNodeIdentitySnapshot();
      case kRequestBlocksSnapshotValue:
        return new RequestBlocksSnapshot();
      case kRequestHistogramSnapshotValue:
        return new RequestHistogramSnapshot();
      case kRequestVotersSnapshotValue:
        return new RequestVotersSnapshot();
      case kSubscribeValidatorsValue:
        return new SubscribeValidators();
      case kSubscribeStakeTablesValue:
        return new SubscribeStakeTables();
      case kRequestValidatorsSnapshotValue:
        return new RequestValidatorsSnapshot();
      case kRequestStakeTableSnapshotValue:
        return new RequestStakeTableSnapshot();

      default:
        throw new InvalidTypeError(input, 'CappuccinoNodeValidatorRequest');
    }
  }
}

class CappuccinoNodeValidatorRequestCodec extends TypeCheckingCodec<
  CappuccinoNodeValidatorRequest,
  string
> {
  readonly encoder: Converter<CappuccinoNodeValidatorRequest, string> =
    new CappuccinoNodeValidatorRequestEncoder();
  readonly decoder: Converter<string, CappuccinoNodeValidatorRequest> =
    new CappuccinoNodeValidatorRequestDecoder();
}

export const cappuccinoNodeValidatorRequestCodec =
  new CappuccinoNodeValidatorRequestCodec();
