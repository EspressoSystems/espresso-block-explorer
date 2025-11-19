import { TextEditingValue } from '@/components/input/text/types';
import React from 'react';

/**
 * ProvideSearchFilter is a React context that provides the context
 * for filtering using a search term.
 */
export const SearchFilterContext = React.createContext<TextEditingValue>(
  new TextEditingValue(''),
);

/**
 * SetSearchFilterContext is a React context that provides the context
 * for setting the search filter.
 */
export const SetSearchFilterContext = React.createContext<
  React.Dispatch<React.SetStateAction<TextEditingValue>>
>(() => {
  /* no-op */
});

/**
 * ProvideSearchFilter is a React context provider for the search filter input.
 */
export const ProvideSearchFilter: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [searchFilter, setSearchFilter] = React.useState<TextEditingValue>(
    new TextEditingValue(''),
  );

  return (
    <SearchFilterContext.Provider value={searchFilter}>
      <SetSearchFilterContext.Provider value={setSearchFilter}>
        {children}
      </SetSearchFilterContext.Provider>
    </SearchFilterContext.Provider>
  );
};
