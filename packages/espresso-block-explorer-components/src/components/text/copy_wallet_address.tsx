import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import CopyButton from '../hid/buttons/copy_button/copy_button';
import './inline.css';

export interface CopyWalletAddressProps {
  value: WalletAddress;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * CopyWalletAddress is a component that will display a `CopyButton` with the
 * contents for the `CopyButton` the EIP-55 Formatted Wallet Address
 */
const CopyWalletAddress: React.FC<CopyWalletAddressProps> = (props) => {
  return (
    <span className="inline">
      {props.children}
      <CopyButton content={props.value.toString()} />
    </span>
  );
};

export default CopyWalletAddress;
