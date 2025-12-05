import EspressoLogoAndTitle from '@/visual/icons/espresso_logo_and_title';
import React from 'react';
import { ConnectWalletButton } from './connect_wallet_button';
import './delegation_header.css';

interface HeaderProps {}

/**
 * DelegationHeader is the header component for the Delegation UI page.
 */
export const DelegationHeader: React.FC<HeaderProps> = (props) => {
  return (
    <header className="delegation" {...props}>
      <EspressoLogoAndTitle />
      <ConnectWalletButton />
    </header>
  );
};
