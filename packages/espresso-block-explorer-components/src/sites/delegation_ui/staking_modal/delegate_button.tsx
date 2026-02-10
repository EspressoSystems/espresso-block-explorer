import { AsyncState } from '@/components/data/async_data/async_snapshot';
import Text from '@/components/text/text';
import { L1MethodsContext } from '@/contexts/l1_methods_context';
import { StakeTableContractContext } from '@/contexts/stake_table_contract_context';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { ESPBalanceContext } from '../contexts/esp_balance_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import { MinimumDelegationAmountContext } from '../contexts/minimum_delegation_amount_context';
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

/**
 * DelegateButton is the button to delegate stake to a validator.
 *
 * It attempts to ensure that the button is only enabled when all
 * preconditions for delegation are met, and handles various states
 * of the delegation process (e.g., waiting, success, error).
 */
export const DelegateButton: React.FC = () => {
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const l1Methods = React.useContext(L1MethodsContext);
  const stakingAmount = React.useContext(StakingAmountContext);
  const setStakingAmount = React.useContext(SetStakingAmountContext);
  const balance = React.useContext(ESPBalanceContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const allowance = React.useContext(CurrentAllowanceToStakeTableContext) ?? 0n;
  const asyncSnapshot = React.useContext(DelegateAsyncSnapshotContext);
  const minimumDelegationAmount = React.useContext(
    MinimumDelegationAmountContext,
  );
  const setDelegationAsyncIterable = React.useContext(
    SetDelegationAsyncIterableContext,
  );
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  // Ref-based guard for immediate synchronous protection against duplicate clicks
  const transactionInProgressRef = React.useRef(false);
  // Reset the ref when transaction completes or errors
  React.useEffect(() => {
    if (asyncSnapshot.asyncState === AsyncState.done) {
      transactionInProgressRef.current = false;
    }
  }, [asyncSnapshot]);

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

  const stakingAmountValue = stakingAmount?.value ?? 0n;

  const validatorAddress = confirmedValidator;
  const handleDelegateClick = () => {
    // Synchronous guard - blocks immediately, even for rapid synchronous clicks
    if (transactionInProgressRef.current) {
      return;
    }

    // Set the ref immediately to block subsequent clicks
    transactionInProgressRef.current = true;

    setDelegationAsyncIterable(
      performDelegation(
        l1Methods,
        stakeTableContract,
        validatorAddress,
        stakingAmountValue,
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
    stakingAmountValue <= 0n ||
    // We don't have the balance to cover the staking amount
    stakingAmountValue > balance ||
    // We don't have enough allowance to cover the staking amount
    stakingAmountValue > allowance ||
    // The staking amount is less than the minimum delegation amount
    stakingAmountValue < minimumDelegationAmount
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
