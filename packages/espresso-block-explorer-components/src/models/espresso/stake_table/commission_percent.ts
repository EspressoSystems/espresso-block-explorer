import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import BaseError from '@/errors/BaseError';
import InvalidTypeError from '@/errors/InvalidTypeError';

const MAX: number = 10_000;
const MIN: number = 0;
const kPercentageOutOfRangeCode = 'PercentageOutOfRange';

export default class PercentageOutOfRangeError extends BaseError {
  public value: number;

  constructor(
    value: number,
    message: string = `the commission percentage is outside of the range [${MIN}, ${MAX}], have ${value}`,
  ) {
    super(message);
    this.value = value;
    Object.freeze(this);
  }

  get code(): string {
    return kPercentageOutOfRangeCode;
  }
}

/**
 * CommissionPercent represents the commission percentage for a validator.
 * These values are stored in the range 0 to 10_000, where 10_000 represents
 * 100%.
 */
export class CommissionPercent {
  public readonly value: number;

  constructor(value: number) {
    if (value < MIN || value > MAX) {
      throw new PercentageOutOfRangeError(value);
    }

    this.value = value;
  }

  public toString(): string {
    return `${this.value / 100}%`;
  }

  public toJSON(): number {
    return this.value;
  }

  public valueOf(): number {
    return this.value / MAX;
  }
}

export class CommissionPercentDecoder implements Converter<
  unknown,
  CommissionPercent
> {
  convert(input: unknown): CommissionPercent {
    if (typeof input !== 'number') {
      throw new InvalidTypeError(typeof input, 'number');
    }

    return new CommissionPercent(input);
  }
}

export class CommissionPercentEncoder implements Converter<
  CommissionPercent,
  number
> {
  convert(input: CommissionPercent): number {
    if (!(input instanceof CommissionPercent)) {
      throw new InvalidTypeError(input, 'CommissionPercent');
    }

    return Math.floor(input.value);
  }
}

export class CommissionPercentCodec extends TypeCheckingCodec<
  CommissionPercent,
  number
> {
  readonly encoder: Converter<CommissionPercent, number> =
    new CommissionPercentEncoder();
  readonly decoder: Converter<unknown, CommissionPercent> =
    new CommissionPercentDecoder();
}

export const commissionPercentCodec = new CommissionPercentCodec();
