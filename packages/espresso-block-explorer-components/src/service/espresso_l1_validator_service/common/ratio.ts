import { Converter, numberCodec, TypeCheckingCodec } from '@/convert/codec';

/**
 * Ratio represents an immutable ratio value between 0 and 1.
 * This type exists to provide type safety and clarity when dealing with
 * ratio values in the codebase.
 */
export class Ratio {
  constructor(public readonly ratio: number) {
    Object.freeze(this);
  }

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

class RatioEncoder implements Converter<Ratio, unknown> {
  convert(input: Ratio): unknown {
    return numberCodec.encode(input.ratio);
  }
}

class RatioDecoder implements Converter<unknown, Ratio> {
  convert(input: unknown): Ratio {
    return new Ratio(numberCodec.decode(input));
  }
}

export class RatioCodec extends TypeCheckingCodec<Ratio, unknown> {
  readonly encoder = new RatioEncoder();
  readonly decoder = new RatioDecoder();
}

export const ratioCodec = new RatioCodec();
