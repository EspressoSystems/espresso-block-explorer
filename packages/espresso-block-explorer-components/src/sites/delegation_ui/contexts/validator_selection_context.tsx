import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import React from 'react';

export abstract class ValidatorSelectionEnum {}

export class NoValidatorSelected extends ValidatorSelectionEnum {
  constructor() {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return 'NoValidatorSelected';
  }
}

export class ValidatorSelected extends ValidatorSelectionEnum {
  constructor(public readonly validatorAddress: ArrayBuffer) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return {
      ValidatorSelected: hexArrayBufferCodec.encode(this.validatorAddress),
    };
  }
}

export class ClaimRewards extends ValidatorSelectionEnum {
  constructor() {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return 'ClaimRewards';
  }
}

export class ValidatorConfirmed extends ValidatorSelectionEnum {
  constructor(public readonly validatorAddress: ArrayBuffer) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return {
      ValidatorConfirmed: hexArrayBufferCodec.encode(this.validatorAddress),
    };
  }
}

export class ValidatorConfirmedStake extends ValidatorSelectionEnum {
  constructor(public readonly validatorAddress: ArrayBuffer) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return {
      ValidatorConfirmedStake: hexArrayBufferCodec.encode(
        this.validatorAddress,
      ),
    };
  }
}

export class ValidatorConfirmedUndelegate extends ValidatorSelectionEnum {
  constructor(public readonly validatorAddress: ArrayBuffer) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return {
      ValidatorConfirmedUndelegate: hexArrayBufferCodec.encode(
        this.validatorAddress,
      ),
    };
  }
}

export class ValidatorConfirmedUndelegateWithdraw extends ValidatorSelectionEnum {
  constructor(public readonly validatorAddress: ArrayBuffer) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return {
      ValidatorConfirmedUndelegateWithdraw: hexArrayBufferCodec.encode(
        this.validatorAddress,
      ),
    };
  }
}

export class ValidatorConfirmedExitWithdraw extends ValidatorSelectionEnum {
  constructor(public readonly validatorAddress: ArrayBuffer) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return {
      ValidatorConfirmedExitWithdraw: hexArrayBufferCodec.encode(
        this.validatorAddress,
      ),
    };
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
