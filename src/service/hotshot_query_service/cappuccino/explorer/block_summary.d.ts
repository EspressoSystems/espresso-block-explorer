import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec/array';
import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';

export declare class CappuccinoExplorerBlockSummary {
    readonly hash: TaggedBase64;
    readonly height: number;
    readonly proposerID: ArrayBuffer[];
    readonly numTransactions: number;
    readonly size: number;
    readonly time: Date;
    constructor(hash: TaggedBase64, height: number, proposerID: ArrayBuffer[], numTransactions: number, size: number, time: Date);
    toJSON(): unknown;
}
declare class CappuccinoExplorerBlockSummaryDecoder implements Converter<unknown, CappuccinoExplorerBlockSummary> {
    convert(input: unknown): CappuccinoExplorerBlockSummary;
}
declare class CappuccinoExplorerBlockSummaryEncoder implements Converter<CappuccinoExplorerBlockSummary, unknown> {
    convert(input: CappuccinoExplorerBlockSummary): unknown;
}
declare class CappuccinoExplorerBlockSummaryCodec extends Codec<CappuccinoExplorerBlockSummary, unknown> {
    readonly encoder: CappuccinoExplorerBlockSummaryEncoder;
    readonly decoder: CappuccinoExplorerBlockSummaryDecoder;
}
export declare const cappuccinoExplorerBlockSummaryCodec: CappuccinoExplorerBlockSummaryCodec;
export declare const cappuccinoExplorerBlockSummaryArrayCodec: ArrayCodec<CappuccinoExplorerBlockSummary, unknown>;
export {};
