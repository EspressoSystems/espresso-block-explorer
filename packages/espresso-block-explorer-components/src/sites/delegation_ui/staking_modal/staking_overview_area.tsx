import MoneyText from '@/components/text/money_text';
import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import { CurrentEpochStakeToValidatorContext } from './contexts/current_epoch_stake_to_validator_context';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import { LabelValueSplit } from './label_value_split';
import './staking_overview_area.css';
import { TxFeeEstimate } from './tx_fee_estimate';

export const StakingOverviewArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-overview-area">
      <CurrentEpochStake />
      <CurrentStake />
      <TxFeeEstimate />
      <CommissionRate />
    </div>
  );
};

const CurrentEpochStake: React.FC = () => {
  const currentEpochStake = React.useContext(
    CurrentEpochStakeToValidatorContext,
  );

  if (!currentEpochStake) {
    return (
      <LabelValueSplit>
        <span>
          <Text text="Current Epoch Stake" />
        </span>
        <span>
          <Text text="-" />
        </span>
      </LabelValueSplit>
    );
  }

  return (
    <LabelValueSplit>
      <span>
        <Text text="Current Epoch Stake" />
      </span>
      <span>
        <MoneyText money={MonetaryValue.ESP(currentEpochStake)} />
      </span>
    </LabelValueSplit>
  );
};

const CurrentStake: React.FC = () => {
  const stake = React.useContext(CurrentStakeToValidatorContext);

  const component =
    stake === null || stake === undefined ? (
      <Text text="-" />
    ) : (
      <MoneyText money={MonetaryValue.ESP(stake)} />
    );

  return (
    <LabelValueSplit>
      <span>
        <Text text="Current Stake" />
      </span>
      <span>{component}</span>
    </LabelValueSplit>
  );
};

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
