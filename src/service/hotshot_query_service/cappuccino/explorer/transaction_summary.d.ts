import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';

type NamespaceID = number;
export declare class CappuccinoExplorerTransactionSummary {
    readonly hash: TaggedBase64;
    readonly rollups: NamespaceID[];
    readonly height: number;
    readonly time: Date;
    readonly offset: number;
    readonly numTransactions: number;
    constructor(hash: TaggedBase64, rollups: NamespaceID[], height: number, time: Date, offset: number, numTransactions: number);
    toJSON(): {
        hash: string;
        rollups: number[];
        height: number;
        time: string;
        offset: number;
        num_transactions: number;
    };
}
declare class CappuccinoExplorerTransactionSummaryDecoder implements Converter<unknown, CappuccinoExplorerTransactionSummary> {
    convert(input: unknown): CappuccinoExplorerTransactionSummary;
}
declare class CappuccinoExplorerTransactionSummaryEncoder implements Converter<CappuccinoExplorerTransactionSummary> {
    convert(input: CappuccinoExplorerTransactionSummary): {
        hash: string;
        rollups: number[];
        height: number;
        time: string;
        offset: number;
        num_transactions: number;
    };
}
declare class CappuccinoExplorerTransactionSummaryCodec extends TypeCheckingCodec<CappuccinoExplorerTransactionSummary, ReturnType<InstanceType<new () => CappuccinoExplorerTransactionSummaryEncoder>['convert']>> {
    readonly encoder: CappuccinoExplorerTransactionSummaryEncoder;
    readonly decoder: CappuccinoExplorerTransactionSummaryDecoder;
}
export declare const cappuccinoExplorerTransactionSummaryCodec: CappuccinoExplorerTransactionSummaryCodec;
export declare const cappuccinoExplorerTransactionSummaryArrayCodec: ArrayCodec<CappuccinoExplorerTransactionSummary, {
    hash: string;
    rollups: number[];
    height: number;
    time: string;
    offset: number;
    num_transactions: number;
}>;
export {};
