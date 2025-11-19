import { lastIterable, takeIterable } from '@/functional/functional';
import {
  SetValidatorSelectionContext,
  ValidatorSelectionContext,
  ValidatorSelectionEnum,
} from '@/sites/delegation_ui/contexts/validator_selection_context';
import React from 'react';

/**
 * StakingModalHistoryContext represents the "stack" of navigation history
 * performed within the staking modal. This allows us to keep a history,
 * and to display the Back button to a state that makes the most sense.
 */
export const StakingModalHistoryContext = React.createContext<
  ValidatorSelectionEnum[]
>([]);

/**
 * StakingModalHistoryControls provides methods to manipulate the navigation
 * history within the staking modal.
 */
export interface StakingModalHistoryControls {
  push: (selection: ValidatorSelectionEnum) => void;
  back: () => void;
  replace: (selection: ValidatorSelectionEnum) => void;
  zero: () => void;

  canGoBack: boolean;
}

/**
 * StakingModalHistoryControlsContext provides methods to manipulate the
 * navigation history within the staking modal.
 */
export const StakingModalHistoryControlsContext =
  React.createContext<StakingModalHistoryControls>({
    push: () => {},
    back: () => {},
    replace: () => {},
    zero: () => {},

    canGoBack: false,
  });

/**
 * useStakingModalHistory hook manages the state of the staking modal's navigation history.
 */
function useStakingModalHistory() {
  return React.useState<ValidatorSelectionEnum[]>([]);
}

/**
 * ProvideStakingHistory is a context provider component that manages the
 * navigation history within the staking modal.
 */
export const ProvideStakingHistory: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const setSelectedValidator = React.useContext(SetValidatorSelectionContext);
  const currentPage = React.useContext(ValidatorSelectionContext);
  const [history, setHistory] = useStakingModalHistory();

  const controls: StakingModalHistoryControls = {
    push: (selection: ValidatorSelectionEnum) => {
      setHistory((prevHistory) => [...prevHistory, currentPage]);
      setSelectedValidator(selection);
    },

    back: () => {
      const lastPage = lastIterable(history);
      setHistory((prevHistory) =>
        Array.from(takeIterable(prevHistory, prevHistory.length - 1)),
      );
      setSelectedValidator(lastPage);
    },

    replace: (selection: ValidatorSelectionEnum) => {
      setSelectedValidator(selection);
    },

    zero: () => {
      setHistory([]);
    },

    canGoBack: history.length > 0,
  };

  return (
    <StakingModalHistoryContext.Provider value={history}>
      <StakingModalHistoryControlsContext.Provider value={controls}>
        {children}
      </StakingModalHistoryControlsContext.Provider>
    </StakingModalHistoryContext.Provider>
  );
};
