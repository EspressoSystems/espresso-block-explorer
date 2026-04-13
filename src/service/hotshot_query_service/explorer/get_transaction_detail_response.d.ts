import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerTransactionDetail } from './transaction_detail';
/**
 * ExplorerGetTransactionDetailResponse is the response from the explorer API
 * for the getTransactionDetail method.
 */
export declare class ExplorerGetTransactionDetailResponse {
    readonly transactionDetail: ExplorerTransactionDetail;
    constructor(transactionDetail: ExplorerTransactionDetail);
    toJSON(): unknown;
}
declare class ExplorerGetTransactionDetailResponseDecoder implements Converter<unknown, ExplorerGetTransactionDetailResponse> {
    convert(input: unknown): ExplorerGetTransactionDetailResponse;
}
declare class ExplorerGetTransactionDetailResponseEncoder implements Converter<ExplorerGetTransactionDetailResponse, unknown> {
    convert(input: ExplorerGetTransactionDetailResponse): unknown;
}
declare class ExplorerGetTransactionDetailResponseCodec extends Codec<ExplorerGetTransactionDetailResponse, unknown> {
    readonly encoder: ExplorerGetTransactionDetailResponseEncoder;
    readonly decoder: ExplorerGetTransactionDetailResponseDecoder;
}
export declare const explorerGetTransactionDetailResponseCodec: ExplorerGetTransactionDetailResponseCodec;
export {};
