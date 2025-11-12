import { default as React } from 'react';
export declare abstract class ValidatorSelectionEnum {
}
export declare class NoValidatorSelected extends ValidatorSelectionEnum {
    constructor();
}
export declare class ValidatorSelected extends ValidatorSelectionEnum {
    readonly validatorAddress: ArrayBuffer;
    constructor(validatorAddress: ArrayBuffer);
}
export declare class ValidatorConfirmed extends ValidatorSelectionEnum {
    readonly validatorAddress: ArrayBuffer;
    constructor(validatorAddress: ArrayBuffer);
}
export declare class ValidatorConfirmedStake extends ValidatorSelectionEnum {
    readonly validatorAddress: ArrayBuffer;
    constructor(validatorAddress: ArrayBuffer);
}
export declare class ValidatorConfirmedUndelegate extends ValidatorSelectionEnum {
    readonly validatorAddress: ArrayBuffer;
    constructor(validatorAddress: ArrayBuffer);
}
export declare const ValidatorSelectionContext: React.Context<ValidatorSelectionEnum>;
export declare const SetValidatorSelectionContext: React.Context<React.Dispatch<React.SetStateAction<ValidatorSelectionEnum>>>;
export declare const ProvideValidatorSelection: React.FC<React.PropsWithChildren>;
