import { MoneyText, PercentageText } from '@/components/text';
import { type PercentageTextProps } from '@/components/text/percentage_text';
import { MonetaryValue } from '@/models/block_explorer';
import {
  LargestNodeHasOver10PercentageContext,
  TotalStakeContext,
} from '@/sites/delegation_ui/contexts/total_stake_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import { default as React } from 'react';

/**
 * PaddedLeadingPercentage is a wrapper around PercentageText that adds a
 * leading space, should any of the individual validators have a stake
 * percentage that equals or exceeds 10%.
 *
 * This is done as the percentage would require an additional decimal to
 * display for at least one of the validators, which would cause the other
 * validators to potentially no longer be in alignment on their stake value
 * itself.
 *
 * As a result, we introduce a leading space in front of the percentages, so
 * that they will still align.
 */
const PaddedLeadingPercentage: React.FC<PercentageTextProps> = ({
  percentage,
}) => {
  const singleNodeOver10 = React.useContext(
    LargestNodeHasOver10PercentageContext,
  );

  if (singleNodeOver10 && percentage < 0.1) {
    // We have a validator with over 10% stake.
    <>
      &nbsp;
      <PercentageText percentage={percentage} />
    </>;
  }

  return <PercentageText percentage={percentage} />;
};

/**
 * TotalStakeCell displays the stake amount for a validator node, along with its
 * percentage of the total stake.
 */
export const TotalStakeCell: React.FC = () => {
  const totalStake = React.useContext(TotalStakeContext);
  const validator = React.useContext(ValidatorNodeContext);
  const pct = Number(validator.stake) / Number(totalStake);

  if (totalStake <= 0n) {
    return (
      <span>
        <MoneyText money={MonetaryValue.ESP(validator.stake)} />
        &nbsp;
        <span className="percentage-text">
          (<PaddedLeadingPercentage percentage={0} />)
        </span>
      </span>
    );
  }

  return (
    <span>
      <MoneyText money={MonetaryValue.ESP(validator.stake)} />
      &nbsp;
      <span className="percentage-text">
        (<PaddedLeadingPercentage percentage={pct} />)
      </span>
    </span>
  );
};
