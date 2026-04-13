import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * ExplorerGetTransactionSummariesFilter is a filter for getting transaction
 * summaries  from the explorer. It can be filtered by block, namespace, or no
 * filter.
 */
export declare abstract class ExplorerGetTransactionSummariesFilter {
    constructor();
    static block(block: number): ExplorerGetTransactionSummariesFilterBlock;
    static namespace(namespace: number): ExplorerGetTransactionSummariesFilterNamespace;
    static none(): ExplorerGetTransactionSummariesFilterNone;
    abstract convertURL(baseURL: URL): URL;
    toJSON(): unknown;
}
declare class ExplorerGetTransactionSummariesFilterDecoder implements Converter<unknown, ExplorerGetTransactionSummariesFilter> {
    convert(input: unknown): ExplorerGetTransactionSummariesFilter;
}
declare class ExplorerGetTransactionSummariesFilterEncoder implements Converter<ExplorerGetTransactionSummariesFilter, unknown> {
    convert(input: ExplorerGetTransactionSummariesFilter): {
        block?: undefined;
        namespace?: undefined;
    } | {
        block: number;
        namespace?: undefined;
    } | {
        namespace: number;
        block?: undefined;
    };
}
declare class ExplorerGetTransactionSummariesFilterCodec extends Codec<ExplorerGetTransactionSummariesFilter, unknown> {
    readonly encoder: ExplorerGetTransactionSummariesFilterEncoder;
    readonly decoder: ExplorerGetTransactionSummariesFilterDecoder;
}
export declare const explorerGetTransactionSummariesFilterCodec: ExplorerGetTransactionSummariesFilterCodec;
export declare class ExplorerGetTransactionSummariesFilterNone extends ExplorerGetTransactionSummariesFilter {
    constructor();
    convertURL(baseURL: URL): URL;
}
export declare class ExplorerGetTransactionSummariesFilterBlock extends ExplorerGetTransactionSummariesFilter {
    readonly block: number;
    constructor(block: number);
    convertURL(baseURL: URL): URL;
}
export declare class ExplorerGetTransactionSummariesFilterNamespace extends ExplorerGetTransactionSummariesFilter {
    readonly namespace: number;
    constructor(namespace: number);
    convertURL(baseURL: URL): URL;
}
export {};
