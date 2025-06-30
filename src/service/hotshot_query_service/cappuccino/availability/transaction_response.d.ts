import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoAPITransactionNMTEntry } from './transaction_nmt_entry';
import { CappuccinoAPITransactionProof } from './transaction_proof';
/**
 * CappuccinoAPITransactionResponse represents a transaction response in the
 * Cappuccino API.
 */
export declare class CappuccinoAPITransactionResponse {
    readonly transaction: CappuccinoAPITransactionNMTEntry;
    readonly block_hash: TaggedBase64;
    readonly proof: CappuccinoAPITransactionProof;
    readonly height: number;
    readonly hash: TaggedBase64;
    constructor(transaction: CappuccinoAPITransactionNMTEntry, block_hash: TaggedBase64, proof: CappuccinoAPITransactionProof, height: number, hash: TaggedBase64);
    toJSON(): {
        transaction: {
            vm: number;
            payload: number[];
        };
        block_hash: string;
        proof: {
            pos: string;
            proof: ("Empty" | {
                readonly Leaf: {
                    readonly value: string;
                    readonly pos: string;
                    readonly elem: string;
                };
            } | {
                readonly ForgettenSubtree: {
                    readonly value: string;
                };
            } | {
                readonly Branch: {
                    readonly value: string;
                    readonly children: unknown[];
                };
            })[];
        };
        height: number;
        hash: string;
    };
}
export declare class CappuccinoAPITransactionResponseDecoder implements Converter<unknown, CappuccinoAPITransactionResponse> {
    convert(input: unknown): CappuccinoAPITransactionResponse;
}
export declare class CappuccinoAPITransactionResponseEncoder implements Converter<CappuccinoAPITransactionResponse> {
    convert(input: CappuccinoAPITransactionResponse): {
        transaction: {
            vm: number;
            payload: number[];
        };
        block_hash: string;
        proof: {
            pos: string;
            proof: ("Empty" | {
                readonly Leaf: {
                    readonly value: string;
                    readonly pos: string;
                    readonly elem: string;
                };
            } | {
                readonly ForgettenSubtree: {
                    readonly value: string;
                };
            } | {
                readonly Branch: {
                    readonly value: string;
                    readonly children: unknown[];
                };
            })[];
        };
        height: number;
        hash: string;
    };
}
export declare class CappuccinoAPITransactionResponseCodec extends TypeCheckingCodec<CappuccinoAPITransactionResponse, ReturnType<InstanceType<new () => CappuccinoAPITransactionResponseEncoder>['convert']>> {
    readonly encoder: CappuccinoAPITransactionResponseEncoder;
    readonly decoder: CappuccinoAPITransactionResponseDecoder;
}
export declare const cappuccinoAPITransactionResponseCodec: CappuccinoAPITransactionResponseCodec;
