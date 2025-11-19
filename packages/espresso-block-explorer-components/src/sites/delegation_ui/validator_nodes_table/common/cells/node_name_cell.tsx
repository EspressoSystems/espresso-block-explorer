import WalletAddressText from '@/components/text/WalletAddressText';
import WalletAddress from '@/models/wallet_address/wallet_address';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';

/**
 * NameNodeCell displays the wallet address of a validator node. It is
 * actually intended to show the name, and an icon for the validator,
 * but it's currently unclear how we would source this information.
 */
export const NodeNameCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  return <WalletAddressText value={new WalletAddress(validator.address)} />;
};
