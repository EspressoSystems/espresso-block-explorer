import React, { createContext, useContext } from 'react';
import { CurrentLocale } from './LocaleProvider';

/**
 * TransactionPerSecondNumberFormat is a custom number formatter that will
 * format a number as a quantity of transactions per second.
 *
 * It attempts to do this by operating on the assumption that the compound
 * of another number formatter will have the same unit format as the desired
 * unit format.  At which point we **should** be able to replace that single
 * unit with `Tx`.
 */
class TransactionPerSecondNumberFormat implements Intl.NumberFormat {
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

  formatToParts(number?: number | bigint | undefined): Intl.NumberFormatPart[] {
    const compoundParts = this.compoundPerSecondFormatter.formatToParts(number);
    const unitParts = this.unitFormatter.formatToParts(number);

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

  format(number?: number | bigint | undefined): string {
    return this.formatToParts(number).map(this.extractValue).join('');
  }

  formatRange(start: number | bigint, end: number | bigint): string {
    return this.formatRangeToParts(start, end).map(this.extractValue).join('');
  }
}

/**
 * createDefaultNumberFormatters will create the default Number formatting
 * data structures required by other parts of the application.
 *
 * The primary reason to return multiple number formats is to allow us the
 * ability to have different number formats for different reasons.  For example
 * perhaps we may want a formatter that displays a different range of
 * significant digits than the default.  We should name these formatters
 * so that they can easily stand out.
 *
 * @param locale the current language to create the default number formatters
 *   for.
 */
function createDefaultNumberFormatters(locale: string) {
  return {
    default: new Intl.NumberFormat(locale),
    bytes: new Intl.NumberFormat(locale, {
      style: 'unit',
      unit: 'byte',
      notation: 'standard',
      unitDisplay: 'long',
    }),
    variableBytes: new Intl.NumberFormat(locale, {
      style: 'unit',
      unit: 'byte',
      notation: 'compact',
      unitDisplay: 'narrow',
      maximumFractionDigits: 2,
    }),
    transactionsPerSecond: new TransactionPerSecondNumberFormat(locale, {
      maximumFractionDigits: 2,
    }) as unknown as Intl.NumberFormat,

    wei: new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'WEI',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }),
    gwei: new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'XXX',
      minimumFractionDigits: 2,
      maximumSignificantDigits: 9,
      maximumFractionDigits: 9,
    }),

    USD: new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }),
    JPY: new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'JPY',
      maximumFractionDigits: 0,
    }),
    ETH: new Intl.NumberFormat(locale, {
      style: 'currency',
      currencyDisplay: 'code',
      currency: 'ETH',
      notation: 'standard',
      maximumSignificantDigits: 18,
      minimumFractionDigits: 2,
      maximumFractionDigits: 18,
    }),
    ESP: new Intl.NumberFormat(locale, {
      style: 'currency',
      currencyDisplay: 'code',
      currency: 'ESP',
      notation: 'standard',
      maximumSignificantDigits: 18,
      minimumFractionDigits: 2,
      maximumFractionDigits: 18,
    }),
    BTC: new Intl.NumberFormat(locale, {
      style: 'currency',
      currencyDisplay: 'code',
      currency: 'XBT',
      notation: 'standard',
      maximumSignificantDigits: 8,
      minimumFractionDigits: 2,
      maximumFractionDigits: 8,
    }),
  };
}

/**
 * CurrentNumberFormatters is the current context of number formatters.  It
 * defaults for the `createDefaultNumberFormatters` for the given `locale`
 * provided by `navigator.language`.
 */
const CurrentNumberFormatters = createContext(
  createDefaultNumberFormatters(
    typeof window === 'undefined' || !navigator ? 'en-US' : navigator.language,
  ),
);
export { CurrentNumberFormatters };

export interface ProvideCurrencyFormatterProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideDerivedNumberFormatters is a component that will create the
 * default number formatters for the CurrentLocale context that is retrieved
 * by this component.
 */
export const ProvideDerivedNumberFormatters: React.FC<
  ProvideCurrencyFormatterProps
> = (props) => {
  const locale = useContext(CurrentLocale);

  return (
    <CurrentNumberFormatters.Provider
      value={createDefaultNumberFormatters(locale)}
    >
      {props.children}
    </CurrentNumberFormatters.Provider>
  );
};

export interface OverrideNumberFormatterProps {
  formatters: ReturnType<typeof createDefaultNumberFormatters>;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * OverrideNumberFormatters is a helpful widget that allows anyone to replace
 * the `CurrentNumberFormatters` for the descendent components below this one
 * in the Component tree.
 * @param props This needs children and the `formatters` that adheres to the
 *   expected definition.
 */
export const OverrideNumberFormatters: React.FC<
  OverrideNumberFormatterProps
> = (props) => (
  <CurrentNumberFormatters.Provider value={props.formatters}>
    {props.children}
  </CurrentNumberFormatters.Provider>
);
