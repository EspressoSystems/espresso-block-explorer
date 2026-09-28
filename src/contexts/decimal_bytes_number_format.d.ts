/**
 * DecimalBytesNumberFormat formats a quantity of bytes in the largest decimal
 * unit it reaches -- "512 B", "2.05 kB", "1.5 MB" -- a stepping that Intl's
 * own notations do not provide: compact notation abbreviates thousands ("1B"
 * for a billion bytes) rather than using SI prefixes.
 *
 * Each unit above a byte is formatted by Intl, so it is localized. Intl's
 * short name for the byte itself is the word "byte", though, and its narrow
 * one drops the space ("512B"), so a plain byte count is the localized number
 * followed by the symbol, which is the same in every language.
 *
 * `unitSuffix` extends every unit into a rate, "-per-second" giving "kB/s",
 * with `byteSymbol` supplying the plain byte count's equivalent.
 */
export default class DecimalBytesNumberFormat implements Intl.NumberFormat {
    private readonly byteSymbol;
    private readonly numberFormatter;
    private readonly steps;
    private readonly maximumFractionDigits;
    constructor(locales: Intl.LocalesArgument, options: Intl.NumberFormatOptions | undefined, unitSuffix: string, byteSymbol: string);
    resolvedOptions(): Intl.ResolvedNumberFormatOptions;
    /**
     * stepFor picks the unit to show the given number of bytes in: the largest
     * one it reaches, unless rounding would make it read as 1,000 of that unit
     * -- 999,999 bytes rounds to "1,000 kB" -- in which case the next unit up
     * says it better. Returns null for a plain byte count.
     */
    private stepFor;
    private byteSymbolParts;
    formatToParts(number?: number | bigint | Intl.StringNumericLiteral | undefined): Intl.NumberFormatPart[];
    formatRangeToParts(start: number | bigint | Intl.StringNumericLiteral, end: number | bigint | Intl.StringNumericLiteral): Intl.NumberRangeFormatPart[];
    format(number: number | bigint | Intl.StringNumericLiteral): string;
    formatRange(start: number | bigint | Intl.StringNumericLiteral, end: number | bigint | Intl.StringNumericLiteral): string;
}
