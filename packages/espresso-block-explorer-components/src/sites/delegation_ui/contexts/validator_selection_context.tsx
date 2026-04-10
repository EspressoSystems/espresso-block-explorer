import { default as React } from 'react';

/**
 * ValidatorSelectionEnum represents the base class for a set of enums
 * that help to indicate the user's journey of popping up a modal and the
 * various underlying states that that modal could be in or go through.
 */
export abstract class ValidatorSelectionEnum {
  /**
   * hasSelection indicates whether or not a Validator has been selected
   * or not.
   */
  hasSelection(): boolean {
    return false;
  }

  /**
   * isConfirmed indicates whether or not the user's selected Validator
   * decision is confirmed or not.
   */
  isConfirmed(): boolean {
    return false;
  }
}

/**
 * NoValidatorSelected indicates that the user has opened a modal, but no
 * validator has been selected.
 *
 * As a result, the user will be prompted with a modal for the user to
 * decide which validator he/she would like to ultimately choose.
 */
export class NoValidatorSelected extends ValidatorSelectionEnum {
  constructor() {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return 'NoValidatorSelected';
  }
}

/**
 * ValidatorSelectionWithSelection is the base class for all Validator
 * decisions that have a validator address specifices.
 *
 * NOTE: that this indicates that a validator has been selected for one
 *   reason or another, but no other intention beyond a selection.  As
 *   a result, no further intent can be inferred beyond information.
 */
export abstract class ValidatorSelectionWithSelection extends ValidatorSelectionEnum {
  constructor(public readonly validatorAddress: `0x${string}`) {
    super();
    Object.freeze(this);
  }

  hasSelection(): boolean {
    return true;
  }
}

/**
 * ValiudatorSelected indicates that the User has selected a Validator.
 * This allows the user to preview the information about a Validator.  In
 * this way the Validator has been "selected", but it has not been confirmed
 * to be the validator that the user is interested in.
 */
export class ValidatorSelected extends ValidatorSelectionWithSelection {
  toJSON() {
    return {
      ValidatorSelected: this.validatorAddress,
    };
  }
}

/**
 * CalimRewards indicates that the user has selected the modal in order
 * to claim the rewards that are available to him/her.
 */
export class ClaimRewards extends ValidatorSelectionEnum {
  constructor() {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return 'ClaimRewards';
  }
}

/**
 * ValidatorSelectionWithConfirmation is the base class for all Validator
 * with a confirmed validator selection.
 *
 * This indicates that the user intends to take some specific action with
 * the validator address specified.
 */
export abstract class ValidatorSelectionWithConfirmation extends ValidatorSelectionWithSelection {
  isConfirmed(): boolean {
    return true;
  }
}

/**
 * ValidatorConfirmed indicates that the user has confirmed his/her selection
 * of a Validator.  This indicates that the user's intended Validator target
 * has been confirmed, but the specific action the user is choosing to
 * take has yet to be determined.
 */
export class ValidatorConfirmed extends ValidatorSelectionWithConfirmation {
  toJSON() {
    return {
      ValidatorConfirmed: this.validatorAddress,
    };
  }
}

/**
 * ValidatorConfirmedStake indicates that the user intends to perform
 * a new Staking action, or delegation, to the confirmed Validator.
 */
export class ValidatorConfirmedStake extends ValidatorSelectionWithConfirmation {
  toJSON() {
    return {
      ValidatorConfirmedStake: this.validatorAddress,
    };
  }
}

/**
 * ValidatorConfirmedUndelegate indicates that the user indicates that
 * he/she wants to perform an undelegation action from the specific
 * confirmed Validator.
 */
export class ValidatorConfirmedUndelegate extends ValidatorSelectionWithConfirmation {
  toJSON() {
    return {
      ValidatorConfirmedUndelegate: this.validatorAddress,
    };
  }
}

/**
 * ValidatorConfirmedUndelegateConfirm indicates that the user has attempted to
 * Undelegate from a valdiator.  We want to make sure the user is aware of
 * the implication of this request, by relaying a warning to the user, and
 * making him/her confirm the choice to undelegate from the validator.
 */
export class ValidatorConfirmedUndelegateConfirm extends ValidatorSelectionWithConfirmation {
  toJSON() {
    return {
      ValidatorConfirmedUndelegateConfirm: this.validatorAddress,
    };
  }
}

/**
 * ValidatorConfirmedUndelegateWithdraw indicates that the user wishes to
 * withdraw the outstanding balance currently attributed to the confirmed
 * Validator that has previously been undelegated from.
 */
export class ValidatorConfirmedUndelegateWithdraw extends ValidatorSelectionWithConfirmation {
  toJSON() {
    return {
      ValidatorConfirmedUndelegateWithdraw: this.validatorAddress,
    };
  }
}

/**
 * ValidatorConfirmedExitWithdraw indicates that the user wishes to withdraw
 * the outstanding balance currently assigned to a Validator that has
 * performed a Validator exit.
 */
export class ValidatorConfirmedExitWithdraw extends ValidatorSelectionWithConfirmation {
  toJSON() {
    return {
      ValidatorConfirmedExitWithdraw: this.validatorAddress,
    };
  }
}

export class ClaimAndStakeIntent extends ValidatorSelectionEnum {
  toJSON() {
    return {
      ClaimAndStakeIntent: true,
    };
  }
}

/**
 * ValidatorSelectionContext provides the current ValidatorSelectionEnum
 * that indicates the user's intended modal decisions.
 */
export const ValidatorSelectionContext =
  React.createContext<ValidatorSelectionEnum>(new NoValidatorSelected());

/**
 * SetValidatorSelectionContext provides the setter function that allows
 * a component to modify the user's Modal intent.
 */
export const SetValidatorSelectionContext = React.createContext<
  React.Dispatch<React.SetStateAction<ValidatorSelectionEnum>>
>(() => {});

/**
 * ProvideValidatorSelection is a context provider that allows child
 * components to access and modify the user's intended Validator selection
 * state.
 */
export const ProvideValidatorSelection: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [validatorSelection, setValidatorSelection] =
    React.useState<ValidatorSelectionEnum>(new NoValidatorSelected());

  return (
    <ValidatorSelectionContext.Provider value={validatorSelection}>
      <SetValidatorSelectionContext.Provider value={setValidatorSelection}>
        {children}
      </SetValidatorSelectionContext.Provider>
    </ValidatorSelectionContext.Provider>
  );
};
