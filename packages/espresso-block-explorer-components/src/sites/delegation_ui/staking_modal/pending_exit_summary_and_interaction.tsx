import MoneyText from '@/components/text/MoneyText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import { NoticeArea } from './notice_area';
import { ValidatorDisplayArea } from './validator_display_area';

export const PendingExitSummaryAndInteraction: React.FC = () => {
  return (
    <div className="staking-modal-initial-summary-and-interaction">
      <ValidatorDisplayArea />
      <NoticeArea />
      <ClaimableESPArea />
    </div>
  );
};

const ClaimableESPArea: React.FC = () => {
  const currentStakeToValidator =
    React.useContext(CurrentStakeToValidatorContext) ?? 0n;

  return (
    <div className="staking-modal-esp-input-area">
      <label htmlFor="staking-modal-esp-input">
        <Text text="To Withdraw" />
      </label>
      <div className="staking-modal-esp-focus-display">
        <MoneyText money={MonetaryValue.ESP(currentStakeToValidator)} />
      </div>
    </div>
  );
};
