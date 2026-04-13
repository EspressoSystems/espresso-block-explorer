import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerGetTransactionSummariesFilter } from './get_transaction_summaries_filter';
import { ExplorerGetTransactionSummariesTarget } from './get_transaction_summaries_target';
/**
 * ExplorerGetTransactionSummariesRequest represents a request to get
 * transaction summaries from the explorer.
 */
export declare class ExplorerGetTransactionSummariesRequest {
    readonly target: ExplorerGetTransactionSummariesTarget;
    readonly filter: ExplorerGetTransactionSummariesFilter;
    constructor(target: ExplorerGetTransactionSummariesTarget, filter: ExplorerGetTransactionSummariesFilter);
    toJSON(): unknown;
}
declare class ExplorerGetTransactionSummariesRequestDecoder implements Converter<unknown, ExplorerGetTransactionSummariesRequest> {
    convert(input: unknown): ExplorerGetTransactionSummariesRequest;
}
declare class ExplorerGetTransactionSummariesRequestEncoder implements Converter<ExplorerGetTransactionSummariesRequest, unknown> {
    convert(input: ExplorerGetTransactionSummariesRequest): {
        filter: unknown;
        target: unknown;
    };
}
declare class ExplorerGetTransactionSummariesRequestCodec extends Codec<ExplorerGetTransactionSummariesRequest, unknown> {
    readonly encoder: ExplorerGetTransactionSummariesRequestEncoder;
    readonly decoder: ExplorerGetTransactionSummariesRequestDecoder;
}
export declare const explorerGetTransactionSummariesRequestCodec: ExplorerGetTransactionSummariesRequestCodec;
export {};
