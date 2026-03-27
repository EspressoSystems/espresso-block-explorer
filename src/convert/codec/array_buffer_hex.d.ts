import { ArrayCodec } from './array';
import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec } from './null';
export declare class HexArrayBufferDecoder implements Converter<unknown, ArrayBuffer> {
    convert(input: unknown): ArrayBuffer;
}
export declare class HexArrayBufferEncoder implements Converter<ArrayBuffer, `0x${string}`> {
    convert(input: ArrayBuffer): `0x${string}`;
}
export declare class HexArrayBufferCodec extends TypeCheckingCodec<ArrayBuffer, `0x${string}`> {
    encoder: HexArrayBufferEncoder;
    decoder: HexArrayBufferDecoder;
}
export declare const hexArrayBufferCodec: HexArrayBufferCodec;
export declare const nullableHexArrayBufferCodec: NullCodec<ArrayBuffer, `0x${string}`>;
export declare const hexArrayBufferArrayCodec: ArrayCodec<ArrayBuffer, `0x${string}`>;
declare class BackwardsCompatibleHexArrayBufferDecoder implements Converter<unknown, ArrayBuffer[]> {
    convert(input: unknown): ArrayBuffer[];
}
declare class BackwardsCompatibleHexArrayBufferEncoder implements Converter<ArrayBuffer[], unknown> {
    convert(input: ArrayBuffer[]): unknown;
}
declare class BackwardsCompatibleHexArrayBufferCodec extends TypeCheckingCodec<ArrayBuffer[], unknown> {
    readonly encoder: BackwardsCompatibleHexArrayBufferEncoder;
    readonly decoder: BackwardsCompatibleHexArrayBufferDecoder;
}
export declare const backwardsCompatibleHexArrayBufferCodec: BackwardsCompatibleHexArrayBufferCodec;
export {};
