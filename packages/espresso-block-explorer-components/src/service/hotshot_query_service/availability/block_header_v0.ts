import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
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

export interface AvailabilityAPIV0HeaderFields {
  readonly height: number;
  readonly timestamp: number;
  readonly l1_head: number;
  readonly l1_finalized: null | AvailabilityL1Finalized;
  readonly payload_commitment: TaggedBase64;
  readonly builder_commitment: TaggedBase64;
  readonly ns_table: AvailabilityNamespaceTable;
  readonly block_merkle_tree_root: TaggedBase64;
  readonly fee_merkle_tree_root: TaggedBase64;
  readonly fee_info: AvailabilityFeeInfo;
  readonly builder_signature: null | AvailabilityBuilderSignature;
}

export abstract class AbstractavailabilityAPIV0HeaderFields implements AvailabilityAPIV0HeaderFields {
  constructor(
    public readonly height: number,
    public readonly timestamp: number,
    public readonly l1_head: number,
    public readonly l1_finalized: null | AvailabilityL1Finalized,
    public readonly payload_commitment: TaggedBase64,
    public readonly builder_commitment: TaggedBase64,
    public readonly ns_table: AvailabilityNamespaceTable,
    public readonly block_merkle_tree_root: TaggedBase64,
    public readonly fee_merkle_tree_root: TaggedBase64,
    public readonly fee_info: AvailabilityFeeInfo,
    public readonly builder_signature: null | AvailabilityBuilderSignature,
  ) {}
}

export class AvailabilityAPIV0HeaderFieldsImpl extends AbstractavailabilityAPIV0HeaderFields {
  constructor(
    height: number,
    timestamp: number,
    l1_head: number,
    l1_finalized: null | AvailabilityL1Finalized,
    payload_commitment: TaggedBase64,
    builder_commitment: TaggedBase64,
    ns_table: AvailabilityNamespaceTable,
    block_merkle_tree_root: TaggedBase64,
    fee_merkle_tree_root: TaggedBase64,
    fee_info: AvailabilityFeeInfo,
    builder_signature: null | AvailabilityBuilderSignature,
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
    Object.freeze(this);
  }

  toJSON() {
    return availabilityAPIV0HeaderCodec.encode(this);
  }
}

class AvailabilityAPIV0HeaderFieldsDecoder implements Converter<
  unknown,
  AvailabilityAPIV0HeaderFields
> {
  convert(input: unknown): AvailabilityAPIV0HeaderFields {
    assertRecordWithKeys(
      input,
      'height',
      'timestamp',
      'l1_head',
      'l1_finalized',
      'payload_commitment',
      'builder_commitment',
      'ns_table',
      'block_merkle_tree_root',
      'fee_merkle_tree_root',
      'fee_info',
      'builder_signature',
    );

    return new AvailabilityAPIV0HeaderFieldsImpl(
      numberCodec.decode(input.height),
      numberCodec.decode(input.timestamp),
      numberCodec.decode(input.l1_head),
      nullableAvailabilityL1FinalizedCodec.decode(input.l1_finalized),
      taggedBase64Codec.decode(input.payload_commitment),
      taggedBase64Codec.decode(input.builder_commitment),
      availabilityNamespaceTableCodec.decode(input.ns_table),
      taggedBase64Codec.decode(input.block_merkle_tree_root),
      taggedBase64Codec.decode(input.fee_merkle_tree_root),
      availabilityFeeInfoCodec.decode(input.fee_info),
      nullableAvailabilityBuilderSignatureCodec.decode(input.builder_signature),
    );
  }
}
class AvailabilityAPIV0HeaderFieldsEncoder implements Converter<
  AvailabilityAPIV0HeaderFields,
  unknown
> {
  convert(input: AvailabilityAPIV0HeaderFields): unknown {
    return {
      height: numberCodec.encode(input.height),
      timestamp: numberCodec.encode(input.timestamp),
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
    };
  }
}

class AvailabilityAPIV0HeaderFieldsCodec extends TypeCheckingCodec<
  AvailabilityAPIV0HeaderFields,
  unknown
> {
  public readonly encoder = new AvailabilityAPIV0HeaderFieldsEncoder();
  public readonly decoder = new AvailabilityAPIV0HeaderFieldsDecoder();
}

export const availabilityAPIV0HeaderCodec =
  new AvailabilityAPIV0HeaderFieldsCodec();
