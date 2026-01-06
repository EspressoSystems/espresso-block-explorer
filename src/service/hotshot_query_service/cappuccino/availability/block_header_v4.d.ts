import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AbstractCappuccinoAPIV2HeaderFields, CappuccinoAPIV2HeaderFields } from './block_header_v2';
import { CappuccinoBuilderSignature } from './builder_signature';
import { CappuccinoFeeInfo } from './fee_info';
import { CappuccinoL1Finalized } from './l1_finalized';
import { CappuccinoNamespaceTable } from './namespace_table';
export interface CappuccinoAPIV4Header extends CappuccinoAPIV2HeaderFields {
    readonly timestamp_millis: number;
    readonly reward_merkle_tree_root: TaggedBase64;
    readonly total_reward_distributed: bigint;
    readonly next_stake_table_hash: null | TaggedBase64;
}
export declare class AbstractCappuccinoAPIV4Header extends AbstractCappuccinoAPIV2HeaderFields implements CappuccinoAPIV4Header {
    readonly timestamp_millis: number;
    readonly reward_merkle_tree_root: TaggedBase64;
    readonly total_reward_distributed: bigint;
    readonly next_stake_table_hash: null | TaggedBase64;
    constructor(height: number, timestamp: number, timestamp_millis: number, l1_head: number, l1_finalized: null | CappuccinoL1Finalized, payload_commitment: TaggedBase64, builder_commitment: TaggedBase64, ns_table: CappuccinoNamespaceTable, block_merkle_tree_root: TaggedBase64, fee_merkle_tree_root: TaggedBase64, fee_info: CappuccinoFeeInfo, builder_signature: CappuccinoBuilderSignature, reward_merkle_tree_root: TaggedBase64, total_reward_distributed: bigint, next_stake_table_hash: null | TaggedBase64);
    toJSON(): {
        readonly height: number;
        readonly timestamp: number;
        readonly timestamp_millis: number;
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
        readonly reward_merkle_tree_root: string;
        readonly total_reward_distributed: `0x${string}`;
        readonly next_stake_table_hash: string | null;
    };
}
/**
 * CappuccinoAPIHeader represents the header of a block in the Cappuccino API.
 */
export declare class CappuccinoAPIV4HeaderImpl extends AbstractCappuccinoAPIV4Header {
    constructor(height: number, timestamp: number, timestamp_millis: number, l1_head: number, l1_finalized: null | CappuccinoL1Finalized, payload_commitment: TaggedBase64, builder_commitment: TaggedBase64, ns_table: CappuccinoNamespaceTable, block_merkle_tree_root: TaggedBase64, fee_merkle_tree_root: TaggedBase64, fee_info: CappuccinoFeeInfo, builder_signature: CappuccinoBuilderSignature, reward_merkle_tree_root: TaggedBase64, total_reward_distributed: bigint, next_stake_table_hash: null | TaggedBase64);
}
export declare class CappuccinoAPIV4HeaderDecoder implements Converter<unknown, CappuccinoAPIV4Header> {
    convert(input: unknown): CappuccinoAPIV4Header;
}
export declare class CappuccinoAPIV4HeaderEncoder implements Converter<CappuccinoAPIV4Header> {
    convert(input: CappuccinoAPIV4Header): {
        readonly height: number;
        readonly timestamp: number;
        readonly timestamp_millis: number;
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
        readonly reward_merkle_tree_root: string;
        readonly total_reward_distributed: `0x${string}`;
        readonly next_stake_table_hash: string | null;
    };
}
export declare class CappuccinoAPIV4HeaderCodec extends TypeCheckingCodec<CappuccinoAPIV4Header, ReturnType<InstanceType<new () => CappuccinoAPIV4HeaderEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIV4HeaderEncoder;
    readonly decoder: CappuccinoAPIV4HeaderDecoder;
}
export declare const cappuccinoAPIV4HeaderCodec: CappuccinoAPIV4HeaderCodec;
