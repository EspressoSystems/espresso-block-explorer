import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import Text from '@/components/text/Text';
import React from 'react';
import { ModalContext } from '../contexts/modal_context';
import {
  NoValidatorSelected,
  SetValidatorSelectionContext,
} from '../contexts/validator_selection_context';
import ButtonLarge from '../elements/buttons/button_large';
import {
  DelegateAsyncSnapshotContext,
  PerformDelegationReceiptRetrieved,
} from './contexts/perform_delegation_context';
import './staking_completion_area.css';

export const StakingCompletionArea: React.FC = () => {
  const modalControls = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);
  const asyncSnapshot = React.useContext(DelegateAsyncSnapshotContext);

  if (asyncSnapshot.asyncState !== AsyncState.done) {
    return null;
  }

  const data = asyncSnapshot.data;
  if (!(data instanceof PerformDelegationReceiptRetrieved)) {
    return null;
  }

  return (
    <div className="staking-modal-completion-area">
      <ButtonLarge
        onClick={() => {
          setSelection(new NoValidatorSelected());
          modalControls.close();
        }}
      >
        <Text text="Close" />
      </ButtonLarge>
    </div>
  );
};
