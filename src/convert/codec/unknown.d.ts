import { Codec, Converter } from './convert';
export declare const isUnknownArray: (input: unknown) => input is unknown[];
/**
 * `UnknownConverter` is a `Converter` that really doesn't do anything.  It's
 * an identity converter in that it just returns whatever is given to it without
 * making any assertions or inspections as to the type of whatever is passed into
 * it.
 */
export declare class UnknownConverter implements Converter<unknown, unknown> {
    convert(input: unknown): unknown;
}
/**
 * UnknownCodec is a `Codec` that is used to "encode" and "decode" whatever
 * values are passed to it.  Since the `UnknownConverter` is an identity
 * `Converter`, this `Codec` doesn't actually perform any conversion at all.
 */
export declare class UnknownCodec extends Codec<unknown, unknown> {
    readonly encoder: UnknownConverter;
    readonly decoder: UnknownConverter;
}
export declare const unknownCodec: UnknownCodec;
