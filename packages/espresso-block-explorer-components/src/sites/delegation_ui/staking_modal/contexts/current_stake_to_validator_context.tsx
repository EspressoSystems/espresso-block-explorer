import { DataContext } from '@/components/contexts/DataProvider';
import PromiseResolver from '@/components/data/async_data/PromiseResolver';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import React from 'react';
import { ConfirmedValidatorContext } from 'sites/delegation_ui/contexts/confirmed_valdiator_context';
import { L1RefreshTimestampContext } from 'sites/delegation_ui/contexts/l1_refresh_timestamp_context';
import { StakeTableContractContext } from 'sites/delegation_ui/contexts/stake_table_contract_context';

export const CurrentStakeToValidatorContext = React.createContext<
  null | bigint
>(null);

export const ProvideCurrentStakeToValidator: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  React.useContext(L1RefreshTimestampContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  const promise =
    !stakeTableContract || !accountAddress || !confirmedValidator
      ? new Promise(() => {})
      : stakeTableContract.delegation(
          hexArrayBufferCodec.encode(confirmedValidator),
          accountAddress.toLowerCase() as `0x${string}`,
        );

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToCurrenStakeToValidator>
        {children}
      </TransformDataToCurrenStakeToValidator>
    </PromiseResolver>
  );
};

const TransformDataToCurrenStakeToValidator: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const data = React.useContext(DataContext) as null | bigint;

  return (
    <CurrentStakeToValidatorContext.Provider value={data}>
      {children}
    </CurrentStakeToValidatorContext.Provider>
  );
};
