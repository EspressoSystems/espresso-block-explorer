import { default as React } from 'react';
import { ValidatorSelectionEnum } from 'sites/delegation_ui/contexts/validator_selection_context';
/**
 * StakingModalHistoryContext represents the "stack" of navigation history
 * performed within the staking modal. This allows us to keep a history,
 * and to display the Back button to a state that makes the most sense.
 */
export declare const StakingModalHistoryContext: React.Context<ValidatorSelectionEnum[]>;
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
export declare const StakingModalHistoryControlsContext: React.Context<StakingModalHistoryControls>;
/**
 * ProvideStakingHistory is a context provider component that manages the
 * navigation history within the staking modal.
 */
export declare const ProvideStakingHistory: React.FC<React.PropsWithChildren>;
