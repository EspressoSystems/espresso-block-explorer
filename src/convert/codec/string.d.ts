import { ArrayCodec } from './array';
import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec } from './null';
export declare const isStringArray: (input: unknown) => input is string[];
/**
 * StringDecoder is a Converter that converts a string to a string.
 * This is effectively an identity function, so what it really does
 * is act as an assertion that a string is given where a string is
 * expected.
 */
export declare class StringDecoder<S extends string = string> implements Converter<unknown, S> {
    convert(input: unknown): S;
}
/**
 * StringEncoder is a Converter that converts a string to a string.
 * This is an identity function, so no conversion actually takes
 * place.
 */
export declare class StringEncoder<S extends string = string> implements Converter<S, S> {
    convert(input: S): S;
}
/**
 * StringCodec is a Codec that encapsulates conversion from and to
 * a string.
 */
export declare class StringCodec<S extends string = string> extends TypeCheckingCodec<S, S> {
    readonly encoder: StringEncoder<S>;
    readonly decoder: StringDecoder<S>;
}
export declare const stringCodec: StringCodec<string>;
export declare const stringArrayCodec: ArrayCodec<string, string>;
export declare const nullableStringCodec: NullCodec<string, string>;
/**
 * preferNullOverEmptyString is a function that is used to ensure that strings
 * that have no meaningful content, and where a `null` value is allowable, will
 * prefer to return `null` instead of the empty string value.
 */
export declare function preferNullOverEmptyString(input: undefined | null | string): null | string;
