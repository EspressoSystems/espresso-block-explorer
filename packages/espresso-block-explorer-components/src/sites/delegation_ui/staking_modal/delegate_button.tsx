import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import Text from '@/components/text/Text';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
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
import { PerformWriteTransactionReceiptRetrieved } from './contexts/perform_write_states';
import { StakingAmountContext } from './contexts/staking_amount_context';

export const DelegateButton: React.FC = () => {
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const l1Methods = React.useContext(L1MethodsContext);
  const stakingAmount = React.useContext(StakingAmountContext);
  const balance = React.useContext(ESPBalanceContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const allowance = React.useContext(CurrentAllowanceToStakeTableContext) ?? 0n;
  const asyncSnapshot = React.useContext(DelegateAsyncSnapshotContext);
  const setDelegationAsyncIterable = React.useContext(
    SetDelegationAsyncIterableContext,
  );
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  if (
    l1Methods === null ||
    // If the Contracts are not set
    stakeTableContract === null ||
    // We have no staking amount
    stakingAmount.value <= 0n ||
    // We don't have the balance to cover the staking amount
    stakingAmount.value > balance ||
    // We don't have enough allowance to cover the staking amount
    stakingAmount.value > allowance ||
    // We're waiting for an approval to complete
    asyncSnapshot.asyncState === AsyncState.waiting ||
    (asyncSnapshot.data &&
      !(asyncSnapshot.data instanceof PerformWriteTransactionReceiptRetrieved))
  ) {
    return (
      <ButtonLarge className="btn-delegate" disabled>
        <Text text="Delegate" />
      </ButtonLarge>
    );
  }
  const validatorAddress = hexArrayBufferCodec.encode(confirmedValidator);
  const handleDelegateClick = () => {
    setDelegationAsyncIterable(
      performDelegation(
        l1Methods,
        stakeTableContract,
        validatorAddress,
        stakingAmount.value,
        setL1Timestamp,
      ),
    );
  };

  if (asyncSnapshot.asyncState === AsyncState.done && asyncSnapshot.hasError) {
    // There was an error delegating
    return (
      <ButtonLarge className="btn-delegate retry" onClick={handleDelegateClick}>
        <Text text="Retry" />
      </ButtonLarge>
    );
  }

  if (asyncSnapshot.asyncState === AsyncState.done && !asyncSnapshot.hasError) {
    // Delegation succeeded
    return (
      <ButtonLarge className="btn-delegate approved" disabled>
        <Text text="Delegated" />
      </ButtonLarge>
    );
  }

  return (
    <ButtonLarge className="btn-delegate" onClick={handleDelegateClick}>
      <Text text="Delegate" />
    </ButtonLarge>
  );
};
