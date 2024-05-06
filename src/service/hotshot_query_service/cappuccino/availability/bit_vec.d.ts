import { CappuccinoAPIBitVecHead } from './bit_vec_head';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoAPIBitVec represents a bit vector in the Cappuccino API.
 * It contains the order, head, bits, and data of the bit vector.
 */
export declare class CappuccinoAPIBitVec {
    readonly order: string;
    readonly head: CappuccinoAPIBitVecHead;
    readonly bits: number;
    readonly data: number[];
    constructor(order: string, head: CappuccinoAPIBitVecHead, bits: number, data: number[]);
    toJSON(): {
        order: string;
        head: {
            width: number;
            index: number;
        };
        bits: number;
        data: number[];
    };
}
export declare class CappuccinoAPIBitVecDecoder implements Converter<unknown, CappuccinoAPIBitVec> {
    convert(input: unknown): CappuccinoAPIBitVec;
}
export declare class CappuccinoAPIBitVecEncoder implements Converter<CappuccinoAPIBitVec> {
    convert(input: CappuccinoAPIBitVec): {
        order: string;
        head: {
            width: number;
            index: number;
        };
        bits: number;
        data: number[];
    };
}
export declare class CappuccinoAPIBitVecCodec extends TypeCheckingCodec<CappuccinoAPIBitVec, ReturnType<InstanceType<new () => CappuccinoAPIBitVecEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIBitVecEncoder;
    readonly decoder: CappuccinoAPIBitVecDecoder;
}
export declare const cappuccinoAPIBitVecCodec: CappuccinoAPIBitVecCodec;
