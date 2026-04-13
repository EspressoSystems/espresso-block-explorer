import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * ExplorerGetSearchResultRequest is a request to get the search result for a
 * a given search query.
 */
export declare class ExplorerGetSearchResultRequest {
    readonly query: string;
    constructor(query: string);
    toJSON(): unknown;
}
declare class ExplorerGetSearchResultRequestEncoder implements Converter<ExplorerGetSearchResultRequest, unknown> {
    convert(input: ExplorerGetSearchResultRequest): string;
}
declare class ExplorerGetSearchResultRequestDecoder implements Converter<unknown, ExplorerGetSearchResultRequest> {
    convert(input: unknown): ExplorerGetSearchResultRequest;
}
declare class ExplorerGetSearchResultRequestCodec extends Codec<ExplorerGetSearchResultRequest, unknown> {
    readonly encoder: ExplorerGetSearchResultRequestEncoder;
    readonly decoder: ExplorerGetSearchResultRequestDecoder;
}
export declare const explorerGetSearchResultRequestCodec: ExplorerGetSearchResultRequestCodec;
export {};
