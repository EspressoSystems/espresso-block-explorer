import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { numberCodec } from '@/convert/codec/number';

/**
 * Ratio represents an immutable ratio value between 0 and 1.
 * This type exists to provide type safety and clarity when dealing with
 * ratio values in the codebase.
 */
export abstract class Ratio {
  abstract readonly ratio: number;
  protected constructor() {}

  public static floatingPoint(ratio: number): RatioFloat {
    return new RatioFloat(ratio);
  }

  public static rational(
    numerator: bigint,
    denominator: bigint,
  ): RatioRational {
    return new RatioRational(numerator, denominator);
  }

  abstract oneMinus(): Ratio;

  valueOf(): number {
    return this.ratio;
  }

  toString(): string {
    return this.ratio.toString();
  }

  toJSON() {
    return ratioCodec.encode(this);
  }
}

export class RatioFloat extends Ratio {
  constructor(public readonly ratio: number) {
    super();
    if (ratio < 0 || ratio > 1) {
      throw new RangeError('Ratio must be between 0 and 1');
    }
    Object.freeze(this);
  }

  oneMinus(): Ratio {
    return new RatioFloat(1 - this.ratio);
  }
}

export class RatioRational extends Ratio {
  constructor(
    public readonly numerator: bigint,
    public readonly denominator: bigint,
  ) {
    super();
    if (numerator < BigInt(0) || numerator > denominator) {
      throw new RangeError(
        'Numerator must be between 0 and denominator inclusive',
      );
    }
    Object.freeze(this);
  }

  oneMinus(): RatioRational {
    return new RatioRational(
      this.denominator - this.numerator,
      this.denominator,
    );
  }

  get ratio(): number {
    return Number(this.numerator) / Number(this.denominator);
  }
}

class RatioEncoder implements Converter<Ratio, unknown> {
  convert(input: Ratio): unknown {
    return numberCodec.encode(input.ratio);
  }
}

class RatioDecoder implements Converter<unknown, Ratio> {
  convert(input: unknown): Ratio {
    return new RatioFloat(numberCodec.decode(input));
  }
}

export class RatioCodec extends TypeCheckingCodec<Ratio, unknown> {
  readonly encoder = new RatioEncoder();
  readonly decoder = new RatioDecoder();
}

export const ratioCodec = new RatioCodec();

export const nullableRatioCodec = new NullCodec(
  new NullDecoder(ratioCodec),
  new NullEncoder(ratioCodec),
);
