import { MoneyTextFull } from '@/components/text/money_text_full';
import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import { StakingAmountContext } from './contexts/staking_amount_context';
import { ValidatorFromContractContext } from './contexts/validator_from_contract_context';
import { LabelValueSplit } from './label_value_split';
import './staking_overview_area.css';

export const StakingOverviewArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-overview-area only-three">
      <MyStakeToValidator />
      <MyNewStakeToValidator />
      <ValidatorStake />
      <ValidatorNewStake />
      <CommissionRate />
    </div>
  );
};

/**
 * ValidatorStake represents the current total Stake allocated to the
 * validator.
 */
const ValidatorStake: React.FC = () => {
  const validator = React.useContext(ValidatorFromContractContext);

  const component =
    validator === null || validator === undefined ? (
      <Text text="-" />
    ) : (
      <MoneyTextFull money={MonetaryValue.ESP(validator.stake)} />
    );

  return (
    <LabelValueSplit>
      <span>
        <Text text="Validator Current Stake" />
      </span>
      <span>{component}</span>
    </LabelValueSplit>
  );
};

const ValidatorNewStake: React.FC = () => {
  const validator = React.useContext(ValidatorFromContractContext);
  const stakingAmount = React.useContext(StakingAmountContext);
  const value = stakingAmount?.value ?? 0n;

  const component =
    validator === null || validator === undefined ? (
      <Text text="-" />
    ) : (
      <MoneyTextFull money={MonetaryValue.ESP(validator.stake + value)} />
    );

  return (
    <LabelValueSplit>
      <span>
        <Text text="Validator New Stake" />
      </span>
      <span>{component}</span>
    </LabelValueSplit>
  );
};

/**
 * MyStakeToValidator represents the current Stake allocated to the
 * validator by the current wallet.
 */
const MyStakeToValidator: React.FC = () => {
  const stake = React.useContext(CurrentStakeToValidatorContext);

  const component =
    stake === null || stake === undefined ? (
      <Text text="-" />
    ) : (
      <MoneyTextFull money={MonetaryValue.ESP(stake)} />
    );

  return (
    <LabelValueSplit>
      <span>
        <Text text="My Current Stake" />
      </span>
      <span>{component}</span>
    </LabelValueSplit>
  );
};

const MyNewStakeToValidator: React.FC = () => {
  const stake = React.useContext(CurrentStakeToValidatorContext);
  const stakingAmount = React.useContext(StakingAmountContext);
  const value = stakingAmount?.value ?? 0n;

  const component =
    stake === null || stake === undefined ? (
      <Text text="-" />
    ) : (
      <MoneyTextFull money={MonetaryValue.ESP(stake + value)} />
    );

  return (
    <LabelValueSplit>
      <span>
        <Text text="My New Stake" />
      </span>
      <span>{component}</span>
    </LabelValueSplit>
  );
};

/**
 * CommissionRate represents the current commission rate of the validator.
 */
const CommissionRate: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);

  return (
    <LabelValueSplit>
      <span>
        <Text text="Commission" />
      </span>
      <span>
        <PercentageText percentage={validator.commission.ratio} />
      </span>
    </LabelValueSplit>
  );
};
