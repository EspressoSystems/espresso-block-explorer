import MoneyText from '@/components/text/MoneyText';
import Text from '@/components/text/Text';
import { foldRIterable } from '@/functional/functional';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { WalletSnapshotContext } from 'sites/delegation_ui/contexts/wallet_snapshot_context';
import { CardContentValue } from './card_content_value';
import { CardValue } from './card_value';

/**
 * TotalStakedCard is a component that displays the Total Staked amount.
 *
 * This is meant to represent the total amount of ESP that has been staked by
 * the active wallet.
 */
export const TotalStakedCard: React.FC = () => {
  const snapshot = React.useContext(WalletSnapshotContext);

  if (!snapshot) {
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
  }

  const totalStaked = foldRIterable(
    (acc, node) => acc + node.amount,
    0n,
    snapshot.nodes,
  );

  return (
    <CardValue className="estimated-apr-card">
      <h2>
        <Text text="Total Staked" />
      </h2>
      <CardContentValue>
        <MoneyText money={MonetaryValue.ESP(totalStaked)} />
      </CardContentValue>
    </CardValue>
  );
};
