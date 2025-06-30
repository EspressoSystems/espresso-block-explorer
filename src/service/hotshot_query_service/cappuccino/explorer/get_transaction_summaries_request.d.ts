import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoExplorerGetTransactionSummariesFilter } from './get_transaction_summaries_filter';
import { CappuccinoExplorerGetTransactionSummariesTarget } from './get_transaction_summaries_target';
export declare class CappuccinoExplorerGetTransactionSummariesRequest {
    readonly target: CappuccinoExplorerGetTransactionSummariesTarget;
    readonly filter: CappuccinoExplorerGetTransactionSummariesFilter;
    constructor(target: CappuccinoExplorerGetTransactionSummariesTarget, filter: CappuccinoExplorerGetTransactionSummariesFilter);
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetTransactionSummariesRequestDecoder implements Converter<unknown, CappuccinoExplorerGetTransactionSummariesRequest> {
    convert(input: unknown): CappuccinoExplorerGetTransactionSummariesRequest;
}
declare class CappuccinoExplorerGetTransactionSummariesRequestEncoder implements Converter<CappuccinoExplorerGetTransactionSummariesRequest, unknown> {
    convert(input: CappuccinoExplorerGetTransactionSummariesRequest): {
        filter: unknown;
        target: unknown;
    };
}
declare class CappuccinoExplorerGetTransactionSummariesRequestCodec extends Codec<CappuccinoExplorerGetTransactionSummariesRequest, unknown> {
    readonly encoder: CappuccinoExplorerGetTransactionSummariesRequestEncoder;
    readonly decoder: CappuccinoExplorerGetTransactionSummariesRequestDecoder;
}
export declare const cappuccinoExplorerGetTransactionSummariesRequestCodec: CappuccinoExplorerGetTransactionSummariesRequestCodec;
export {};
