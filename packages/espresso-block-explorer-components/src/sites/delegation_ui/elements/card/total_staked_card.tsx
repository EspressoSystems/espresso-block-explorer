import { MoneyText } from '@/components/text';
import { Text } from '@/components/text';
import { CurrentTotalStakedContext } from '@/delegation_ui/contexts/current_total_staked_context';
import { MonetaryValue } from '@/models/block_explorer';
import { default as React } from 'react';
import { CardContentValue } from './card_content_value';
import { CardValue } from './card_value';

/**
 * TotalStakedCard is a component that displays the Total Staked amount.
 *
 * This is meant to represent the total amount of ESP that has been staked by
 * the active wallet.
 */
export const TotalStakedCard: React.FC = () => {
  const totalStaked = React.useContext(CurrentTotalStakedContext);

  return (
    <CardValue className="estimated-apr-card">
      <h2>
        <Text text="Total Delegated" />
      </h2>
      <CardContentValue>
        <MoneyText money={MonetaryValue.ESP(totalStaked)} />
      </CardContentValue>
    </CardValue>
  );
};
