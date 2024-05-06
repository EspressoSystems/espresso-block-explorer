import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoAPIBitVecHead represents the head of a bit vector in the Cappuccino API.
 */
export declare class CappuccinoAPIBitVecHead {
    readonly width: number;
    readonly index: number;
    constructor(width: number, index: number);
    toJSON(): {
        width: number;
        index: number;
    };
}
export declare class CappuccinoAPIBitVecHeadDecoder implements Converter<unknown, CappuccinoAPIBitVecHead> {
    convert(input: unknown): CappuccinoAPIBitVecHead;
}
export declare class CappuccinoAPIBitVecHeadEncoder implements Converter<CappuccinoAPIBitVecHead> {
    convert(input: CappuccinoAPIBitVecHead): {
        width: number;
        index: number;
    };
}
export declare class CappuccinoAPIBitVecHeadCodec extends TypeCheckingCodec<CappuccinoAPIBitVecHead, ReturnType<InstanceType<new () => CappuccinoAPIBitVecHeadEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIBitVecHeadEncoder;
    readonly decoder: CappuccinoAPIBitVecHeadDecoder;
}
export declare const cappuccinoAPIBitVecHeadCodec: CappuccinoAPIBitVecHeadCodec;
