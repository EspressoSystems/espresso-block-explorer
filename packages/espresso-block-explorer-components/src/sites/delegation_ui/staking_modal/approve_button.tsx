import { AsyncState } from '@/components/data/async_data/async_snapshot';
import { addClassToClassName } from '@/components/higher_order';
import Text from '@/components/text/text';
import { ESPTokenContractContext } from '@/contexts/esp_token_contract_context';
import { L1MethodsContext } from '@/contexts/l1_methods_context';
import { StakeTableContractContext } from '@/contexts/stake_table_contract_context';
import { ESPBalanceContext } from 'delegation-ui';
import React from 'react';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import { ButtonProps } from '../elements/buttons/button_base';
import ButtonLarge from '../elements/buttons/button_large';
import { CurrentAllowanceToStakeTableContext } from './contexts/current_allowance_context';
import {
  ApproveAsyncSnapshotContext,
  performApprove,
  SetApproveAsyncIterableContext,
} from './contexts/perform_approve_delegation_context';
import { PerformWriteTransactionStatus } from './contexts/perform_write_states';
import { StakingAmountContext } from './contexts/staking_amount_context';

/**
 * ApproveButton is a React component that displays the approve button
 * for delegating stake in the staking modal.
 *
 * This button controls the approval of the ESP token contract to allow
 * the stake table contract to spend the user's ESP tokens for delegation.
 */
export const ApproveButton: React.FC = () => {
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const l1Methods = React.useContext(L1MethodsContext);
  const stakingAmount = React.useContext(StakingAmountContext);
  const espContract = React.useContext(ESPTokenContractContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const allowance = React.useContext(CurrentAllowanceToStakeTableContext);
  const balance = React.useContext(ESPBalanceContext);
  const asyncSnapshot = React.useContext(ApproveAsyncSnapshotContext);
  const setApproveAsyncIterable = React.useContext(
    SetApproveAsyncIterableContext,
  );

  const toApprove =
    stakingAmount && stakingAmount.value > balance
      ? stakingAmount.value
      : balance;

  // Ref-based guard for immediate synchronous protection against duplicate clicks
  const transactionInProgressRef = React.useRef(false);

  const handleApproveClick = React.useMemo(
    () => () => {
      // Synchronous guard - blocks immediately, even for rapid synchronous clicks
      if (transactionInProgressRef.current) {
        return;
      }

      if (!l1Methods || !espContract || !stakeTableContract) {
        return;
      }

      // Set the ref immediately to block subsequent clicks
      transactionInProgressRef.current = true;

      setApproveAsyncIterable(
        performApprove(
          l1Methods,
          espContract,
          stakeTableContract,
          toApprove,
          () => {
            setL1Timestamp(new Date());
          },
        ),
      );
    },
    [
      espContract,
      stakeTableContract,
      l1Methods,
      toApprove,
      setL1Timestamp,
      setApproveAsyncIterable,
    ],
  );

  // Reset the ref when transaction completes or errors
  React.useEffect(() => {
    if (asyncSnapshot.asyncState === AsyncState.done) {
      transactionInProgressRef.current = false;
    }
  }, [asyncSnapshot.asyncState, asyncSnapshot.hasError]);

  // Sanity Checks
  // Do we already have an approval that is high enough?
  const stakingAmountValue = stakingAmount?.value ?? 0n;

  const needAllowanceIncrease = stakingAmountValue > (allowance ?? 0n);
  const ButtonComponent = asyncSnapshot.hasError ? RetryButton : NormalButton;

  if (!l1Methods || !espContract || !stakeTableContract) {
    return <ButtonComponent disabled />;
  }

  if (
    !needAllowanceIncrease ||
    (asyncSnapshot.hasData &&
      (asyncSnapshot.data?.status ?? 0) >
        PerformWriteTransactionStatus.receiptRetrieved)
  ) {
    // Approval succeeded
    return <ButtonComponent className="approved" disabled />;
  }

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    asyncSnapshot.asyncState === AsyncState.active
  ) {
    // We are waiting for the transaction to be completed
    return <ButtonComponent className="approving" disabled />;
  }

  if (stakingAmountValue <= 0n) {
    // We have no staking amount
    return <ButtonComponent disabled />;
  }

  return <ButtonComponent onClick={handleApproveClick} />;
};

const NormalButton: React.FC<ButtonProps> = ({
  className,
  onClick,
  ...rest
}) => {
  return (
    <ButtonLarge
      className={addClassToClassName(className, 'btn-approve')}
      onClick={onClick}
      {...rest}
    >
      <Text text="Approve" />
    </ButtonLarge>
  );
};

const RetryButton: React.FC<ButtonProps> = ({
  className,
  onClick,
  ...rest
}) => {
  return (
    <ButtonLarge
      className={addClassToClassName(className, 'btn-approve retry')}
      onClick={onClick}
      {...rest}
    >
      <Text text="Retry" />
    </ButtonLarge>
  );
};
