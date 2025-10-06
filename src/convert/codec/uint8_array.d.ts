import { Converter, TypeCheckingCodec } from './convert';
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
