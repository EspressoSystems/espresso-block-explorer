import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
/**
 * RatioSet represents a set of URLs for different device pixel ratios.
 */
export declare class RatioSet {
    readonly ratio1: null | URL;
    readonly ratio2: null | URL;
    readonly ratio3: null | URL;
    constructor(ratio1: null | URL, ratio2: null | URL, ratio3: null | URL);
    toJSON(): unknown;
}
declare class RatioSetJSONDecoder implements Converter<unknown, RatioSet> {
    convert(input: unknown): RatioSet;
}
declare class RatioSetJSONEncoder implements Converter<RatioSet, unknown> {
    convert(input: RatioSet): unknown;
}
declare class RatioSetJSONCodec extends TypeCheckingCodec<RatioSet, unknown> {
    readonly encoder: RatioSetJSONEncoder;
    readonly decoder: RatioSetJSONDecoder;
}
export declare const ratioSetJSONCodec: RatioSetJSONCodec;
export declare const nullableRatioSetJSONCodec: NullCodec<RatioSet, unknown>;
export {};
