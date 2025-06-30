import { Converter, TypeCheckingCodec } from './convert';
/**
 * UndefinedDecoder is a Decoding Converter that adds `undefined` as an option
 * for the decoded value.  The other value can be anything and this Decoder
 * doesn't presume to know how to decode it, as such it requires a Codec for
 * the other value.
 */
export declare class UndefinedDecoder<T, U> implements Converter<undefined | T, undefined | U> {
    private readonly itemCodec;
    constructor(itemCodec: TypeCheckingCodec<U, T>);
    convert(input: undefined | T): undefined | U;
}
/**
 * UndefinedEncoder is an Encoding Converter that adds `undefined` as an option
 * for the decoded value.  The other value can be anything and this Encoder
 * doesn't presume to know how to encode it, as such it requires a Codec for
 * the other value.
 */
export declare class UndefinedEncoder<T, U> implements Converter<undefined | T, undefined | U> {
    private readonly itemCodec;
    constructor(itemCodec: TypeCheckingCodec<T, U>);
    convert(input: undefined | T): undefined | U;
}
/**
 * UndefinedCodec is a Codec that that wraps a UndefinedDecoder, and a
 * UndefinedEncoder to provide a Codec for a value that can be either
 * `undefined` or a specific type.
 */
export declare class UndefinedCodec<T, U> extends TypeCheckingCodec<undefined | T, undefined | U> {
    readonly encoder: Converter<undefined | T, U>;
    readonly decoder: Converter<unknown, undefined | T>;
    constructor(decoder: Converter<unknown, undefined | T>, encoder: Converter<undefined | T, U>);
}
