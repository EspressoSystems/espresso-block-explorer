import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';

export interface FullWalletAddressTextProps {
  value: WalletAddress;
}
/**
 * FullWalletAddressText is a simple Text component that renders the given
 * WalletAddress with its `toString()` method.
 */
const FullWalletAddressText: React.FC<FullWalletAddressTextProps> = (props) => {
  return props.value.toString();
};

export default FullWalletAddressText;
