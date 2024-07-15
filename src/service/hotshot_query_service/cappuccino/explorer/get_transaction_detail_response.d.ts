import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoExplorerTransactionDetail } from './transaction_detail';

export declare class CappuccinoExplorerGetTransactionDetailResponse {
    readonly transactionDetail: CappuccinoExplorerTransactionDetail;
    constructor(transactionDetail: CappuccinoExplorerTransactionDetail);
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetTransactionDetailResponseDecoder implements Converter<unknown, CappuccinoExplorerGetTransactionDetailResponse> {
    convert(input: unknown): CappuccinoExplorerGetTransactionDetailResponse;
}
declare class CappuccinoExplorerGetTransactionDetailResponseEncoder implements Converter<CappuccinoExplorerGetTransactionDetailResponse, unknown> {
    convert(input: CappuccinoExplorerGetTransactionDetailResponse): unknown;
}
declare class CappuccinoExplorerGetTransactionDetailResponseCodec extends Codec<CappuccinoExplorerGetTransactionDetailResponse, unknown> {
    readonly encoder: CappuccinoExplorerGetTransactionDetailResponseEncoder;
    readonly decoder: CappuccinoExplorerGetTransactionDetailResponseDecoder;
}
export declare const cappuccinoExplorerGetTransactionDetailResponseCodec: CappuccinoExplorerGetTransactionDetailResponseCodec;
export {};
