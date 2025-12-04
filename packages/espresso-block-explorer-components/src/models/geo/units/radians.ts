import {
  Converter,
  TypeCheckingCodec,
  isNumber,
} from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import { BaseNumeric, NumberLike } from '../../numeric/numeric';

/**
 * Radians is a class that represents that the numeric value that is stored
 * as a quantity of the ratio between a radius and the circumference.  This
 * class exists in an effort to catch Radian / Degree mismatches.
 */
export default class Radians extends BaseNumeric<NumberLike> {
  toString(): string {
    return `${Number(this)} rad`;
  }
}

class RadiansEncoder implements Converter<Radians, number> {
  convert(input: Radians): number {
    return Number(input);
  }
}

class RadiansDecoder implements Converter<unknown, Radians> {
  convert(input: unknown): Radians {
    if (!isNumber(input)) {
      throw new InvalidTypeError(typeof input, 'number');
    }

    return new Radians(input);
  }
}

class RadiansCodec extends TypeCheckingCodec<Radians, number> {
  readonly encoder: Converter<Radians, number>;
  readonly decoder: Converter<unknown, Radians>;
  constructor() {
    super();
    this.encoder = new RadiansEncoder();
    this.decoder = new RadiansDecoder();
  }
}

export const radiansCodec = new RadiansCodec();
