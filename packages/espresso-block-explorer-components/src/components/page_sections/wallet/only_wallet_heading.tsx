import { LabeledButton } from '@/components/hid';
import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import { Text } from '@/components/text';
import React from 'react';
import { CurrentWalletDisplay } from './current_wallet_display';
import './only_wallet_heading.css';

/**
 * ConnectWalletButton is a button that will open the RainbowKit Wallet Connect
 * Modal when pressed.
 */
const ConnectWalletButton: React.FC = () => {
  const modals = React.useContext(RainbowKitModalContext);

  return (
    <LabeledButton onClick={modals.openConnectModal}>
      <Text text="Connect Wallet" />
    </LabeledButton>
  );
};

/**
 * WalletInfo displays information about the current wallet.  This is used
 * to identify the current wallet that the page is utilizing.
 */
const WalletInfo: React.FC = () => {
  return <CurrentWalletDisplay />;
};

/**
 * OnlyWalletHeadingContent is a component that displays the content of the
 * OnlyWalletHeading.  It checks if the user is connected to a wallet and
 * displays either the wallet information or a button to connect a wallet.
 */
const OnlyWalletHeadingContent: React.FC = () => {
  const address = React.useContext(RainbowKitAccountAddressContext);
  if (!address) {
    // The user is not currently connected to an account via his / her wallet.
    // So we should provide them with the option to connect his / her wallet.
    return <ConnectWalletButton />;
  }

  return <WalletInfo />;
};

interface OnlyWalletHeadingProps {}

/**
 * OnlyWalletHeading is a component that is a header that displays only the
 * current wallet information, or a button to connect a wallet if none is
 * connected.
 *
 * This component is expected to be a header of only the wallet information
 * aligned to the right side of the page.
 */
const OnlyWalletHeading: React.FC<OnlyWalletHeadingProps> = (props) => {
  return (
    <header className="only-wallet" {...props}>
      <OnlyWalletHeadingContent />
    </header>
  );
};

export default OnlyWalletHeading;
