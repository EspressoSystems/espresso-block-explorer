import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';

export declare abstract class CappuccinoExplorerGetTransactionSummariesFilter {
    constructor();
    static block(block: number): CappuccinoExplorerGetTransactionSummariesFilterBlock;
    static namespace(namespace: number): CappuccinoExplorerGetTransactionSummariesFilterNamespace;
    static none(): CappuccinoExplorerGetTransactionSummariesFilterNone;
    abstract convertURL(baseURL: URL): URL;
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetTransactionSummariesFilterDecoder implements Converter<unknown, CappuccinoExplorerGetTransactionSummariesFilter> {
    convert(input: unknown): CappuccinoExplorerGetTransactionSummariesFilter;
}
declare class CappuccinoExplorerGetTransactionSummariesFilterEncoder implements Converter<CappuccinoExplorerGetTransactionSummariesFilter, unknown> {
    convert(input: CappuccinoExplorerGetTransactionSummariesFilter): {
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
declare class CappuccinoExplorerGetTransactionSummariesFilterCodec extends Codec<CappuccinoExplorerGetTransactionSummariesFilter, unknown> {
    readonly encoder: CappuccinoExplorerGetTransactionSummariesFilterEncoder;
    readonly decoder: CappuccinoExplorerGetTransactionSummariesFilterDecoder;
}
export declare const cappuccinoExplorerGetTransactionSummariesFilterCodec: CappuccinoExplorerGetTransactionSummariesFilterCodec;
export declare class CappuccinoExplorerGetTransactionSummariesFilterNone extends CappuccinoExplorerGetTransactionSummariesFilter {
    constructor();
    convertURL(baseURL: URL): URL;
}
export declare class CappuccinoExplorerGetTransactionSummariesFilterBlock extends CappuccinoExplorerGetTransactionSummariesFilter {
    readonly block: number;
    constructor(block: number);
    convertURL(baseURL: URL): URL;
}
export declare class CappuccinoExplorerGetTransactionSummariesFilterNamespace extends CappuccinoExplorerGetTransactionSummariesFilter {
    readonly namespace: number;
    constructor(namespace: number);
    convertURL(baseURL: URL): URL;
}
export {};
