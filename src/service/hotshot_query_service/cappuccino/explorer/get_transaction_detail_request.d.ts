import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
export declare abstract class CappuccinoExplorerGetTransactionDetailRequest {
    static heightAndOffset(height: number, offset: number): CappuccinoExplorerGetTransactionDetailRequestHeightAndOffset;
    static hash(hash: TaggedBase64): CappuccinoExplorerGetTransactionDetailRequestHash;
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
declare class CappuccinoExplorerGetTransactionDetailRequestEncoder implements Converter<CappuccinoExplorerGetTransactionDetailRequest> {
    convert(input: CappuccinoExplorerGetTransactionDetailRequest): {
        readonly height: number;
        readonly offset: number;
        readonly hash?: undefined;
    } | {
        readonly hash: string;
        readonly height?: undefined;
        readonly offset?: undefined;
    };
}
declare class CappuccinoExplorerGetTransactionDetailRequestDecoder implements Converter<unknown, CappuccinoExplorerGetTransactionDetailRequest> {
    convert(input: unknown): CappuccinoExplorerGetTransactionDetailRequest;
}
declare class CappuccinoExplorerGetTransactionDetailRequestCodec extends TypeCheckingCodec<CappuccinoExplorerGetTransactionDetailRequest, ReturnType<InstanceType<new () => CappuccinoExplorerGetTransactionDetailRequestEncoder>['convert']>> {
    readonly encoder: CappuccinoExplorerGetTransactionDetailRequestEncoder;
    readonly decoder: CappuccinoExplorerGetTransactionDetailRequestDecoder;
}
export declare const cappuccinoExplorerGetTransactionDetailRequestCodec: CappuccinoExplorerGetTransactionDetailRequestCodec;
export declare class CappuccinoExplorerGetTransactionDetailRequestHeightAndOffset extends CappuccinoExplorerGetTransactionDetailRequest {
    readonly height: number;
    readonly offset: number;
    constructor(height: number, offset: number);
}
export declare class CappuccinoExplorerGetTransactionDetailRequestHash extends CappuccinoExplorerGetTransactionDetailRequest {
    readonly hash: TaggedBase64;
    constructor(hash: TaggedBase64);
}
export {};
