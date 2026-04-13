import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
type NamespaceID = number;
/**
 * ExplorerTransactionSummary is a class that represents the summary of a
 * a single transaction within the Espresso Chain.
 */
export declare class ExplorerTransactionSummary {
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
declare class ExplorerTransactionSummaryDecoder implements Converter<unknown, ExplorerTransactionSummary> {
    convert(input: unknown): ExplorerTransactionSummary;
}
declare class ExplorerTransactionSummaryEncoder implements Converter<ExplorerTransactionSummary> {
    convert(input: ExplorerTransactionSummary): {
        hash: string;
        rollups: number[];
        height: number;
        time: string;
        offset: number;
        num_transactions: number;
    };
}
declare class ExplorerTransactionSummaryCodec extends TypeCheckingCodec<ExplorerTransactionSummary, ReturnType<InstanceType<new () => ExplorerTransactionSummaryEncoder>['convert']>> {
    readonly encoder: ExplorerTransactionSummaryEncoder;
    readonly decoder: ExplorerTransactionSummaryDecoder;
}
export declare const explorerTransactionSummaryCodec: ExplorerTransactionSummaryCodec;
export declare const explorerTransactionSummaryArrayCodec: ArrayCodec<ExplorerTransactionSummary, {
    hash: string;
    rollups: number[];
    height: number;
    time: string;
    offset: number;
    num_transactions: number;
}>;
export {};
