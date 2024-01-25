import React, { createContext } from 'react';

const CurrentNavDrawerStateContext = createContext(false);
export { CurrentNavDrawerStateContext };

const CurrentSetNavDrawerStateContext = createContext<(b: boolean) => void>(
  () => {},
);
export { CurrentSetNavDrawerStateContext };

export function useNavDrawerState() {
  const [isOpen, setIsOpen] = React.useState(false);
  return [isOpen, setIsOpen] as const;
}

export interface ProvideCurrentNavDrawerStateProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ProvideCurrentNavDrawerState: React.FC<
  ProvideCurrentNavDrawerStateProps
> = (props) => {
  const [isOpen, setIsOpen] = useNavDrawerState();

  return (
    <CurrentNavDrawerStateContext.Provider value={isOpen}>
      <CurrentSetNavDrawerStateContext.Provider
        value={(b: boolean) => {
          setIsOpen(b);
        }}
      >
        {props.children}
      </CurrentSetNavDrawerStateContext.Provider>
    </CurrentNavDrawerStateContext.Provider>
  );
};
