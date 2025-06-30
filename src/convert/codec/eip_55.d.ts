import { Converter } from './convert';
export declare class EIP55Encoder implements Converter<ArrayBuffer, string> {
    convert(input: ArrayBuffer): string;
}
export declare const eip55Encoder: EIP55Encoder;
