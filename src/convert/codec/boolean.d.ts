import { Converter, TypeCheckingCodec } from './convert';

/**
 * BooleanDecoder is a Converter that converts a boolean to a boolean.
 * This is effectively an identity function, so what it really does
 * is act as an assertion that a boolean is given where a boolean is
 * expected.
 */
export declare class BooleanDecoder implements Converter<unknown, boolean> {
    convert(input: unknown): boolean;
}
/**
 * BooleanEncoder is a Converter that converts a boolean to a boolean.
 * This is an identity function, so no conversion actually takes
 * place.
 */
export declare class BooleanEncoder implements Converter<boolean, boolean> {
    convert(input: boolean): boolean;
}
/**
 * BooleanCodec is a Codec that encapsulates conversion from and to
 * a boolean.
 */
export declare class BooleanCodec extends TypeCheckingCodec<boolean, boolean> {
    readonly encoder: BooleanEncoder;
    readonly decoder: BooleanDecoder;
}
export declare const booleanCodec: BooleanCodec;
