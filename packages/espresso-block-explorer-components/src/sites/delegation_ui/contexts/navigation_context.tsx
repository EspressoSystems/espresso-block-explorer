import { default as React } from 'react';

/**
 * NavigationContext lets the hosting app navigate between Delegation UI
 * views without a full page load, which keeps the already loaded validator
 * data. When it is null, links fall back to normal browser navigation.
 */
export const NavigationContext = React.createContext<
  null | ((href: string) => void)
>(null);
