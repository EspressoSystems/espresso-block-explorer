import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import Text from '@/components/text/Text';
import React from 'react';
import { ESPTokenContractContext } from '../contexts/esp_token_contract_context';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import { StakeTableContractContext } from '../contexts/stake_table_contract_context';
import ButtonLarge from '../elements/buttons/button_large';
import { CurrentAllowanceToStakeTableContext } from './contexts/current_allowance_context';
import {
  ApproveAsyncSnapshotContext,
  performApprove,
  SetApproveAsyncIterableContext,
} from './contexts/perform_approve_delegation_context';
import { PerformWriteTransactionStatus } from './contexts/perform_write_states';
import { StakingAmountContext } from './contexts/staking_amount_context';

export const ApproveButton: React.FC = () => {
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const l1Methods = React.useContext(L1MethodsContext);
  const stakingAmount = React.useContext(StakingAmountContext);
  const espContract = React.useContext(ESPTokenContractContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const allowance = React.useContext(CurrentAllowanceToStakeTableContext);
  const asyncSnapshot = React.useContext(ApproveAsyncSnapshotContext);
  const setApproveAsyncIterable = React.useContext(
    SetApproveAsyncIterableContext,
  );

  // Sanity Checks
  // Do we already have an approval that is high enough?

  const needAllowanceIncrease = stakingAmount.value > (allowance ?? 0n);

  if (
    !needAllowanceIncrease ||
    (asyncSnapshot.asyncState === AsyncState.done && !asyncSnapshot.hasError)
  ) {
    return (
      <ButtonLarge className="btn-approve approved" disabled>
        <Text text="Approved" />
      </ButtonLarge>
    );
  }

  if (
    !l1Methods ||
    !espContract ||
    !stakeTableContract ||
    stakingAmount.value === 0n
  ) {
    return (
      <ButtonLarge className="btn-approve" disabled>
        <Text text="Approve" />
      </ButtonLarge>
    );
  }

  const handleApproveClick = () => {
    if (!espContract || !stakeTableContract) {
      return;
    }

    setApproveAsyncIterable(
      performApprove(
        l1Methods,
        espContract,
        stakeTableContract,
        setL1Timestamp,
      ),
    );
  };

  if (asyncSnapshot.asyncState === AsyncState.done && asyncSnapshot.hasError) {
    // There was an error approving
    return (
      <ButtonLarge className="btn-approve retry" onClick={handleApproveClick}>
        <Text text="Retry" />
      </ButtonLarge>
    );
  }

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    (asyncSnapshot.data &&
      !(
        asyncSnapshot.data.status >=
        PerformWriteTransactionStatus.receiptRetrieved
      ))
  ) {
    return (
      <ButtonLarge className="btn-approve approving" disabled>
        <Text text="Approve" />
      </ButtonLarge>
    );
  }

  return (
    <ButtonLarge className="btn-approve" onClick={handleApproveClick}>
      <Text text="Approve" />
    </ButtonLarge>
  );
};
