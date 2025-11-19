import React from 'react';

/**
 * OnlyShowTop100Context is a React context that holds a boolean value
 * indicating whether only the top 100 entries should be shown.
 */
export const OnlyShowTop100Context = React.createContext<boolean>(false);

/**
 * SetOnlyShowTop100Context is a React context that holds a setter function
 * to update the boolean value indicating whether only the top 100 entries
 * should be shown.
 */
export const SetOnlyShowTop100Context = React.createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {
  /* no-op */
});

/**
 * ProvideShowTop100Filter is a React component that provides the context
 * for filtering to show only the top 100 entries.
 */
export const ProvideShowTop100Filter: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [onlyShowTop100, setOnlyShowTop100] = React.useState<boolean>(false);

  return (
    <OnlyShowTop100Context.Provider value={onlyShowTop100}>
      <SetOnlyShowTop100Context.Provider value={setOnlyShowTop100}>
        {children}
      </SetOnlyShowTop100Context.Provider>
    </OnlyShowTop100Context.Provider>
  );
};
