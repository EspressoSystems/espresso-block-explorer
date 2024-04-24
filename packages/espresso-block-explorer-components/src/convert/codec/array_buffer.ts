import InvalidTypeError from '@/errors/InvalidTypeError';
import * as base64 from '../base64/base64';
import { encodeNumberIterableToHexits, parseHexString } from '../hex/hex';
import { Converter, TypeCheckingCodec } from './convert';

export class HexArrayBufferDecoder implements Converter<unknown, ArrayBuffer> {
  convert(input: unknown): ArrayBuffer {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    return parseHexString(input);
  }
}

export class HexArrayBufferEncoder implements Converter<ArrayBuffer, string> {
  convert(input: ArrayBuffer): string {
    // try to avoid this array allocation if possible.
    return ['0x', ...encodeNumberIterableToHexits(new Uint8Array(input))].join(
      '',
    );
  }
}

export class HexArrayBufferCodec extends TypeCheckingCodec<
  ArrayBuffer,
  string
> {
  encoder = new HexArrayBufferEncoder();
  decoder = new HexArrayBufferDecoder();
}

export const hexArrayBufferCodec = new HexArrayBufferCodec();

export class Base64ArrayBufferDecoder
  implements Converter<unknown, ArrayBuffer>
{
  private encoding: base64.Encoding;
  constructor(encoding: base64.Encoding) {
    this.encoding = encoding;
  }

  convert(input: unknown): ArrayBuffer {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    return this.encoding.decodeString(input);
  }
}

export class Base64ArrayBufferEncoder
  implements Converter<ArrayBuffer, string>
{
  private encoding: base64.Encoding;
  constructor(encoding: base64.Encoding) {
    this.encoding = encoding;
  }

  convert(input: ArrayBuffer): string {
    return this.encoding.encodeToString(input);
  }
}

export class Base64ArrayBufferCodec extends TypeCheckingCodec<
  ArrayBuffer,
  string
> {
  readonly encoder: Base64ArrayBufferEncoder;
  readonly decoder: Base64ArrayBufferDecoder;
  constructor(encoding: base64.Encoding) {
    super();
    this.encoder = new Base64ArrayBufferEncoder(encoding);
    this.decoder = new Base64ArrayBufferDecoder(encoding);
  }
}

export const rawURLBase64ArrayBufferCodec = new Base64ArrayBufferCodec(
  base64.rawURLEncoding,
);
export const rawStdBase64ArrayBufferCodec = new Base64ArrayBufferCodec(
  base64.rawStdEncoding,
);
export const urlBase64ArrayBufferCodec = new Base64ArrayBufferCodec(
  base64.urlEncoding,
);
export const stdBase64ArrayBufferCodec = new Base64ArrayBufferCodec(
  base64.stdEncoding,
);
