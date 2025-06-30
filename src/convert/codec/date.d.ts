import { Converter, TypeCheckingCodec } from './convert';
/**
 * RFC3999DateDecoder is a Converter that converts a string to a Date, provided
 * that that string is an RFC3999 representation of a Date.  If the resulting
 * date is invalid, or the input is not a *string*, then this will throw an
 * InvalidInputError
 */
export declare class RFC3999DateDecoder implements Converter<unknown, Date> {
    convert(input: unknown): Date;
}
/**
 * RFC3999DateEncoder is a Converter that converts a number to a number.
 * This is an identity function, so no conversion actually takes
 * place.
 */
export declare class RFC3999DateEncoder implements Converter<Date, string> {
    convert(input: Date): string;
}
/**
 * RFC399DateCodec is a Codec that encapsulates conversion between a
 * Date and a string that is an RFC3999 representation of that Date.
 */
export declare class RFC399DateCodec extends TypeCheckingCodec<Date, string> {
    readonly encoder: RFC3999DateEncoder;
    readonly decoder: RFC3999DateDecoder;
}
export declare const rfc3999DateCodec: RFC399DateCodec;
