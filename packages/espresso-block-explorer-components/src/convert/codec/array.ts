import { Converter, InvalidInputError, TypeCheckingCodec } from './convert';

/**
 * ArrayDecoder is a general abstraction of an Array decoder.  It knows how
 * to decode the array semantics of an encoded value, but not it's members.
 * As such it acts a building block for a more complex Converter.  It itself
 * requires another Codec for the members itself.
 */
export class ArrayDecoder<T, U> implements Converter<unknown, U[]> {
  private readonly itemCodec: TypeCheckingCodec<U, T>;
  constructor(itemCodec: TypeCheckingCodec<U, T>) {
    this.itemCodec = itemCodec;
  }

  convert(input: unknown): U[] {
    if (!Array.isArray(input)) {
      throw new InvalidInputError();
    }

    return input.map((m) => this.itemCodec.decode(m));
  }
}

/**
 * ArrayEncoder is a general abstraction of an Array encoder.  It knows how
 * to encode the array semantics of a value, but not it's members.  As such
 * it acts a building block for a more complex Converter.  It itself requires
 * another Codec for the members itself.
 */
export class ArrayEncoder<T, U> implements Converter<T[], U[]> {
  private readonly itemCodec: TypeCheckingCodec<T, U>;
  constructor(itemCodec: TypeCheckingCodec<T, U>) {
    this.itemCodec = itemCodec;
  }

  convert(input: T[]): U[] {
    return input.map((m) => this.itemCodec.encode(m));
  }
}

/**
 * ArrayCodec is a Codec that that wraps an ArrayDecoder, and an ArrayEncoder
 * to provide a Codec for an array of a specific type.
 */
export class ArrayCodec<T, U> extends TypeCheckingCodec<T[], U[]> {
  readonly encoder: Converter<T[], U[]>;
  readonly decoder: Converter<unknown, T[]>;

  constructor(decoder: Converter<unknown, T[]>, encoder: Converter<T[], U[]>) {
    super();
    this.encoder = encoder;
    this.decoder = decoder;
  }
}
