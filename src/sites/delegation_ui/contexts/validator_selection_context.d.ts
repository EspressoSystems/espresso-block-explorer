import { default as React } from 'react';
export declare abstract class ValidatorSelectionEnum {
}
export declare class NoValidatorSelected extends ValidatorSelectionEnum {
    constructor();
    toJSON(): string;
}
export declare class ValidatorSelected extends ValidatorSelectionEnum {
    readonly validatorAddress: ArrayBuffer;
    constructor(validatorAddress: ArrayBuffer);
    toJSON(): {
        ValidatorSelected: `0x${string}`;
    };
}
export declare class ClaimRewards extends ValidatorSelectionEnum {
    constructor();
    toJSON(): string;
}
export declare class ValidatorConfirmed extends ValidatorSelectionEnum {
    readonly validatorAddress: ArrayBuffer;
    constructor(validatorAddress: ArrayBuffer);
    toJSON(): {
        ValidatorConfirmed: `0x${string}`;
    };
}
export declare class ValidatorConfirmedStake extends ValidatorSelectionEnum {
    readonly validatorAddress: ArrayBuffer;
    constructor(validatorAddress: ArrayBuffer);
    toJSON(): {
        ValidatorConfirmedStake: `0x${string}`;
    };
}
export declare class ValidatorConfirmedUndelegate extends ValidatorSelectionEnum {
    readonly validatorAddress: ArrayBuffer;
    constructor(validatorAddress: ArrayBuffer);
    toJSON(): {
        ValidatorConfirmedUndelegate: `0x${string}`;
    };
}
export declare class ValidatorConfirmedUndelegateWithdraw extends ValidatorSelectionEnum {
    readonly validatorAddress: ArrayBuffer;
    constructor(validatorAddress: ArrayBuffer);
    toJSON(): {
        ValidatorConfirmedUndelegateWithdraw: `0x${string}`;
    };
}
export declare class ValidatorConfirmedExitWithdraw extends ValidatorSelectionEnum {
    readonly validatorAddress: ArrayBuffer;
    constructor(validatorAddress: ArrayBuffer);
    toJSON(): {
        ValidatorConfirmedExitWithdraw: `0x${string}`;
    };
}
export declare const ValidatorSelectionContext: React.Context<ValidatorSelectionEnum>;
export declare const SetValidatorSelectionContext: React.Context<React.Dispatch<React.SetStateAction<ValidatorSelectionEnum>>>;
export declare const ProvideValidatorSelection: React.FC<React.PropsWithChildren>;
