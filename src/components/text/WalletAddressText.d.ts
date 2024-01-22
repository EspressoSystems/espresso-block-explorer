import React from 'react';
export interface WalletAddressTextProps {
    address: ArrayBuffer;
}
/**
 * WalletAddressText is a simple Text component that renders the Wallet Address
 * of a given data in a standard way.
 */
declare const WalletAddressText: React.FC<WalletAddressTextProps>;
export default WalletAddressText;
