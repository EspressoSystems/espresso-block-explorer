import { IconButton } from '@/components/hid';
import CopyButton from '@/components/hid/buttons/copy_button/CopyButton';
import {
  RainbowKitAccountContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import { Text } from '@/components/text';
import ChevronRight from '@/components/visual/icons/ChevronRight';
import React from 'react';
import './current_wallet_display.css';

const CurrentWalletENSAvatar: React.FC = () => {
  // Do we have an ENS Avatar?
  const account = React.useContext(RainbowKitAccountContext);
  const ensAvatar = account?.ensAvatar;
  if (!ensAvatar) {
    // No ENS Avatar, so we don't display anything.
    return null;
  }

  // We have an ENS avatar, so we want to display it to make it
  // easier for the user to identify his/her wallet.

  return (
    <img
      className="current-wallet-ens-avatar"
      title="Your ENS Avatar"
      src={ensAvatar}
      alt="ENS Avatar"
    />
  );
};

const CurrentWalletDisplayLabel: React.FC = () => {
  // Do we have an ENS Name?
  const account = React.useContext(RainbowKitAccountContext);
  if (!account) {
    return null;
  }

  const ensName = account.ensName;
  const address = account.address;
  const displayName = account.displayName;

  return (
    <span className="inline">
      <Text text={displayName} />
      <CopyButton content={ensName ?? address} />
    </span>
  );
};

export interface CurrentWalletDisplayProps {}

/**
 * CurrentWalletDisplay is a React component that displays the currently
 * connected wallet.  This is useful for identifying the current wallet for the
 * interacting user.
 */
export const CurrentWalletDisplay: React.FC<CurrentWalletDisplayProps> = () => {
  const account = React.useContext(RainbowKitAccountContext);
  const modals = React.useContext(RainbowKitModalContext);

  if (!account) {
    // No wallet connected
    return null;
  }

  return (
    <div className="current-wallet-display">
      <CurrentWalletENSAvatar />
      <CurrentWalletDisplayLabel />
      <IconButton onClick={modals.openAccountModal}>
        <ChevronRight />
      </IconButton>
      <IconButton onClick={modals.openChainModal}>
        <ChevronRight />
      </IconButton>
    </div>
  );
};
