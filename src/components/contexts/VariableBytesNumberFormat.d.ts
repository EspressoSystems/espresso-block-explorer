/**
 * VariableBytesNumberFormat is a number formatter hack that attempts to unify
 * byte formatting representation with the "correct" SI unit prefix stepping.
 * This is necessary as the current default implementation of the NumberFormat
 * doesn't actually format using SI Prefixes, but rather abbreviations for
 * number of "thousands".
 *
 * For more detail please refer to the following:
 * https://stackoverflow.com/questions/77215632/why-intl-numberformat-formats-1000000000-bytes-as-1bb-instead-of-1gb
 */
export default class VariableBytesNumberFormat implements Intl.NumberFormat {
    private bytesFormatter;
    private kilobytesFormatter;
    private megabytesFormatter;
    private gigabytesFormatter;
    private petabytesFormatter;
    resolvedOptions(): Intl.ResolvedNumberFormatOptions;
    constructor(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions | undefined);
    private extractValue;
    formatTToParts<T = number>(number: T, thresholds: [T, T, T, T]): Intl.NumberFormatPart[];
    formatNumberToParts(number: number): Intl.NumberFormatPart[];
    formatBigintToParts(number: bigint): Intl.NumberFormatPart[];
    formatToParts(number?: number | bigint | undefined): Intl.NumberFormatPart[];
    formatRangeTToParts<T = number>(start: T, end: T, thresholds: [T, T, T, T]): Intl.NumberRangeFormatPart[];
    formatNumberRangeToParts(start: number, end: number): Intl.NumberRangeFormatPart[];
    formatBigintRangeToParts(start: bigint, end: bigint): Intl.NumberRangeFormatPart[];
    formatRangeToParts(start: number | bigint, end: number | bigint): Intl.NumberRangeFormatPart[];
    format(number?: number | bigint | undefined): string;
    formatRange(start: number | bigint, end: number | bigint): string;
}
