import { EspressoLogoAndTitle } from '@/components/visual/icons';
import { default as React } from 'react';
import { ConnectWalletButton } from './connect_wallet_button';
import './delegation_header.css';
import { ThemeToggle } from './theme_toggle';
import { WrongNetworkCheck } from './wrong_network_check';

interface HeaderProps {}

/**
 * DelegationHeader is the header component for the Delegation UI page.
 */
export const DelegationHeader: React.FC<HeaderProps> = (props) => {
  return (
    <header className="delegation" {...props}>
      <EspressoLogoAndTitle />
      <WrongNetworkCheck />
      <div className="delegation-header-actions">
        <ThemeToggle />
        <ConnectWalletButton />
      </div>
    </header>
  );
};
