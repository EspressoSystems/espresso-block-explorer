import MoneyText from '@/components/text/money_text';
import Text from '@/components/text/text';
import { WalletSnapshotContext } from '@/delegation_ui/contexts/wallet_snapshot_context';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import { RainbowKitAccountAddressContext } from 'espresso-block-explorer-components';
import React from 'react';

/**
 * MyStakeCell displays the percentage of missed slots for a validator.
 */
export const MyStakeCell: React.FC = () => {
  const address = React.useContext(RainbowKitAccountAddressContext);
  const validator = React.useContext(ValidatorNodeContext);
  const wallet = React.useContext(WalletSnapshotContext);

  const delegation =
    wallet?.nodes?.find((d) => d.nodeText === validator.addressText) ?? null;

  if (!address || !wallet || !delegation) {
    return <Text text="-" />;
  }

  return <MoneyText money={MonetaryValue.ESP(delegation.amount)} />;
};
