import {
  RainbowKitChainContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import Text from '@/components/text/text';
import React from 'react';
import { WagmiContext } from 'wagmi';
import ButtonLarge from './elements/buttons/button_large';
import './wrong_network_check.css';

/**
 * WrongNetworkCheck is a component that checks if a user is connected to the
 * correct network. If not, it displays a warning and a button to switch to the
 * correct network.
 */
export const WrongNetworkCheck: React.FC = () => {
  const chainInfo = React.useContext(RainbowKitChainContext);
  const config = React.useContext(WagmiContext);
  const rainbowKitModal = React.useContext(RainbowKitModalContext);

  if (!chainInfo || !config) {
    return null;
  }

  const [firstChain = null] = config.chains;
  if (!firstChain) {
    return null;
  }

  if (firstChain.id === chainInfo.id) {
    return null;
  }

  return (
    <div className="delegation-header-wrong-network-warning">
      <Text text="Wrong Network Selected" />
      <ButtonLarge
        onClick={() => {
          rainbowKitModal.openChainModal();
        }}
      >
        <Text text={`Connect to ${firstChain.name}`} />
      </ButtonLarge>
    </div>
  );
};
