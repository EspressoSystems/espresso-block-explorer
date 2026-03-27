import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec } from './null';
export declare class Uint8ArrayToArrayBufferConverter implements Converter<Uint8Array, ArrayBuffer> {
    convert(input: Uint8Array): ArrayBuffer;
}
export declare class ArrayBufferToUint8ArrayConverter implements Converter<ArrayBuffer, Uint8Array> {
    convert(input: ArrayBuffer): Uint8Array;
}
export declare class Uint8ArrayToArrayBufferCodec extends TypeCheckingCodec<Uint8Array, ArrayBuffer> {
    readonly encoder: Uint8ArrayToArrayBufferConverter;
    readonly decoder: ArrayBufferToUint8ArrayConverter;
}
export declare const uint8ArrayToArrayBufferCodec: Uint8ArrayToArrayBufferCodec;
export declare class Uint8ArrayDecoder implements Converter<unknown, Uint8Array> {
    convert(input: unknown): Uint8Array;
}
export declare class Uint8ArrayEncoder implements Converter<Uint8Array, `0x${string}`> {
    convert(input: Uint8Array): `0x${string}`;
}
export declare class Uint8ArrayCodec extends TypeCheckingCodec<Uint8Array, `0x${string}`> {
    readonly decoder: Converter<unknown, Uint8Array>;
    readonly encoder: Converter<Uint8Array, `0x${string}`>;
}
export declare const uint8ArrayCodec: Uint8ArrayCodec;
export declare const nullableUint8ArrayCodec: NullCodec<Uint8Array<ArrayBufferLike>, `0x${string}`>;
