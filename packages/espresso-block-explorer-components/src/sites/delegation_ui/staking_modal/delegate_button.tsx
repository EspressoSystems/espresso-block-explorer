import { AsyncState } from '@/components/data/async_data/async_snapshot';
import Text from '@/components/text/text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { ESPBalanceContext } from '../contexts/esp_balance_context';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import { StakeTableContractContext } from '../contexts/stake_table_contract_context';
import ButtonLarge from '../elements/buttons/button_large';
import { CurrentAllowanceToStakeTableContext } from './contexts/current_allowance_context';
import {
  DelegateAsyncSnapshotContext,
  performDelegation,
  SetDelegationAsyncIterableContext,
} from './contexts/perform_delegation_context';
import { PerformWriteTransactionStatus } from './contexts/perform_write_states';
import {
  SetStakingAmountContext,
  StakingAmountContext,
} from './contexts/staking_amount_context';

export const DelegateButton: React.FC = () => {
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const l1Methods = React.useContext(L1MethodsContext);
  const stakingAmount = React.useContext(StakingAmountContext);
  const setStakingAmount = React.useContext(SetStakingAmountContext);
  const balance = React.useContext(ESPBalanceContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const allowance = React.useContext(CurrentAllowanceToStakeTableContext) ?? 0n;
  const asyncSnapshot = React.useContext(DelegateAsyncSnapshotContext);
  const setDelegationAsyncIterable = React.useContext(
    SetDelegationAsyncIterableContext,
  );
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  if (
    // If the Contracts are not set
    l1Methods === null ||
    stakeTableContract === null
  ) {
    return (
      <ButtonLarge className="btn-delegate" disabled>
        <Text text="Delegate" />
      </ButtonLarge>
    );
  }

  const validatorAddress = confirmedValidator;
  const handleDelegateClick = () => {
    setDelegationAsyncIterable(
      performDelegation(
        l1Methods,
        stakeTableContract,
        validatorAddress,
        stakingAmount.value,
        (date) => {
          setStakingAmount(MonetaryValue.ESP(0n));
          setL1Timestamp(date);
        },
      ),
    );
  };

  if (asyncSnapshot.hasError) {
    // There was an error delegating
    return (
      <ButtonLarge className="btn-delegate retry" onClick={handleDelegateClick}>
        <Text text="Retry" />
      </ButtonLarge>
    );
  }

  if (
    asyncSnapshot.hasData &&
    (asyncSnapshot.data?.status ?? 0) >=
      PerformWriteTransactionStatus.receiptRetrieved
  ) {
    // Delegation succeeded
    return (
      <ButtonLarge className="btn-delegate approved" disabled>
        <Text text="Delegated" />
      </ButtonLarge>
    );
  }

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    asyncSnapshot.asyncState == AsyncState.active
  ) {
    // We are waiting for the transaction to be completed
    return (
      <ButtonLarge className="btn-delegate approving" disabled>
        <Text text="Delegate" />
      </ButtonLarge>
    );
  }

  if (
    // We have no staking amount
    stakingAmount.value <= 0n ||
    // We don't have the balance to cover the staking amount
    stakingAmount.value > balance ||
    // We don't have enough allowance to cover the staking amount
    stakingAmount.value > allowance
  ) {
    // Disable the button
    return (
      <ButtonLarge className="btn-delegate" disabled>
        <Text text="Delegate" />
      </ButtonLarge>
    );
  }

  return (
    <ButtonLarge className="btn-delegate" onClick={handleDelegateClick}>
      <Text text="Delegate" />
    </ButtonLarge>
  );
};
