import MoneyText from '@/components/text/money_text';
import Text from '@/components/text/text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { NodeAddressContext } from '@/sites/delegation_ui/contexts/node_address_context';
import { PendingUndelegationsContext } from '@/sites/delegation_ui/contexts/pending_undelegations_context';
import React from 'react';

/**
 * StakedPendingUndelegationCell displays the amount staked to a validator node that is
 * pending undelegations
 */
export const StakedPendingUndelegationCell: React.FC = () => {
  // const totalStake = React.useContext(TotalStakeContext);
  const pendingUndelegation = React.useContext(PendingUndelegationsContext);
  const nodeAddress = React.useContext(NodeAddressContext);

  const staked = pendingUndelegation.get(nodeAddress)?.amount ?? null;

  if (staked === null) {
    // This is not expected to happen if the data is already limited to only
    // the active and redeemable pending undelegations.
    return <Text text="-" />;
  }

  return <MoneyText money={MonetaryValue.ESP(staked)} />;
};
