import MoneyText from '@/components/text/MoneyText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { CurrentPendingUndelegationFromValidatorContext } from './contexts/current_pending_undelegation_from_validator_context';
import { NoticeArea } from './notice_area';
import './unstaking_initial_summary_and_interactions.css';
import { ValidatorDisplayArea } from './validator_display_area';

export const PendingClaimSummaryAndInteraction: React.FC = () => {
  return (
    <div className="staking-modal-initial-summary-and-interaction">
      <ValidatorDisplayArea />
      <NoticeArea />
      <ClaimableESPArea />
    </div>
  );
};

const ClaimableESPArea: React.FC = () => {
  const undelegationObject = React.useContext(
    CurrentPendingUndelegationFromValidatorContext,
  );
  const toWithdraw = undelegationObject?.amount ?? 0n;

  return (
    <div className="staking-modal-esp-input-area">
      <label htmlFor="staking-modal-esp-input">
        <Text text="To Claim" />
      </label>
      <div className="staking-modal-esp-focus-display">
        <MoneyText money={MonetaryValue.ESP(toWithdraw)} />
      </div>
    </div>
  );
};
