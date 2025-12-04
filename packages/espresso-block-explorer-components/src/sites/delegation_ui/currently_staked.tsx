import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import { TotalStakeContext } from '@/sites/delegation_ui/contexts/total_stake_context';
import { TotalSupplyContext } from '@/sites/delegation_ui/contexts/total_supply_context';
import React from 'react';
import { NetworkStatValue } from './network_stat_value';

/**
 */
export const CurrentlyStaked: React.FC = () => {
  const totalStake = React.useContext(TotalStakeContext);
  const totalSupply = React.useContext(TotalSupplyContext);

  return (
    <NetworkStatValue>
      <h2>
        <Text text="Currently Staked" />
      </h2>
      <PercentageText percentage={Number(totalStake) / Number(totalSupply)} />
    </NetworkStatValue>
  );
};
