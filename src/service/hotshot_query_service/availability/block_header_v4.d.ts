import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AbstractAvailabilityAPIV2HeaderFields, AvailabilityAPIV2HeaderFields } from './block_header_v2';
import { AvailabilityBuilderSignature } from './builder_signature';
import { AvailabilityFeeInfo } from './fee_info';
import { AvailabilityL1Finalized } from './l1_finalized';
import { AvailabilityNamespaceTable } from './namespace_table';
export interface AvailabilityAPIV4Header extends AvailabilityAPIV2HeaderFields {
    readonly timestamp_millis: number;
    readonly reward_merkle_tree_root: TaggedBase64;
    readonly total_reward_distributed: bigint;
    readonly next_stake_table_hash: null | TaggedBase64;
}
export declare class AbstractAvailabilityAPIV4Header extends AbstractAvailabilityAPIV2HeaderFields implements AvailabilityAPIV4Header {
    readonly timestamp_millis: number;
    readonly reward_merkle_tree_root: TaggedBase64;
    readonly total_reward_distributed: bigint;
    readonly next_stake_table_hash: null | TaggedBase64;
    constructor(height: number, timestamp: number, timestamp_millis: number, l1_head: number, l1_finalized: null | AvailabilityL1Finalized, payload_commitment: TaggedBase64, builder_commitment: TaggedBase64, ns_table: AvailabilityNamespaceTable, block_merkle_tree_root: TaggedBase64, fee_merkle_tree_root: TaggedBase64, fee_info: AvailabilityFeeInfo, builder_signature: AvailabilityBuilderSignature, reward_merkle_tree_root: TaggedBase64, total_reward_distributed: bigint, next_stake_table_hash: null | TaggedBase64);
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
 * AvailabilityAPIV4HeaderImpl represents the header of a block in the
 * Availability API.
 */
export declare class AvailabilityAPIV4HeaderImpl extends AbstractAvailabilityAPIV4Header {
    constructor(height: number, timestamp: number, timestamp_millis: number, l1_head: number, l1_finalized: null | AvailabilityL1Finalized, payload_commitment: TaggedBase64, builder_commitment: TaggedBase64, ns_table: AvailabilityNamespaceTable, block_merkle_tree_root: TaggedBase64, fee_merkle_tree_root: TaggedBase64, fee_info: AvailabilityFeeInfo, builder_signature: AvailabilityBuilderSignature, reward_merkle_tree_root: TaggedBase64, total_reward_distributed: bigint, next_stake_table_hash: null | TaggedBase64);
}
export declare class AvailabilityAPIV4HeaderDecoder implements Converter<unknown, AvailabilityAPIV4Header> {
    convert(input: unknown): AvailabilityAPIV4Header;
}
export declare class AvailabilityAPIV4HeaderEncoder implements Converter<AvailabilityAPIV4Header> {
    convert(input: AvailabilityAPIV4Header): {
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
export declare class AvailabilityAPIV4HeaderCodec extends TypeCheckingCodec<AvailabilityAPIV4Header, ReturnType<InstanceType<new () => AvailabilityAPIV4HeaderEncoder>['convert']>> {
    readonly encoder: AvailabilityAPIV4HeaderEncoder;
    readonly decoder: AvailabilityAPIV4HeaderDecoder;
}
export declare const availabilityAPIV4HeaderCodec: AvailabilityAPIV4HeaderCodec;
