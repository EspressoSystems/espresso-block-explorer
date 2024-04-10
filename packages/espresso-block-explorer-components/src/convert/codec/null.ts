import { Converter, TypeCheckingCodec } from './convert';

/**
 * NullDecoder is a Decoding Converter that adds `null` as an option for
 * the decoded value.  The other value can be anything and this Decoder
 * doesn't presume to know how to decode it, as such it requires a
 * Codec for the other value.
 */
export class NullDecoder<T, U> implements Converter<null | T, null | U> {
  private readonly itemCodec: TypeCheckingCodec<U, T>;
  constructor(itemCodec: TypeCheckingCodec<U, T>) {
    this.itemCodec = itemCodec;
  }

  convert(input: null | T): null | U {
    if (input === null) {
      return null;
    }

    return this.itemCodec.decode(input);
  }
}

/**
 * NullEncoder is an Encoding Converter that adds `null` as an option for
 * the decoded value.  The other value can be anything and this Encoder
 * doesn't presume to know how to encode it, as such it requires a
 * Codec for the other value.
 */
export class NullEncoder<T, U> implements Converter<null | T, null | U> {
  private readonly itemCodec: TypeCheckingCodec<T, U>;
  constructor(itemCodec: TypeCheckingCodec<T, U>) {
    this.itemCodec = itemCodec;
  }

  convert(input: null | T): null | U {
    if (input === null) {
      return null;
    }

    return this.itemCodec.encode(input);
  }
}

/**
 * NullCodec is a Codec that that wraps a NullDecoder, and a NullEncoder
 * to provide a Codec for a value that can be either `null` or a specific
 * type.
 */
export class NullCodec<T, U> extends TypeCheckingCodec<null | T, null | U> {
  readonly encoder: Converter<null | T, null | U>;
  readonly decoder: Converter<unknown, null | T>;

  constructor(
    decoder: Converter<unknown, null | T>,
    encoder: Converter<null | T, null | U>,
  ) {
    super();
    this.encoder = encoder;
    this.decoder = decoder;
  }
}
