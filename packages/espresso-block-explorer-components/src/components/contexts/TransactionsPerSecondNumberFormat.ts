/**
 * TransactionPerSecondNumberFormat is a custom number formatter that will
 * format a number as a quantity of transactions per second.
 *
 * It attempts to do this by operating on the assumption that the compound
 * of another number formatter will have the same unit format as the desired
 * unit format.  At which point we **should** be able to replace that single
 * unit with `Tx`.
 */
export default class TransactionPerSecondNumberFormat
  implements Intl.NumberFormat
{
  private compoundPerSecondFormatter: Intl.NumberFormat;
  private unitFormatter: Intl.NumberFormat;

  resolvedOptions(): Intl.ResolvedNumberFormatOptions {
    return {
      ...this.compoundPerSecondFormatter.resolvedOptions(),
      unit: 'transactions-per-second',
    };
  }

  constructor(
    locales?: Intl.LocalesArgument,
    options?: Intl.NumberFormatOptions | undefined,
  ) {
    // We need to fake this because we cannot actually get an Intl.NumberFormatter
    // for transactions-per-second or even an arbitrary unit-per-second.

    // So, we'll try to fake this by using an assumption that the per second format
    // has the same unit as the compound format, then we'll just replace that
    // occurrence with our desired format.
    this.compoundPerSecondFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'kilometer-per-second',
    });
    this.unitFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'kilometer',
    });
  }

  private findUnitInFormatParts<P extends Intl.NumberFormatPart>(
    part: P,
  ): part is P & { type: 'unit' } {
    return part.type === 'unit';
  }

  private replaceUnitInFormatParts<P extends Intl.NumberFormatPart>(
    compoundParts: P[],
    unitUnit: undefined | P,
  ): P[] {
    return compoundParts.map((part) => {
      if (part.type !== 'unit' || !unitUnit) {
        return part;
      }

      const unitIndex = part.value.indexOf(unitUnit.value);
      if (unitIndex < 0) {
        // Uhh oh... this doesn't format the way we expect it to.
        // let's fall back on a hard-coded value.
        return {
          ...part,
          type: 'unit',
          value: 'Tx/s',
        };
      }

      return {
        ...part,
        type: 'unit',
        value: part.value.replace(unitUnit.value, 'Tx'),
      };
    });
  }

  private extractValue<P extends Intl.NumberFormatPart>(part: P): string {
    return part.value;
  }

  formatToParts(
    number?: number | bigint | Intl.StringNumericLiteral | undefined,
  ): Intl.NumberFormatPart[] {
    const value = typeof number === 'string' ? Number(number) : number;
    const compoundParts = this.compoundPerSecondFormatter.formatToParts(value);
    const unitParts = this.unitFormatter.formatToParts(value);

    return this.replaceUnitInFormatParts(
      compoundParts,
      unitParts.find(this.findUnitInFormatParts),
    );
  }

  formatRangeToParts(
    start: number | bigint,
    end: number | bigint,
  ): Intl.NumberRangeFormatPart[] {
    const compoundParts = this.compoundPerSecondFormatter.formatRangeToParts(
      start,
      end,
    );
    const unitParts = this.unitFormatter.formatRangeToParts(start, end);
    return this.replaceUnitInFormatParts(
      compoundParts,
      unitParts.find(this.findUnitInFormatParts),
    );
  }

  format(number: number | bigint | Intl.StringNumericLiteral): string {
    return this.formatToParts(number).map(this.extractValue).join('');
  }

  formatRange(start: number | bigint, end: number | bigint): string {
    return this.formatRangeToParts(start, end).map(this.extractValue).join('');
  }
}
