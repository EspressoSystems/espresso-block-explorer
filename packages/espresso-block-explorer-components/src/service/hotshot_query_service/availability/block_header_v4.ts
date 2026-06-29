import { assertInstanceOf } from '@/assert/assert';
import { bigintCodec } from '@/convert/codec/bigint';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  nullableTaggedBase64Codec,
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import {
  AbstractAvailabilityAPIV2HeaderFields,
  AvailabilityAPIV2HeaderFields,
} from './block_header_v2';
import {
  AvailabilityBuilderSignature,
  nullableAvailabilityBuilderSignatureCodec,
} from './builder_signature';
import { AvailabilityFeeInfo, availabilityFeeInfoCodec } from './fee_info';
import {
  AvailabilityL1Finalized,
  nullableAvailabilityL1FinalizedCodec,
} from './l1_finalized';
import {
  AvailabilityNamespaceTable,
  availabilityNamespaceTableCodec,
} from './namespace_table';

export interface AvailabilityAPIV4HeaderFields extends AvailabilityAPIV2HeaderFields {
  readonly timestamp_millis: number;
  readonly reward_merkle_tree_root: TaggedBase64;
  readonly total_reward_distributed: bigint;
  readonly next_stake_table_hash: null | TaggedBase64;
}

export class AbstractAvailabilityAPIV4HeaderFields
  extends AbstractAvailabilityAPIV2HeaderFields
  implements AvailabilityAPIV4HeaderFields
{
  constructor(
    height: number,
    timestamp: number,
    public readonly timestamp_millis: number,
    l1_head: number,
    l1_finalized: null | AvailabilityL1Finalized,
    payload_commitment: TaggedBase64,
    builder_commitment: TaggedBase64,
    ns_table: AvailabilityNamespaceTable,
    block_merkle_tree_root: TaggedBase64,
    fee_merkle_tree_root: TaggedBase64,
    fee_info: AvailabilityFeeInfo,
    builder_signature: null | AvailabilityBuilderSignature,
    public readonly reward_merkle_tree_root: TaggedBase64,
    public readonly total_reward_distributed: bigint,
    public readonly next_stake_table_hash: null | TaggedBase64,
  ) {
    super(
      height,
      timestamp,
      l1_head,
      l1_finalized,
      payload_commitment,
      builder_commitment,
      ns_table,
      block_merkle_tree_root,
      fee_merkle_tree_root,
      fee_info,
      builder_signature,
    );
  }
  toJSON() {
    return availabilityAPIV4HeaderFieldsCodec.encode(this);
  }
}

/**
 * AvailabilityAPIV4HeaderFieldsImpl represents the header of a block in the
 * Availability API.
 */
export class AvailabilityAPIV4HeaderFieldsImpl extends AbstractAvailabilityAPIV4HeaderFields {
  constructor(
    height: number,
    timestamp: number,
    timestamp_millis: number,
    l1_head: number,
    l1_finalized: null | AvailabilityL1Finalized,
    payload_commitment: TaggedBase64,
    builder_commitment: TaggedBase64,
    ns_table: AvailabilityNamespaceTable,
    block_merkle_tree_root: TaggedBase64,
    fee_merkle_tree_root: TaggedBase64,
    fee_info: AvailabilityFeeInfo,
    builder_signature: null | AvailabilityBuilderSignature,
    reward_merkle_tree_root: TaggedBase64,
    total_reward_distributed: bigint,
    next_stake_table_hash: null | TaggedBase64,
  ) {
    super(
      height,
      timestamp,
      timestamp_millis,
      l1_head,
      l1_finalized,
      payload_commitment,
      builder_commitment,
      ns_table,
      block_merkle_tree_root,
      fee_merkle_tree_root,
      fee_info,
      builder_signature,
      reward_merkle_tree_root,
      total_reward_distributed,
      next_stake_table_hash,
    );
    Object.freeze(this);
  }
}

export class AvailabilityAPIV4HeaderFieldsDecoder implements Converter<
  unknown,
  AvailabilityAPIV4HeaderFields
> {
  convert(input: unknown): AvailabilityAPIV4HeaderFields {
    assertRecordWithKeys(
      input,
      'height',
      'timestamp',
      'timestamp_millis',
      'l1_head',
      'l1_finalized',
      'payload_commitment',
      'builder_commitment',
      'ns_table',
      'block_merkle_tree_root',
      'fee_merkle_tree_root',
      'fee_info',
      'builder_signature',
      'reward_merkle_tree_root',
      'total_reward_distributed',
      'next_stake_table_hash',
    );

    return new AvailabilityAPIV4HeaderFieldsImpl(
      numberCodec.decode(input.height),
      numberCodec.decode(input.timestamp),
      numberCodec.decode(input.timestamp_millis),
      numberCodec.decode(input.l1_head),
      nullableAvailabilityL1FinalizedCodec.decode(input.l1_finalized),
      taggedBase64Codec.decode(input.payload_commitment),
      taggedBase64Codec.decode(input.builder_commitment),
      availabilityNamespaceTableCodec.decode(input.ns_table),
      taggedBase64Codec.decode(input.block_merkle_tree_root),
      taggedBase64Codec.decode(input.fee_merkle_tree_root),
      availabilityFeeInfoCodec.decode(input.fee_info),
      nullableAvailabilityBuilderSignatureCodec.decode(input.builder_signature),
      taggedBase64Codec.decode(input.reward_merkle_tree_root),
      bigintCodec.decode(input.total_reward_distributed),
      nullableTaggedBase64Codec.decode(input.next_stake_table_hash),
    );
  }
}

export class AvailabilityAPIV4HeaderFieldsEncoder implements Converter<AvailabilityAPIV4HeaderFields> {
  convert(input: AvailabilityAPIV4HeaderFields) {
    assertInstanceOf(input, AvailabilityAPIV4HeaderFieldsImpl);

    return {
      height: numberCodec.encode(input.height),
      timestamp: numberCodec.encode(input.timestamp),
      timestamp_millis: numberCodec.encode(input.timestamp_millis),
      l1_head: numberCodec.encode(input.l1_head),
      l1_finalized: nullableAvailabilityL1FinalizedCodec.encode(
        input.l1_finalized,
      ),
      payload_commitment: taggedBase64Codec.encode(input.payload_commitment),
      builder_commitment: taggedBase64Codec.encode(input.builder_commitment),
      ns_table: availabilityNamespaceTableCodec.encode(input.ns_table),
      block_merkle_tree_root: taggedBase64Codec.encode(
        input.block_merkle_tree_root,
      ),
      fee_merkle_tree_root: taggedBase64Codec.encode(
        input.fee_merkle_tree_root,
      ),
      builder_signature: nullableAvailabilityBuilderSignatureCodec.encode(
        input.builder_signature,
      ),
      fee_info: availabilityFeeInfoCodec.encode(input.fee_info),
      reward_merkle_tree_root: taggedBase64Codec.encode(
        input.reward_merkle_tree_root,
      ),
      total_reward_distributed: bigintCodec.encode(
        input.total_reward_distributed,
      ),
      next_stake_table_hash: nullableTaggedBase64Codec.encode(
        input.next_stake_table_hash,
      ),
    } as const;
  }
}

export class AvailabilityAPIV4HeaderFieldsCodec extends TypeCheckingCodec<
  AvailabilityAPIV4HeaderFields,
  ReturnType<
    InstanceType<new () => AvailabilityAPIV4HeaderFieldsEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityAPIV4HeaderFieldsEncoder();
  readonly decoder = new AvailabilityAPIV4HeaderFieldsDecoder();
}

export const availabilityAPIV4HeaderFieldsCodec =
  new AvailabilityAPIV4HeaderFieldsCodec();
