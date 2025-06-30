import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
export declare abstract class CappuccinoExplorerGetTransactionSummariesTarget {
    readonly limit: number;
    constructor(limit: number);
    static latest(limit: number): CappuccinoExplorerGetTransactionSummariesTargetLatest;
    static heightAndOffset(height: number, offset: number, limit: number): CappuccinoExplorerGetTransactionSummariesTargetHeightAndOffset;
    static hash(hash: TaggedBase64, limit: number): CappuccinoExplorerGetTransactionSummariesTargetHash;
    abstract convertURL(baseURL: URL): URL;
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetTransactionSummariesTargetDecoder implements Converter<unknown, CappuccinoExplorerGetTransactionSummariesTarget> {
    convert(input: unknown): CappuccinoExplorerGetTransactionSummariesTarget;
}
declare class CappuccinoExplorerGetTransactionSummariesTargetEncoder implements Converter<CappuccinoExplorerGetTransactionSummariesTarget, unknown> {
    convert(input: CappuccinoExplorerGetTransactionSummariesTarget): {
        limit: number;
        readonly height?: undefined;
        readonly offset?: undefined;
        readonly hash?: undefined;
    } | {
        height: number;
        offset: number;
        limit: number;
        readonly hash?: undefined;
    } | {
        hash: string;
        limit: number;
        readonly height?: undefined;
        readonly offset?: undefined;
    };
}
declare class CappuccinoExplorerGetTransactionSummariesTargetCodec extends Codec<CappuccinoExplorerGetTransactionSummariesTarget, unknown> {
    readonly encoder: CappuccinoExplorerGetTransactionSummariesTargetEncoder;
    readonly decoder: CappuccinoExplorerGetTransactionSummariesTargetDecoder;
}
export declare const cappuccinoExplorerGetTransactionSummariesTargetCodec: CappuccinoExplorerGetTransactionSummariesTargetCodec;
export declare class CappuccinoExplorerGetTransactionSummariesTargetLatest extends CappuccinoExplorerGetTransactionSummariesTarget {
    constructor(limit: number);
    convertURL(baseURL: URL): URL;
}
export declare class CappuccinoExplorerGetTransactionSummariesTargetHeightAndOffset extends CappuccinoExplorerGetTransactionSummariesTarget {
    readonly height: number;
    readonly offset: number;
    constructor(height: number, offset: number, limit: number);
    convertURL(baseURL: URL): URL;
}
export declare class CappuccinoExplorerGetTransactionSummariesTargetHash extends CappuccinoExplorerGetTransactionSummariesTarget {
    readonly hash: TaggedBase64;
    constructor(hash: TaggedBase64, limit: number);
    convertURL(baseURL: URL): URL;
}
export {};
