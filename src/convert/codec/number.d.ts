import { ArrayCodec } from './array';
import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec } from './null';
export declare const isNumberArray: (input: unknown) => input is number[];
/**
 * NumberDecoder is a Converter that converts a number to a number.
 * This is effectively an identity function, so what it really does
 * is act as an assertion that a number is given where a number is
 * expected.
 */
export declare class NumberDecoder implements Converter<unknown, number> {
    convert(input: unknown): number;
}
/**
 * NumberEncoder is a Converter that converts a number to a number.
 * This is an identity function, so no conversion actually takes
 * place.
 */
export declare class NumberEncoder implements Converter<number, number> {
    convert(input: number): number;
}
/**
 * NumberCodec is a Codec that encapsulates conversion from and to
 * a number.
 */
export declare class NumberCodec extends TypeCheckingCodec<number, number> {
    readonly encoder: NumberEncoder;
    readonly decoder: NumberDecoder;
}
export declare const numberCodec: NumberCodec;
export declare const nullableNumberCodec: NullCodec<number, number>;
export declare const numberArrayCodec: ArrayCodec<number, number>;
export declare const nullableNumberArrayCodec: ArrayCodec<number | null, number | null>;
