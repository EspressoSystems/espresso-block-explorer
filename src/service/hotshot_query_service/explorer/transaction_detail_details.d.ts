import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
/**
 * ExplorerTransactionDetailDetails represents the details of a
 * transaction in the block explorer.
 */
export declare class ExplorerTransactionDetailDetails {
    readonly hash: TaggedBase64;
    readonly height: number;
    readonly blockConfirmed: boolean;
    readonly offset: number;
    readonly numTransactions: number;
    readonly size: number;
    readonly time: Date;
    readonly sequencingFees: unknown[];
    readonly feeDetails: unknown[];
    constructor(hash: TaggedBase64, height: number, blockConfirmed: boolean, offset: number, numTransactions: number, size: number, time: Date, sequencingFees: unknown[], feeDetails: unknown[]);
    toJSON(): {
        hash: string;
        height: number;
        block_confirmed: boolean;
        offset: number;
        num_transactions: number;
        size: number;
        time: string;
        sequencing_fees: never[];
        fee_details: never[];
    };
}
declare class ExplorerTransactionDetailDetailsDecoder implements Converter<unknown, ExplorerTransactionDetailDetails> {
    convert(input: unknown): ExplorerTransactionDetailDetails;
}
declare class ExplorerTransactionDetailDetailsEncoder implements Converter<ExplorerTransactionDetailDetails> {
    convert(input: ExplorerTransactionDetailDetails): {
        hash: string;
        height: number;
        block_confirmed: boolean;
        offset: number;
        num_transactions: number;
        size: number;
        time: string;
        sequencing_fees: never[];
        fee_details: never[];
    };
}
declare class ExplorerTransactionDetailDetailsCodec extends TypeCheckingCodec<ExplorerTransactionDetailDetails, ReturnType<InstanceType<new () => ExplorerTransactionDetailDetailsEncoder>['convert']>> {
    readonly encoder: ExplorerTransactionDetailDetailsEncoder;
    readonly decoder: ExplorerTransactionDetailDetailsDecoder;
}
export declare const explorerTransactionDetailDetailsCodec: ExplorerTransactionDetailDetailsCodec;
export {};
