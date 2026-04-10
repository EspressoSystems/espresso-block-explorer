import { AsyncState } from '@/components/data/async_data/async_snapshot';
import { Text } from '@/components/text';
import { default as React } from 'react';
import { default as ButtonLarge } from '../elements/buttons/button_large';
import { DelegateAsyncSnapshotContext } from './contexts/perform_delegation_context';
import { PerformWriteTransactionStatus } from './contexts/perform_write_states';
import { StakingModalCloseContext } from './contexts/staking_modal_close_context';
import './staking_completion_area.css';

export const StakingCompletionArea: React.FC = () => {
  const close = React.useContext(StakingModalCloseContext);
  const asyncSnapshot = React.useContext(DelegateAsyncSnapshotContext);

  if (asyncSnapshot.asyncState !== AsyncState.done) {
    return null;
  }

  const data = asyncSnapshot.data;
  if (
    !data ||
    !(data.status >= PerformWriteTransactionStatus.receiptRetrieved)
  ) {
    return null;
  }

  return (
    <div className="staking-modal-completion-area">
      <ButtonLarge onClick={close}>
        <Text text="Close" />
      </ButtonLarge>
    </div>
  );
};
