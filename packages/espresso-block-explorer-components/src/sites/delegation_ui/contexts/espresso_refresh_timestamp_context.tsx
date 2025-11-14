import React from 'react';

/**
 * EspressoRefreshTimestampContext defines a React Context for the current
 * Espresso refresh timestamp.
 *
 * This context governs when data retrieved from the Espresso network.
 */
export const EspressoRefreshTimestampContext = React.createContext<Date>(
  new Date(),
);

/**
 * SetEspressoRefreshTimestampContext defines a React Context for updating
 * the current Espresso refresh timestamp.
 */
export const SetEspressoRefreshTimestampContext = React.createContext<
  React.Dispatch<React.SetStateAction<Date>>
>(() => {});

/**
 * ProvideEspressoRefreshTimestampContext is a React Component that provides
 * the EspressoRefreshTimestampContext and SetEspressoRefreshTimestampContext
 * to its children.
 */
export const ProvideEspressoRefreshTimestampContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [timestamp, setTimestamp] = React.useState(new Date());

  return (
    <EspressoRefreshTimestampContext.Provider value={timestamp}>
      <SetEspressoRefreshTimestampContext.Provider value={setTimestamp}>
        {children}
      </SetEspressoRefreshTimestampContext.Provider>
    </EspressoRefreshTimestampContext.Provider>
  );
};
