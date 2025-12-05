import WalletAddressText from '@/components/text/wallet_address_text';
import WalletAddress from '@/models/wallet_address/wallet_address';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';
import CopyWalletAddress from './copy_wallet_address';

/**
 * NameNodeCell displays the wallet address of a validator node. It is
 * actually intended to show the name, and an icon for the validator,
 * but it's currently unclear how we would source this information.
 */
export const NodeNameCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const walletAddress = new WalletAddress(validator.address);

  return (
    <CopyWalletAddress value={walletAddress}>
      <WalletAddressText value={walletAddress} />
    </CopyWalletAddress>
  );
};
