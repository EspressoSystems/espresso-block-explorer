import { MoneyTextFull } from '@/components/text/money_text_full';
import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import { ValidatorFromContractContext } from './contexts/validator_from_contract_context';
import { LabelValueSplit } from './label_value_split';
import './staking_overview_area.css';

export const StakingOverviewArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-overview-area only-three">
      <MyStakeToValidator />
      <ValidatorStake />
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
        <Text text="Validator Stake" />
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
        <Text text="My Delegations" />
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
