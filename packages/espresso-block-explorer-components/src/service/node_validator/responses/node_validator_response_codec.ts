import {
  Converter,
  TypeCheckingCodec,
  isRecordWithKeys,
} from '@/convert/codec/convert';
import UnimplementedError from '@/errors/unimplemented_error';
import {
  CappuccinoBlocksSnapshot,
  cappuccinoBlocksSnapshotCodec,
  kCappuccinoBlocksSnapshotType,
} from './blocks_snapshot';
import {
  CappuccinoHistogramSnapshot,
  cappuccinoHistogramSnapshotCodec,
  kCappuccinoHistogramSnapshotType,
} from './histogram_snapshot';
import {
  CappuccinoLatestBlock,
  cappuccinoLatestBlockCodec,
  kCappuccinoLatestBlockType,
} from './latest_block';
import {
  CappuccinoLatestNodeIdentity,
  cappuccinoLatestNodeIdentityCodec,
  kCappuccinoLatestNodeIdentityType,
} from './latest_node_identity';
import {
  CappuccinoLatestStakeTable,
  cappuccinoLatestStakeTableCodec,
  kCappuccinoLatestStakeTableType,
} from './latest_stake_table';
import {
  CappuccinoLatestValidator,
  cappuccinoLatestValidatorCodec,
  kCappuccinoLatestValidatorType,
} from './latest_validator';
import {
  CappuccinoLatestVoters,
  cappuccinoLatestVotersCodec,
  kCappuccinoLatestVotersType,
} from './latest_voters';
import {
  CappuccinoNodeIdentitySnapshot,
  cappuccinoNodeIdentitySnapshotCodec,
  kCappuccinoNodeIdentitySnapshotType,
} from './node_identity_snapshot';
import CappuccinoNodeValidatorResponse from './node_validator_response';
import {
  CappuccinoStakeTableSnapshot,
  cappuccinoStakeTableSnapshotCodec,
  kCappuccinoStakeTableSnapshotType,
} from './stake_table_snapshot';
import {
  CappuccinoValidatorsSnapshot,
  cappuccinoValidatorsSnapshotCodec,
  kCappuccinoValidatorsSnapshotType,
} from './validators_snapshot';
import {
  CappuccinoVotersSnapshot,
  cappuccinoVotersSnapshotCodec,
  kCappuccinoVotersSnapshotType,
} from './voters_snapshot';

class CappuccinoNodeValidatorResponseDecoder implements Converter<
  unknown,
  CappuccinoNodeValidatorResponse
> {
  convert(input: unknown): CappuccinoNodeValidatorResponse {
    if (isRecordWithKeys(input, kCappuccinoBlocksSnapshotType)) {
      return cappuccinoBlocksSnapshotCodec.decode(input);
    }
    if (isRecordWithKeys(input, kCappuccinoHistogramSnapshotType)) {
      return cappuccinoHistogramSnapshotCodec.decode(input);
    }
    if (isRecordWithKeys(input, kCappuccinoLatestBlockType)) {
      return cappuccinoLatestBlockCodec.decode(input);
    }
    if (isRecordWithKeys(input, kCappuccinoLatestNodeIdentityType)) {
      return cappuccinoLatestNodeIdentityCodec.decode(input);
    }
    if (isRecordWithKeys(input, kCappuccinoLatestVotersType)) {
      return cappuccinoLatestVotersCodec.decode(input);
    }
    if (isRecordWithKeys(input, kCappuccinoLatestValidatorType)) {
      return cappuccinoLatestValidatorCodec.decode(input);
    }
    if (isRecordWithKeys(input, kCappuccinoLatestStakeTableType)) {
      return cappuccinoLatestStakeTableCodec.decode(input);
    }
    if (isRecordWithKeys(input, kCappuccinoNodeIdentitySnapshotType)) {
      return cappuccinoNodeIdentitySnapshotCodec.decode(input);
    }
    if (isRecordWithKeys(input, kCappuccinoVotersSnapshotType)) {
      return cappuccinoVotersSnapshotCodec.decode(input);
    }
    if (isRecordWithKeys(input, kCappuccinoValidatorsSnapshotType)) {
      return cappuccinoValidatorsSnapshotCodec.decode(input);
    }
    if (isRecordWithKeys(input, kCappuccinoStakeTableSnapshotType)) {
      return cappuccinoStakeTableSnapshotCodec.decode(input);
    }

    throw new UnimplementedError();
  }
}

class CappuccinoNodeValidatorResponseEncoder implements Converter<CappuccinoNodeValidatorResponse> {
  convert(input: CappuccinoNodeValidatorResponse) {
    if (input instanceof CappuccinoBlocksSnapshot) {
      return cappuccinoBlocksSnapshotCodec.encode(input);
    }
    if (input instanceof CappuccinoHistogramSnapshot) {
      return cappuccinoHistogramSnapshotCodec.encode(input);
    }
    if (input instanceof CappuccinoLatestBlock) {
      return cappuccinoLatestBlockCodec.encode(input);
    }
    if (input instanceof CappuccinoLatestNodeIdentity) {
      return cappuccinoLatestNodeIdentityCodec.encode(input);
    }
    if (input instanceof CappuccinoLatestVoters) {
      return cappuccinoLatestVotersCodec.encode(input);
    }
    if (input instanceof CappuccinoLatestValidator) {
      return cappuccinoLatestValidatorCodec.encode(input);
    }
    if (input instanceof CappuccinoLatestStakeTable) {
      return cappuccinoLatestStakeTableCodec.encode(input);
    }
    if (input instanceof CappuccinoNodeIdentitySnapshot) {
      return cappuccinoNodeIdentitySnapshotCodec.encode(input);
    }
    if (input instanceof CappuccinoVotersSnapshot) {
      return cappuccinoVotersSnapshotCodec.encode(input);
    }
    if (input instanceof CappuccinoValidatorsSnapshot) {
      return cappuccinoValidatorsSnapshotCodec.encode(input);
    }
    if (input instanceof CappuccinoStakeTableSnapshot) {
      return cappuccinoStakeTableSnapshotCodec.encode(input);
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
