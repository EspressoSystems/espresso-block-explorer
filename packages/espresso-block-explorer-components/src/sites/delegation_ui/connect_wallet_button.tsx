import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit/contexts/contexts';
import Text from '@/components/text/Text';
import WalletAddressText from '@/components/text/WalletAddressText';
import LogOut from '@/components/visual/icons/feather/logout';
import Plus from '@/components/visual/icons/feather/plus';
import { hexArrayBufferCodec } from '@/convert/codec';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import './connect_wallet_button.css';
import ButtonLarge from './elements/buttons/button_large';

/**
 * ConnectWalletButton is a button that will open the RainbowKit Wallet Connect
 * Modal when pressed.
 */
export const ConnectWalletButton: React.FC = () => {
  const modals = React.useContext(RainbowKitModalContext);
  const address = React.useContext(RainbowKitAccountAddressContext);

  if (address) {
    return (
      <span className="wallet-connected-container">
        <span className="wallet-address-preview">
          <WalletAddressText
            value={new WalletAddress(hexArrayBufferCodec.decode(address))}
          />
        </span>
        &nbsp;
        <ButtonLarge
          className="connect-wallet connected-wallet"
          onClick={modals.openAccountModal}
        >
          <span className="disconnect-label">
            <Text text="Disconnect" />
          </span>
          <LogOut />
        </ButtonLarge>
      </span>
    );
  }

  return (
    <ButtonLarge className="connect-wallet" onClick={modals.openConnectModal}>
      <Plus />
      <Text text="Connect Wallet" />
    </ButtonLarge>
  );
};
