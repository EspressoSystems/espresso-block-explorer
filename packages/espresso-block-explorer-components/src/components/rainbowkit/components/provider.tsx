import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import React from 'react';
import {
  RainbowKitAccount,
  RainbowKitAccountAddressContext,
  RainbowKitAccountContext,
  RainbowKitAccountDisplayBalanceContext,
  RainbowKitAccountDisplayNameContext,
  RainbowKitAccountENSAvatarContext,
  RainbowKitAccountENSNameContext,
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
              <ProvideRainbowKitAccount
                value={(account as RainbowKitAccount) ?? null}
              >
                <RainbowKitChainContext.Provider value={chain ?? null}>
                  <RainbowKitAuthenticationStatusContext.Provider
                    value={authenticationStatus ?? null}
                  >
                    {children}
                  </RainbowKitAuthenticationStatusContext.Provider>
                </RainbowKitChainContext.Provider>
              </ProvideRainbowKitAccount>
            </RainbowKitModalContext.Provider>
          </RainbowKitMountedContext.Provider>
        );
      }}
    </ConnectButton.Custom>
  );
};

export interface ProvideRainbowKitAccountProps {
  value: RainbowKitAccount | null;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideRainbowKitAccount is a React component that provides the RainbowKit
 * account information to its children via the RainbowKitAccountContext.
 */
export const ProvideRainbowKitAccount: React.FC<
  ProvideRainbowKitAccountProps
> = ({ value, children }) => {
  return (
    <RainbowKitAccountContext.Provider value={value}>
      <RainbowKitAccountAddressContext.Provider
        value={(value?.address ?? null) as `0x${string}` | null}
      >
        <RainbowKitAccountDisplayBalanceContext.Provider
          value={value?.displayBalance ?? null}
        >
          <RainbowKitAccountDisplayNameContext.Provider
            value={value?.displayName ?? null}
          >
            <RainbowKitAccountENSAvatarContext.Provider
              value={value?.ensAvatar ?? null}
            >
              <RainbowKitAccountENSNameContext.Provider
                value={value?.ensName ?? null}
              >
                {children}
              </RainbowKitAccountENSNameContext.Provider>
            </RainbowKitAccountENSAvatarContext.Provider>
          </RainbowKitAccountDisplayNameContext.Provider>
        </RainbowKitAccountDisplayBalanceContext.Provider>
      </RainbowKitAccountAddressContext.Provider>
    </RainbowKitAccountContext.Provider>
  );
};
