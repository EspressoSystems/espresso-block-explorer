import { MoneyText } from '@/components/text';
import { Text } from '@/components/text';
import { MonetaryValue } from '@/models/block_explorer';
import { NodeAddressContext } from '@/sites/delegation_ui/contexts/node_address_context';
import { PendingExitsContext } from '@/sites/delegation_ui/contexts/pending_exits_context';
import { default as React } from 'react';

/**
 * StakedPendingExitCell displays the amount staked to a validator node that is
 * pending exit.
 */
export const StakedPendingExitCell: React.FC = () => {
  // const totalStake = React.useContext(TotalStakeContext);
  const pendingExits = React.useContext(PendingExitsContext);
  const nodeAddress = React.useContext(NodeAddressContext);

  const staked = pendingExits.get(nodeAddress)?.amount ?? null;

  if (staked === null) {
    // This is not expected to happen if the data is already limited to only
    // the active and redeemable pending exits.
    return <Text text="-" />;
  }

  return <MoneyText money={MonetaryValue.ESP(staked)} />;
};
