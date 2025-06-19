/**
 * BytesPerSecondNumberFormat is a custom number format, that formats bytes per
 * second, with the preset range of SI prefixes.
 *
 * See VariableBytesNumberFormat for a similar implementation.
 */
export default class BytesPerSecondNumberFormat implements Intl.NumberFormat {
  private bytesPerSecondFormatter: Intl.NumberFormat;
  private kilobytesPerSecondFormatter: Intl.NumberFormat;
  private megabytesPerSecondFormatter: Intl.NumberFormat;
  private gigabytesPerSecondFormatter: Intl.NumberFormat;
  private petabytesPerSecondFormatter: Intl.NumberFormat;

  resolvedOptions(): Intl.ResolvedNumberFormatOptions {
    return this.bytesPerSecondFormatter.resolvedOptions();
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
    this.bytesPerSecondFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'byte-per-second',
    });
    this.kilobytesPerSecondFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'kilobyte-per-second',
    });
    this.megabytesPerSecondFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'megabyte-per-second',
    });
    this.gigabytesPerSecondFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'gigabyte-per-second',
    });
    this.petabytesPerSecondFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'unit',
      unit: 'petabyte-per-second',
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
      return this.petabytesPerSecondFormatter.formatToParts(
        Number(number) / Number(peta),
      );
    }

    if (number >= giga) {
      return this.gigabytesPerSecondFormatter.formatToParts(
        Number(number) / Number(giga),
      );
    }

    if (number >= mega) {
      return this.megabytesPerSecondFormatter.formatToParts(
        Number(number) / Number(mega),
      );
    }

    if (number >= kilo) {
      return this.kilobytesPerSecondFormatter.formatToParts(
        Number(number) / Number(kilo),
      );
    }

    return this.bytesPerSecondFormatter.formatToParts(number as number);
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

    return this.bytesPerSecondFormatter.formatToParts(number);
  }

  formatRangeTToParts<T = number>(
    start: T,
    end: T,
    thresholds: [T, T, T, T],
  ): Intl.NumberRangeFormatPart[] {
    const [peta, giga, mega, kilo] = thresholds;
    if (start >= peta || end >= peta) {
      return this.petabytesPerSecondFormatter.formatRangeToParts(
        Number(start) / Number(peta),
        Number(end) / Number(peta),
      );
    }
    if (start >= giga || end >= giga) {
      return this.gigabytesPerSecondFormatter.formatRangeToParts(
        Number(start) / Number(giga),
        Number(end) / Number(giga),
      );
    }

    if (start >= mega || end >= mega) {
      return this.megabytesPerSecondFormatter.formatRangeToParts(
        Number(start) / Number(mega),
        Number(end) / Number(mega),
      );
    }

    if (start >= kilo || end >= kilo) {
      return this.kilobytesPerSecondFormatter.formatRangeToParts(
        Number(start) / Number(kilo),
        Number(end) / Number(kilo),
      );
    }

    return this.bytesPerSecondFormatter.formatRangeToParts(
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

  formatRange(start: number | bigint, end: number | bigint): string {
    return this.formatRangeToParts(start, end).map(this.extractValue).join('');
  }
}
