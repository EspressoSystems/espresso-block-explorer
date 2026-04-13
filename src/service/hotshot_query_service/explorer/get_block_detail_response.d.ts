import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerBlockDetail } from './block_detail';
/**
 * ExplorerGetBlockDetailResponse represents the response of the getBlockDetail
 * request.
 */
export declare class ExplorerGetBlockDetailResponse {
    readonly blockDetail: ExplorerBlockDetail;
    constructor(blockDetail: ExplorerBlockDetail);
    toJSON(): unknown;
}
declare class ExplorerGetBlockDetailResponseDecoder implements Converter<unknown, ExplorerGetBlockDetailResponse> {
    convert(input: unknown): ExplorerGetBlockDetailResponse;
}
declare class ExplorerGetBlockDetailResponseEncoder implements Converter<ExplorerGetBlockDetailResponse, unknown> {
    convert(input: ExplorerGetBlockDetailResponse): unknown;
}
declare class ExplorerGetBlockDetailResponseCodec extends Codec<ExplorerGetBlockDetailResponse, unknown> {
    readonly encoder: ExplorerGetBlockDetailResponseEncoder;
    readonly decoder: ExplorerGetBlockDetailResponseDecoder;
}
export declare const explorerGetBlockDetailResponseCodec: ExplorerGetBlockDetailResponseCodec;
export {};
