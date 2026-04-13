import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AvailabilityBuilderSignature } from './builder_signature';
import { AvailabilityFeeInfo } from './fee_info';
import { AvailabilityL1Finalized } from './l1_finalized';
import { AvailabilityNamespaceTable } from './namespace_table';
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
    readonly builder_signature: AvailabilityBuilderSignature;
}
export declare abstract class AbstractavailabilityAPIV0HeaderFields implements AvailabilityAPIV0HeaderFields {
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
    readonly builder_signature: AvailabilityBuilderSignature;
    constructor(height: number, timestamp: number, l1_head: number, l1_finalized: null | AvailabilityL1Finalized, payload_commitment: TaggedBase64, builder_commitment: TaggedBase64, ns_table: AvailabilityNamespaceTable, block_merkle_tree_root: TaggedBase64, fee_merkle_tree_root: TaggedBase64, fee_info: AvailabilityFeeInfo, builder_signature: AvailabilityBuilderSignature);
}
export declare class AvailabilityAPIV0HeaderFieldsImpl extends AbstractavailabilityAPIV0HeaderFields {
    constructor(height: number, timestamp: number, l1_head: number, l1_finalized: null | AvailabilityL1Finalized, payload_commitment: TaggedBase64, builder_commitment: TaggedBase64, ns_table: AvailabilityNamespaceTable, block_merkle_tree_root: TaggedBase64, fee_merkle_tree_root: TaggedBase64, fee_info: AvailabilityFeeInfo, builder_signature: AvailabilityBuilderSignature);
    toJSON(): unknown;
}
declare class AvailabilityAPIV0HeaderFieldsDecoder implements Converter<unknown, AvailabilityAPIV0HeaderFields> {
    convert(input: unknown): AvailabilityAPIV0HeaderFields;
}
declare class AvailabilityAPIV0HeaderFieldsEncoder implements Converter<AvailabilityAPIV0HeaderFields, unknown> {
    convert(input: AvailabilityAPIV0HeaderFields): unknown;
}
declare class AvailabilityAPIV0HeaderFieldsCodec extends TypeCheckingCodec<AvailabilityAPIV0HeaderFields, unknown> {
    readonly encoder: AvailabilityAPIV0HeaderFieldsEncoder;
    readonly decoder: AvailabilityAPIV0HeaderFieldsDecoder;
}
export declare const availabilityAPIV0HeaderCodec: AvailabilityAPIV0HeaderFieldsCodec;
export {};
