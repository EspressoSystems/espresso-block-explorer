import React from 'react';
import { DialogModal } from '../contexts/modal_context';
import { ProvideStakingModalClose } from './contexts/staking_modal_close_context';
import { ProvideStakingHistory } from './contexts/staking_modal_history_context';
import './staking_modal.css';
import { StakingModalContent } from './staking_modal_content';

export interface StakingModalProps {
  open?: boolean;
}

export const StakingModal: React.FC<StakingModalProps> = (props) => {
  return (
    <DialogModal className="staking-modal" closedby="none" open={props.open}>
      <ProvideStakingHistory>
        <ProvideStakingModalClose>
          <StakingModalContent />
        </ProvideStakingModalClose>
      </ProvideStakingHistory>
    </DialogModal>
  );
};
