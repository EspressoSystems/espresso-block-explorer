import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { latestConstant } from './constants';
/**
 * ExplorerGetBlockDetailRequest represents the request to get the block detail
 * in the various forms it can take.
 *
 * This acts an enumeration of the variations of the request and how
 * they can be constructed with static methods.
 */
export declare abstract class ExplorerGetBlockDetailRequest {
    readonly target: number | typeof latestConstant;
    constructor(target: number | typeof latestConstant);
    static latest(): ExplorerGetBlockDetailRequest;
    static height(target: number): ExplorerGetBlockDetailRequest;
    toJSON(): unknown;
}
declare class ExplorerGetBlockDetailRequestEncoder implements Converter<ExplorerGetBlockDetailRequest, unknown> {
    convert(input: ExplorerGetBlockDetailRequest): number | "latest";
}
declare class ExplorerGetBlockDetailRequestDecoder implements Converter<unknown, ExplorerGetBlockDetailRequest> {
    convert(input: unknown): ExplorerGetBlockDetailRequest;
}
declare class ExplorerGetBlockDetailRequestCodec extends Codec<ExplorerGetBlockDetailRequest, unknown> {
    readonly encoder: ExplorerGetBlockDetailRequestEncoder;
    readonly decoder: ExplorerGetBlockDetailRequestDecoder;
}
export declare const explorerGetBlockDetailRequestCodec: ExplorerGetBlockDetailRequestCodec;
export {};
