import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoExplorerBlockSummary } from './block_summary';

export declare class CappuccinoExplorerGetBlockSummariesResponse {
    readonly blockSummaries: CappuccinoExplorerBlockSummary[];
    constructor(blockSummaries: CappuccinoExplorerBlockSummary[]);
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetBlockSummariesResponseDecoder implements Converter<unknown, CappuccinoExplorerGetBlockSummariesResponse> {
    convert(input: unknown): CappuccinoExplorerGetBlockSummariesResponse;
}
declare class CappuccinoExplorerGetBlockSummariesResponseEncoder implements Converter<CappuccinoExplorerGetBlockSummariesResponse, unknown> {
    convert(input: CappuccinoExplorerGetBlockSummariesResponse): unknown;
}
declare class CappuccinoExplorerGetBlockSummariesResponseCodec extends Codec<CappuccinoExplorerGetBlockSummariesResponse, unknown> {
    readonly encoder: CappuccinoExplorerGetBlockSummariesResponseEncoder;
    readonly decoder: CappuccinoExplorerGetBlockSummariesResponseDecoder;
}
export declare const cappuccinoExplorerGetBlockSummariesResponseCodec: CappuccinoExplorerGetBlockSummariesResponseCodec;
export {};
