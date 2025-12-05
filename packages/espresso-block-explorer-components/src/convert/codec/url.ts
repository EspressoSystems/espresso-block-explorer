import InvalidTypeError from '@/errors/invalid_type_error';
import { Converter, TypeCheckingCodec, isString } from './convert';
import { NullCodec, NullDecoder, NullEncoder } from './null';

/**
 * URLDecoder is a Converter that converts a string to a URL.
 */
export class URLDecoder implements Converter<unknown, URL> {
  convert(input: unknown): URL {
    if (!isString(input)) {
      throw new InvalidTypeError(typeof input, 'string');
    }

    return new URL(input);
  }
}

/**
 * URLEncoder is a Converter that converts a URL to a string.
 */
export class URLEncoder implements Converter<URL, string> {
  convert(input: URL): string {
    return input.toString();
  }
}

/**
 * URLCodec is a Codec that encapsulates conversion from and to a URL.
 */
export class URLCodec extends TypeCheckingCodec<URL, string> {
  readonly encoder = new URLEncoder();
  readonly decoder = new URLDecoder();
}

export const urlCodec = new URLCodec();
export const nullableURLCodec = new NullCodec(
  new NullDecoder(urlCodec),
  new NullEncoder(urlCodec),
);
