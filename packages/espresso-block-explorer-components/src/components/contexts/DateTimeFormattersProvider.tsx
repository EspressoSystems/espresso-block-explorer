import React, { createContext, useContext } from 'react';
import { CurrentLocale } from './LocaleProvider';

/**
 * createDefaultDateTimeFormatters will create the desired DateTime Formatters
 * that can be accessed within the application.
 */
function createDefaultDateTimeFormatters(locale: string) {
  return {
    default: new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    }),
    utcFullDateTime: new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      timeZone: 'UTC',
    }),
    time: new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    }),

    seconds: new Intl.NumberFormat(locale, {
      style: 'unit',
      unit: 'second',
      unitDisplay: 'narrow',
      maximumFractionDigits: 2,
    }),

    relative: new Intl.RelativeTimeFormat(locale, {
      style: 'narrow',
      numeric: 'always',
    }),

    numDays: new Intl.NumberFormat(locale, {
      style: 'unit',
      unit: 'day',
      unitDisplay: 'long',
    }),
    numHours: new Intl.NumberFormat(locale, {
      style: 'unit',
      unit: 'hour',
      unitDisplay: 'long',
    }),
    numMinutes: new Intl.NumberFormat(locale, {
      style: 'unit',
      unit: 'minute',
      unitDisplay: 'long',
    }),
  };
}

/**
 * CurrentDateTimeFormatters represents the Context of the
 * CurrentDateTimeFormatters that will be accessible by other components
 * within the application.
 */
const CurrentDateTimeFormatters = createContext(
  createDefaultDateTimeFormatters(
    typeof window === 'undefined' || !navigator ? 'en-US' : navigator.language,
  ),
);
export { CurrentDateTimeFormatters };

export interface ProvideDateTimeFormatterProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideDerivedDateTimeFormatters will provide the default DateTimeFormatters
 * derived from the subscribed CurrentLocale context.
 */
export const ProvideDerivedDateTimeFormatters: React.FC<
  ProvideDateTimeFormatterProps
> = (props) => {
  const locale = useContext(CurrentLocale);

  return (
    <CurrentDateTimeFormatters.Provider
      value={createDefaultDateTimeFormatters(locale)}
    >
      {props.children}
    </CurrentDateTimeFormatters.Provider>
  );
};

export interface OverrideDateTimeFormattersProps {
  formatters: ReturnType<typeof createDefaultDateTimeFormatters>;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * OverrideDateTimeFormatters allows the user to override the default
 * DateTimeFormatters for descendants within the App component tree.
 */
export const OverrideDateTimeFormatters: React.FC<
  OverrideDateTimeFormattersProps
> = (props) => (
  <CurrentDateTimeFormatters.Provider value={props.formatters}>
    {props.children}
  </CurrentDateTimeFormatters.Provider>
);
