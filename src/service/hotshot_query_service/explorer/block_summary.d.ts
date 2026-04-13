import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
export declare class ExplorerBlockSummary {
    readonly hash: TaggedBase64;
    readonly height: number;
    readonly proposerID: ArrayBuffer[];
    readonly numTransactions: number;
    readonly size: number;
    readonly time: Date;
    constructor(hash: TaggedBase64, height: number, proposerID: ArrayBuffer[], numTransactions: number, size: number, time: Date);
    toJSON(): unknown;
}
declare class ExplorerBlockSummaryDecoder implements Converter<unknown, ExplorerBlockSummary> {
    convert(input: unknown): ExplorerBlockSummary;
}
declare class ExplorerBlockSummaryEncoder implements Converter<ExplorerBlockSummary, unknown> {
    convert(input: ExplorerBlockSummary): unknown;
}
declare class ExplorerBlockSummaryCodec extends Codec<ExplorerBlockSummary, unknown> {
    readonly encoder: ExplorerBlockSummaryEncoder;
    readonly decoder: ExplorerBlockSummaryDecoder;
}
export declare const explorerBlockSummaryCodec: ExplorerBlockSummaryCodec;
export declare const explorerBlockSummaryArrayCodec: ArrayCodec<ExplorerBlockSummary, unknown>;
export {};
