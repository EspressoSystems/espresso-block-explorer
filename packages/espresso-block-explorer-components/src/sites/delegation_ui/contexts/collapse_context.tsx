import React from 'react';

export enum CollapseState {
  collapsed,
  expanded,
}

/**
 * CollapseStateContext provides a React Context that represents the current
 * collapse state of a UI element.
 */
export const CollapseStateContext = React.createContext<CollapseState>(
  CollapseState.collapsed,
);

/**
 * SetCollapseStateContext provides a React Context that represents the setter
 * function to update the current collapse state of a UI element.
 */
export const SetCollapseStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<CollapseState>>
>(() => {});

function useCollapseState(
  initialState: CollapseState = CollapseState.collapsed,
) {
  const [state, setState] = React.useState(initialState);
  return [state, setState] as const;
}

/**
 * ProvideCollapseState is a React Component that defines a collapse state,
 * and provides contexts for reading, and setting it.
 */
export const ProvideCollapseState: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = useCollapseState();

  return (
    <CollapseStateContext.Provider value={state}>
      <SetCollapseStateContext.Provider value={setState}>
        {children}
      </SetCollapseStateContext.Provider>
    </CollapseStateContext.Provider>
  );
};
