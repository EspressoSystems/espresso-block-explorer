/**
 * a Converter is a simple contract that indicates that a member is able to
 * be converted from an incoming input type of Input, to an outgoing output
 * type of Output.
 *
 * It makes not assertions about how this is achieved, or even indicates
 * whether it will succeed or not.
 *
 * Expect this conversion to have the potential to throw an error if the
 * necessary input conditions are not met.
 */
export interface Converter<Input = unknown, Output = unknown> {
    convert(input: Input): Output;
}
/**
 * A Codec is a combination of two converts that are able to convert back
 * and forth between the two types of representations.
 */
export declare abstract class Codec<A = unknown, B = unknown, C = B, D = A> {
    abstract readonly encoder: Converter<A, B>;
    abstract readonly decoder: Converter<C, D>;
    encode(input: A): B;
    decode(input: C): D;
}
/**
 * TypeCheckingCodec is a Codec that is able to convert between two types,
 * but also has the ability to check the input types before conversion.
 */
export declare abstract class TypeCheckingCodec<A = unknown, B = unknown> extends Codec<A, B, unknown, A> {
    abstract readonly encoder: Converter<A, B>;
    abstract readonly decoder: Converter<unknown, A>;
}
export declare function isBoolean(input: unknown): input is boolean;
export declare function isNumber(input: unknown): input is number;
export declare function isString(input: unknown): input is string;
export declare function isSymbol(input: unknown): input is symbol;
export declare function isBigint(input: unknown): input is bigint;
export declare function isObject(input: unknown): input is Record<string, unknown>;
export declare function isUndefined(input: unknown): input is undefined;
export declare function isUnknown(input: unknown): input is unknown;
export declare function isNull(input: unknown): input is null;
export declare function isEither<A, B>(predA: (input: unknown) => input is A, predB: (input: unknown) => input is B): (input: unknown) => input is A | B;
export declare function isArray<T>(input: unknown, predicate: (input: unknown) => input is T): input is T[];
export declare function isArrayMemberFunction<T>(predicate: (input: unknown) => input is T): (input: unknown) => input is T[];
export declare function isRecord<Key extends string, Value>(value: unknown, key: Key, predicate: (value: unknown) => value is Value): value is Record<Key, Value>;
/**
 * assertRecordWithKeys is a helper function much like `isRecord`.  It is an
 * assertion type function for typescript, which indicates that the type passed
 * in has the keys passed in, otherwise this throw an error that indicates the
 * nature of the error in question.
 */
export declare function assertRecordWithKeys<Key extends string>(value: unknown, ...keys: Key[]): asserts value is Record<Key, unknown>;
/**
 * assertErrorCode is a helper function for decoding Errors.  All encoded errors
 * are meant to have a 'code' present that indicates the type of error that is
 * present, and potentially how it should be decoded.
 */
export declare function assertErrorCode<Code extends string>(value: Record<'code', unknown>, code: Code): asserts value is Record<'code', Code>;
