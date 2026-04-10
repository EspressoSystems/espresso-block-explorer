import { PromiseResolver } from '@/components/data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { DataContext } from '@/contexts/data_provider';
import { StakeTableContractContext } from '@/contexts/stake_table_contract_context';
import { WalletSnapshotContext } from '@/delegation_ui/contexts/wallet_snapshot_context';
import { emptyIterator, firstWhereIterable } from '@/functional/functional';
import { neverPromise } from '@/functional/functional_async';
import { Delegation } from '@/service/espresso_staking_api_service/common/delegation';
import { ConfirmedValidatorContext } from '@/sites/delegation_ui/contexts/confirmed_valdiator_context';
import { L1RefreshTimestampContext } from '@/sites/delegation_ui/contexts/l1_refresh_timestamp_context';
import { default as React } from 'react';

export const CurrentStakeToValidatorContext = React.createContext<
  null | bigint
>(null);

export const ProvideCurrentStakeToValidator: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const l1refreshTimestamp = React.useContext(L1RefreshTimestampContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  const promise = React.useMemo(
    () =>
      !stakeTableContract ||
      !accountAddress ||
      !confirmedValidator ||
      confirmedValidator === '0x'
        ? neverPromise
        : stakeTableContract.delegation(
            confirmedValidator,
            accountAddress.toLowerCase() as `0x${string}`,
          ),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      l1refreshTimestamp,
      stakeTableContract,
      accountAddress,
      confirmedValidator,
    ],
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
  const walletSnapshot = React.useContext(WalletSnapshotContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);
  const data = React.useContext(DataContext) as null | bigint;
  const foundDelegation = firstWhereIterable(
    walletSnapshot?.nodes ?? emptyIterator<Delegation>(),
    (value) => value.nodeText === confirmedValidator,
  );

  return (
    <CurrentStakeToValidatorContext.Provider
      value={data ?? foundDelegation?.amount ?? null}
    >
      {children}
    </CurrentStakeToValidatorContext.Provider>
  );
};
