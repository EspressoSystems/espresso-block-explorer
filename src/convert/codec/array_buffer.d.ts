import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec } from './null';
/**
 * ArrayBufferDecoder is a flexible decder that attempts to decode a variety
 * of different serialization representations for an ArrayBuffer.
 */
export declare class ArrayBufferDecoder implements Converter<unknown, ArrayBuffer> {
    convert(input: unknown): ArrayBuffer;
}
/**
 * ArrayBufferEncoder encodes an ArrayBuffer into a hex string, prefixed with
 * '0x'.
 */
export declare class ArrayBufferEncoder implements Converter<ArrayBuffer, `0x${string}`> {
    convert(input: ArrayBuffer): `0x${string}`;
}
export declare class ArrayBufferCodec extends TypeCheckingCodec<ArrayBuffer, `0x${string}`> {
    readonly encoder: Converter<ArrayBuffer, `0x${string}`>;
    readonly decoder: Converter<unknown, ArrayBuffer>;
}
/**
 * arrayBufferCodec is a codec for ArrayBuffers that encodes them as hex
 * strings.
 */
export declare const arrayBufferCodec: ArrayBufferCodec;
/**
 * nullableArrayBufferCodec is an extension of the regular `ArrayBufferCodec`
 * and allows for `null` to be serialized in place of the `ArraytBuffer`.
 */
export declare const nullableArrayBufferCodec: NullCodec<ArrayBuffer, `0x${string}`>;
