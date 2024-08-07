/**
 * BytesPerSecondNumberFormat is a custom number format, that formats bytes per
 * second, with the preset range of SI prefixes.
 *
 * See VariableBytesNumberFormat for a similar implementation.
 */
export default class BytesPerSecondNumberFormat implements Intl.NumberFormat {
    private bytesPerSecondFormatter;
    private kilobytesPerSecondFormatter;
    private megabytesPerSecondFormatter;
    private gigabytesPerSecondFormatter;
    private petabytesPerSecondFormatter;
    resolvedOptions(): Intl.ResolvedNumberFormatOptions;
    constructor(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions | undefined);
    private extractValue;
    formatTToParts<T = number>(number: T, thresholds: [T, T, T, T]): Intl.NumberFormatPart[];
    formatNumberToParts(number: number): Intl.NumberFormatPart[];
    formatBigintToParts(number: bigint): Intl.NumberFormatPart[];
    formatToParts(number?: number | bigint | Intl.StringNumericLiteral | undefined): Intl.NumberFormatPart[];
    formatRangeTToParts<T = number>(start: T, end: T, thresholds: [T, T, T, T]): Intl.NumberRangeFormatPart[];
    formatNumberRangeToParts(start: number, end: number): Intl.NumberRangeFormatPart[];
    formatBigintRangeToParts(start: bigint, end: bigint): Intl.NumberRangeFormatPart[];
    formatRangeToParts(start: number | bigint, end: number | bigint): Intl.NumberRangeFormatPart[];
    format(number: number | bigint | Intl.StringNumericLiteral): string;
    formatRange(start: number | bigint, end: number | bigint): string;
}
