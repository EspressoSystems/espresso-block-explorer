/**
 * CustomCurrencyCodeNumberFormat is a number formatter for currencies that
 * specifically allows for the usages of a Custom Currency Code which does
 * not conform to ISO 4217 standards.
 *
 * This is useful for formatting cryptocurrencies or tokens that do not
 * have an official ISO 4217 currency code, or for displaying currency
 * codes whose codes exceed the three-character limit imposed by
 * ISO 4217.
 */
export default class CustomCurrencyCodeNumberFormat implements Intl.NumberFormat {
    private currencyFormatter;
    private currency;
    resolvedOptions(): Intl.ResolvedNumberFormatOptions;
    constructor(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions | undefined);
    formatToParts(value?: number | bigint | Intl.StringNumericLiteral): Intl.NumberFormatPart[];
    format(value: number | bigint | Intl.StringNumericLiteral): string;
    formatRangeToParts(start: number | bigint | Intl.StringNumericLiteral, end: number | bigint | Intl.StringNumericLiteral): Intl.NumberRangeFormatPart[];
    formatRange(start: number | bigint | Intl.StringNumericLiteral, end: number | bigint | Intl.StringNumericLiteral): string;
}
