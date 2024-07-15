import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';
import { latestConstant } from './constants';

export declare abstract class CappuccinoExplorerGetBlockSummariesRequest {
    readonly limit: number;
    abstract get from(): number | typeof latestConstant;
    constructor(limit: number);
    static latest(limit: number): CappuccinoExplorerGetBlockSummariesRequestLatest;
    static from(from: number, limit: number): CappuccinoExplorerGetBlockSummariesRequestFrom;
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetBlockSummariesRequestEncoder implements Converter<CappuccinoExplorerGetBlockSummariesRequest, unknown> {
    convert(input: CappuccinoExplorerGetBlockSummariesRequest): {
        readonly from: number;
        readonly limit: number;
    } | {
        readonly from: "latest";
        readonly limit: number;
    };
}
declare class CappuccinoExplorerGetBlockSummariesRequestDecoder implements Converter<unknown, CappuccinoExplorerGetBlockSummariesRequest> {
    convert(input: unknown): CappuccinoExplorerGetBlockSummariesRequest;
}
declare class CappuccinoExplorerGetBlockSummariesRequestCodec extends Codec<CappuccinoExplorerGetBlockSummariesRequest, unknown> {
    readonly encoder: CappuccinoExplorerGetBlockSummariesRequestEncoder;
    readonly decoder: CappuccinoExplorerGetBlockSummariesRequestDecoder;
}
export declare const cappuccinoExplorerGetBlockSummariesRequestCodec: CappuccinoExplorerGetBlockSummariesRequestCodec;
declare class CappuccinoExplorerGetBlockSummariesRequestLatest extends CappuccinoExplorerGetBlockSummariesRequest {
    constructor(limit: number);
    get from(): typeof latestConstant;
}
export declare class CappuccinoExplorerGetBlockSummariesRequestFrom extends CappuccinoExplorerGetBlockSummariesRequest {
    readonly from: number;
    constructor(from: number, limit: number);
}
export {};
