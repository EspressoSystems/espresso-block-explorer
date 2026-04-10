import { ESPInput } from '@/components/input/esp/esp_input';
import { MoneyText, Text } from '@/components/text';
import { addClassToClassName } from '@/higher_order';
import { MonetaryValue } from '@/models/block_explorer';
import { default as React } from 'react';
import { ESPBalanceContext } from '../contexts/esp_balance_context';
import { MinimumDelegationAmountContext } from '../contexts/minimum_delegation_amount_context';
import { default as ButtonLarge } from '../elements/buttons/button_large';
import {
  SetStakingAmountContext,
  StakingAmountContext,
} from './contexts/staking_amount_context';
import { NoticeArea } from './notice_area';
import './staking_initial_summary_and_interaction.css';
import { ValidatorDisplayArea } from './validator_display_area';

/**
 * StakingInitialSummaryAndInteraction is the initial summary and
 * interaction area for staking modal when delegating to a validator.
 */
export const StakingInitialSummaryAndInteraction: React.FC = () => {
  return (
    <div className="staking-modal-initial-summary-and-interaction">
      <ValidatorDisplayArea />
      <NoticeArea />
      <StakingESPInputArea />
    </div>
  );
};

/**
 * StakingESPInputArea is the input area for staking ESP amount
 */
const StakingESPInputArea: React.FC = () => {
  const stakingAmount = React.useContext(StakingAmountContext);
  const setStakingAmount = React.useContext(SetStakingAmountContext);
  const currentBalance = React.useContext(ESPBalanceContext);
  const minimumAmount = React.useContext(MinimumDelegationAmountContext);

  const hasBalance = currentBalance >= (stakingAmount?.value ?? 0n);
  const isInsufficientBalance = !hasBalance;
  const isLessThanMinimum =
    stakingAmount !== null &&
    stakingAmount.value !== 0n &&
    stakingAmount.value < minimumAmount;
  const errorClass =
    isInsufficientBalance || isLessThanMinimum ? 'error' : undefined;

  return (
    <div
      className={addClassToClassName(
        errorClass,
        'staking-modal-esp-input-area new-delegation',
      )}
    >
      <label htmlFor="staking-modal-esp-input">
        <Text text="Amount to Delegate" />
      </label>
      <ButtonLarge
        className="bbtn-max"
        onClick={() => {
          setStakingAmount(MonetaryValue.ESP(currentBalance));
        }}
      >
        <Text text="Max" />
      </ButtonLarge>
      <ESPInput
        id="staking-modal-esp-input"
        className="staking-modal-esp-focus-display"
        placeholder="0"
        value={stakingAmount}
        onChange={(_event, amount) => setStakingAmount(amount)}
      />
      <StakingInputInfoArea />
    </div>
  );
};

/**
 * StakingInputInfoArea is the info area below the staking input field
 * that displays minimum amount, insufficient balance warning, and
 * current balance.
 */
const StakingInputInfoArea: React.FC = () => {
  return (
    <div className="staking-modal-input-info-area">
      <MinimumAmount />
      <InsufficientBalanceWarning />
      <CurrentBalanceArea />
    </div>
  );
};

/**
 * InsufficientBalanceWarning is a React component that displays a warning
 * if the staking amount exceeds the current balance.
 */
const InsufficientBalanceWarning: React.FC = () => {
  const stakingAmount = React.useContext(StakingAmountContext);
  const currentBalance = React.useContext(ESPBalanceContext);
  const minimumAmount = React.useContext(MinimumDelegationAmountContext);

  if (stakingAmount === null) {
    return null;
  }

  if (stakingAmount.value === 0n) {
    return null;
  }

  if (stakingAmount.value < minimumAmount) {
    return (
      <div className="staking-modal-insufficient-balance-warning">
        <Text text="Amount is lower than minimum" />
      </div>
    );
  }

  if (currentBalance >= stakingAmount.value) {
    return null;
  }

  return (
    <div className="staking-modal-insufficient-balance-warning">
      <Text text="Amount is bigger than balance" />
    </div>
  );
};

/**
 * MinimumAmount is a React component that displays the minimum
 * delegation amount.
 */
const MinimumAmount: React.FC = () => {
  const setStakingAmount = React.useContext(SetStakingAmountContext);
  const minimumAmount = React.useContext(MinimumDelegationAmountContext);
  return (
    <div
      className="staking-modal-minimum-amount-area"
      onClick={() => {
        setStakingAmount(MonetaryValue.ESP(minimumAmount));
      }}
    >
      <span className="staking-modal-current-balance-label">
        <Text text="Minimum" />
      </span>

      <span className="staking-modal-current-balance-value">
        <MoneyText money={MonetaryValue.ESP(minimumAmount)} />
      </span>
    </div>
  );
};

/**
 * CurrentBalanceArea is a React component that displays the current
 * ESP balance of the user.
 */
const CurrentBalanceArea: React.FC = () => {
  const balance = React.useContext(ESPBalanceContext);
  const setStakingAmount = React.useContext(SetStakingAmountContext);
  return (
    <div
      className="staking-modal-current-balance-area"
      onClick={() => {
        setStakingAmount(MonetaryValue.ESP(balance));
      }}
    >
      <span className="staking-modal-current-balance-label">
        <Text text="Balance" />
      </span>

      <span className="staking-modal-current-balance-value">
        <MoneyText money={MonetaryValue.ESP(balance)} />
      </span>
    </div>
  );
};
