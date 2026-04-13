import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit/contexts/contexts';
import { Text, WalletAddressText } from '@/components/text';
import { DownloadTray } from '@/components/visual/icons/sharp_line';
import { Add1 } from '@/components/visual/icons/sharp_line';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { WalletAddress } from '@/models/wallet_address';
import { default as React } from 'react';
import './connect_wallet_button.css';
import { default as ButtonLarge } from './elements/buttons/button_large';

/**
 * ConnectWalletButton is a button that will open the RainbowKit Wallet Connect
 * Modal when pressed.
 */
export const ConnectWalletButton: React.FC = () => {
  const modals = React.useContext(RainbowKitModalContext);
  const address = React.useContext(RainbowKitAccountAddressContext);

  if (address) {
    return (
      <span className="wallet-container wallet-connected-container">
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
          <DownloadTray className="rotate-90" />
        </ButtonLarge>
      </span>
    );
  }

  return (
    <ButtonLarge
      className="wallet-container connect-wallet"
      onClick={modals.openConnectModal}
    >
      <Add1 />
      <Text text="Connect Wallet" />
    </ButtonLarge>
  );
};
