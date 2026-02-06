import MoneyText from '@/components/text/money_text';
import Text from '@/components/text/text';
import { CurrentTotalStakedContext } from '@/delegation_ui/contexts/current_total_staked_context';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { ESPBalanceContext } from '@/sites/delegation_ui/contexts/esp_balance_context';
import React from 'react';
import { CardContentValue } from './card_content_value';
import { CardValue } from './card_value';

/**
 * TotalBalanceCard is a component that displays the Total Balance of the
 * active Wallet.
 *
 * Total Balance is defined as the sum of the Available Balance and the
 * Staked Balance.
 *
 * @todo: should this include pending Rewards as well?
 */
export const TotalBalanceCard: React.FC = () => {
  const balance = React.useContext(ESPBalanceContext);
  const totalStaked = React.useContext(CurrentTotalStakedContext);

  return (
    <CardValue className="estimated-apr-card">
      <h2>
        <Text text="Total Balance" />
      </h2>
      <CardContentValue>
        <MoneyText money={MonetaryValue.ESP(balance + totalStaked)} />
      </CardContentValue>
    </CardValue>
  );
};
