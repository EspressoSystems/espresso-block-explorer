import MoneyText from '@/components/text/money_text';
import PercentageText from '@/components/text/percentage_text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { TotalStakeContext } from '@/sites/delegation_ui/contexts/total_stake_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';

/**
 * TotalStakeCell displays the stake amount for a validator node, along with its
 * percentage of the total stake.
 */
export const TotalStakeCell: React.FC = () => {
  const totalStake = React.useContext(TotalStakeContext);
  const validator = React.useContext(ValidatorNodeContext);
  const pct = Number(validator.stake) / Number(totalStake);
  return (
    <span>
      <MoneyText money={MonetaryValue.ESP(validator.stake)} />
      &nbsp;
      <span className="percentage-text">
        (<PercentageText percentage={pct} />)
      </span>
    </span>
  );
};
