import { MoneyText, Text } from '@/components/text';
import { MonetaryValue } from '@/models/block_explorer';
import { ESPBalanceContext } from '@/sites/delegation_ui/contexts/esp_balance_context';
import { default as React } from 'react';
import { CardContentValue } from './card_content_value';
import { CardValue } from './card_value';

/**
 * AvailableBalanceCard is a component that displays the Available Balance of
 * the active Wallet.
 */
export const AvailableBalanceCard: React.FC = () => {
  const balance = React.useContext(ESPBalanceContext);

  return (
    <CardValue className="estimated-apr-card">
      <h2>
        <Text text="Available Balance" />
      </h2>
      <CardContentValue>
        <MoneyText money={MonetaryValue.ESP(balance)} />
      </CardContentValue>
    </CardValue>
  );
};
