import { sleep } from '@/async/sleep';
import { DataContext } from '@/components/contexts/DataProvider';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { ESPTokenContract } from '@/contracts/esp_token/esp_token_interface';
import { StakeTableContract } from '@/contracts/stake_table/stake_table_interface';
import { ESPTokenContractContext } from '@/sites/delegation_ui/contexts/esp_token_contract_context';
import { L1RefreshTimestampContext } from '@/sites/delegation_ui/contexts/l1_refresh_timestamp_context';
import { StakeTableContractContext } from '@/sites/delegation_ui/contexts/stake_table_contract_context';
import React from 'react';

export const CurrentAllowanceToStakeTableContext = React.createContext<
  null | bigint
>(null);

interface CurrentAllowanceToStakeTableState {
  espContract: null | ESPTokenContract;
  stakeTableContract: null | StakeTableContract;
  accountAddress: null | `0x${string}`;
  lastL1RefreshTimestamp: Date;
}

const POLLING_RATE = 1000; // in ms

export const streamCurrentAllowanceToStakeTable = async function* (
  initialState: CurrentAllowanceToStakeTableState,
): AsyncIterable<null | bigint, undefined, CurrentAllowanceToStakeTableState> {
  let result: null | bigint = null;
  let localState = initialState;
  while (true) {
    const nextState = yield result;
    const prevState = localState;
    localState = nextState;

    if (
      !localState.espContract ||
      !localState.stakeTableContract ||
      !localState.accountAddress
    ) {
      result = null;
      continue;
    }

    if (
      prevState.accountAddress === localState.accountAddress &&
      prevState.lastL1RefreshTimestamp === localState.lastL1RefreshTimestamp &&
      result !== null
    ) {
      // Don't refresh if we have nothing to update.
      await sleep(POLLING_RATE);
      continue;
    }

    try {
      const nextResult = await localState.espContract.allowance(
        localState.accountAddress,
        localState.stakeTableContract.address,
      );
      result = nextResult;
    } catch (err) {
      /**
       * @todo Handle Wagmi errors properly.
       */
      await sleep(POLLING_RATE);
      continue;
    }
  }
};

export const ProvideCurrentAllowanceToStakeTable: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const lastL1RefreshTimestamp = React.useContext(L1RefreshTimestampContext);
  const espContract = React.useContext(ESPTokenContractContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext) as
    | null
    | `0x${string}`;

  const state = {
    espContract,
    stakeTableContract,
    accountAddress,
    lastL1RefreshTimestamp,
  };

  const stream = React.useMemo(
    () => streamCurrentAllowanceToStakeTable(state),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <AsyncIterableResolver asyncIterable={stream} next={state}>
      <TransformDataToCurrentAllowanceToStakeTable>
        {children}
      </TransformDataToCurrentAllowanceToStakeTable>
    </AsyncIterableResolver>
  );
};

const TransformDataToCurrentAllowanceToStakeTable: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const data = React.useContext(DataContext) as null | bigint;

  return (
    <CurrentAllowanceToStakeTableContext.Provider value={data}>
      {children}
    </CurrentAllowanceToStakeTableContext.Provider>
  );
};
