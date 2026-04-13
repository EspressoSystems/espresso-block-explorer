import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerSearchResults } from './search_results';
/**
 * ExplorerGetSearchResultResponse is the response from the explorer when
 * querying for search results.
 */
export declare class ExplorerGetSearchResultResponse {
    readonly searchResults: ExplorerSearchResults;
    constructor(searchResults: ExplorerSearchResults);
    toJSON(): unknown;
}
declare class ExplorerGetSearchResultResponseDecoder implements Converter<unknown, ExplorerGetSearchResultResponse> {
    convert(input: unknown): ExplorerGetSearchResultResponse;
}
declare class ExplorerGetSearchResultResponseEncoder implements Converter<ExplorerGetSearchResultResponse, unknown> {
    convert(input: ExplorerGetSearchResultResponse): unknown;
}
declare class ExplorerGetSearchResultResponseCodec extends Codec<ExplorerGetSearchResultResponse, unknown> {
    readonly encoder: ExplorerGetSearchResultResponseEncoder;
    readonly decoder: ExplorerGetSearchResultResponseDecoder;
}
export declare const explorerGetSearchResultResponseCodec: ExplorerGetSearchResultResponseCodec;
export {};
