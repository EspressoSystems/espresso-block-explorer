import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerTransactionSummary } from './transaction_summary';
/**
 * ExplorerGetTransactionSummariesResponse is the response to a request to
 * the Explorer API for transaction summaries.
 */
export declare class ExplorerGetTransactionSummariesResponse {
    readonly transactionSummaries: ExplorerTransactionSummary[];
    constructor(transactionSummaries: ExplorerTransactionSummary[]);
    toJSON(): unknown;
}
declare class ExplorerGetTransactionSummariesResponseDecoder implements Converter<unknown, ExplorerGetTransactionSummariesResponse> {
    convert(input: unknown): ExplorerGetTransactionSummariesResponse;
}
declare class ExplorerGetTransactionSummariesResponseEncoder implements Converter<ExplorerGetTransactionSummariesResponse, unknown> {
    convert(input: ExplorerGetTransactionSummariesResponse): unknown;
}
declare class ExplorerGetTransactionSummariesResponseCodec extends Codec<ExplorerGetTransactionSummariesResponse, unknown> {
    readonly encoder: ExplorerGetTransactionSummariesResponseEncoder;
    readonly decoder: ExplorerGetTransactionSummariesResponseDecoder;
}
export declare const explorerGetTransactionSummariesResponseCodec: ExplorerGetTransactionSummariesResponseCodec;
export {};
