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
  AbstractCappuccinoAPIV0HeaderFields,
  CappuccinoAPIV0HeaderFields,
} from './block_header_v0';
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

export interface CappuccinoAPIV2HeaderFields extends CappuccinoAPIV0HeaderFields {}

export class AbstractCappuccinoAPIV2HeaderFields
  extends AbstractCappuccinoAPIV0HeaderFields
  implements CappuccinoAPIV2HeaderFields
{
  toJSON() {
    return cappuccinoAPIV2HeaderFieldsCodec.encode(this);
  }
}

/**
 * CappuccinoAPIHeader represents the header of a block in the Cappuccino API.
 */
export class CappuccinoAPIV2HeaderFieldsImpl extends AbstractCappuccinoAPIV2HeaderFields {
  constructor(
    height: number,
    timestamp: number,
    l1_head: number,
    l1_finalized: null | CappuccinoL1Finalized,
    payload_commitment: TaggedBase64,
    builder_commitment: TaggedBase64,
    ns_table: CappuccinoNamespaceTable,
    block_merkle_tree_root: TaggedBase64,
    fee_merkle_tree_root: TaggedBase64,
    fee_info: CappuccinoFeeInfo,
    builder_signature: CappuccinoBuilderSignature,
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

export class CappuccinoAPIV2HeaderFieldsDecoder implements Converter<
  unknown,
  CappuccinoAPIV2HeaderFields
> {
  convert(input: unknown): CappuccinoAPIV2HeaderFields {
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

    return new CappuccinoAPIV2HeaderFieldsImpl(
      numberCodec.decode(input.height),
      numberCodec.decode(input.timestamp),
      numberCodec.decode(input.l1_head),
      nullableCappuccinoL1FinalizedCodec.decode(input.l1_finalized),
      taggedBase64Codec.decode(input.payload_commitment),
      taggedBase64Codec.decode(input.builder_commitment),
      cappuccinoNamespaceTableCodec.decode(input.ns_table),
      taggedBase64Codec.decode(input.block_merkle_tree_root),
      taggedBase64Codec.decode(input.fee_merkle_tree_root),
      cappuccinoFeeInfoCodec.decode(input.fee_info),
      cappuccinoBuilderSignatureCodec.decode(input.builder_signature),
    );
  }
}

export class CappuccinoAPIV2HeaderFieldsEncoder implements Converter<CappuccinoAPIV2HeaderFields> {
  convert(input: CappuccinoAPIV2HeaderFields) {
    assertInstanceOf(input, CappuccinoAPIV2HeaderFieldsImpl);

    return {
      height: numberCodec.encode(input.height),
      timestamp: numberCodec.encode(input.timestamp),
      l1_head: numberCodec.encode(input.l1_head),
      l1_finalized: nullableCappuccinoL1FinalizedCodec.encode(
        input.l1_finalized,
      ),
      payload_commitment: taggedBase64Codec.encode(input.payload_commitment),
      builder_commitment: taggedBase64Codec.encode(input.builder_commitment),
      ns_table: cappuccinoNamespaceTableCodec.encode(input.ns_table),
      block_merkle_tree_root: taggedBase64Codec.encode(
        input.block_merkle_tree_root,
      ),
      fee_merkle_tree_root: taggedBase64Codec.encode(
        input.fee_merkle_tree_root,
      ),
      builder_signature: cappuccinoBuilderSignatureCodec.encode(
        input.builder_signature,
      ),
      fee_info: cappuccinoFeeInfoCodec.encode(input.fee_info),
    } as const;
  }
}

export class CappuccinoAPIV2HeaderFieldsCodec extends TypeCheckingCodec<
  CappuccinoAPIV2HeaderFields,
  ReturnType<
    InstanceType<new () => CappuccinoAPIV2HeaderFieldsEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoAPIV2HeaderFieldsEncoder();
  readonly decoder = new CappuccinoAPIV2HeaderFieldsDecoder();
}

export const cappuccinoAPIV2HeaderFieldsCodec =
  new CappuccinoAPIV2HeaderFieldsCodec();
