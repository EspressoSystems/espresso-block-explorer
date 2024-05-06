import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec/convert';

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
export declare class CurrencyCode<Alpha3 extends string = string, N extends number = number> {
    readonly alpha3Code: Alpha3;
    readonly code: N;
    readonly significantDigits: number;
    readonly significantDigitsMultiplier: bigint;
    constructor(alpha3Code: Alpha3, code: N, significantDigits: number);
    toJSON(): string;
}
export declare const JPY: CurrencyCode<"JPY", 392>;
export declare const GBP: CurrencyCode<"GBP", 826>;
export declare const USD: CurrencyCode<"USD", 840>;
export declare const EUR: CurrencyCode<"EUR", 978>;
export declare const XXX: CurrencyCode<"XXX", 999>;
export declare const ETH: CurrencyCode<"ETH", 1001>;
export declare const BTC: CurrencyCode<"XBT", 1002>;
export declare const ESP: CurrencyCode<"ESP", 10001>;
declare class CurrencyCodeDecoder implements Converter<unknown, CurrencyCode> {
    convert(input: unknown): CurrencyCode;
}
declare class CurrencyCodeEncoder implements Converter<CurrencyCode, string> {
    convert(input: CurrencyCode): string;
}
declare class CurrencyCodeCodec extends TypeCheckingCodec<CurrencyCode, string> {
    readonly decoder: CurrencyCodeDecoder;
    readonly encoder: CurrencyCodeEncoder;
}
export declare const currencyCodeCodec: CurrencyCodeCodec;
export {};
