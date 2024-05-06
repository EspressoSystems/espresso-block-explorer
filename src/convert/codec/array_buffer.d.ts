import { Converter, TypeCheckingCodec } from './convert';
import * as base64 from '../base64/base64';
export declare class HexArrayBufferDecoder implements Converter<unknown, ArrayBuffer> {
    convert(input: unknown): ArrayBuffer;
}
export declare class HexArrayBufferEncoder implements Converter<ArrayBuffer, string> {
    convert(input: ArrayBuffer): string;
}
export declare class HexArrayBufferCodec extends TypeCheckingCodec<ArrayBuffer, string> {
    encoder: HexArrayBufferEncoder;
    decoder: HexArrayBufferDecoder;
}
export declare const hexArrayBufferCodec: HexArrayBufferCodec;
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
