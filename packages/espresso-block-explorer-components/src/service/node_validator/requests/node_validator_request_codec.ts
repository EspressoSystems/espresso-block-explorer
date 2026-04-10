import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { InvalidTypeError } from '@/errors/invalid_type_error';
import {
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
  default as NodeValidatorRequest,
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

class NodeValidatorRequestEncoder implements Converter<
  NodeValidatorRequest,
  string
> {
  convert(input: NodeValidatorRequest): string {
    return input.valueOf();
  }
}

class NodeValidatorRequestDecoder implements Converter<
  unknown,
  NodeValidatorRequest
> {
  convert(input: unknown): NodeValidatorRequest {
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
        throw new InvalidTypeError(input, 'NodeValidatorRequest');
    }
  }
}

class NodeValidatorRequestCodec extends TypeCheckingCodec<
  NodeValidatorRequest,
  string
> {
  readonly encoder: Converter<NodeValidatorRequest, string> =
    new NodeValidatorRequestEncoder();
  readonly decoder: Converter<string, NodeValidatorRequest> =
    new NodeValidatorRequestDecoder();
}

export const nodeValidatorRequestCodec = new NodeValidatorRequestCodec();
