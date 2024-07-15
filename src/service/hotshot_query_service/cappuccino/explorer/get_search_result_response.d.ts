import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoExplorerSearchResults } from './search_results';

export declare class CappuccinoExplorerGetSearchResultResponse {
    readonly searchResults: CappuccinoExplorerSearchResults;
    constructor(searchResults: CappuccinoExplorerSearchResults);
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetSearchResultResponseDecoder implements Converter<unknown, CappuccinoExplorerGetSearchResultResponse> {
    convert(input: unknown): CappuccinoExplorerGetSearchResultResponse;
}
declare class CappuccinoExplorerGetSearchResultResponseEncoder implements Converter<CappuccinoExplorerGetSearchResultResponse, unknown> {
    convert(input: CappuccinoExplorerGetSearchResultResponse): unknown;
}
declare class CappuccinoExplorerGetSearchResultResponseCodec extends Codec<CappuccinoExplorerGetSearchResultResponse, unknown> {
    readonly encoder: CappuccinoExplorerGetSearchResultResponseEncoder;
    readonly decoder: CappuccinoExplorerGetSearchResultResponseDecoder;
}
export declare const cappuccinoExplorerGetSearchResultResponseCodec: CappuccinoExplorerGetSearchResultResponseCodec;
export {};
