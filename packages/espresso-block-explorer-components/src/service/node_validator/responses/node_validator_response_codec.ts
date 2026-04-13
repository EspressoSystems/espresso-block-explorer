import {
  Converter,
  TypeCheckingCodec,
  isRecordWithKeys,
} from '@/convert/codec/convert';
import { UnimplementedError } from '@/errors/unimplemented_error';
import {
  BlocksSnapshot,
  blocksSnapshotCodec,
  kBlocksSnapshotType,
} from './blocks_snapshot';
import {
  HistogramSnapshot,
  histogramSnapshotCodec,
  kHistogramSnapshotType,
} from './histogram_snapshot';
import {
  LatestBlock,
  kLatestBlockType,
  latestBlockCodec,
} from './latest_block';
import {
  LatestNodeIdentity,
  kLatestNodeIdentityType,
  latestNodeIdentityCodec,
} from './latest_node_identity';
import {
  LatestStakeTable,
  kLatestStakeTableType,
  latestStakeTableCodec,
} from './latest_stake_table';
import {
  LatestValidator,
  kLatestValidatorType,
  latestValidatorCodec,
} from './latest_validator';
import {
  LatestVoters,
  kLatestVotersType,
  latestVotersCodec,
} from './latest_voters';
import {
  NodeIdentitySnapshot,
  kNodeIdentitySnapshotType,
  nodeIdentitySnapshotCodec,
} from './node_identity_snapshot';
import { default as NodeValidatorResponse } from './node_validator_response';
import {
  StakeTableSnapshot,
  kStakeTableSnapshotType,
  stakeTableSnapshotCodec,
} from './stake_table_snapshot';
import {
  ValidatorsSnapshot,
  kValidatorsSnapshotType,
  validatorsSnapshotCodec,
} from './validators_snapshot';
import {
  VotersSnapshot,
  kVotersSnapshotType,
  votersSnapshotCodec,
} from './voters_snapshot';

class NodeValidatorResponseDecoder implements Converter<
  unknown,
  NodeValidatorResponse
> {
  convert(input: unknown): NodeValidatorResponse {
    if (isRecordWithKeys(input, kBlocksSnapshotType)) {
      return blocksSnapshotCodec.decode(input);
    }
    if (isRecordWithKeys(input, kHistogramSnapshotType)) {
      return histogramSnapshotCodec.decode(input);
    }
    if (isRecordWithKeys(input, kLatestBlockType)) {
      return latestBlockCodec.decode(input);
    }
    if (isRecordWithKeys(input, kLatestNodeIdentityType)) {
      return latestNodeIdentityCodec.decode(input);
    }
    if (isRecordWithKeys(input, kLatestVotersType)) {
      return latestVotersCodec.decode(input);
    }
    if (isRecordWithKeys(input, kLatestValidatorType)) {
      return latestValidatorCodec.decode(input);
    }
    if (isRecordWithKeys(input, kLatestStakeTableType)) {
      return latestStakeTableCodec.decode(input);
    }
    if (isRecordWithKeys(input, kNodeIdentitySnapshotType)) {
      return nodeIdentitySnapshotCodec.decode(input);
    }
    if (isRecordWithKeys(input, kVotersSnapshotType)) {
      return votersSnapshotCodec.decode(input);
    }
    if (isRecordWithKeys(input, kValidatorsSnapshotType)) {
      return validatorsSnapshotCodec.decode(input);
    }
    if (isRecordWithKeys(input, kStakeTableSnapshotType)) {
      return stakeTableSnapshotCodec.decode(input);
    }

    throw new UnimplementedError();
  }
}

class NodeValidatorResponseEncoder implements Converter<NodeValidatorResponse> {
  convert(input: NodeValidatorResponse) {
    if (input instanceof BlocksSnapshot) {
      return blocksSnapshotCodec.encode(input);
    }
    if (input instanceof HistogramSnapshot) {
      return histogramSnapshotCodec.encode(input);
    }
    if (input instanceof LatestBlock) {
      return latestBlockCodec.encode(input);
    }
    if (input instanceof LatestNodeIdentity) {
      return latestNodeIdentityCodec.encode(input);
    }
    if (input instanceof LatestVoters) {
      return latestVotersCodec.encode(input);
    }
    if (input instanceof LatestValidator) {
      return latestValidatorCodec.encode(input);
    }
    if (input instanceof LatestStakeTable) {
      return latestStakeTableCodec.encode(input);
    }
    if (input instanceof NodeIdentitySnapshot) {
      return nodeIdentitySnapshotCodec.encode(input);
    }
    if (input instanceof VotersSnapshot) {
      return votersSnapshotCodec.encode(input);
    }
    if (input instanceof ValidatorsSnapshot) {
      return validatorsSnapshotCodec.encode(input);
    }
    if (input instanceof StakeTableSnapshot) {
      return stakeTableSnapshotCodec.encode(input);
    }

    throw new UnimplementedError();
  }
}

class NodeValidatorResponseCodec extends TypeCheckingCodec<
  NodeValidatorResponse,
  ReturnType<InstanceType<new () => NodeValidatorResponseEncoder>['convert']>
> {
  readonly encoder = new NodeValidatorResponseEncoder();
  readonly decoder = new NodeValidatorResponseDecoder();
}

export const nodeValidatorResponseCodec = new NodeValidatorResponseCodec();
