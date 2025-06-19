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
        Number(number) / Number(peta),
      );
    }

    if (number >= giga) {
      return this.gigabytesFormatter.formatToParts(
        Number(number) / Number(giga),
      );
    }

    if (number >= mega) {
      return this.megabytesFormatter.formatToParts(
        Number(number) / Number(mega),
      );
    }

    if (number >= kilo) {
      return this.kilobytesFormatter.formatToParts(
        Number(number) / Number(kilo),
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

  formatToParts(
    number?: number | bigint | Intl.StringNumericLiteral | undefined,
  ): Intl.NumberFormatPart[] {
    if (typeof number === 'number') {
      return this.formatNumberToParts(number);
    }

    if (typeof number === 'bigint') {
      return this.formatBigintToParts(number);
    }

    if (typeof number === 'string') {
      return this.formatNumberToParts(Number(number));
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
        Number(start) / Number(peta),
        Number(end) / Number(peta),
      );
    }
    if (start >= giga || end >= giga) {
      return this.gigabytesFormatter.formatRangeToParts(
        Number(start) / Number(giga),
        Number(end) / Number(giga),
      );
    }

    if (start >= mega || end >= mega) {
      return this.megabytesFormatter.formatRangeToParts(
        Number(start) / Number(mega),
        Number(end) / Number(mega),
      );
    }

    if (start >= kilo || end >= kilo) {
      return this.kilobytesFormatter.formatRangeToParts(
        Number(start) / Number(kilo),
        Number(end) / Number(kilo),
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
    start: number | bigint | Intl.StringNumericLiteral,
    end: number | bigint | Intl.StringNumericLiteral,
  ): Intl.NumberRangeFormatPart[] {
    if (typeof start === 'number' && typeof end === 'number') {
      return this.formatNumberRangeToParts(start, end);
    }

    if (typeof start === 'bigint' && typeof end === 'bigint') {
      return this.formatBigintRangeToParts(start, end);
    }

    return this.formatNumberRangeToParts(Number(start), Number(end));
  }

  format(number: number | bigint | Intl.StringNumericLiteral): string {
    return this.formatToParts(number).map(this.extractValue).join('');
  }

  formatRange(
    start: number | bigint | Intl.StringNumericLiteral,
    end: number | bigint | Intl.StringNumericLiteral,
  ): string {
    return this.formatRangeToParts(start, end).map(this.extractValue).join('');
  }
}
