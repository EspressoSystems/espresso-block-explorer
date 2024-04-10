import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
} from '../../convert/codec/convert';

/**
 * CurrencyCode is a class that represents a currency code.  Generally speaking
 * it is meant to represents an non-exhaustive list of various currency types
 * that have no overlap.  We use this data to store the relevant currency
 * information needed for representing a currency as accurately as possible.
 *
 * The `alpha3Code` is meant to be a 3 character code that uniquely identifies
 * the currency code in question.  These codes are meant to correspond to the
 * ISO 4217 standard for assigned currencies which predominately describes and
 * identifies Fiat currencies.
 *
 * However, we also have the need to handle and display different Crypto
 * currencies, as well as Token derivatives of those currencies.  As such
 * we extend this definition to just mean any uniquely identifiable currency
 * code.
 *
 * In addition we store a `code` for the currency which is a number that we
 * can use to represent and identify the currency as well.  This is primarily
 * for reference, as the `code` for ISO 4217 currencies is the assigned code
 * for the same currency.
 */
export class CurrencyCode<
  Alpha3 extends string = string,
  N extends number = number,
> {
  public readonly significantDigitsMultiplier: bigint;

  constructor(
    public readonly alpha3Code: Alpha3,
    public readonly code: N,
    public readonly significantDigits: number,
  ) {
    this.alpha3Code = alpha3Code;
    this.code = code;
    this.significantDigits = significantDigits;
    this.significantDigitsMultiplier =
      BigInt(10) ** BigInt(this.significantDigits);
  }

  toJSON() {
    return currencyCodeCodec.encode(this);
  }
}

export const JPY = new CurrencyCode('JPY', 392, 2);
export const GBP = new CurrencyCode('GBP', 826, 2);
export const USD = new CurrencyCode('USD', 840, 2);
export const EUR = new CurrencyCode('EUR', 978, 2);
export const XXX = new CurrencyCode('XXX', 999, 2);

export const ETH = new CurrencyCode('ETH', 1001, 18);
export const BTC = new CurrencyCode('XBT', 1002, 8);

export const ESP = new CurrencyCode('ESP', 10001, 18);

const currencies = [
  // FiatCurrencyStart
  JPY,
  GBP,
  USD,
  EUR,
  XXX,
  // FiatCurrencyEnd

  // CryptoStart
  ETH,
  BTC,
  // CryptoEnd

  // TokenStart
  ESP,
  // TokenEnd
] as const;

const currenciesMap = new Map(
  currencies.map((currency) => [currency.alpha3Code, currency]),
);

class CurrencyCodeDecoder implements Converter<unknown, CurrencyCode> {
  public convert(input: unknown): CurrencyCode {
    if (typeof input !== 'string') {
      throw new InvalidInputError('CurrencyCodeDecoder: expected string');
    }

    if (input === 'BTC') {
      return BTC;
    }

    const currency = currenciesMap.get(
      input as (typeof currencies)[0]['alpha3Code'],
    );

    if (currency === undefined) {
      throw new InvalidInputError(
        `CurrencyCodeDecoder: unknown currency: "${input}"`,
      );
    }

    return currency;
  }
}

class CurrencyCodeEncoder implements Converter<CurrencyCode, string> {
  public convert(input: CurrencyCode): string {
    return input.alpha3Code;
  }
}

class CurrencyCodeCodec extends TypeCheckingCodec<CurrencyCode, string> {
  readonly decoder = new CurrencyCodeDecoder();
  readonly encoder = new CurrencyCodeEncoder();
}

export const currencyCodeCodec = new CurrencyCodeCodec();
