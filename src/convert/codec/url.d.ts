import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec } from './null';

/**
 * URLDecoder is a Converter that converts a string to a URL.
 */
export declare class URLDecoder implements Converter<unknown, URL> {
    convert(input: unknown): URL;
}
/**
 * URLEncoder is a Converter that converts a URL to a string.
 */
export declare class URLEncoder implements Converter<URL, string> {
    convert(input: URL): string;
}
/**
 * URLCodec is a Codec that encapsulates conversion from and to a URL.
 */
export declare class URLCodec extends TypeCheckingCodec<URL, string> {
    readonly encoder: URLEncoder;
    readonly decoder: URLDecoder;
}
export declare const urlCodec: URLCodec;
export declare const nullableURLCodec: NullCodec<URL, string>;
