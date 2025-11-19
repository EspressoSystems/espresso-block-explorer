import { ModalContext } from '@/sites/delegation_ui/contexts/modal_context';
import {
  NoValidatorSelected,
  SetValidatorSelectionContext,
} from '@/sites/delegation_ui/contexts/validator_selection_context';
import React from 'react';
import { StakingModalHistoryControlsContext } from './staking_modal_history_context';

/**
 * Context to provide a function to close the staking modal.
 */
export const StakingModalCloseContext = React.createContext<() => void>(
  () => {},
);

/**
 * ProvideStakingModalClose provides the StakingModalCloseContext to its
 * children, which when used will automatically close and clean up the
 * staking modal.
 */
export const ProvideStakingModalClose: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const historyControls = React.useContext(StakingModalHistoryControlsContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);
  const modalControls = React.useContext(ModalContext);

  return (
    <StakingModalCloseContext.Provider
      value={() => {
        historyControls.zero();
        setSelection(new NoValidatorSelected());
        modalControls.close();
      }}
    >
      {children}
    </StakingModalCloseContext.Provider>
  );
};
