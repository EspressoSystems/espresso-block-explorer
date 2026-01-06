import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { CappuccinoBuilderSignature } from './builder_signature';
import { CappuccinoFeeInfo } from './fee_info';
import { CappuccinoL1Finalized } from './l1_finalized';
import { CappuccinoNamespaceTable } from './namespace_table';
export interface CappuccinoAPIV0HeaderFields {
    readonly height: number;
    readonly timestamp: number;
    readonly l1_head: number;
    readonly l1_finalized: null | CappuccinoL1Finalized;
    readonly payload_commitment: TaggedBase64;
    readonly builder_commitment: TaggedBase64;
    readonly ns_table: CappuccinoNamespaceTable;
    readonly block_merkle_tree_root: TaggedBase64;
    readonly fee_merkle_tree_root: TaggedBase64;
    readonly fee_info: CappuccinoFeeInfo;
    readonly builder_signature: CappuccinoBuilderSignature;
}
export declare abstract class AbstractCappuccinoAPIV0HeaderFields implements CappuccinoAPIV0HeaderFields {
    readonly height: number;
    readonly timestamp: number;
    readonly l1_head: number;
    readonly l1_finalized: null | CappuccinoL1Finalized;
    readonly payload_commitment: TaggedBase64;
    readonly builder_commitment: TaggedBase64;
    readonly ns_table: CappuccinoNamespaceTable;
    readonly block_merkle_tree_root: TaggedBase64;
    readonly fee_merkle_tree_root: TaggedBase64;
    readonly fee_info: CappuccinoFeeInfo;
    readonly builder_signature: CappuccinoBuilderSignature;
    constructor(height: number, timestamp: number, l1_head: number, l1_finalized: null | CappuccinoL1Finalized, payload_commitment: TaggedBase64, builder_commitment: TaggedBase64, ns_table: CappuccinoNamespaceTable, block_merkle_tree_root: TaggedBase64, fee_merkle_tree_root: TaggedBase64, fee_info: CappuccinoFeeInfo, builder_signature: CappuccinoBuilderSignature);
}
export declare class CappuccinoAPIV0HeaderFieldsImpl extends AbstractCappuccinoAPIV0HeaderFields {
    constructor(height: number, timestamp: number, l1_head: number, l1_finalized: null | CappuccinoL1Finalized, payload_commitment: TaggedBase64, builder_commitment: TaggedBase64, ns_table: CappuccinoNamespaceTable, block_merkle_tree_root: TaggedBase64, fee_merkle_tree_root: TaggedBase64, fee_info: CappuccinoFeeInfo, builder_signature: CappuccinoBuilderSignature);
    toJSON(): unknown;
}
declare class CappuccinoAPIV0HeaderFieldsDecoder implements Converter<unknown, CappuccinoAPIV0HeaderFields> {
    convert(input: unknown): CappuccinoAPIV0HeaderFields;
}
declare class CappuccinoAPIV0HeaderFieldsEncoder implements Converter<CappuccinoAPIV0HeaderFields, unknown> {
    convert(input: CappuccinoAPIV0HeaderFields): unknown;
}
declare class CappuccinoPAPIV0HeaderFieldsCodec extends TypeCheckingCodec<CappuccinoAPIV0HeaderFields, unknown> {
    readonly encoder: CappuccinoAPIV0HeaderFieldsEncoder;
    readonly decoder: CappuccinoAPIV0HeaderFieldsDecoder;
}
export declare const cappuccinoAPIV0HeaderCodec: CappuccinoPAPIV0HeaderFieldsCodec;
export {};
