import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AbstractavailabilityAPIV0HeaderFields, AvailabilityAPIV0HeaderFields } from './block_header_v0';
import { AvailabilityBuilderSignature } from './builder_signature';
import { AvailabilityFeeInfo } from './fee_info';
import { AvailabilityL1Finalized } from './l1_finalized';
import { AvailabilityNamespaceTable } from './namespace_table';
export interface AvailabilityAPIV2HeaderFields extends AvailabilityAPIV0HeaderFields {
}
export declare class AbstractAvailabilityAPIV2HeaderFields extends AbstractavailabilityAPIV0HeaderFields implements AvailabilityAPIV2HeaderFields {
    toJSON(): {
        readonly height: number;
        readonly timestamp: number;
        readonly l1_head: number;
        readonly l1_finalized: {
            number: number;
            timestamp: string;
            hash: string;
        } | null;
        readonly payload_commitment: string;
        readonly builder_commitment: string;
        readonly ns_table: {
            bytes: string;
        };
        readonly block_merkle_tree_root: string;
        readonly fee_merkle_tree_root: string;
        readonly builder_signature: {
            r: `0x${string}`;
            s: `0x${string}`;
            v: number;
        };
        readonly fee_info: {
            account: `0x${string}`;
            amount: `0x${string}`;
        };
    };
}
/**
 * AvailabilityAPIV2HeaderFieldsImpl represents the header of a block in the
 * Availability API.
 */
export declare class AvailabilityAPIV2HeaderFieldsImpl extends AbstractAvailabilityAPIV2HeaderFields {
    constructor(height: number, timestamp: number, l1_head: number, l1_finalized: null | AvailabilityL1Finalized, payload_commitment: TaggedBase64, builder_commitment: TaggedBase64, ns_table: AvailabilityNamespaceTable, block_merkle_tree_root: TaggedBase64, fee_merkle_tree_root: TaggedBase64, fee_info: AvailabilityFeeInfo, builder_signature: AvailabilityBuilderSignature);
}
export declare class AvailabilityAPIV2HeaderFieldsDecoder implements Converter<unknown, AvailabilityAPIV2HeaderFields> {
    convert(input: unknown): AvailabilityAPIV2HeaderFields;
}
export declare class AvailabilityAPIV2HeaderFieldsEncoder implements Converter<AvailabilityAPIV2HeaderFields> {
    convert(input: AvailabilityAPIV2HeaderFields): {
        readonly height: number;
        readonly timestamp: number;
        readonly l1_head: number;
        readonly l1_finalized: {
            number: number;
            timestamp: string;
            hash: string;
        } | null;
        readonly payload_commitment: string;
        readonly builder_commitment: string;
        readonly ns_table: {
            bytes: string;
        };
        readonly block_merkle_tree_root: string;
        readonly fee_merkle_tree_root: string;
        readonly builder_signature: {
            r: `0x${string}`;
            s: `0x${string}`;
            v: number;
        };
        readonly fee_info: {
            account: `0x${string}`;
            amount: `0x${string}`;
        };
    };
}
export declare class AvailabilityAPIV2HeaderFieldsCodec extends TypeCheckingCodec<AvailabilityAPIV2HeaderFields, ReturnType<InstanceType<new () => AvailabilityAPIV2HeaderFieldsEncoder>['convert']>> {
    readonly encoder: AvailabilityAPIV2HeaderFieldsEncoder;
    readonly decoder: AvailabilityAPIV2HeaderFieldsDecoder;
}
export declare const availabilityAPIV2HeaderFieldsCodec: AvailabilityAPIV2HeaderFieldsCodec;
