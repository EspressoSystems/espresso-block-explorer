import { default as React } from 'react';
/**
 * createDefaultDateTimeFormatters will create the desired DateTime Formatters
 * that can be accessed within the application.
 */
declare function createDefaultDateTimeFormatters(locale: string): {
    default: Intl.DateTimeFormat;
    friendly: Intl.DateTimeFormat;
    utcFullDateTime: Intl.DateTimeFormat;
    time: Intl.DateTimeFormat;
    hours: Intl.NumberFormat;
    minutes: Intl.NumberFormat;
    seconds: Intl.NumberFormat;
    relative: Intl.RelativeTimeFormat;
    numDays: Intl.NumberFormat;
    numHours: Intl.NumberFormat;
    numMinutes: Intl.NumberFormat;
};
/**
 * CurrentDateTimeFormatters represents the Context of the
 * CurrentDateTimeFormatters that will be accessible by other components
 * within the application.
 */
declare const CurrentDateTimeFormatters: React.Context<{
    default: Intl.DateTimeFormat;
    friendly: Intl.DateTimeFormat;
    utcFullDateTime: Intl.DateTimeFormat;
    time: Intl.DateTimeFormat;
    hours: Intl.NumberFormat;
    minutes: Intl.NumberFormat;
    seconds: Intl.NumberFormat;
    relative: Intl.RelativeTimeFormat;
    numDays: Intl.NumberFormat;
    numHours: Intl.NumberFormat;
    numMinutes: Intl.NumberFormat;
}>;
export { CurrentDateTimeFormatters };
export interface ProvideDateTimeFormatterProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideDerivedDateTimeFormatters will provide the default DateTimeFormatters
 * derived from the subscribed CurrentLocale context.
 */
export declare const ProvideDerivedDateTimeFormatters: React.FC<ProvideDateTimeFormatterProps>;
export interface OverrideDateTimeFormattersProps {
    formatters: ReturnType<typeof createDefaultDateTimeFormatters>;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * OverrideDateTimeFormatters allows the user to override the default
 * DateTimeFormatters for descendants within the App component tree.
 */
export declare const OverrideDateTimeFormatters: React.FC<OverrideDateTimeFormattersProps>;
