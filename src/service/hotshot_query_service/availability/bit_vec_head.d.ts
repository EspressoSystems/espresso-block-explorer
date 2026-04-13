import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * BitVecHead represents the head of a bit vector in the Availability API.
 */
export declare class BitVecHead {
    readonly width: number;
    readonly index: number;
    constructor(width: number, index: number);
    toJSON(): {
        width: number;
        index: number;
    };
}
export declare class BitVecHeadDecoder implements Converter<unknown, BitVecHead> {
    convert(input: unknown): BitVecHead;
}
export declare class BitVecHeadEncoder implements Converter<BitVecHead> {
    convert(input: BitVecHead): {
        width: number;
        index: number;
    };
}
export declare class BitVecHeadCodec extends TypeCheckingCodec<BitVecHead, ReturnType<InstanceType<new () => BitVecHeadEncoder>['convert']>> {
    readonly encoder: BitVecHeadEncoder;
    readonly decoder: BitVecHeadDecoder;
}
export declare const bitVecHeadCodec: BitVecHeadCodec;
