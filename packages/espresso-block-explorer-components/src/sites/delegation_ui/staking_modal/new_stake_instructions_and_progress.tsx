import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import Text from '@/components/text/Text';
import React from 'react';
import { ESPBalanceContext } from '../contexts/esp_balance_context';
import { CurrentAllowanceToStakeTableContext } from './contexts/current_allowance_context';
import { ApproveAsyncSnapshotContext } from './contexts/perform_approve_delegation_context';
import { DelegateAsyncSnapshotContext } from './contexts/perform_delegation_context';
import { PerformWriteTransactionStatus } from './contexts/perform_write_states';
import { StakingAmountContext } from './contexts/staking_amount_context';
import './new_stake_instructions_and_progress.css';
import { ProgressIndicatorArea } from './progress_indicator_area';

export const NewStakeInstructionsAndProgress: React.FC = () => {
  const stakingAmount = React.useContext(StakingAmountContext);
  const balance = React.useContext(ESPBalanceContext);
  const allowance = React.useContext(CurrentAllowanceToStakeTableContext) ?? 0n;
  const delegateAsyncSnapshot = React.useContext(DelegateAsyncSnapshotContext);
  const approveAsyncSnapshot = React.useContext(ApproveAsyncSnapshotContext);

  // Do we need approval first?
  if (stakingAmount.value <= 0n) {
    // We have no staking amount, specified, there are no actions to
    // perform

    return (
      <div className="staking-modal-instructions-and-progress">
        <span>&nbsp;</span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  if (stakingAmount.value > allowance) {
    // We require approval first
    if (approveAsyncSnapshot.asyncState === AsyncState.none) {
      return (
        <div className="staking-modal-instructions-and-progress">
          <span>
            <Text text="Approve transaction first" />
          </span>
          <ProgressIndicatorArea />
        </div>
      );
    }

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

    const approveData = approveAsyncSnapshot.data;
    if (
      approveAsyncSnapshot.asyncState === AsyncState.waiting ||
      approveData === null ||
      approveData === undefined ||
      !(approveData.status >= PerformWriteTransactionStatus.receiptRetrieved)
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

    if (approveData.status >= PerformWriteTransactionStatus.receiptRetrieved) {
      return (
        <div className="staking-modal-instructions-and-progress approved succeeded">
          <span>
            <Text text="Approval successful" />
          </span>
          <ProgressIndicatorArea />
        </div>
      );
    }

    // This is a weird place where we're kind of stuck between approval that
    // has succeeded, but we haven't re-fetched that data from the L1 yet.

    return (
      <div className="staking-modal-instructions-and-progress approved">
        <span>&nbsp;</span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  // We have sufficient allowance

  // Do we have sufficient balance?
  if (stakingAmount.value > balance) {
    return (
      <div className="staking-modal-instructions-and-progress approved">
        <span>&nbsp;</span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  // What's the state of the delegation
  if (delegateAsyncSnapshot.asyncState === AsyncState.none) {
    return (
      <div className="staking-modal-instructions-and-progress approved">
        <span>
          <Text text="Confirm Delegation" />
        </span>
        <ProgressIndicatorArea />
      </div>
    );
  }

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

  const data = delegateAsyncSnapshot.data;
  if (
    delegateAsyncSnapshot.asyncState === AsyncState.waiting ||
    data === null ||
    data === undefined ||
    !(data.status >= PerformWriteTransactionStatus.receiptRetrieved)
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

  if (data.status >= PerformWriteTransactionStatus.receiptRetrieved) {
    return (
      <div className="staking-modal-instructions-and-progress approved delegated succeeded">
        <span>
          <Text text="Delegation successful" />
        </span>
        <ProgressIndicatorArea />
      </div>
    );
  }

  return (
    <div className="staking-modal-instructions-and-progress approved delegated">
      <span>&nbsp;</span>
      <ProgressIndicatorArea />
    </div>
  );
};
