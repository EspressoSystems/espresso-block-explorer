import { mapIterable } from '@/functional/functional';

/**
 * CustomCurrencyCodeNumberFormat is a number formatter for currencies that
 * specifically allows for the usages of a Custom Currency Code which does
 * not conform to ISO 4217 standards.
 *
 * This is useful for formatting cryptocurrencies or tokens that do not
 * have an official ISO 4217 currency code, or for displaying currency
 * codes whose codes exceed the three-character limit imposed by
 * ISO 4217.
 */
export default class CustomCurrencyCodeNumberFormat
  implements Intl.NumberFormat
{
  private currencyFormatter: Intl.NumberFormat;
  private currency: string;

  resolvedOptions(): Intl.ResolvedNumberFormatOptions {
    return {
      ...this.currencyFormatter.resolvedOptions(),
    };
  }

  constructor(
    locales?: Intl.LocalesArgument,
    options?: Intl.NumberFormatOptions | undefined,
  ) {
    this.currencyFormatter = new Intl.NumberFormat(locales, {
      ...(options ?? {}),
      style: 'currency',
      currency: 'XXX',
    });
    this.currency = options?.currency ?? 'XXX';
  }

  formatToParts(
    value?: number | bigint | Intl.StringNumericLiteral,
  ): Intl.NumberFormatPart[] {
    return Array.from(
      mapIterable(
        this.currencyFormatter.formatToParts(
          value as number | bigint | undefined,
        ),
        (part) => {
          if (part.type !== 'currency') {
            return part;
          }

          return {
            ...part,
            value: this.currency,
          };
        },
      ),
    );
  }

  format(value: number | bigint | Intl.StringNumericLiteral): string {
    return Array.from(
      mapIterable(this.formatToParts(value), (part) => part.value),
    ).join('');
  }

  formatRangeToParts(
    start: number | bigint | Intl.StringNumericLiteral,
    end: number | bigint | Intl.StringNumericLiteral,
  ): Intl.NumberRangeFormatPart[] {
    return Array.from(
      mapIterable(
        this.currencyFormatter.formatRangeToParts(start, end),
        (part) => {
          if (part.type !== 'currency') {
            return part;
          }

          return {
            ...part,
            value: this.currency,
          };
        },
      ),
    );
  }

  formatRange(
    start: number | bigint | Intl.StringNumericLiteral,
    end: number | bigint | Intl.StringNumericLiteral,
  ): string {
    return Array.from(
      mapIterable(this.formatRangeToParts(start, end), (part) => part.value),
    ).join('');
  }
}
