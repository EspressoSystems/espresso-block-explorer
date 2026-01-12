import React, { createContext } from 'react';

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
const CurrentLocale = createContext(
  typeof window === 'undefined' || !navigator ? 'en-US' : navigator.language,
);
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
export const OverrideLocale: React.FC<ProvideLocaleProps> = (props) => (
  <CurrentLocale.Provider value={props.locale}>
    {props.children}
  </CurrentLocale.Provider>
);

/**
 * ProvideNavigatorLanguage is a [FunctionalComponent] that will provide the
 * locale retrieved from the `navigator.language` value.
 */
export const ProvideNavigatorLanguage: React.FC<
  Omit<ProvideLocaleProps, 'locale'>
> = (props) => {
  if (typeof window === 'undefined' || !navigator) {
    return props.children;
  }

  return (
    <CurrentLocale.Provider value={navigator.language}>
      {props.children}
    </CurrentLocale.Provider>
  );
};
