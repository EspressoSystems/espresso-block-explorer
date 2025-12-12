import { addClassToClassName } from '@/components/higher_order';
import { ESPInput } from '@/components/input/esp/esp_input';
import MoneyText from '@/components/text/money_text';
import Text from '@/components/text/text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ESPBalanceContext } from '../contexts/esp_balance_context';
import {
  SetStakingAmountContext,
  StakingAmountContext,
} from './contexts/staking_amount_context';
import { NoticeArea } from './notice_area';
import './staking_initial_summary_and_interaction.css';
import { ValidatorDisplayArea } from './validator_display_area';

export const StakingInitialSummaryAndInteraction: React.FC = () => {
  return (
    <div className="staking-modal-initial-summary-and-interaction">
      <ValidatorDisplayArea />
      <NoticeArea />
      <StakingESPInputArea />
    </div>
  );
};

const StakingESPInputArea: React.FC = () => {
  const stakingAmount = React.useContext(StakingAmountContext);
  const setStakingAmount = React.useContext(SetStakingAmountContext);
  const currentBalance = React.useContext(ESPBalanceContext);

  const hasBalance = currentBalance >= (stakingAmount?.value ?? 0n);
  const isInsufficientBalance = !hasBalance;
  const errorClass = isInsufficientBalance ? 'error' : undefined;

  return (
    <div
      className={addClassToClassName(
        errorClass,
        'staking-modal-esp-input-area',
      )}
    >
      <label htmlFor="staking-modal-esp-input">
        <Text text="Amount to Stake" />
      </label>
      <ESPInput
        id="staking-modal-esp-input"
        className="staking-modal-esp-focus-display"
        placeholder="Stake amount"
        value={stakingAmount}
        onChange={(_event, amount) => setStakingAmount(amount)}
      />
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

  if (currentBalance >= (stakingAmount?.value ?? 0n)) {
    return null;
  }

  return (
    <div className="staking-modal-insufficient-balance-warning">
      <Text text="Amount is bigger than balance" />
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
