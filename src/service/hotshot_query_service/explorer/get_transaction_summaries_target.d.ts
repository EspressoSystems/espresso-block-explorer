import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
/**
 * ExplorerGetTransactionSummariesTarget represents the target of a request to
 * get transaction summaries from the explorer.
 */
export declare abstract class ExplorerGetTransactionSummariesTarget {
    readonly limit: number;
    constructor(limit: number);
    static latest(limit: number): ExplorerGetTransactionSummariesTargetLatest;
    static heightAndOffset(height: number, offset: number, limit: number): ExplorerGetTransactionSummariesTargetHeightAndOffset;
    static hash(hash: TaggedBase64, limit: number): ExplorerGetTransactionSummariesTargetHash;
    abstract convertURL(baseURL: URL): URL;
    toJSON(): unknown;
}
declare class ExplorerGetTransactionSummariesTargetDecoder implements Converter<unknown, ExplorerGetTransactionSummariesTarget> {
    convert(input: unknown): ExplorerGetTransactionSummariesTarget;
}
declare class ExplorerGetTransactionSummariesTargetEncoder implements Converter<ExplorerGetTransactionSummariesTarget, unknown> {
    convert(input: ExplorerGetTransactionSummariesTarget): {
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
declare class ExplorerGetTransactionSummariesTargetCodec extends Codec<ExplorerGetTransactionSummariesTarget, unknown> {
    readonly encoder: ExplorerGetTransactionSummariesTargetEncoder;
    readonly decoder: ExplorerGetTransactionSummariesTargetDecoder;
}
export declare const explorerGetTransactionSummariesTargetCodec: ExplorerGetTransactionSummariesTargetCodec;
export declare class ExplorerGetTransactionSummariesTargetLatest extends ExplorerGetTransactionSummariesTarget {
    constructor(limit: number);
    convertURL(baseURL: URL): URL;
}
export declare class ExplorerGetTransactionSummariesTargetHeightAndOffset extends ExplorerGetTransactionSummariesTarget {
    readonly height: number;
    readonly offset: number;
    constructor(height: number, offset: number, limit: number);
    convertURL(baseURL: URL): URL;
}
export declare class ExplorerGetTransactionSummariesTargetHash extends ExplorerGetTransactionSummariesTarget {
    readonly hash: TaggedBase64;
    constructor(hash: TaggedBase64, limit: number);
    convertURL(baseURL: URL): URL;
}
export {};
