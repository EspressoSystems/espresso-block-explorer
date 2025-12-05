import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { CappuccinoAPIHeader } from './block_header';
import { CappuccinoAPITransactionNMTEntry } from './transaction_nmt_entry';
/**
 * CappuccinoDerivedTransactionSummary represents a Transaction summary that
 * is derived from other primitives in the Cappuccino API.
 */
export declare class CappuccinoDerivedTransactionSummary {
    readonly hash: TaggedBase64;
    readonly header: CappuccinoAPIHeader;
    readonly offset: number;
    readonly transaction: CappuccinoAPITransactionNMTEntry;
    constructor(hash: TaggedBase64, header: CappuccinoAPIHeader, offset: number, transaction: CappuccinoAPITransactionNMTEntry);
    toJSON(): {
        hash: string;
        header: {
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
        offset: number;
        transaction: {
            vm: number;
            payload: number[];
        };
    };
}
export declare class CappuccinoDerivedTransactionSummaryDecoder implements Converter<unknown, CappuccinoDerivedTransactionSummary> {
    convert(input: unknown): CappuccinoDerivedTransactionSummary;
}
export declare class CappuccinoDerivedTransactionSummaryEncoder implements Converter<CappuccinoDerivedTransactionSummary> {
    convert(input: CappuccinoDerivedTransactionSummary): {
        hash: string;
        header: {
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
        offset: number;
        transaction: {
            vm: number;
            payload: number[];
        };
    };
}
export declare class CappuccinoDerivedTransactionSummaryCodec extends TypeCheckingCodec<CappuccinoDerivedTransactionSummary, ReturnType<InstanceType<new () => CappuccinoDerivedTransactionSummaryEncoder>['convert']>> {
    readonly encoder: CappuccinoDerivedTransactionSummaryEncoder;
    readonly decoder: CappuccinoDerivedTransactionSummaryDecoder;
}
export declare const cappuccinoDerivedTransactionSummaryCodec: CappuccinoDerivedTransactionSummaryCodec;
export declare const listCappuccinoDerivedTransactionSummaryCodec: ArrayCodec<CappuccinoDerivedTransactionSummary, {
    hash: string;
    header: {
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
    offset: number;
    transaction: {
        vm: number;
        payload: number[];
    };
}>;
