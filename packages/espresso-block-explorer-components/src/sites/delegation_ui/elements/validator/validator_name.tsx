import { addClassToClassName } from '@/components/higher_order';
import CopyWalletAddress from '@/components/text/copy_wallet_address';
import Text from '@/components/text/text';
import WalletAddressText from '@/components/text/wallet_address_text';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import { ValidatorNodeContext } from '../../contexts/validator_node_context';

export interface ValidatorNameProps {
  className?: string;
}

export const ValidatorName: React.FC<ValidatorNameProps> = (props) => {
  const validator = React.useContext(ValidatorNodeContext);

  const nodeName = validator.metadata?.content?.name;

  if (!nodeName) {
    const walletAddress = new WalletAddress(validator.address);
    return (
      <CopyWalletAddress
        className={addClassToClassName(props.className, 'node-name')}
        value={walletAddress}
      >
        <WalletAddressText value={walletAddress} />
      </CopyWalletAddress>
    );
  }

  return (
    <span className={addClassToClassName(props.className, 'node-name')}>
      <Text text={nodeName} />
    </span>
  );
};
