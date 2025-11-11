import React from 'react';

/**
 * L1RefreshTimestampContext defines a React Context for the current
 * L1 refresh timestamp.
 *
 * This context governs when data retrieved from the L1 and Smart Contracts
 * should be refreshed.
 */
export const L1RefreshTimestampContext = React.createContext<Date>(new Date());

/**
 * SetL1RefreshTimestampContext defines a React Context for updating
 * the current L1 refresh timestamp.
 */
export const SetL1RefreshTimestampContext = React.createContext<
  React.Dispatch<React.SetStateAction<Date>>
>(() => {});

/**
 * ProvideL1RefreshTimestampContext is a React Component that provides
 * the L1RefreshTimestampContext and SetL1RefreshTimestampContext to its
 * children.
 */
export const ProvideL1RefreshTimestampContext: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [timestamp, setTimestamp] = React.useState(new Date());

  return (
    <L1RefreshTimestampContext.Provider value={timestamp}>
      <SetL1RefreshTimestampContext.Provider value={setTimestamp}>
        {children}
      </SetL1RefreshTimestampContext.Provider>
    </L1RefreshTimestampContext.Provider>
  );
};
