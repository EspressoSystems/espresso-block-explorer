import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import {
  AbstractavailabilityAPIV0HeaderFields,
  AvailabilityAPIV0HeaderFields,
} from './block_header_v0';
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

export interface AvailabilityAPIV2HeaderFields extends AvailabilityAPIV0HeaderFields {}

export class AbstractAvailabilityAPIV2HeaderFields
  extends AbstractavailabilityAPIV0HeaderFields
  implements AvailabilityAPIV2HeaderFields
{
  toJSON() {
    return availabilityAPIV2HeaderFieldsCodec.encode(this);
  }
}

/**
 * AvailabilityAPIV2HeaderFieldsImpl represents the header of a block in the
 * Availability API.
 */
export class AvailabilityAPIV2HeaderFieldsImpl extends AbstractAvailabilityAPIV2HeaderFields {
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
}

export class AvailabilityAPIV2HeaderFieldsDecoder implements Converter<
  unknown,
  AvailabilityAPIV2HeaderFields
> {
  convert(input: unknown): AvailabilityAPIV2HeaderFields {
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

    return new AvailabilityAPIV2HeaderFieldsImpl(
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

export class AvailabilityAPIV2HeaderFieldsEncoder implements Converter<AvailabilityAPIV2HeaderFields> {
  convert(input: AvailabilityAPIV2HeaderFields) {
    assertInstanceOf(input, AvailabilityAPIV2HeaderFieldsImpl);

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
    } as const;
  }
}

export class AvailabilityAPIV2HeaderFieldsCodec extends TypeCheckingCodec<
  AvailabilityAPIV2HeaderFields,
  ReturnType<
    InstanceType<new () => AvailabilityAPIV2HeaderFieldsEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityAPIV2HeaderFieldsEncoder();
  readonly decoder = new AvailabilityAPIV2HeaderFieldsDecoder();
}

export const availabilityAPIV2HeaderFieldsCodec =
  new AvailabilityAPIV2HeaderFieldsCodec();
