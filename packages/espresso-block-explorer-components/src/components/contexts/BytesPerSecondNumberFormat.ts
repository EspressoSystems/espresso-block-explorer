/**
 * BytesPerSecondNumberFormat is a custom number formatter that will
 * format a number as a quantity of transactions per second.
 *
 * It attempts to do this by operating on the assumption that the compound
 * of another number formatter will have the same unit format as the desired
 * unit format.  At which point we **should** be able to replace that single
 * unit with `bytes`.
 */
export default class BytesPerSecondNumberFormat implements Intl.NumberFormat {
  private compoundPerSecondFormatter: Intl.NumberFormat;
  private currentUnitFormatter: Intl.NumberFormat;
  private desiredUnitFormatter: Intl.NumberFormat;

  resolvedOptions(): Intl.ResolvedNumberFormatOptions {
    return {
      ...this.compoundPerSecondFormatter.resolvedOptions(),
      unit: 'bytes-per-second',
    };
  }

  constructor(
    locales?: Intl.LocalesArgument,
    options?: Intl.NumberFormatOptions | undefined,
  ) {
    // We need to fake this because we cannot actually get an Intl.NumberFormatter
    // for bytes-per-second or even an arbitrary unit-per-second.

    // So, we'll try to fake this by using an assumption that the per second format
    // has the same unit as the compound format, then we'll just replace that
    // occurrence with our desired format.
    this.compoundPerSecondFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'kilometer-per-second',
    });
    this.currentUnitFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'kilometer',
    });
    this.desiredUnitFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'byte',
      notation: 'standard',
      unitDisplay: 'long',
    });
  }

  private findUnitInFormatParts<P extends Intl.NumberFormatPart>(
    part: P,
  ): part is P & { type: 'unit' } {
    return part.type === 'unit';
  }

  private replaceUnitInFormatParts<P extends Intl.NumberFormatPart>(
    compoundParts: P[],
    currentUnit: undefined | P,
    desiredUnit: undefined | P,
  ): P[] {
    return compoundParts.map((part) => {
      if (part.type !== 'unit' || !currentUnit || !desiredUnit) {
        return part;
      }

      const unitIndex = part.value.indexOf(currentUnit.value);
      if (unitIndex < 0) {
        // Uhh oh... this doesn't format the way we expect it to.
        // let's fall back on a hard-coded value.
        return {
          ...part,
          type: 'unit',
          value: 'bytes/s',
        };
      }

      return {
        ...part,
        type: 'unit',
        value: part.value.replace(currentUnit.value, desiredUnit.value),
      };
    });
  }

  private extractValue<P extends Intl.NumberFormatPart>(part: P): string {
    return part.value;
  }

  formatToParts(number?: number | bigint | undefined): Intl.NumberFormatPart[] {
    const compoundParts = this.compoundPerSecondFormatter.formatToParts(number);
    const currentUnitParts = this.currentUnitFormatter.formatToParts(number);
    const desiredUnitParts = this.desiredUnitFormatter.formatToParts(number);

    return this.replaceUnitInFormatParts(
      compoundParts,
      currentUnitParts.find(this.findUnitInFormatParts),
      desiredUnitParts.find(this.findUnitInFormatParts),
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
    const currentUnitParts = this.currentUnitFormatter.formatRangeToParts(
      start,
      end,
    );
    const desiredUnitParts = this.desiredUnitFormatter.formatRangeToParts(
      start,
      end,
    );
    return this.replaceUnitInFormatParts(
      compoundParts,
      currentUnitParts.find(this.findUnitInFormatParts),
      desiredUnitParts.find(this.findUnitInFormatParts),
    );
  }

  format(number?: number | bigint | undefined): string {
    return this.formatToParts(number).map(this.extractValue).join('');
  }

  formatRange(start: number | bigint, end: number | bigint): string {
    return this.formatRangeToParts(start, end).map(this.extractValue).join('');
  }
}
