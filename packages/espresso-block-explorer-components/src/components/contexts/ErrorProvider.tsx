import React, { createContext } from 'react';

const ErrorContext = createContext<unknown>(null);
export { ErrorContext };

export interface SetErrorProps {
  error: unknown;
  children: React.ReactNode | React.ReactNode[];
}

export const SetError: React.FC<SetErrorProps> = (props) => (
  <ErrorContext.Provider value={props.error}>
    {props.children}
  </ErrorContext.Provider>
);
