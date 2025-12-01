import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { ConfirmedValidatorContext } from '@/sites/delegation_ui/contexts/confirmed_valdiator_context';
import React from 'react';
import { CurrentEpochActiveValidatorsContext } from './current_epoch_active_validators_context';

export const CurrentEpochStakeToValidatorContext = React.createContext<
  null | bigint
>(null);

export const ProvideEpochCurrentStakeToValidator: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const currentEpochActiveValidators = React.useContext(
    CurrentEpochActiveValidatorsContext,
  );
  const activeAccount = React.useContext(RainbowKitAccountAddressContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  const currentStakeToValidator =
    currentEpochActiveValidators === null ||
    activeAccount === null ||
    confirmedValidator === null
      ? null
      : (currentEpochActiveValidators?.validators
          .get(confirmedValidator)
          ?.delegators.get(activeAccount.toLowerCase() as `0x${string}`) ??
        null);

  return (
    <CurrentEpochStakeToValidatorContext.Provider
      value={currentStakeToValidator}
    >
      {children}
    </CurrentEpochStakeToValidatorContext.Provider>
  );
};
