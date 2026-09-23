/**
 * The decimal (SI) byte units, largest first: each is 1000 times the next.
 * Sizes are stepped in thousands rather than 1024s so that a rounded size
 * agrees with the exact byte count shown beside it -- 1,500,000 bytes is
 * "1.5 MB", where a binary step would call it "1.43 MB".
 *
 * They stop at gigabytes: blocks run to megabytes, so anything larger reads
 * as a count of gigabytes rather than in a unit no block will ever reach.
 */
const kDecimalByteSteps = [
  { divisor: 1e9, unit: 'gigabyte' },
  { divisor: 1e6, unit: 'megabyte' },
  { divisor: 1e3, unit: 'kilobyte' },
] as const;

interface DecimalByteStep {
  divisor: number;
  formatter: Intl.NumberFormat;
}

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
  private readonly numberFormatter: Intl.NumberFormat;
  private readonly steps: DecimalByteStep[];
  private readonly maximumFractionDigits: number;

  constructor(
    locales: Intl.LocalesArgument,
    options: Intl.NumberFormatOptions | undefined,
    unitSuffix: string,
    private readonly byteSymbol: string,
  ) {
    this.numberFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'decimal',
    });
    this.steps = kDecimalByteSteps.map(({ divisor, unit }) => ({
      divisor,
      formatter: new Intl.NumberFormat(locales, {
        ...(options ?? {}),
        style: 'unit',
        unit: unit + unitSuffix,
      }),
    }));
    this.maximumFractionDigits =
      this.numberFormatter.resolvedOptions().maximumFractionDigits ?? 3;
  }

  resolvedOptions(): Intl.ResolvedNumberFormatOptions {
    return this.numberFormatter.resolvedOptions();
  }

  /**
   * stepFor picks the unit to show the given number of bytes in: the largest
   * one it reaches, unless rounding would make it read as 1,000 of that unit
   * -- 999,999 bytes rounds to "1,000 kB" -- in which case the next unit up
   * says it better. Returns null for a plain byte count.
   */
  private stepFor(bytes: number): DecimalByteStep | null {
    const magnitude = Math.abs(bytes);
    const precision = 10 ** this.maximumFractionDigits;
    // Positions run from the largest unit, at 0, to a plain byte count, at
    // steps.length.
    const divisorAt = (position: number) =>
      position === this.steps.length ? 1 : this.steps[position].divisor;

    const reached = this.steps.findIndex((step) => magnitude >= step.divisor);
    let position = reached === -1 ? this.steps.length : reached;
    const rounded =
      Math.round((magnitude / divisorAt(position)) * precision) / precision;
    if (position > 0 && rounded >= 1000) {
      position -= 1;
    }

    return position === this.steps.length ? null : this.steps[position];
  }

  private byteSymbolParts<P extends { type: string; value: string }>(
    extra: Omit<P, 'type' | 'value'>,
  ): P[] {
    return [
      { ...extra, type: 'literal', value: ' ' } as P,
      { ...extra, type: 'unit', value: this.byteSymbol } as P,
    ];
  }

  formatToParts(
    number?: number | bigint | Intl.StringNumericLiteral | undefined,
  ): Intl.NumberFormatPart[] {
    const bytes = Number(number ?? 0);
    const step = this.stepFor(bytes);
    if (step === null) {
      return [
        ...this.numberFormatter.formatToParts(bytes),
        ...this.byteSymbolParts<Intl.NumberFormatPart>({}),
      ];
    }

    return step.formatter.formatToParts(bytes / step.divisor);
  }

  formatRangeToParts(
    start: number | bigint | Intl.StringNumericLiteral,
    end: number | bigint | Intl.StringNumericLiteral,
  ): Intl.NumberRangeFormatPart[] {
    const [from, to] = [Number(start), Number(end)];
    // Both ends share a unit, so the range reads in whichever one the larger
    // end needs.
    const step = this.stepFor(Math.max(Math.abs(from), Math.abs(to)));
    if (step === null) {
      return [
        ...this.numberFormatter.formatRangeToParts(from, to),
        ...this.byteSymbolParts<Intl.NumberRangeFormatPart>({
          source: 'shared',
        }),
      ];
    }

    return step.formatter.formatRangeToParts(
      from / step.divisor,
      to / step.divisor,
    );
  }

  format(number: number | bigint | Intl.StringNumericLiteral): string {
    return this.formatToParts(number)
      .map((part) => part.value)
      .join('');
  }

  formatRange(
    start: number | bigint | Intl.StringNumericLiteral,
    end: number | bigint | Intl.StringNumericLiteral,
  ): string {
    return this.formatRangeToParts(start, end)
      .map((part) => part.value)
      .join('');
  }
}
