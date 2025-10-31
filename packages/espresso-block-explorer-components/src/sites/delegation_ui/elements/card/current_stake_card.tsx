import MoneyText from '@/components/text/MoneyText';
import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { TotalStakeContext } from 'sites/delegation_ui/contexts/total_stake_context';
import { TotalSupplyContext } from 'sites/delegation_ui/contexts/total_supply_context';
import { CardContentValue } from './card_content_value';
import { CardContentExtra } from './card_extra';
import { CardValue } from './card_value';

/**
 * CurrentStakeCard displays the current stake as a percentage of total supply,
 * along with total staked and total supply values.
 */
export const CurrentStakeCard: React.FC = () => {
  const totalStake = React.useContext(TotalStakeContext);
  const totalSupply = React.useContext(TotalSupplyContext);

  return (
    <CardValue className="current-stake-card">
      <h2>
        <Text text="Currently Staked" />
      </h2>
      <CardContentValue>
        <PercentageText percentage={Number(totalStake) / Number(totalSupply)} />
      </CardContentValue>
      <CardContentExtra>
        <div className="extra-stat">
          <h3>
            <Text text="Total Staked" />
          </h3>
          <MoneyText money={MonetaryValue.ESP(totalStake)} />
        </div>

        <div className="extra-stat">
          <h3>
            <Text text="Total Supply" />
          </h3>
          {totalSupply === null || totalSupply === undefined ? (
            <Text text="-" />
          ) : (
            <MoneyText money={MonetaryValue.ESP(totalSupply)} />
          )}
        </div>
      </CardContentExtra>
    </CardValue>
  );
};
