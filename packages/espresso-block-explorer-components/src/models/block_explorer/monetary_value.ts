import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import { bigintCodec } from '@/convert/codec/bigint';
import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidInputError from '@/errors/InvalidInputError';
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

  /**
   * toString returns a string representation of the MonetaryValue for
   * convenience.
   *
   * @see {toISOString} for more details on the format being utilized for this
   * method call.
   */
  toString() {
    return iso427MonetaryValueCodec.encode(this);
  }

  /**
   * toISOString returns the ISO 4217 string representation of the
   * MonetaryValue.
   *
   * @see {ISO4217MonetaryValueStringLiteralEncoder} for more details on the
   * format being utilized for this method call.
   */
  toISOString() {
    return this.toString();
  }

  /**
   * toNumericLiteralString returns a string representation of the numeric
   * value of the MonetaryValue, without the currency code.
   *
   * This is primarily useful for the purposes of formatting using the
   * Intl.NumberFormat APIs which support string numeric literals. You
   * can use this without the loss of precision that would occur if you
   * converted the value to a floating point number.
   */
  toNumericLiteralString() {
    return monetaryValueToNumericLiteralStringEncoder.convert(this);
  }

  /**
   * toHexString returns the hexadecimal string representation of the
   * MonetaryValue's value.
   */
  toHexString(): `0x${string}` {
    return bigintCodec.encode(this.value);
  }

  toJSON() {
    return iso427MonetaryValueCodec.encode(this);
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

/**
 * MonetaryValueDecoder is a decoder for decoding a string representation of
 * a MonetaryValue into a MonetaryValue object.
 *
 * The expected value is meant to match that of the format produced by the
 * ISO4217MonetaryValueStringLiteralEncoder.  However, for convenience, we
 * also support the reverse order where the amount precedes the currency
 * code, as well as support for different decimal separators (., space).
 *
 * NOTE: There is no guarantee that this decoder will properly decode all
 * possible string representations of monetary values.
 */
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

/**
 * MonetaryValueToNumericLiteralStringEncoder is a converter that converts
 * a MonetaryValue into a numeric literal string representation of its value.
 *
 * The actual format of the amount values of the string are taken to be that
 * of a standard US Programming language representation where we do not utilize
 * a group separator, and we use a full-stop (.) as the decimal separator.
 * This is done for convenience and familiarity within programming contexts
 * and to be compatible with the Intl.NumberFormat's format methods where
 * they support a String Numeric Literal.
 */
class MonetaryValueToNumericLiteralStringEncoder implements Converter<
  MonetaryValue,
  `${number}`
> {
  public convert(input: MonetaryValue): `${number}` {
    const sign = input.value < 0n ? '-' : '';
    const value = input.value < 0n ? -input.value : input.value;
    const fractions = value % input.currency.significantDigitsMultiplier;
    const units = value / input.currency.significantDigitsMultiplier;

    const unitsString = String(units);
    const fractionalString = String(fractions);
    if (/^0+$/.test(fractionalString)) {
      return `${sign}${unitsString}` as `${number}`;
    }

    return `${sign}${units}.${String(fractions).padStart(input.currency.significantDigits, '0')}` as `${number}`;
  }
}

const monetaryValueToNumericLiteralStringEncoder =
  new MonetaryValueToNumericLiteralStringEncoder();

/**
 * ISO4217MonetaryValueStringLiteralEncoder is a codec for MonetaryValue
 * objects to represent them in an ISO string format.  The format utilized here
 * is described in the wikipedia article for ISO 4217 in a section entitled
 * Code position in amount formatting:
 * https://en.wikipedia.org/wiki/ISO_4217#Code_position_in_amount_formatting (2025-12-03)
 *
 * The article makes reference to an international standard and guideline
 * made by the European Union In its Interinstitutional Style Guide (2008),
 * section 7.3.3 Rules for expressing monetary units:
 * https://style-guide.europa.eu/en/content/-/isg/topic?identifier=7.3.3-rules-for-expressing-monetary-units (2025-12-03)
 *
 * The format is described as follows:
 * "When a monetary unit is accompanied by an amount, use the ISO code 'EUR'
 * followed by a hard space and the amount in figures (compulsory in all legal
 * texts)"
 *
 * NOTE: this Interinstutional Style Guide applies specifically to the Euro
 * currency, but we are extending its usage here to all currencies for
 * consistency within our application.
 *
 * @see {MonetaryValueToNumericLiteralStringEncoder} for more details on the
 * formatting of the numeric literal string portion.
 */
export class ISO4217MonetaryValueStringLiteralEncoder implements Converter<
  MonetaryValue,
  `${string}\u00A0${number}`
> {
  public convert(input: MonetaryValue): `${string}\u00A0${number}` {
    assertInstanceOf(input, MonetaryValue);

    const numericStringLiteral =
      monetaryValueToNumericLiteralStringEncoder.convert(input);
    return `${currencyCodeCodec.encode(input.currency)}\u00A0${numericStringLiteral}`;
  }
}

/**
 * ISO4217MonetaryValueCodec is a codec for encoding and decoding MonetaryValue
 * objects to and from their ISO 4217 string representation.
 *
 * @see {ISO4217MonetaryValueStringLiteralEncoder} for specific details
 * on the encoding format.
 */
export class ISO4217MonetaryValueCodec extends TypeCheckingCodec<
  MonetaryValue,
  `${string}\u00A0${number}`
> {
  readonly decoder = new MonetaryValueDecoder();
  readonly encoder = new ISO4217MonetaryValueStringLiteralEncoder();
}

export const iso427MonetaryValueCodec = new ISO4217MonetaryValueCodec();
export const monetaryValueArrayCodec = new ArrayCodec(
  new ArrayDecoder(iso427MonetaryValueCodec),
  new ArrayEncoder(iso427MonetaryValueCodec),
);
