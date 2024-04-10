import React, { createContext, useContext } from 'react';
import { CurrentLocale } from './LocaleProvider';

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
