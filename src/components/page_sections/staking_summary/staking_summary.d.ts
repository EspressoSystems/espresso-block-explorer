import { default as React } from 'react';
export interface StakingSummarySectionProps {
}
/**
 * StakingSummarySection is a section that governs the current wallet's
 * staking information.  In general this section should only be available
 * to wallets that are connected, and targeting the correct chain.
 *
 * If the user's chain is not correct, then this section should let the
 * user know that they have the wrong chain selected, and that
 * they should switch to the correct chain.
 *
 * With an active user on the correct chain, this section should
 * display the user's current staking summary as of the current epoch.
 * This **should** include information for the user concerning the following
 * topics:
 * - Staked Amount
 * - Current Balance
 * - (Allowance?)
 * - Current Rewards available to claim
 */
export declare const StakingSummarySection: React.FC<StakingSummarySectionProps>;
