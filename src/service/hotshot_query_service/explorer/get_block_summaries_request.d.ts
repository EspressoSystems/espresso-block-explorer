import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { latestConstant } from './constants';
/**
 * ExplorerGetBlockSummariesRequest represents a request for the Block
 * summaries submitted to the Explorer API.
 */
export declare abstract class ExplorerGetBlockSummariesRequest {
    readonly limit: number;
    abstract get from(): number | typeof latestConstant;
    constructor(limit: number);
    static latest(limit: number): ExplorerGetBlockSummariesRequestLatest;
    static from(from: number, limit: number): ExplorerGetBlockSummariesRequestFrom;
    toJSON(): unknown;
}
declare class ExplorerGetBlockSummariesRequestEncoder implements Converter<ExplorerGetBlockSummariesRequest, unknown> {
    convert(input: ExplorerGetBlockSummariesRequest): {
        readonly from: number;
        readonly limit: number;
    } | {
        readonly from: "latest";
        readonly limit: number;
    };
}
declare class ExplorerGetBlockSummariesRequestDecoder implements Converter<unknown, ExplorerGetBlockSummariesRequest> {
    convert(input: unknown): ExplorerGetBlockSummariesRequest;
}
declare class ExplorerGetBlockSummariesRequestCodec extends Codec<ExplorerGetBlockSummariesRequest, unknown> {
    readonly encoder: ExplorerGetBlockSummariesRequestEncoder;
    readonly decoder: ExplorerGetBlockSummariesRequestDecoder;
}
export declare const explorerGetBlockSummariesRequestCodec: ExplorerGetBlockSummariesRequestCodec;
declare class ExplorerGetBlockSummariesRequestLatest extends ExplorerGetBlockSummariesRequest {
    constructor(limit: number);
    get from(): typeof latestConstant;
}
export declare class ExplorerGetBlockSummariesRequestFrom extends ExplorerGetBlockSummariesRequest {
    readonly from: number;
    constructor(from: number, limit: number);
}
export {};
