import { addClassToClassName } from '@/components/higher_order';
import { ESPInput } from '@/components/input/esp/esp_input';
import { PercentageText } from '@/components/text';
import MoneyText from '@/components/text/MoneyText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import ButtonLarge from '../elements/buttons/button_large';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import {
  SetStakingAmountContext,
  StakingAmountContext,
} from './contexts/staking_amount_context';
import { NoticeArea } from './notice_area';
import './unstaking_initial_summary_and_interactions.css';
import { ValidatorDisplayArea } from './validator_display_area';

export const UnstakingInitialSummaryAndInteraction: React.FC = () => {
  return (
    <div className="staking-modal-initial-summary-and-interaction">
      <ValidatorDisplayArea />
      <NoticeArea />
      <UnstakingESPInputArea />
      <UnstakingOptionsArea />
    </div>
  );
};

const UnstakingESPInputArea: React.FC = () => {
  const currentStakeToValidator =
    React.useContext(CurrentStakeToValidatorContext) ?? 0n;
  const stakingAmount = React.useContext(StakingAmountContext);
  const setStakingAmount = React.useContext(SetStakingAmountContext);

  const hasBalance = currentStakeToValidator >= stakingAmount.value;
  const insufficient = !hasBalance ? 'insufficient' : undefined;

  return (
    <div className="staking-modal-esp-input-area">
      <label htmlFor="staking-modal-esp-input">
        <Text text="Unstake Amount" />
      </label>
      <ESPInput
        id="staking-modal-esp-input"
        className={addClassToClassName(
          insufficient,
          'staking-modal-esp-focus-display',
        )}
        value={stakingAmount}
        onChange={(_event, amount) => setStakingAmount(amount)}
      />
      <UnstakingInputInfoArea />
    </div>
  );
};

const UnstakingInputInfoArea: React.FC = () => {
  return (
    <div className="staking-modal-input-info-area">
      <InsufficientBalanceWarning />
      <CurrentBalanceArea />
    </div>
  );
};

const InsufficientBalanceWarning: React.FC = () => {
  const currentStakeToValidator =
    React.useContext(CurrentStakeToValidatorContext) ?? 0n;
  const stakingAmount = React.useContext(StakingAmountContext);

  if (currentStakeToValidator >= stakingAmount.value) {
    return null;
  }

  return (
    <div className="staking-modal-insufficient-balance-warning">
      <Text text="Insufficient Stake" />
    </div>
  );
};

const CurrentBalanceArea: React.FC = () => {
  const currentStakeToValidator =
    React.useContext(CurrentStakeToValidatorContext) ?? 0n;
  return (
    <div className="staking-modal-current-balance-area">
      <span className="staking-modal-current-balance-label">
        <Text text="Current Stake" />
      </span>

      <span className="staking-modal-current-balance-value">
        <MoneyText money={MonetaryValue.ESP(currentStakeToValidator)} />
      </span>
    </div>
  );
};

const UnstakingOptionsArea: React.FC = () => {
  const currentStakeToValidator =
    React.useContext(CurrentStakeToValidatorContext) ?? 0n;
  const stakingAmount = React.useContext(StakingAmountContext);
  const setStakingAmount = React.useContext(SetStakingAmountContext);

  const quarterStake = currentStakeToValidator / 4n;
  const halfStake = currentStakeToValidator / 2n;
  const threeQuarterStake = (currentStakeToValidator * 3n) / 4n;

  return (
    <div className="staking-modal-unstaking-options-area">
      <ButtonLarge
        data-selected={stakingAmount.value === quarterStake}
        onClick={() => setStakingAmount(MonetaryValue.ESP(quarterStake))}
      >
        <PercentageText percentage={0.25} />
      </ButtonLarge>
      <ButtonLarge
        data-selected={stakingAmount.value === halfStake}
        onClick={() => setStakingAmount(MonetaryValue.ESP(halfStake))}
      >
        <PercentageText percentage={0.5} />
      </ButtonLarge>
      <ButtonLarge
        data-selected={stakingAmount.value === threeQuarterStake}
        onClick={() => setStakingAmount(MonetaryValue.ESP(threeQuarterStake))}
      >
        <PercentageText percentage={0.75} />
      </ButtonLarge>
      <ButtonLarge
        data-selected={stakingAmount.value === currentStakeToValidator}
        onClick={() =>
          setStakingAmount(MonetaryValue.ESP(currentStakeToValidator))
        }
      >
        <Text text="Max" />
      </ButtonLarge>
    </div>
  );
};
