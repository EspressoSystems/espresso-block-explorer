import MoneyText from '@/components/text/MoneyText';
import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ESPBalanceContext } from '../contexts/esp_balance_context';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import { LabelValueSplit } from './label_value_split';

export const PendingExitOverviewArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-overview-area">
      <CurrentBalance />
      <NewBalance />
      <TxFee />
      <CommissionRate />
    </div>
  );
};

const CurrentBalance: React.FC = () => {
  const balance = React.useContext(ESPBalanceContext);

  return (
    <LabelValueSplit>
      <span>
        <Text text="Current Balance" />
      </span>
      <span>
        <MoneyText money={MonetaryValue.ESP(balance)} />
      </span>
    </LabelValueSplit>
  );
};

const NewBalance: React.FC = () => {
  const balance = React.useContext(ESPBalanceContext);
  const currentStakeToValidator =
    React.useContext(CurrentStakeToValidatorContext) ?? 0n;

  return (
    <LabelValueSplit>
      <span>
        <Text text="New Balance" />
      </span>
      <span>
        <MoneyText
          money={MonetaryValue.ESP(balance + currentStakeToValidator)}
        />
      </span>
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
