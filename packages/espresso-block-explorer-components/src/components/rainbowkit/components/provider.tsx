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
  RainbowKitModalRefContext,
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
                    <ProvideRainbowKitModalReference>
                      {children}
                    </ProvideRainbowKitModalReference>
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

const kRainbowKitModalQuerySelector = 'body > div > [data-rk]';

/**
 * ProvideRainbowKitModalReference is a component that aims to determine when
 * the RainbowKit modal is present and available.
 *
 * Rainbowkit by itself does not provide the functionality to know when their
 * modals are present or not.  Furthermore, they don't provide any direct
 * functionality to allow us to know when a user has performed an action that
 * will dismiss the modals.
 *
 * Normally, this wouldn't be that larget of an issue.  However, since we're
 * utilizing `dialog` elements for our modals, when they're presented and the
 * RainbowKit modals attempt to spawn, they end up being hidden.
 *
 * As a result, it becomes very important to know when a RainbowKit modal is
 * being presented or not.
 *
 * Since we don't have any direct reference to a RainbowKit Modal, the best we
 * can hope for is to detect when their modals come and go.
 *
 * With the way we've structured things, we expect the modal itself to be
 * attached to `document.body`.  So we *should* be able to utilize a
 * `MutationObserver` to alert us to `HtmlBodyElement` modifications.  This
 * should also allow us to know when to look for the RainboKit's modal, or not
 * without greatly harming performance.
 */
const ProvideRainbowKitModalReference: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const bodyElement = React.useMemo(() => document.body, []);
  const [modalRef, setModalRef] = React.useState<null | HTMLDivElement>(null);
  const mutationObserver = React.useMemo(
    () =>
      new MutationObserver((mutationList) => {
        const found = mutationList.find(
          (mutation) => mutation.type === 'childList',
        );

        if (!found) {
          // Ignore mutations we don't care about.
          return;
        }

        const selectedElement = bodyElement.querySelector<HTMLDivElement>(
          kRainbowKitModalQuerySelector,
        );
        if (selectedElement === modalRef) {
          return;
        }

        // Change the modal ref.
        setModalRef(selectedElement);
      }),
    [bodyElement, modalRef, setModalRef],
  );

  React.useEffect(() => {
    // We're only interested in subtree mutations.
    mutationObserver.observe(bodyElement, {
      childList: true,
    });
    return () => {
      mutationObserver.disconnect();
    };
  }, [bodyElement, mutationObserver]);

  return (
    <RainbowKitModalRefContext.Provider value={modalRef}>
      {children}
    </RainbowKitModalRefContext.Provider>
  );
};
