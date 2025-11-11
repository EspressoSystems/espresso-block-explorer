import React from 'react';

export abstract class ValidatorSelectionEnum {}

export class NoValidatorSelected extends ValidatorSelectionEnum {
  constructor() {
    super();
    Object.freeze(this);
  }
}

export class ValidatorSelected extends ValidatorSelectionEnum {
  constructor(public readonly validatorAddress: ArrayBuffer) {
    super();
    Object.freeze(this);
  }
}

export class ValidatorConfirmed extends ValidatorSelectionEnum {
  constructor(public readonly validatorAddress: ArrayBuffer) {
    super();
    Object.freeze(this);
  }
}

export const ValidatorSelectionContext =
  React.createContext<ValidatorSelectionEnum>(new NoValidatorSelected());

export const SetValidatorSelectionContext = React.createContext<
  React.Dispatch<React.SetStateAction<ValidatorSelectionEnum>>
>(() => {});

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
