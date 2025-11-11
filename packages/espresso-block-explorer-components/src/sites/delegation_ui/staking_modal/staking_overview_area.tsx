import MoneyText from '@/components/text/MoneyText';
import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import './staking_overview_area.css';

export const StakingOverviewArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-overview-area">
      <CurrentEpochStake />
      <CurrentStake />
      <TxFee />
      <CommissionRate />
    </div>
  );
};

interface LabelValueSplitProps {
  children: [React.ReactNode, React.ReactNode];
}

const LabelValueSplit: React.FC<LabelValueSplitProps> = ({ children }) => {
  return (
    <div className="staking-modal-label-value-split">
      <span className="staking-modal-label">{children[0]}</span>
      <span className="staking-modal-value">{children[1]}</span>
    </div>
  );
};

const CurrentEpochStake: React.FC = () => {
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
};

const CurrentStake: React.FC = () => {
  const stake = React.useContext(CurrentStakeToValidatorContext);

  const component = !stake ? (
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

const TxFee: React.FC = () => {
  return (
    <LabelValueSplit>
      <span>
        <Text text="Tx Fee" />
      </span>
      <span>
        <Text text="-" />
      </span>
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
