import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
export declare class CappuccinoExplorerTransactionDetailDetails {
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
declare class CappuccinoExplorerTransactionDetailDetailsDecoder implements Converter<unknown, CappuccinoExplorerTransactionDetailDetails> {
    convert(input: unknown): CappuccinoExplorerTransactionDetailDetails;
}
declare class CappuccinoExplorerTransactionDetailDetailsEncoder implements Converter<CappuccinoExplorerTransactionDetailDetails> {
    convert(input: CappuccinoExplorerTransactionDetailDetails): {
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
declare class CappuccinoExplorerTransactionDetailDetailsCodec extends TypeCheckingCodec<CappuccinoExplorerTransactionDetailDetails, ReturnType<InstanceType<new () => CappuccinoExplorerTransactionDetailDetailsEncoder>['convert']>> {
    readonly encoder: CappuccinoExplorerTransactionDetailDetailsEncoder;
    readonly decoder: CappuccinoExplorerTransactionDetailDetailsDecoder;
}
export declare const cappuccinoExplorerTransactionDetailDetailsCodec: CappuccinoExplorerTransactionDetailDetailsCodec;
export {};
