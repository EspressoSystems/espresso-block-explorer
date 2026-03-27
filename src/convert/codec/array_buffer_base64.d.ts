import { Encoding } from '../base64/base64';
import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec } from './null';
export declare class Base64ArrayBufferDecoder implements Converter<unknown, ArrayBuffer> {
    private encoding;
    constructor(encoding: Encoding);
    convert(input: unknown): ArrayBuffer;
}
export declare class Base64ArrayBufferEncoder implements Converter<ArrayBuffer, string> {
    private encoding;
    constructor(encoding: Encoding);
    convert(input: ArrayBuffer): string;
}
export declare class Base64ArrayBufferCodec extends TypeCheckingCodec<ArrayBuffer, string> {
    readonly encoder: Base64ArrayBufferEncoder;
    readonly decoder: Base64ArrayBufferDecoder;
    constructor(encoding: Encoding);
}
export declare const rawURLBase64ArrayBufferCodec: Base64ArrayBufferCodec;
export declare const rawStdBase64ArrayBufferCodec: Base64ArrayBufferCodec;
export declare const urlBase64ArrayBufferCodec: Base64ArrayBufferCodec;
export declare const stdBase64ArrayBufferCodec: Base64ArrayBufferCodec;
export declare const nullableStdBase64ArrayBufferCodec: NullCodec<ArrayBuffer, string>;
