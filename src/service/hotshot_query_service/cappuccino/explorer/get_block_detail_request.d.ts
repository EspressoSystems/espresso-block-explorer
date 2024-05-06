import { latestConstant } from './constants';
import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';

export declare abstract class CappuccinoExplorerGetBlockDetailRequest {
    readonly target: number | typeof latestConstant;
    constructor(target: number | typeof latestConstant);
    static latest(): CappuccinoExplorerGetBlockDetailRequest;
    static height(target: number): CappuccinoExplorerGetBlockDetailRequest;
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetBlockDetailRequestEncoder implements Converter<CappuccinoExplorerGetBlockDetailRequest, unknown> {
    convert(input: CappuccinoExplorerGetBlockDetailRequest): number | "latest";
}
declare class CappuccinoExplorerGetBlockDetailRequestDecoder implements Converter<unknown, CappuccinoExplorerGetBlockDetailRequest> {
    convert(input: unknown): CappuccinoExplorerGetBlockDetailRequest;
}
declare class CappuccinoExplorerGetBlockDetailRequestCodec extends Codec<CappuccinoExplorerGetBlockDetailRequest, unknown> {
    readonly encoder: CappuccinoExplorerGetBlockDetailRequestEncoder;
    readonly decoder: CappuccinoExplorerGetBlockDetailRequestDecoder;
}
export declare const cappuccinoExplorerGetBlockDetailRequestCodec: CappuccinoExplorerGetBlockDetailRequestCodec;
export {};
