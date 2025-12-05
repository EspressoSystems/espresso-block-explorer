/**
 * TransactionPerSecondNumberFormat is a custom number formatter that will
 * format a number as a quantity of transactions per second.
 *
 * It attempts to do this by operating on the assumption that the compound
 * of another number formatter will have the same unit format as the desired
 * unit format.  At which point we **should** be able to replace that single
 * unit with `Tx`.
 */
export default class TransactionPerSecondNumberFormat implements Intl.NumberFormat {
    private compoundPerSecondFormatter;
    private unitFormatter;
    resolvedOptions(): Intl.ResolvedNumberFormatOptions;
    constructor(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions | undefined);
    private findUnitInFormatParts;
    private replaceUnitInFormatParts;
    private extractValue;
    formatToParts(number?: number | bigint | Intl.StringNumericLiteral | undefined): Intl.NumberFormatPart[];
    formatRangeToParts(start: number | bigint, end: number | bigint): Intl.NumberRangeFormatPart[];
    format(number: number | bigint | Intl.StringNumericLiteral): string;
    formatRange(start: number | bigint, end: number | bigint): string;
}
