import { ArrayCodec } from './array';
import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec } from './null';
import * as base64 from '../base64/base64';
export declare class HexArrayBufferDecoder implements Converter<unknown, ArrayBuffer> {
    convert(input: unknown): ArrayBuffer;
}
export declare class HexArrayBufferEncoder implements Converter<ArrayBuffer | ArrayBufferLike, string> {
    convert(input: ArrayBuffer | ArrayBufferLike): string;
}
export declare class HexArrayBufferCodec extends TypeCheckingCodec<ArrayBuffer, string> {
    encoder: HexArrayBufferEncoder;
    decoder: HexArrayBufferDecoder;
}
export declare const hexArrayBufferCodec: HexArrayBufferCodec;
export declare const nullableHexArrayBufferCodec: NullCodec<ArrayBuffer | SharedArrayBuffer, string>;
export declare const hexArrayBufferArrayCodec: ArrayCodec<ArrayBufferLike, string>;
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
export declare class Base64ArrayBufferDecoder implements Converter<unknown, ArrayBuffer> {
    private encoding;
    constructor(encoding: base64.Encoding);
    convert(input: unknown): ArrayBuffer;
}
export declare class Base64ArrayBufferEncoder implements Converter<ArrayBuffer, string> {
    private encoding;
    constructor(encoding: base64.Encoding);
    convert(input: ArrayBuffer): string;
}
export declare class Base64ArrayBufferCodec extends TypeCheckingCodec<ArrayBuffer, string> {
    readonly encoder: Base64ArrayBufferEncoder;
    readonly decoder: Base64ArrayBufferDecoder;
    constructor(encoding: base64.Encoding);
}
export declare const rawURLBase64ArrayBufferCodec: Base64ArrayBufferCodec;
export declare const rawStdBase64ArrayBufferCodec: Base64ArrayBufferCodec;
export declare const urlBase64ArrayBufferCodec: Base64ArrayBufferCodec;
export declare const stdBase64ArrayBufferCodec: Base64ArrayBufferCodec;
export {};
