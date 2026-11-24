import { default as React } from 'react';
import { CommissionIncrease } from './commission_warning';
/**
 * ValidatorStatusChip shows whether the validator is in the active set, or
 * exiting when the staking API lists the wallet's stake in it as a pending
 * exit.
 */
export declare const ValidatorStatusChip: React.FC;
/**
 * ValidatorRankChip shows the validator's rank by stake, if known.
 */
export declare const ValidatorRankChip: React.FC;
/**
 * ValidatorAddress displays the shortened validator address with a copy
 * button.
 */
export declare const ValidatorAddress: React.FC<{
    className?: string;
}>;
/**
 * ValidatorWebsiteLink links to the validator's website, when it has a safe
 * http(s) website in its metadata.
 */
export declare const ValidatorWebsiteLink: React.FC<{
    className?: string;
}>;
/**
 * SampleDataChip marks a section whose values are sample data rather than
 * data from the network.
 */
export declare const SampleDataChip: React.FC;
export interface ValidatorStakeActionsProps {
    className?: string;
    /**
     * beforeOpen runs before another modal is opened, so that a modal hosting
     * these actions can close itself first.
     */
    beforeOpen?: () => void;
}
/**
 * ValidatorStakeActions renders Undelegate and Delegate more when the
 * connected wallet has stake on the validator in the current
 * ValidatorNodeContext, and Delegate otherwise. They open the existing
 * staking modal directly on the undelegate or delegate step. With an
 * undelegation in progress, Undelegate is shown as Undelegating (disabled)
 * or, once it can be claimed, Withdraw. Without a connected wallet,
 * Delegate asks for one and then continues to the delegate step.
 */
export declare const ValidatorStakeActions: React.FC<ValidatorStakeActionsProps>;
/**
 * UndelegationNote says when the connected wallet's pending undelegation
 * from the current validator can be claimed, or nothing without one.
 */
export declare const UndelegationNote: React.FC;
/**
 * ClaimNotice offers to claim the connected wallet's undelegated ESP from
 * the current validator once it's available, and renders nothing before.
 */
export declare const ClaimNotice: React.FC<{
    className?: string;
    beforeOpen?: () => void;
}>;
/**
 * ExitNotice explains that the current validator is exiting when the
 * connected wallet has stake in it pending exit. It says when that stake can
 * be claimed, and offers the claim once it can be.
 */
export declare const ExitNotice: React.FC<{
    className?: string;
    beforeOpen?: () => void;
    /**
     * claimOnly leaves out the sentence saying that the validator is exiting,
     * for a page that already says it exited.
     */
    claimOnly?: boolean;
}>;
/**
 * NodeVersionChip tags the validator's node version as the latest release
 * for the network or outdated, when espressonodes could tell.
 */
export declare const NodeVersionChip: React.FC;
/**
 * useCommissionIncrease is the current validator's commission increase
 * since the connected wallet last delegated to it, if it still has stake
 * there and the commission went up since.
 */
export declare function useCommissionIncrease(): null | CommissionIncrease;
/**
 * commissionIncreaseText describes an increase in one sentence.
 */
export declare function commissionIncreaseText(increase: CommissionIncrease, date: (date: Date) => string): string;
/**
 * CommissionWarning warns a delegator that the current validator raised its
 * commission after they delegated, so they now earn less.
 */
export declare const CommissionWarning: React.FC<{
    className?: string;
}>;
