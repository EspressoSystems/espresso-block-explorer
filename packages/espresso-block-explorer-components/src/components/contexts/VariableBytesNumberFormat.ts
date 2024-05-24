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
  private bytesFormatter: Intl.NumberFormat;
  private kilobytesFormatter: Intl.NumberFormat;
  private megabytesFormatter: Intl.NumberFormat;
  private gigabytesFormatter: Intl.NumberFormat;
  private petabytesFormatter: Intl.NumberFormat;

  resolvedOptions(): Intl.ResolvedNumberFormatOptions {
    return {
      ...this.bytesFormatter.resolvedOptions(),
    };
  }

  constructor(
    locales?: Intl.LocalesArgument,
    options?: Intl.NumberFormatOptions | undefined,
  ) {
    this.bytesFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'byte',
    });
    this.kilobytesFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'kilobyte',
    });
    this.megabytesFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'megabyte',
    });
    this.gigabytesFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'gigabyte',
    });
    this.petabytesFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'petabyte',
    });
  }

  private extractValue<P extends Intl.NumberFormatPart>(part: P): string {
    return part.value;
  }

  formatTToParts<T = number>(
    number: T,
    thresholds: [T, T, T, T],
  ): Intl.NumberFormatPart[] {
    const [peta, giga, mega, kilo] = thresholds;
    if (number >= peta) {
      return this.petabytesFormatter.formatToParts(
        (number as number) / (peta as number),
      );
    }

    if (number >= giga) {
      return this.gigabytesFormatter.formatToParts(
        (number as number) / (giga as number),
      );
    }

    if (number >= mega) {
      return this.megabytesFormatter.formatToParts(
        (number as number) / (mega as number),
      );
    }

    if (number >= kilo) {
      return this.kilobytesFormatter.formatToParts(
        (number as number) / (kilo as number),
      );
    }

    return this.bytesFormatter.formatToParts(number as number);
  }

  formatNumberToParts(number: number): Intl.NumberFormatPart[] {
    return this.formatTToParts<number>(number, [1e12, 1e9, 1e6, 1e3]);
  }

  formatBigintToParts(number: bigint): Intl.NumberFormatPart[] {
    return this.formatTToParts<bigint>(number, [
      BigInt(1e12),
      BigInt(1e9),
      BigInt(1e6),
      BigInt(1e3),
    ]);
  }

  formatToParts(number?: number | bigint | undefined): Intl.NumberFormatPart[] {
    if (typeof number === 'number') {
      return this.formatNumberToParts(number);
    }

    if (typeof number === 'bigint') {
      return this.formatBigintToParts(number);
    }

    return this.bytesFormatter.formatToParts(number);
  }

  formatRangeTToParts<T = number>(
    start: T,
    end: T,
    thresholds: [T, T, T, T],
  ): Intl.NumberRangeFormatPart[] {
    const [peta, giga, mega, kilo] = thresholds;
    if (start >= peta || end >= peta) {
      return this.petabytesFormatter.formatRangeToParts(
        (start as number) / (peta as number),
        (end as number) / (peta as number),
      );
    }
    if (start >= giga || end >= giga) {
      return this.gigabytesFormatter.formatRangeToParts(
        (start as number) / (giga as number),
        (end as number) / (giga as number),
      );
    }

    if (start >= mega || end >= mega) {
      return this.megabytesFormatter.formatRangeToParts(
        (start as number) / (mega as number),
        (end as number) / (mega as number),
      );
    }

    if (start >= kilo || end >= kilo) {
      return this.kilobytesFormatter.formatRangeToParts(
        (start as number) / (kilo as number),
        (end as number) / (kilo as number),
      );
    }

    return this.bytesFormatter.formatRangeToParts(
      start as number,
      end as number,
    );
  }

  formatNumberRangeToParts(
    start: number,
    end: number,
  ): Intl.NumberRangeFormatPart[] {
    return this.formatRangeTToParts<number>(start, end, [1e12, 1e9, 1e6, 1e3]);
  }

  formatBigintRangeToParts(
    start: bigint,
    end: bigint,
  ): Intl.NumberRangeFormatPart[] {
    return this.formatRangeTToParts<bigint>(start, end, [
      BigInt(1e12),
      BigInt(1e9),
      BigInt(1e6),
      BigInt(1e3),
    ]);
  }

  formatRangeToParts(
    start: number | bigint,
    end: number | bigint,
  ): Intl.NumberRangeFormatPart[] {
    if (typeof start === 'number' && typeof end === 'number') {
      return this.formatNumberRangeToParts(start, end);
    }

    if (typeof start === 'bigint' && typeof end === 'bigint') {
      return this.formatBigintRangeToParts(start, end);
    }

    return this.bytesFormatter.formatRangeToParts(start, end);
  }

  format(number?: number | bigint | undefined): string {
    return this.formatToParts(number).map(this.extractValue).join('');
  }

  formatRange(start: number | bigint, end: number | bigint): string {
    return this.formatRangeToParts(start, end).map(this.extractValue).join('');
  }
}
