import { CappuccinoExplorerBlockDetail } from './block_detail';
import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';

export declare class CappuccinoExplorerGetBlockDetailResponse {
    readonly blockDetail: CappuccinoExplorerBlockDetail;
    constructor(blockDetail: CappuccinoExplorerBlockDetail);
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetBlockDetailResponseDecoder implements Converter<unknown, CappuccinoExplorerGetBlockDetailResponse> {
    convert(input: unknown): CappuccinoExplorerGetBlockDetailResponse;
}
declare class CappuccinoExplorerGetBlockDetailResponseEncoder implements Converter<CappuccinoExplorerGetBlockDetailResponse, unknown> {
    convert(input: CappuccinoExplorerGetBlockDetailResponse): unknown;
}
declare class CappuccinoExplorerGetBlockDetailResponseCodec extends Codec<CappuccinoExplorerGetBlockDetailResponse, unknown> {
    readonly encoder: CappuccinoExplorerGetBlockDetailResponseEncoder;
    readonly decoder: CappuccinoExplorerGetBlockDetailResponseDecoder;
}
export declare const cappuccinoExplorerGetBlockDetailResponseCodec: CappuccinoExplorerGetBlockDetailResponseCodec;
export {};
