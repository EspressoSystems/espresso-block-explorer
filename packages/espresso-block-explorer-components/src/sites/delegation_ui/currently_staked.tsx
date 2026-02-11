import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import { CurrentNumberFormatters } from '@/contexts/number_formatters_provider';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { TotalStakeContext } from '@/sites/delegation_ui/contexts/total_stake_context';
import { TotalSupplyContext } from '@/sites/delegation_ui/contexts/total_supply_context';
import React from 'react';
import { MoreInfoElement } from './elements/tooltip/more_info';
import { NetworkStatValue } from './network_stat_value';

/**
 * CurrentlyStaked displays the percentage of ESP Tokens staked in the Stake
 * Table compared to the total supply available.
 */
export const CurrentlyStaked: React.FC = () => {
  const totalStake = React.useContext(TotalStakeContext);
  const totalSupply = React.useContext(TotalSupplyContext);
  const numberFormatter = React.useContext(CurrentNumberFormatters);

  const percent =
    !totalSupply || totalSupply <= 0n
      ? 0
      : Number(totalStake) / Number(totalSupply);
  return (
    <NetworkStatValue>
      <h2>
        <Text text="Currently Staked" />
        <MoreInfoElement>
          <p>
            <Text text="The percentage of ESP Tokens staked in the Stake Table compared to the total supply available." />
          </p>
        </MoreInfoElement>
      </h2>
      <span
        title={`${numberFormatter.ESP.format(MonetaryValue.ESP(totalStake).toNumericLiteralString())} / ${numberFormatter.ESP.format(MonetaryValue.ESP(totalSupply ?? 0n).toNumericLiteralString())}`}
      >
        <PercentageText percentage={percent} />
      </span>
    </NetworkStatValue>
  );
};
