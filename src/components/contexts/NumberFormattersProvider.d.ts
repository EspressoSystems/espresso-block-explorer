import { default as React } from 'react';
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
declare function createDefaultNumberFormatters(locale: string): {
    default: Intl.NumberFormat;
    percentage: Intl.NumberFormat;
    bytes: Intl.NumberFormat;
    variableBytes: Intl.NumberFormat;
    transactionsPerSecond: Intl.NumberFormat;
    bytesPerSecond: Intl.NumberFormat;
    wei: Intl.NumberFormat;
    gwei: Intl.NumberFormat;
    USD: Intl.NumberFormat;
    JPY: Intl.NumberFormat;
    EUR: Intl.NumberFormat;
    GBP: Intl.NumberFormat;
    ETHFull: Intl.NumberFormat;
    ETH: Intl.NumberFormat;
    ESPFull: Intl.NumberFormat;
    ESP: Intl.NumberFormat;
    XBTFull: Intl.NumberFormat;
    XBT: Intl.NumberFormat;
};
/**
 * CurrentNumberFormatters is the current context of number formatters.  It
 * defaults for the `createDefaultNumberFormatters` for the given `locale`
 * provided by `navigator.language`.
 */
declare const CurrentNumberFormatters: React.Context<{
    default: Intl.NumberFormat;
    percentage: Intl.NumberFormat;
    bytes: Intl.NumberFormat;
    variableBytes: Intl.NumberFormat;
    transactionsPerSecond: Intl.NumberFormat;
    bytesPerSecond: Intl.NumberFormat;
    wei: Intl.NumberFormat;
    gwei: Intl.NumberFormat;
    USD: Intl.NumberFormat;
    JPY: Intl.NumberFormat;
    EUR: Intl.NumberFormat;
    GBP: Intl.NumberFormat;
    ETHFull: Intl.NumberFormat;
    ETH: Intl.NumberFormat;
    ESPFull: Intl.NumberFormat;
    ESP: Intl.NumberFormat;
    XBTFull: Intl.NumberFormat;
    XBT: Intl.NumberFormat;
}>;
export { CurrentNumberFormatters };
export interface ProvideCurrencyFormatterProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideDerivedNumberFormatters is a component that will create the
 * default number formatters for the CurrentLocale context that is retrieved
 * by this component.
 */
export declare const ProvideDerivedNumberFormatters: React.FC<ProvideCurrencyFormatterProps>;
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
export declare const OverrideNumberFormatters: React.FC<OverrideNumberFormatterProps>;
