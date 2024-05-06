import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';

export declare class CappuccinoExplorerGetSearchResultRequest {
    readonly query: string;
    constructor(query: string);
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetSearchResultRequestEncoder implements Converter<CappuccinoExplorerGetSearchResultRequest, unknown> {
    convert(input: CappuccinoExplorerGetSearchResultRequest): string;
}
declare class CappuccinoExplorerGetSearchResultRequestDecoder implements Converter<unknown, CappuccinoExplorerGetSearchResultRequest> {
    convert(input: unknown): CappuccinoExplorerGetSearchResultRequest;
}
declare class CappuccinoExplorerGetSearchResultRequestCodec extends Codec<CappuccinoExplorerGetSearchResultRequest, unknown> {
    readonly encoder: CappuccinoExplorerGetSearchResultRequestEncoder;
    readonly decoder: CappuccinoExplorerGetSearchResultRequestDecoder;
}
export declare const cappuccinoExplorerGetSearchResultRequestCodec: CappuccinoExplorerGetSearchResultRequestCodec;
export {};
