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
    /**
     * toString returns a string representation of the MonetaryValue for
     * convenience.
     *
     * @see {toISOString} for more details on the format being utilized for this
     * method call.
     */
    toString(): `${string}\u00A0${number}`;
    /**
     * toISOString returns the ISO 4217 string representation of the
     * MonetaryValue.
     *
     * @see {ISO4217MonetaryValueStringLiteralEncoder} for more details on the
     * format being utilized for this method call.
     */
    toISOString(): `${string}\u00A0${number}`;
    /**
     * toNumericLiteralString returns a string representation of the numeric
     * value of the MonetaryValue, without the currency code.
     *
     * This is primarily useful for the purposes of formatting using the
     * Intl.NumberFormat APIs which support string numeric literals. You
     * can use this without the loss of precision that would occur if you
     * converted the value to a floating point number.
     */
    toNumericLiteralString(): `${number}`;
    /**
     * toHexString returns the hexadecimal string representation of the
     * MonetaryValue's value.
     */
    toHexString(): `0x${string}`;
    toJSON(): `${string}\u00A0${number}`;
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
export declare class MonetaryValueDecoder implements Converter<unknown, MonetaryValue> {
    parseCurrencyCode(currencyCodeString: string): CurrencyCode;
    parseValue(currencyCode: CurrencyCode, amountString: string): bigint;
    convert(input: unknown): MonetaryValue;
}
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
export declare class ISO4217MonetaryValueStringLiteralEncoder implements Converter<MonetaryValue, `${string}\u00A0${number}`> {
    convert(input: MonetaryValue): `${string}\u00A0${number}`;
}
/**
 * ISO4217MonetaryValueCodec is a codec for encoding and decoding MonetaryValue
 * objects to and from their ISO 4217 string representation.
 *
 * @see {ISO4217MonetaryValueStringLiteralEncoder} for specific details
 * on the encoding format.
 */
export declare class ISO4217MonetaryValueCodec extends TypeCheckingCodec<MonetaryValue, `${string}\u00A0${number}`> {
    readonly decoder: MonetaryValueDecoder;
    readonly encoder: ISO4217MonetaryValueStringLiteralEncoder;
}
export declare const iso427MonetaryValueCodec: ISO4217MonetaryValueCodec;
export declare const monetaryValueArrayCodec: ArrayCodec<MonetaryValue, `${string}\u00A0${number}`>;
