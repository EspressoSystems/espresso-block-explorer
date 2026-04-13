import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerBlockSummary } from './block_summary';
/**
 * ExplorerGetBlockSummariesResponse represents the successful response
 * received from the Explorer API for a GetBlockSummariesRequest.
 */
export declare class ExplorerGetBlockSummariesResponse {
    readonly blockSummaries: ExplorerBlockSummary[];
    constructor(blockSummaries: ExplorerBlockSummary[]);
    toJSON(): unknown;
}
declare class ExplorerGetBlockSummariesResponseDecoder implements Converter<unknown, ExplorerGetBlockSummariesResponse> {
    convert(input: unknown): ExplorerGetBlockSummariesResponse;
}
declare class ExplorerGetBlockSummariesResponseEncoder implements Converter<ExplorerGetBlockSummariesResponse, unknown> {
    convert(input: ExplorerGetBlockSummariesResponse): unknown;
}
declare class ExplorerGetBlockSummariesResponseCodec extends Codec<ExplorerGetBlockSummariesResponse, unknown> {
    readonly encoder: ExplorerGetBlockSummariesResponseEncoder;
    readonly decoder: ExplorerGetBlockSummariesResponseDecoder;
}
export declare const explorerGetBlockSummariesResponseCodec: ExplorerGetBlockSummariesResponseCodec;
export {};
