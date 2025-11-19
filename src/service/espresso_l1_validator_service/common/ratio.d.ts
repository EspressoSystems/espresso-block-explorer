import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
/**
 * Ratio represents an immutable ratio value between 0 and 1.
 * This type exists to provide type safety and clarity when dealing with
 * ratio values in the codebase.
 */
export declare class Ratio {
    readonly ratio: number;
    constructor(ratio: number);
    valueOf(): number;
    toString(): string;
    toJSON(): unknown;
}
declare class RatioEncoder implements Converter<Ratio, unknown> {
    convert(input: Ratio): unknown;
}
declare class RatioDecoder implements Converter<unknown, Ratio> {
    convert(input: unknown): Ratio;
}
export declare class RatioCodec extends TypeCheckingCodec<Ratio, unknown> {
    readonly encoder: RatioEncoder;
    readonly decoder: RatioDecoder;
}
export declare const ratioCodec: RatioCodec;
export declare const nullableRatioCodec: NullCodec<Ratio, unknown>;
export {};
