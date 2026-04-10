import { InvalidTypeError } from '@/errors/invalid_type_error';
import {
  Encoding,
  rawStdEncoding,
  rawURLEncoding,
  stdEncoding,
  urlEncoding,
} from '../base64/base64';
import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec, NullDecoder, NullEncoder } from './null';

export class Base64ArrayBufferDecoder implements Converter<
  unknown,
  ArrayBuffer
> {
  private encoding: Encoding;
  constructor(encoding: Encoding) {
    this.encoding = encoding;
  }

  convert(input: unknown): ArrayBuffer {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    return this.encoding.decodeString(input);
  }
}

export class Base64ArrayBufferEncoder implements Converter<
  ArrayBuffer,
  string
> {
  private encoding: Encoding;
  constructor(encoding: Encoding) {
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
  constructor(encoding: Encoding) {
    super();
    this.encoder = new Base64ArrayBufferEncoder(encoding);
    this.decoder = new Base64ArrayBufferDecoder(encoding);
  }
}

export const rawURLBase64ArrayBufferCodec = new Base64ArrayBufferCodec(
  rawURLEncoding,
);
export const rawStdBase64ArrayBufferCodec = new Base64ArrayBufferCodec(
  rawStdEncoding,
);
export const urlBase64ArrayBufferCodec = new Base64ArrayBufferCodec(
  urlEncoding,
);
export const stdBase64ArrayBufferCodec = new Base64ArrayBufferCodec(
  stdEncoding,
);
export const nullableStdBase64ArrayBufferCodec = new NullCodec(
  new NullDecoder(stdBase64ArrayBufferCodec),
  new NullEncoder(stdBase64ArrayBufferCodec),
);
