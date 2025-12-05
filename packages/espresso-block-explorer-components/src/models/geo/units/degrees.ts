import {
  Converter,
  TypeCheckingCodec,
  isNumber,
} from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/invalid_type_error';
import { BaseNumeric, NumberLike } from '../../numeric/numeric';

/**
 * Degrees is a class that represents that the numeric value that is stored
 * is a value that is represented in degrees.  This class exists in an effort
 * to catch Radian / Degree mismatches.
 */
export default class Degrees extends BaseNumeric<NumberLike> {
  toString(): string {
    return `${Number(this)}°`;
  }
}

class DegreesEncoder implements Converter<Degrees, number> {
  convert(input: Degrees): number {
    return Number(input);
  }
}

class DegreesDecoder implements Converter<unknown, Degrees> {
  convert(input: unknown): Degrees {
    if (!isNumber(input)) {
      throw new InvalidTypeError(typeof input, 'number');
    }

    return new Degrees(input);
  }
}

class DegreesCodec extends TypeCheckingCodec<Degrees, number> {
  readonly encoder: Converter<Degrees, number>;
  readonly decoder: Converter<unknown, Degrees>;
  constructor() {
    super();
    this.encoder = new DegreesEncoder();
    this.decoder = new DegreesDecoder();
  }
}

export const degreesCodec = new DegreesCodec();
