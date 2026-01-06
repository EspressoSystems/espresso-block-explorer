
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
  AbstractCappuccinoAPIV2HeaderFields,
  CappuccinoAPIV2HeaderFields,
} from './block_header_v2';
import {
  CappuccinoBuilderSignature,
  cappuccinoBuilderSignatureCodec,
} from './builder_signature';
import { CappuccinoFeeInfo, cappuccinoFeeInfoCodec } from './fee_info';
import {
  CappuccinoL1Finalized,
  nullableCappuccinoL1FinalizedCodec,
} from './l1_finalized';
import {
  CappuccinoNamespaceTable,
  cappuccinoNamespaceTableCodec,
} from './namespace_table';

export interface CappuccinoAPIV4Header extends CappuccinoAPIV2HeaderFields {
  readonly timestamp_millis: number;
  readonly reward_merkle_tree_root: TaggedBase64;
  readonly total_reward_distributed: bigint;
  readonly next_stake_table_hash: null | TaggedBase64;
}

export class AbstractCappuccinoAPIV4Header
  extends AbstractCappuccinoAPIV2HeaderFields
  implements CappuccinoAPIV4Header {
  constructor(
    height: number,
    timestamp: number,
    public readonly timestamp_millis: number,
    l1_head: number,
    l1_finalized: null | CappuccinoL1Finalized,
    payload_commitment: TaggedBase64,
    builder_commitment: TaggedBase64,
    ns_table: CappuccinoNamespaceTable,
    block_merkle_tree_root: TaggedBase64,
    fee_merkle_tree_root: TaggedBase64,
    fee_info: CappuccinoFeeInfo,
    builder_signature: CappuccinoBuilderSignature,
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
    return cappuccinoAPIV4HeaderCodec.encode(this);
  }
}

/**
 * CappuccinoAPIHeader represents the header of a block in the Cappuccino API.
 */
export class CappuccinoAPIV4HeaderImpl extends AbstractCappuccinoAPIV4Header {
  constructor(
    height: number,
    timestamp: number,
    timestamp_millis: number,
    l1_head: number,
    l1_finalized: null | CappuccinoL1Finalized,
    payload_commitment: TaggedBase64,
    builder_commitment: TaggedBase64,
    ns_table: CappuccinoNamespaceTable,
    block_merkle_tree_root: TaggedBase64,
    fee_merkle_tree_root: TaggedBase64,
    fee_info: CappuccinoFeeInfo,
    builder_signature: CappuccinoBuilderSignature,
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

export class CappuccinoAPIV4HeaderDecoder implements Converter<
  unknown,
  CappuccinoAPIV4Header
> {
  convert(input: unknown): CappuccinoAPIV4Header {
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

    return new CappuccinoAPIV4HeaderImpl(
      numberCodec.decode(input.height),
      numberCodec.decode(input.timestamp),
      numberCodec.decode(input.timestamp_millis),
      numberCodec.decode(input.l1_head),
      nullableCappuccinoL1FinalizedCodec.decode(input.l1_finalized),
      taggedBase64Codec.decode(input.payload_commitment),
      taggedBase64Codec.decode(input.builder_commitment),
      cappuccinoNamespaceTableCodec.decode(input.ns_table),
      taggedBase64Codec.decode(input.block_merkle_tree_root),
      taggedBase64Codec.decode(input.fee_merkle_tree_root),
      cappuccinoFeeInfoCodec.decode(input.fee_info),
      cappuccinoBuilderSignatureCodec.decode(input.builder_signature),
      taggedBase64Codec.decode(input.reward_merkle_tree_root),
      bigintCodec.decode(input.total_reward_distributed),
      nullableTaggedBase64Codec.decode(input.next_stake_table_hash),
    );
  }
}

export class CappuccinoAPIV4HeaderEncoder implements Converter<CappuccinoAPIV4Header> {
  convert(input: CappuccinoAPIV4Header) {
    assertInstanceOf(input, CappuccinoAPIV4HeaderImpl);

    return {
      height: numberCodec.encode(input.height),
      timestamp: numberCodec.encode(input.timestamp),
      timestamp_millis: numberCodec.encode(input.timestamp_millis),
      l1_head: numberCodec.encode(input.l1_head),
      l1_finalized: nullableCappuccinoL1FinalizedCodec.encode(
        input.l1_finalized,
      ),
      payload_commitment: taggedBase64Codec.encode(input.payload_commitment),
      builder_commitment: taggedBase64Codec.encode(input.builder_commitment),
      ns_table: cappuccinoNamespaceTableCodec.encode(input.ns_table),
      block_merkle_tree_root: taggedBase64Codec.encode(input.block_merkle_tree_root),
      fee_merkle_tree_root: taggedBase64Codec.encode(input.fee_merkle_tree_root),
      builder_signature: cappuccinoBuilderSignatureCodec.encode(
        input.builder_signature,
      ),
      fee_info: cappuccinoFeeInfoCodec.encode(input.fee_info),
      reward_merkle_tree_root: taggedBase64Codec.encode(input.reward_merkle_tree_root),
      total_reward_distributed: bigintCodec.encode(input.total_reward_distributed),
      next_stake_table_hash: nullableTaggedBase64Codec.encode(input.next_stake_table_hash),
    } as const;
  }
}

export class CappuccinoAPIV4HeaderCodec extends TypeCheckingCodec<
  CappuccinoAPIV4Header,
  ReturnType<InstanceType<new () => CappuccinoAPIV4HeaderEncoder>['convert']>
> {
  readonly encoder = new CappuccinoAPIV4HeaderEncoder();
  readonly decoder = new CappuccinoAPIV4HeaderDecoder();
}

export const cappuccinoAPIV4HeaderCodec = new CappuccinoAPIV4HeaderCodec();
