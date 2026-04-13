import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AvailabilityAPITransactionNMTEntry } from './transaction_nmt_entry';
import { AvailabilityAPITransactionProof } from './transaction_proof';
/**
 * AvailabilityAPITransactionResponse represents a transaction response in the
 * Availability API.
 */
export declare class AvailabilityAPITransactionResponse {
    readonly transaction: AvailabilityAPITransactionNMTEntry;
    readonly block_hash: TaggedBase64;
    readonly proof: AvailabilityAPITransactionProof;
    readonly height: number;
    readonly hash: TaggedBase64;
    constructor(transaction: AvailabilityAPITransactionNMTEntry, block_hash: TaggedBase64, proof: AvailabilityAPITransactionProof, height: number, hash: TaggedBase64);
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
export declare class AvailabilityAPITransactionResponseDecoder implements Converter<unknown, AvailabilityAPITransactionResponse> {
    convert(input: unknown): AvailabilityAPITransactionResponse;
}
export declare class AvailabilityAPITransactionResponseEncoder implements Converter<AvailabilityAPITransactionResponse> {
    convert(input: AvailabilityAPITransactionResponse): {
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
export declare class AvailabilityAPITransactionResponseCodec extends TypeCheckingCodec<AvailabilityAPITransactionResponse, ReturnType<InstanceType<new () => AvailabilityAPITransactionResponseEncoder>['convert']>> {
    readonly encoder: AvailabilityAPITransactionResponseEncoder;
    readonly decoder: AvailabilityAPITransactionResponseDecoder;
}
export declare const availabilityAPITransactionResponseCodec: AvailabilityAPITransactionResponseCodec;
