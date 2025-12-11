import { addClassToClassName } from '@/components/higher_order';
import Text from '@/components/text/text';
import WalletAddressText from '@/components/text/wallet_address_text';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import { ValidatorNodeContext } from '../../contexts/validator_node_context';
import CopyWalletAddress from '../../validator_nodes_table/common/cells/copy_wallet_address';

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
