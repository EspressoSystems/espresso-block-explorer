import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberArrayCodec, numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
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

/**
 * CappuccinoAPIHeader represents the header of a block in the Cappuccino API.
 */
export class CappuccinoAPIHeader {
  readonly height: number;
  readonly timestamp: number;
  readonly l1_head: number;
  readonly l1_finalized: null | CappuccinoL1Finalized;
  readonly payload_commitment: number[];
  readonly ns_table: CappuccinoNamespaceTable;
  readonly block_merkle_root: TaggedBase64;
  readonly fee_merkle_root: TaggedBase64;
  readonly builder_signature: CappuccinoBuilderSignature;
  readonly fee_info: CappuccinoFeeInfo;

  constructor(
    height: number,
    timestamp: number,
    l1_head: number,
    l1_finalized: null | CappuccinoL1Finalized,
    payload_commitment: number[],
    ns_table: CappuccinoNamespaceTable,
    block_merkle_root: TaggedBase64,
    fee_merkle_root: TaggedBase64,
    builder_signature: CappuccinoBuilderSignature,
    fee_info: CappuccinoFeeInfo,
  ) {
    this.height = height;
    this.timestamp = timestamp;
    this.l1_head = l1_head;
    this.l1_finalized = l1_finalized;
    this.payload_commitment = payload_commitment;
    this.ns_table = ns_table;
    this.block_merkle_root = block_merkle_root;
    this.fee_merkle_root = fee_merkle_root;
    this.builder_signature = builder_signature;
    this.fee_info = fee_info;
  }

  toJSON() {
    return cappuccinoAPIHeaderCodec.encode(this);
  }
}

export class CappuccinoAPIHeaderDecoder implements Converter<
  unknown,
  CappuccinoAPIHeader
> {
  convert(input: unknown): CappuccinoAPIHeader {
    assertRecordWithKeys(
      input,
      'height',
      'timestamp',
      'l1_head',
      'l1_finalized',
      'payload_commitment',
      'ns_table',
      'block_merkle_root',
      'fee_merkle_root',
      'builder_signature',
      'fee_info',
    );

    return new CappuccinoAPIHeader(
      numberCodec.decode(input.height),
      numberCodec.decode(input.timestamp),
      numberCodec.decode(input.l1_head),
      nullableCappuccinoL1FinalizedCodec.decode(input.l1_finalized),
      numberArrayCodec.decode(input.payload_commitment),
      cappuccinoNamespaceTableCodec.decode(input.ns_table),
      taggedBase64Codec.decode(input.block_merkle_root),
      taggedBase64Codec.decode(input.fee_merkle_root),
      cappuccinoBuilderSignatureCodec.decode(input.builder_signature),
      cappuccinoFeeInfoCodec.decode(input.fee_info),
    );
  }
}

export class CappuccinoAPIHeaderEncoder implements Converter<CappuccinoAPIHeader> {
  convert(input: CappuccinoAPIHeader) {
    assertInstanceOf(input, CappuccinoAPIHeader);

    return {
      height: numberCodec.encode(input.height),
      timestamp: numberCodec.encode(input.timestamp),
      l1_head: numberCodec.encode(input.l1_head),
      l1_finalized: nullableCappuccinoL1FinalizedCodec.encode(
        input.l1_finalized,
      ),
      payload_commitment: numberArrayCodec.encode(input.payload_commitment),
      ns_table: cappuccinoNamespaceTableCodec.encode(input.ns_table),
      block_merkle_root: taggedBase64Codec.encode(input.block_merkle_root),
      fee_merkle_root: taggedBase64Codec.encode(input.fee_merkle_root),
      builder_signature: cappuccinoBuilderSignatureCodec.encode(
        input.builder_signature,
      ),
      fee_info: cappuccinoFeeInfoCodec.encode(input.fee_info),
    } as const;
  }
}

export class CappuccinoAPIHeaderCodec extends TypeCheckingCodec<
  CappuccinoAPIHeader,
  ReturnType<InstanceType<new () => CappuccinoAPIHeaderEncoder>['convert']>
> {
  readonly encoder = new CappuccinoAPIHeaderEncoder();
  readonly decoder = new CappuccinoAPIHeaderDecoder();
}

export const cappuccinoAPIHeaderCodec = new CappuccinoAPIHeaderCodec();
