import { default as React } from 'react';
/**
 * ValidatorSelectionEnum represents the base class for a set of enums
 * that help to indicate the user's journey of popping up a modal and the
 * various underlying states that that modal could be in or go through.
 */
export declare abstract class ValidatorSelectionEnum {
    /**
     * hasSelection indicates whether or not a Validator has been selected
     * or not.
     */
    hasSelection(): boolean;
    /**
     * isConfirmed indicates whether or not the user's selected Validator
     * decision is confirmed or not.
     */
    isConfirmed(): boolean;
}
/**
 * NoValidatorSelected indicates that the user has opened a modal, but no
 * validator has been selected.
 *
 * As a result, the user will be prompted with a modal for the user to
 * decide which validator he/she would like to ultimately choose.
 */
export declare class NoValidatorSelected extends ValidatorSelectionEnum {
    constructor();
    toJSON(): string;
}
/**
 * ValidatorSelectionWithSelection is the base class for all Validator
 * decisions that have a validator address specifices.
 *
 * NOTE: that this indicates that a validator has been selected for one
 *   reason or another, but no other intention beyond a selection.  As
 *   a result, no further intent can be inferred beyond information.
 */
export declare abstract class ValidatorSelectionWithSelection extends ValidatorSelectionEnum {
    readonly validatorAddress: `0x${string}`;
    constructor(validatorAddress: `0x${string}`);
    hasSelection(): boolean;
}
/**
 * ValiudatorSelected indicates that the User has selected a Validator.
 * This allows the user to preview the information about a Validator.  In
 * this way the Validator has been "selected", but it has not been confirmed
 * to be the validator that the user is interested in.
 */
export declare class ValidatorSelected extends ValidatorSelectionWithSelection {
    toJSON(): {
        ValidatorSelected: `0x${string}`;
    };
}
/**
 * CalimRewards indicates that the user has selected the modal in order
 * to claim the rewards that are available to him/her.
 */
export declare class ClaimRewards extends ValidatorSelectionEnum {
    constructor();
    toJSON(): string;
}
/**
 * ValidatorSelectionWithConfirmation is the base class for all Validator
 * with a confirmed validator selection.
 *
 * This indicates that the user intends to take some specific action with
 * the validator address specified.
 */
export declare abstract class ValidatorSelectionWithConfirmation extends ValidatorSelectionWithSelection {
    isConfirmed(): boolean;
}
/**
 * ValidatorConfirmed indicates that the user has confirmed his/her selection
 * of a Validator.  This indicates that the user's intended Validator target
 * has been confirmed, but the specific action the user is choosing to
 * take has yet to be determined.
 */
export declare class ValidatorConfirmed extends ValidatorSelectionWithConfirmation {
    toJSON(): {
        ValidatorConfirmed: `0x${string}`;
    };
}
/**
 * ValidatorConfirmedStake indicates that the user intends to perform
 * a new Staking action, or delegation, to the confirmed Validator.
 */
export declare class ValidatorConfirmedStake extends ValidatorSelectionWithConfirmation {
    toJSON(): {
        ValidatorConfirmedStake: `0x${string}`;
    };
}
/**
 * ValidatorConfirmedUndelegate indicates that the user indicates that
 * he/she wants to perform an undelegation action from the specific
 * confirmed Validator.
 */
export declare class ValidatorConfirmedUndelegate extends ValidatorSelectionWithConfirmation {
    toJSON(): {
        ValidatorConfirmedUndelegate: `0x${string}`;
    };
}
/**
 * ValidatorConfirmedUndelegateWithdraw indicates that the user wishes to
 * withdraw the outstanding balance currently attributed to the confirmed
 * Validator that has previously been undelegated from.
 */
export declare class ValidatorConfirmedUndelegateWithdraw extends ValidatorSelectionWithConfirmation {
    toJSON(): {
        ValidatorConfirmedUndelegateWithdraw: `0x${string}`;
    };
}
/**
 * ValidatorConfirmedExitWithdraw indicates that the user wishes to withdraw
 * the outstanding balance currently assigned to a Validator that has
 * performed a Validator exit.
 */
export declare class ValidatorConfirmedExitWithdraw extends ValidatorSelectionWithConfirmation {
    toJSON(): {
        ValidatorConfirmedExitWithdraw: `0x${string}`;
    };
}
/**
 * ValidatorSelectionContext provides the current ValidatorSelectionEnum
 * that indicates the user's intended modal decisions.
 */
export declare const ValidatorSelectionContext: React.Context<ValidatorSelectionEnum>;
/**
 * SetValidatorSelectionContext provides the setter function that allows
 * a component to modify the user's Modal intent.
 */
export declare const SetValidatorSelectionContext: React.Context<React.Dispatch<React.SetStateAction<ValidatorSelectionEnum>>>;
/**
 * ProvideValidatorSelection is a context provider that allows child
 * components to access and modify the user's intended Validator selection
 * state.
 */
export declare const ProvideValidatorSelection: React.FC<React.PropsWithChildren>;
