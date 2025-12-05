import { default as WalletAddress } from '../../../../../../../../../../src/models/wallet_address/wallet_address';
import { default as React } from 'react';
export interface CopyWalletAddressProps {
    value: WalletAddress;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * CopyWalletAddress is a component that will display a `CopyButton` with the
 * contents for the `CopyButton` the EIP-55 Formatted Wallet Address
 */
declare const CopyWalletAddress: React.FC<CopyWalletAddressProps>;
export default CopyWalletAddress;
