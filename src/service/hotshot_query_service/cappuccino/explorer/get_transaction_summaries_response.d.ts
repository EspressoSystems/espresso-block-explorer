import { CappuccinoExplorerTransactionSummary } from './transaction_summary';
import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';

export declare class CappuccinoExplorerGetTransactionSummariesResponse {
    readonly transactionSummaries: CappuccinoExplorerTransactionSummary[];
    constructor(transactionSummaries: CappuccinoExplorerTransactionSummary[]);
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetTransactionSummariesResponseDecoder implements Converter<unknown, CappuccinoExplorerGetTransactionSummariesResponse> {
    convert(input: unknown): CappuccinoExplorerGetTransactionSummariesResponse;
}
declare class CappuccinoExplorerGetTransactionSummariesResponseEncoder implements Converter<CappuccinoExplorerGetTransactionSummariesResponse, unknown> {
    convert(input: CappuccinoExplorerGetTransactionSummariesResponse): unknown;
}
declare class CappuccinoExplorerGetTransactionSummariesResponseCodec extends Codec<CappuccinoExplorerGetTransactionSummariesResponse, unknown> {
    readonly encoder: CappuccinoExplorerGetTransactionSummariesResponseEncoder;
    readonly decoder: CappuccinoExplorerGetTransactionSummariesResponseDecoder;
}
export declare const cappuccinoExplorerGetTransactionSummariesResponseCodec: CappuccinoExplorerGetTransactionSummariesResponseCodec;
export {};
