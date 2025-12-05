import MoneyText from '@/components/text/money_text';
import Text from '@/components/text/text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ESPBalanceContext } from '../contexts/esp_balance_context';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import { StakingAmountContext } from './contexts/staking_amount_context';
import { NoticeArea } from './notice_area';
import './staking_initial_summary_and_interaction.css';
import { ValidatorDisplayArea } from './validator_display_area';

export const ManageStakeInitialSummary: React.FC = () => {
  return (
    <div className="staking-modal-initial-summary-and-interaction">
      <ValidatorDisplayArea />
      <NoticeArea />
      <CurrentStakeArea />
    </div>
  );
};

const CurrentStakeArea: React.FC = () => {
  const currentStake = React.useContext(CurrentStakeToValidatorContext) ?? 0n;

  return (
    <div className="staking-modal-esp-input-area">
      <label htmlFor="staking-modal-esp-input">
        <Text text="Currently Delegated" />
      </label>
      <div className="staking-modal-esp-focus-display">
        <MoneyText money={MonetaryValue.ESP(currentStake)} />
      </div>
      <StakingInputInfoArea />
    </div>
  );
};

const StakingInputInfoArea: React.FC = () => {
  return (
    <div className="staking-modal-input-info-area">
      <InsufficientBalanceWarning />
      <CurrentBalanceArea />
    </div>
  );
};

const InsufficientBalanceWarning: React.FC = () => {
  const stakingAmount = React.useContext(StakingAmountContext);
  const currentBalance = React.useContext(ESPBalanceContext);

  if (currentBalance >= stakingAmount.value) {
    return null;
  }

  return (
    <div className="staking-modal-insufficient-balance-warning">
      <Text text="Insufficient Balance" />
    </div>
  );
};

const CurrentBalanceArea: React.FC = () => {
  const balance = React.useContext(ESPBalanceContext);
  return (
    <div className="staking-modal-current-balance-area">
      <span className="staking-modal-current-balance-label">
        <Text text="Balance" />
      </span>

      <span className="staking-modal-current-balance-value">
        <MoneyText money={MonetaryValue.ESP(balance)} />
      </span>
    </div>
  );
};
