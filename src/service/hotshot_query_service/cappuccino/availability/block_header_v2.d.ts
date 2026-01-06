import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AbstractCappuccinoAPIV0HeaderFields, CappuccinoAPIV0HeaderFields } from './block_header_v0';
import { CappuccinoBuilderSignature } from './builder_signature';
import { CappuccinoFeeInfo } from './fee_info';
import { CappuccinoL1Finalized } from './l1_finalized';
import { CappuccinoNamespaceTable } from './namespace_table';
export interface CappuccinoAPIV2HeaderFields extends CappuccinoAPIV0HeaderFields {
}
export declare class AbstractCappuccinoAPIV2HeaderFields extends AbstractCappuccinoAPIV0HeaderFields implements CappuccinoAPIV2HeaderFields {
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
 * CappuccinoAPIHeader represents the header of a block in the Cappuccino API.
 */
export declare class CappuccinoAPIV2HeaderFieldsImpl extends AbstractCappuccinoAPIV2HeaderFields {
    constructor(height: number, timestamp: number, l1_head: number, l1_finalized: null | CappuccinoL1Finalized, payload_commitment: TaggedBase64, builder_commitment: TaggedBase64, ns_table: CappuccinoNamespaceTable, block_merkle_tree_root: TaggedBase64, fee_merkle_tree_root: TaggedBase64, fee_info: CappuccinoFeeInfo, builder_signature: CappuccinoBuilderSignature);
}
export declare class CappuccinoAPIV2HeaderFieldsDecoder implements Converter<unknown, CappuccinoAPIV2HeaderFields> {
    convert(input: unknown): CappuccinoAPIV2HeaderFields;
}
export declare class CappuccinoAPIV2HeaderFieldsEncoder implements Converter<CappuccinoAPIV2HeaderFields> {
    convert(input: CappuccinoAPIV2HeaderFields): {
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
export declare class CappuccinoAPIV2HeaderFieldsCodec extends TypeCheckingCodec<CappuccinoAPIV2HeaderFields, ReturnType<InstanceType<new () => CappuccinoAPIV2HeaderFieldsEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIV2HeaderFieldsEncoder;
    readonly decoder: CappuccinoAPIV2HeaderFieldsDecoder;
}
export declare const cappuccinoAPIV2HeaderFieldsCodec: CappuccinoAPIV2HeaderFieldsCodec;
