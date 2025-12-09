import { assertNotNull } from '@/assert/assert';
import { Converter, TypeCheckingCodec } from './convert';

/**
 * OptionalDecoder is a Decoding Converter that adds `null` and `undefined` as
 * options for the decoded value.  The other value can be anything and this
 * Decoder doesn't presume to know how to decode it, as such it requires a
 * Codec for the other value.
 */
export class OptionalDecoder<T, U> implements Converter<
  null | undefined | T,
  null | undefined | U
> {
  private readonly itemCodec: TypeCheckingCodec<U, T>;
  constructor(itemCodec: TypeCheckingCodec<U, T>) {
    this.itemCodec = itemCodec;
  }

  convert(input: null | undefined | T): null | undefined | U {
    if (input === undefined) {
      return undefined;
    }

    if (input === null) {
      return null;
    }

    return this.itemCodec.decode(input);
  }
}

/**
 * OptionalEncoder is an Encoding Converter that adds `null` and `undefined` as
 * options for the decoded value.  The other value can be anything and this
 * Encoder doesn't presume to know how to encode it, as such it requires a
 * Codec for the other value.
 */
export class OptionalEncoder<T, U> implements Converter<
  null | undefined | T,
  null | undefined | U
> {
  private readonly itemCodec: TypeCheckingCodec<T, U>;
  constructor(itemCodec: TypeCheckingCodec<T, U>) {
    this.itemCodec = itemCodec;
  }

  convert(input: null | undefined | T): null | undefined | U {
    if (input === null) {
      return null;
    }

    if (input === undefined) {
      return undefined;
    }

    assertNotNull(input);
    return this.itemCodec.encode(input);
  }
}

/**
 * OptionalCodec is a Codec that that wraps an OptionalDecoder, and
 * an OptionalEncoder to provide a Codec for a value that can be `null`
 * `undefined` or an expected type.
 */
export class OptionalCodec<T, U> extends TypeCheckingCodec<
  null | undefined | T,
  null | undefined | U
> {
  readonly encoder: Converter<null | undefined | T, null | undefined | U>;
  readonly decoder: Converter<unknown, null | undefined | T>;

  constructor(
    decoder: Converter<unknown, null | undefined | T>,
    encoder: Converter<null | undefined | T, null | undefined | U>,
  ) {
    super();
    this.encoder = encoder;
    this.decoder = decoder;
  }
}
