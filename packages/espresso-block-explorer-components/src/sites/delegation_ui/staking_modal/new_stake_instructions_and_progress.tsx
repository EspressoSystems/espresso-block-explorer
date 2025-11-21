import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import Text from '@/components/text/Text';
import React from 'react';
import { CurrentAllowanceToStakeTableContext } from './contexts/current_allowance_context';
import { ApproveAsyncSnapshotContext } from './contexts/perform_approve_delegation_context';
import { DelegateAsyncSnapshotContext } from './contexts/perform_delegation_context';
import { PerformWriteTransactionStatus } from './contexts/perform_write_states';
import { StakingAmountContext } from './contexts/staking_amount_context';
import './new_stake_instructions_and_progress.css';
import { ProgressIndicatorArea } from './progress_indicator_area';

export const NewStakeInstructionsAndProgress: React.FC = () => {
  const stakingAmount = React.useContext(StakingAmountContext);
  const allowance = React.useContext(CurrentAllowanceToStakeTableContext) ?? 0n;
  const delegateAsyncSnapshot = React.useContext(DelegateAsyncSnapshotContext);
  const approveAsyncSnapshot = React.useContext(ApproveAsyncSnapshotContext);

  // Let's handle the AsyncSnapshotStates in descending order

  // Delegation attempt has an Error
  if (delegateAsyncSnapshot.hasError) {
    return (
      <div className="staking-modal-instructions-and-progress approved delegated error">
        <span>
          <Text text="Delegation Unsuccessful" />
        </span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  // Delegation attempt succeeded
  if (
    delegateAsyncSnapshot.hasData &&
    (delegateAsyncSnapshot.data?.status ?? 0) >=
      PerformWriteTransactionStatus.receiptRetrieved
  ) {
    return (
      <div className="staking-modal-instructions-and-progress approved delegated succeeded">
        <span>
          <Text text="Delegation successful" />
        </span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  // Delegation attempt waiting
  if (
    delegateAsyncSnapshot.asyncState === AsyncState.waiting ||
    delegateAsyncSnapshot.asyncState == AsyncState.active
  ) {
    return (
      <div className="staking-modal-instructions-and-progress approved delegated waiting">
        <span>
          <Text text="Delegating..." />
        </span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  // Approval attempt has an Error
  if (approveAsyncSnapshot.hasError) {
    return (
      <div className="staking-modal-instructions-and-progress error">
        <span>
          <Text text="Approval Failed" />
        </span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  // Approval attempt succeeded
  if (
    approveAsyncSnapshot.hasData &&
    (approveAsyncSnapshot.data?.status ?? 0) >=
      PerformWriteTransactionStatus.receiptRetrieved
  ) {
    return (
      <div className="staking-modal-instructions-and-progress approved succeeded">
        <span>
          <Text text="Approval successful" />
        </span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  // Approval attempt waiting
  if (
    approveAsyncSnapshot.asyncState === AsyncState.waiting ||
    approveAsyncSnapshot.asyncState == AsyncState.active
  ) {
    return (
      <div className="staking-modal-instructions-and-progress waiting">
        <span>
          <Text text="Approving..." />
        </span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  // Everything from this point on is trying to determine what the intermediate
  // state should be.

  // If the staking amount is zero, or we don't have the balance we don't want
  // to indicate any status / progress.
  if (stakingAmount.value <= 0n) {
    return (
      <div className="staking-modal-instructions-and-progress">
        <span>&nbsp;</span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  // If we have don't have sufficient allowance
  if (stakingAmount.value > allowance) {
    return (
      <div className="staking-modal-instructions-and-progress">
        <span>
          <Text text="Approve transaction first" />
        </span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  // In all other cases, we should have sufficient allowance, but we just
  // need to submit the delegation transaction

  return (
    <div className="staking-modal-instructions-and-progress approved">
      <span>
        <Text text="Confirm Delegation" />
      </span>
      <ProgressIndicatorArea />
    </div>
  );
};
