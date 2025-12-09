import { CurrentNumberFormatters } from '@/components/contexts';
import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { TotalStakeContext } from '@/sites/delegation_ui/contexts/total_stake_context';
import { TotalSupplyContext } from '@/sites/delegation_ui/contexts/total_supply_context';
import React from 'react';
import { NetworkStatValue } from './network_stat_value';

/**
 */
export const CurrentlyStaked: React.FC = () => {
  const totalStake = React.useContext(TotalStakeContext);
  const totalSupply = React.useContext(TotalSupplyContext);
  const numberFormatter = React.useContext(CurrentNumberFormatters);

  return (
    <NetworkStatValue>
      <h2>
        <Text text="Currently Staked" />
      </h2>
      <span
        title={`${numberFormatter.ESP.format(MonetaryValue.ESP(totalStake).toNumericLiteralString())} / ${numberFormatter.ESP.format(MonetaryValue.ESP(totalSupply ?? 0n).toNumericLiteralString())}`}
      >
        <PercentageText percentage={Number(totalStake) / Number(totalSupply)} />
      </span>
    </NetworkStatValue>
  );
};
