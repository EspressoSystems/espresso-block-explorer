import { default as WalletAddress } from '../../../../../../../../../../src/models/wallet_address/wallet_address';
import { default as React } from 'react';
export interface FullWalletAddressTextProps {
    value: WalletAddress;
}
/**
 * FullWalletAddressText is a simple Text component that renders the given
 * WalletAddress with its `toString()` method.
 */
declare const FullWalletAddressText: React.FC<FullWalletAddressTextProps>;
export default FullWalletAddressText;
