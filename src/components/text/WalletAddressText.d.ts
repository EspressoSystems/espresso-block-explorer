import { default as WalletAddress } from '../../../../../../../../../../src/models/wallet_address/wallet_address';
import { default as React } from 'react';
export interface WalletAddressTextProps {
    value: WalletAddress;
}
/**
 * WalletAddressText is a simple Text component that renders the given
 * WalletAddress with its `toString()` method.
 */
declare const WalletAddressText: React.FC<WalletAddressTextProps>;
export default WalletAddressText;
