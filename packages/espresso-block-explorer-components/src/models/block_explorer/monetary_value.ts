import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
} from '../../convert/codec/array';
import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
} from '../../convert/codec/convert';
import {
  BTC,
  CurrencyCode,
  ESP,
  ETH,
  JPY,
  USD,
  currencyCodeCodec,
} from './currency_code';

/**
 * MonetaryValue represents a numeric value with monetary significance. It is a
 * representation that ensures the value is stored separately from the currency
 * code, but when formatted as a string, will be combined into a simpler
 * representation.
 *
 * The format follows a traditionally "Ticker" style format where the Currency
 * Code prefixes the amount with a non-breaking space in between.
 *
 * There is no "official" standard for this format, but it is common in the
 * financial industry.  There are countries that reverse this order, and if
 * we need to handle user input, this would be valuable as well.
 */
export default class MonetaryValue {
  constructor(
    public readonly currency: CurrencyCode,
    public readonly value: bigint,
  ) {
    this.currency = currency;
    this.value = value;
  }

  static USD(value: bigint): MonetaryValue {
    return new MonetaryValue(USD, BigInt(value));
  }
  static ETH(value: bigint): MonetaryValue {
    return new MonetaryValue(ETH, BigInt(value));
  }
  static ESP(value: bigint): MonetaryValue {
    return new MonetaryValue(ESP, BigInt(value));
  }
  static JPY(value: bigint): MonetaryValue {
    return new MonetaryValue(JPY, BigInt(value));
  }
  static BTC(value: bigint): MonetaryValue {
    return new MonetaryValue(BTC, BigInt(value));
  }

  toString() {
    return monetaryValueCodec.encode(this);
  }

  toJSON() {
    return monetaryValueCodec.encode(this);
  }
}

function isPotentialDecimalPoint(input: string): boolean {
  return input === '.' || input === ',' || input === ' ';
}

function lastIndexOf(s: string, pred: (a: string) => boolean): number {
  let lastIndex: number = -1;
  const l = s.length;
  for (let i = 0; i < l; i++) {
    if (pred(s[i])) {
      lastIndex = i;
    }
  }

  return lastIndex;
}

export class MonetaryValueDecoder implements Converter<unknown, MonetaryValue> {
  parseCurrencyCode(currencyCodeString: string): CurrencyCode {
    const currencyCode = currencyCodeCodec.decode(currencyCodeString);

    return currencyCode;
  }

  parseValue(currencyCode: CurrencyCode, amountString: string): bigint {
    let sign = 1n;
    if (amountString[0] === '-') {
      sign = -1n;
      amountString = amountString.substring(1);
    }
    const decimalPointIndex = lastIndexOf(
      amountString,
      isPotentialDecimalPoint,
    );

    if (decimalPointIndex === -1) {
      // No decimal point, assume that this is a whole dollar amount.
      const value =
        BigInt(amountString.replace(/\D/g, '')) *
        currencyCode.significantDigitsMultiplier;
      return sign * value;
    }

    // We have a decimal point, and potentially a fractional amount.
    const wholeString = amountString
      .substring(0, decimalPointIndex)
      .replace(/\D/g, '');
    const fractionalString = amountString
      .substring(decimalPointIndex + 1)
      .replace(/\D/g, '');

    const wholeNumber =
      BigInt(wholeString) * currencyCode.significantDigitsMultiplier;
    const fractionalNumber =
      BigInt(fractionalString) *
      10n ** BigInt(currencyCode.significantDigits - fractionalString.length);

    return sign * (wholeNumber + fractionalNumber);
  }

  public convert(input: unknown): MonetaryValue {
    if (typeof input !== 'string') {
      throw new InvalidInputError('MonetaryValueDecoder: expected string');
    }

    // Should have a non-breaking space within the string.
    const nbspOffset = input.indexOf('\u00A0');
    if (nbspOffset <= -1) {
      throw new InvalidInputError(
        'MonetaryValueDecoder: missing non-breaking space',
      );
    }

    const left = input.substring(0, nbspOffset);
    const right = input.substring(nbspOffset + 1);
    // Which side is the currency code, and which side is the value?

    if (/^-?[\d .,]+$/.test(left)) {
      // Amount is on the left
      const currencyCode = this.parseCurrencyCode(right);
      return new MonetaryValue(
        currencyCode,
        this.parseValue(currencyCode, left),
      );
    }

    const currencyCode = this.parseCurrencyCode(left);
    return new MonetaryValue(
      currencyCode,
      this.parseValue(currencyCode, right),
    );
  }
}

export class MonetaryValueEncoder implements Converter<MonetaryValue, string> {
  public convert(input: MonetaryValue): string {
    // Is it a negative value?
    const sign = input.value < 0n ? '-' : '';
    const value = input.value < 0n ? -input.value : input.value;
    const fractions = value % input.currency.significantDigitsMultiplier;
    const units = value / input.currency.significantDigitsMultiplier;

    const unitsString = String(units);
    const fractionalString = String(fractions);
    if (/^0+$/.test(fractionalString)) {
      return `${currencyCodeCodec.encode(input.currency)}\u00A0${sign}${unitsString}`;
    }

    return `${currencyCodeCodec.encode(input.currency)}\u00A0${sign}${units}.${String(fractions).padStart(input.currency.significantDigits, '0')}`;
  }
}

export class MonetaryValueCodec extends TypeCheckingCodec<
  MonetaryValue,
  string
> {
  readonly decoder = new MonetaryValueDecoder();
  readonly encoder = new MonetaryValueEncoder();
}

export const monetaryValueCodec = new MonetaryValueCodec();
export const monetaryValueArrayCodec = new ArrayCodec(
  new ArrayDecoder(monetaryValueCodec),
  new ArrayEncoder(monetaryValueCodec),
);
