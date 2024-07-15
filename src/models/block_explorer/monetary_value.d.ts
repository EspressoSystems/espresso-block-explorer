import { ArrayCodec } from '../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec/convert';
import { CurrencyCode } from './currency_code';

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
    readonly currency: CurrencyCode;
    readonly value: bigint;
    constructor(currency: CurrencyCode, value: bigint);
    static USD(value: bigint): MonetaryValue;
    static ETH(value: bigint): MonetaryValue;
    static ESP(value: bigint): MonetaryValue;
    static JPY(value: bigint): MonetaryValue;
    static BTC(value: bigint): MonetaryValue;
    toString(): string;
    toJSON(): string;
}
export declare class MonetaryValueDecoder implements Converter<unknown, MonetaryValue> {
    parseCurrencyCode(currencyCodeString: string): CurrencyCode;
    parseValue(currencyCode: CurrencyCode, amountString: string): bigint;
    convert(input: unknown): MonetaryValue;
}
export declare class MonetaryValueEncoder implements Converter<MonetaryValue, string> {
    convert(input: MonetaryValue): string;
}
export declare class MonetaryValueCodec extends TypeCheckingCodec<MonetaryValue, string> {
    readonly decoder: MonetaryValueDecoder;
    readonly encoder: MonetaryValueEncoder;
}
export declare const monetaryValueCodec: MonetaryValueCodec;
export declare const monetaryValueArrayCodec: ArrayCodec<MonetaryValue, string>;
