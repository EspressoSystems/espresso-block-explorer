import { default as React } from '../../../../../node_modules/react';

/**
 * LocaleProvider is a Context that provides the current locale that has been
 * determined for the current user.  Other contexts will consume this context
 * and provide more contexts. Almost all of these contexts are determined to
 * be localization and internationalization based.
 *
 * Examples:
 *  Need to provide a number formatter, you'd only want to have to instantiate
 *  a single copy, and then make it available to every consumer within the tree.
 */
declare const CurrentLocale: React.Context<string>;
export { CurrentLocale };
export interface ProvideLocaleProps {
    locale: string;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * OverrideLocale is a [FunctionalComponent] that will provide the given locale
 * to all of the descendant components within the tree.
 * @param props The props of the OverrideLocale widget should contain children
 *   nodes as well as the locale to replace in the sub-tree.
 */
export declare const OverrideLocale: React.FC<ProvideLocaleProps>;
/**
 * ProvideNavigatorLanguage is a [FunctionalComponent] that will provide the
 * locale retrieved from the `navigator.language` value.
 */
export declare const ProvideNavigatorLanguage: React.FC<Omit<ProvideLocaleProps, 'locale'>>;
