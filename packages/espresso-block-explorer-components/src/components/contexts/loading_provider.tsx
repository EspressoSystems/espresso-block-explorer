import React, { createContext } from 'react';

const LoadingContext = createContext(false);
export { LoadingContext };

export interface SetLoadingProps {
  loading: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export const SetLoading: React.FC<SetLoadingProps> = (props) => (
  <LoadingContext.Provider value={props.loading}>
    {props.children}
  </LoadingContext.Provider>
);
