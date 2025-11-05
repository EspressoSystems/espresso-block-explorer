import { ProvideRainbowKitAccount } from '@/components/rainbowkit/components/provider';
import {
  RainbowKitAccount,
  RainbowKitAuthenticationStatusContext,
  RainbowKitChain,
  RainbowKitChainContext,
  RainbowKitModalContext,
  RainbowKitMountedContext,
} from '@/components/rainbowkit/contexts/contexts';
import { useState } from 'react';

/**
 * MockRainbowKitState defines the shape of the mock state
 * used in the MockRainbowKit component.
 */
interface MockRainbowKitState {
  account: null | RainbowKitAccount;
  chain: null | RainbowKitChain;
}

/**
 * MockAddress is a predefined mock address used in the
 * MockRainbowKit component.
 */
export const MockAddress = '0xdeadc0dedeadc0dedeadc0dedeadc0dedeadc0de';

/**
 * MockAccount is a predefined mock account used in the
 * MockRainbowKit component.
 */
const MockAccount: RainbowKitAccount = {
  address: MockAddress,
  displayName: 'mocked_account.eth',
  hasPendingTransactions: false,
};

/**
 * MockChain is a predefined mock chain used in the
 * MockRainbowKit component.
 */
const MockChain: RainbowKitChain = {
  id: 31337,
  hasIcon: false,
};

/**
 * useMockRainbowKitState is a custom hook that
 * provides mock state and functions for RainbowKit contexts.
 */
function useMockRainbowKitState() {
  // Mocked RainbowKit State
  const [state, setState] = useState<MockRainbowKitState>({
    account: null,
    chain: null,
  });

  return {
    openAccountModal: () => {
      setState((existingState) => ({
        ...existingState,
        account: null,
        chain: null,
      }));
    },
    openChainModal: () => {
      setState((existingState) => ({
        ...existingState,
        chain: MockChain,
      }));
    },
    openConnectModal: () => {
      setState((existingState) => ({
        ...existingState,
        account: MockAccount,
        chain: MockChain,
      }));
    },
    accountModalOpen: false,
    chainModalOpen: false,
    connectModalOpen: false,
    account: state.account,
    chain: state.chain,
    authenticationStatus:
      state.account === null ? 'unauthenticated' : 'authenticated',
  } as const;
}

/**
 * MockRainbowKit is a React component that provides
 * mock implementations of RainbowKit contexts for testing
 * and development purposes.
 *
 * When it comes to testing UI / UX and layout of current designs, it is
 * helpful to have a mock implementation of RainbowKit components available
 * and ready to use in order to generate a predefined controllable state.
 *
 * Such configurations allow for the accounting of various edge cases
 * and scenarios that may arise during actual usage of the application.
 */
export const MockRainbowKit: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const {
    openAccountModal,
    openChainModal,
    openConnectModal,
    accountModalOpen,
    chainModalOpen,
    connectModalOpen,
    account,
    chain,
    authenticationStatus,
  } = useMockRainbowKitState();
  return (
    <RainbowKitMountedContext.Provider value={true}>
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
};
