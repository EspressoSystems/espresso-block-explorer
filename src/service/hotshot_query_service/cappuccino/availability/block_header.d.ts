import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { CappuccinoBuilderSignature } from './builder_signature';
import { CappuccinoFeeInfo } from './fee_info';
import { CappuccinoL1Finalized } from './l1_finalized';
import { CappuccinoNamespaceTable } from './namespace_table';
/**
 * CappuccinoAPIHeader represents the header of a block in the Cappuccino API.
 */
export declare class CappuccinoAPIHeader {
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
    constructor(height: number, timestamp: number, l1_head: number, l1_finalized: null | CappuccinoL1Finalized, payload_commitment: number[], ns_table: CappuccinoNamespaceTable, block_merkle_root: TaggedBase64, fee_merkle_root: TaggedBase64, builder_signature: CappuccinoBuilderSignature, fee_info: CappuccinoFeeInfo);
    toJSON(): {
        readonly height: number;
        readonly timestamp: number;
        readonly l1_head: number;
        readonly l1_finalized: {
            number: number;
            timestamp: string;
            hash: string;
        } | null;
        readonly payload_commitment: number[];
        readonly ns_table: {
            bytes: string;
        };
        readonly block_merkle_root: string;
        readonly fee_merkle_root: string;
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
export declare class CappuccinoAPIHeaderDecoder implements Converter<unknown, CappuccinoAPIHeader> {
    convert(input: unknown): CappuccinoAPIHeader;
}
export declare class CappuccinoAPIHeaderEncoder implements Converter<CappuccinoAPIHeader> {
    convert(input: CappuccinoAPIHeader): {
        readonly height: number;
        readonly timestamp: number;
        readonly l1_head: number;
        readonly l1_finalized: {
            number: number;
            timestamp: string;
            hash: string;
        } | null;
        readonly payload_commitment: number[];
        readonly ns_table: {
            bytes: string;
        };
        readonly block_merkle_root: string;
        readonly fee_merkle_root: string;
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
export declare class CappuccinoAPIHeaderCodec extends TypeCheckingCodec<CappuccinoAPIHeader, ReturnType<InstanceType<new () => CappuccinoAPIHeaderEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIHeaderEncoder;
    readonly decoder: CappuccinoAPIHeaderDecoder;
}
export declare const cappuccinoAPIHeaderCodec: CappuccinoAPIHeaderCodec;
