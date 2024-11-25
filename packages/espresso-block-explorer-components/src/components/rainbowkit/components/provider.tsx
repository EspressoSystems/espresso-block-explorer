import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import React from 'react';
import {
  RainbowKitAccount,
  RainbowKitAccountContext,
  RainbowKitAuthenticationStatusContext,
  RainbowKitChainContext,
  RainbowKitModalContext,
  RainbowKitMountedContext,
} from '../contexts/contexts';

export interface RainbowKitContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * RainbowKitContextInjector is a component that injects the RainbowKit context
 * into the component tree utilizing RainbowKit's ConnectButton.Custom.  This
 * component itself does not automatically renders a ConnectButton, but instead
 * it takes the components of the RainbowKit context and injects them via
 * various Context providers into the component tree for easy, narrow, access.
 *
 * This component provides the following contexts to all children:
 * - RainbowKitMountedContext
 * - RainbowKitModalContext
 * - RainbowKitAccountContext
 * - RainbowKitChainContext
 * - RainbowKitAuthenticationStatusContext
 */
export const RainbowKitContextInjector: React.FC<
  RainbowKitContextProviderProps
> = ({ children }) => {
  return (
    <ConnectButton.Custom>
      {(renderProps) => {
        const {
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          accountModalOpen,
          chainModalOpen,
          connectModalOpen,
          authenticationStatus,
          mounted,
        } = renderProps;

        return (
          <RainbowKitMountedContext.Provider value={mounted}>
            <RainbowKitModalContext.Provider
              value={{
                openAccountModal,
                openChainModal,
                openConnectModal,
                accountModalOpen,
                chainModalOpen,
                connectModalOpen,
              }}
            >
              <RainbowKitAccountContext.Provider
                value={(account as RainbowKitAccount) ?? null}
              >
                <RainbowKitChainContext.Provider value={chain ?? null}>
                  <RainbowKitAuthenticationStatusContext.Provider
                    value={authenticationStatus ?? null}
                  >
                    {children}
                  </RainbowKitAuthenticationStatusContext.Provider>
                </RainbowKitChainContext.Provider>
              </RainbowKitAccountContext.Provider>
            </RainbowKitModalContext.Provider>
          </RainbowKitMountedContext.Provider>
        );
      }}
    </ConnectButton.Custom>
  );
};
