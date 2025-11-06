import MoneyText from '@/components/text/MoneyText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { CardContentValue } from './card_content_value';
import { CardValue } from './card_value';

/**
 * TotalStakedCard is a component that displays the Total Staked amount.
 *
 * This is meant to represent the total amount of ESP that has been staked by
 * the active wallet.
 */
export const TotalStakedCard: React.FC = () => {
  return (
    <CardValue className="estimated-apr-card">
      <h2>
        <Text text="Total Staked" />
      </h2>
      <CardContentValue>
        <MoneyText money={MonetaryValue.ESP(0n)} />
      </CardContentValue>
    </CardValue>
  );
};
