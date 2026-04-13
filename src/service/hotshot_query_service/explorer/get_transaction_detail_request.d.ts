import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
/**
 * ExplorerGetTransactionDetailRequest represents a request to get
 * transaction details from the explorer.
 */
export declare abstract class ExplorerGetTransactionDetailRequest {
    static heightAndOffset(height: number, offset: number): ExplorerGetTransactionDetailRequestHeightAndOffset;
    static hash(hash: TaggedBase64): ExplorerGetTransactionDetailRequestHash;
    toJSON(): {
        readonly height: number;
        readonly offset: number;
        readonly hash?: undefined;
    } | {
        readonly hash: string;
        readonly height?: undefined;
        readonly offset?: undefined;
    };
}
declare class ExplorerGetTransactionDetailRequestEncoder implements Converter<ExplorerGetTransactionDetailRequest> {
    convert(input: ExplorerGetTransactionDetailRequest): {
        readonly height: number;
        readonly offset: number;
        readonly hash?: undefined;
    } | {
        readonly hash: string;
        readonly height?: undefined;
        readonly offset?: undefined;
    };
}
declare class ExplorerGetTransactionDetailRequestDecoder implements Converter<unknown, ExplorerGetTransactionDetailRequest> {
    convert(input: unknown): ExplorerGetTransactionDetailRequest;
}
declare class ExplorerGetTransactionDetailRequestCodec extends TypeCheckingCodec<ExplorerGetTransactionDetailRequest, ReturnType<InstanceType<new () => ExplorerGetTransactionDetailRequestEncoder>['convert']>> {
    readonly encoder: ExplorerGetTransactionDetailRequestEncoder;
    readonly decoder: ExplorerGetTransactionDetailRequestDecoder;
}
export declare const explorerGetTransactionDetailRequestCodec: ExplorerGetTransactionDetailRequestCodec;
export declare class ExplorerGetTransactionDetailRequestHeightAndOffset extends ExplorerGetTransactionDetailRequest {
    readonly height: number;
    readonly offset: number;
    constructor(height: number, offset: number);
}
export declare class ExplorerGetTransactionDetailRequestHash extends ExplorerGetTransactionDetailRequest {
    readonly hash: TaggedBase64;
    constructor(hash: TaggedBase64);
}
export {};
