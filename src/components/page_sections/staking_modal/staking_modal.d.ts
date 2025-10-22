import { default as React } from 'react';
import { StakingModalState } from './context';
export interface IncreaseAllowanceButtonProps {
    amount?: bigint;
}
/**
 * IncreaseAllowanceButton is a button that will prompt the user to increase
 * the allowance of their wallet to the StakeTable contract on behalf of their
 * ESP Token.
 */
export declare const IncreaseAllowanceButton: React.FC<IncreaseAllowanceButtonProps>;
/**
 * ResetAllowanceButton is a button that will prompt the user to reset /
 * withdraw the allowance of their wallet to the StakeTable contract on
 * behalf of their ESP Token.
 */
export declare const ResetAllowanceButton: React.FC<IncreaseAllowanceButtonProps>;
export interface StakingModalProps {
    children: React.ReactNode | React.ReactNode[];
    initialModalState?: StakingModalState;
    className?: string;
}
/**
 * StakingModal is the main component that provides the staking modal
 * functionality.  This component itself adds the modal to the DOM, but is
 * also utilized to wrap the content of whatever children component are passed
 * to it.
 *
 * In this way, it allows all children components to have access to the
 * relevant context information needed to interact with, and display the
 * staking modal.
 */
export declare const StakingModal: React.FC<StakingModalProps>;
