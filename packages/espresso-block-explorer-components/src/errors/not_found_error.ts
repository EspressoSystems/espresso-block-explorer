import {
  Codec,
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import { unknownCodec } from '@/convert/codec/unknown';
import BaseError, { baseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

const kNotFoundErrorCode = 'NotFoundError';

/**
 * NotFoundError is an error that indicates that the resource for the specified
 * key was unable to be found.
 */
export default class NotFoundError<Key = unknown> extends BaseError {
  readonly key: Key;

  constructor(key: Key, message: string = `Not Found: ${key}`) {
    super(message);
    this.key = key;
    Object.freeze(this);
  }

  get code(): string {
    return kNotFoundErrorCode;
  }
}

export class NotFoundErrorDecoder<Key> implements Converter<
  unknown,
  NotFoundError<Key>
> {
  private readonly codec: Codec<Key>;
  constructor(codec: Codec<Key>) {
    this.codec = codec;
  }

  convert(input: unknown): NotFoundError<Key> {
    assertRecordWithKeys(input, 'code', 'key');
    assertErrorCode(input, kNotFoundErrorCode);
    return new NotFoundError(this.codec.decode(input.key));
  }
}

export class NotFoundErrorEncoder<Key, Encoded = unknown> implements Converter<
  NotFoundError<Key>
> {
  private readonly codec: Codec<Key, Encoded, unknown>;
  constructor(codec: Codec<Key, Encoded, unknown>) {
    this.codec = codec;
  }

  convert(input: NotFoundError<Key>) {
    const result = {
      ...baseErrorEncoder.convert(input),
      key: this.codec.encode(input.key),
    } as const;

    return result;
  }
}

export class NotFoundErrorCodec<
  Key,
  Encoded = unknown,
> extends TypeCheckingCodec<NotFoundError<Key>> {
  readonly encoder: Converter<NotFoundError<Key>, Encoded>;
  readonly decoder: Converter<unknown, NotFoundError<Key>>;

  constructor(
    encoder: Converter<NotFoundError<Key>, Encoded>,
    decoder: Converter<unknown, NotFoundError<Key>>,
  ) {
    super();
    this.encoder = encoder;
    this.decoder = decoder;
  }
}

export const notFoundKeyStringErrorCodec = new NotFoundErrorCodec(
  new NotFoundErrorEncoder(stringCodec),
  new NotFoundErrorDecoder(stringCodec),
);

export const notFoundKeyUnknownErrorCodec = new NotFoundErrorCodec(
  new NotFoundErrorEncoder(unknownCodec),
  new NotFoundErrorDecoder(unknownCodec),
);

registerCodec(kNotFoundErrorCode, notFoundKeyUnknownErrorCodec);
