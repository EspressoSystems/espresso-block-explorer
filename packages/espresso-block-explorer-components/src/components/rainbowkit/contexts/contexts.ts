import { AuthenticationStatus, ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

/**
 * ModalContextValue represents the interactions with RainbowKit's modal system.
 * This context contains the information and methods needed in order to determine
 * whether a modal is up, and to open the modals should they not be.
 */
export interface ModalContextValue {
  openAccountModal: () => void;
  openChainModal: () => void;
  openConnectModal: () => void;
  accountModalOpen: boolean;
  chainModalOpen: boolean;
  connectModalOpen: boolean;
}

/**
 * RainbowKitModalContext is a context that provides the details for the
 * RainbowKit modals. It's value is a ModalContextValue object.  When not
 * provided this default implementation indicates that no modals are open,
 * and the methods to open the modals are no-ops.
 */
export const RainbowKitModalContext = React.createContext<ModalContextValue>({
  openAccountModal: () => {},
  openChainModal: () => {},
  openConnectModal: () => {},
  accountModalOpen: false,
  chainModalOpen: false,
  connectModalOpen: false,
});

/**
 * RainbowKitMountedContext is a context that provides a boolean value to
 * indicate whether the RainbowKit has been mounted.  This context is useful
 * to guard interactions with RainbowKit that may not be available until the
 * RainbowKit has been mounted.
 *
 * By default this context is false, and needs to be replaced with a context
 * that represents the actual mounted state of the RainbowKit.
 */
export const RainbowKitMountedContext = React.createContext<boolean>(false);

/**
 * CustomConnectButtonChildrenFunc is a forward type declaration for referencing
 * the information that is being returned from RainbowKit's ConnectButton.Custom
 * component.  This type is used to extract the RenderProps that are passed to
 * the children function of the ConnectButton.Custom component.
 */
type CustomConnectButtonChildrenFunc = Parameters<
  typeof ConnectButton.Custom
>[0]['children'];

/**
 * RenderProps is the type of the render props that are passed to the children
 * function of the ConnectButton.Custom component.  This type is used to
 * extract the account and chain information from the RainbowKit.
 */
type RenderProps = Parameters<CustomConnectButtonChildrenFunc>[0];

/**
 * RainbowKitAccount represents the account information that is available from
 * the RainbowKit.  This type is derived from the RenderProps of the
 * ConnectButton.Custom component.
 */
export type RainbowKitAccount = NonNullable<RenderProps['account']>;

/**
 * RainbowKitAccountAddressContext is a context that provides the wallet address
 * of the RainbowKit.  This context is useful for components that need to
 * display the wallet address.
 */
export const RainbowKitAccountAddressContext = React.createContext<
  `0x${string}` | null
>(null);

export const RainbowKitAccountDisplayBalanceContext = React.createContext<
  string | null
>(null);

export const RainbowKitAccountDisplayNameContext = React.createContext<
  string | null
>(null);

export const RainbowKitAccountENSAvatarContext = React.createContext<
  string | null
>(null);

export const RainbowKitAccountENSNameContext = React.createContext<
  string | null
>(null);

/**
 * RainbowKitAccountContext is a context that provides the RainbowKitAccount
 * object to the consuming components.  This context is useful for components
 * that need to display account information.
 *
 * By default this context is null, and needs to be replaced with a context
 * that represents the actual account linked information.
 */
export const RainbowKitAccountContext =
  React.createContext<RainbowKitAccount | null>(null);

/**
 * RainbowKitChain represents the chain information that is available from
 * the RainbowKit.
 */
export type RainbowKitChain = NonNullable<RenderProps['chain']>;

/**
 * RainbowKitChainContext is a context that provides the RainbowKitChain
 * object to the consuming components.  This context is useful for components
 * that need to display chain information.
 *
 * By default this context is null, and needs to be replaced with a context
 * that represents the actual chain linked information.
 */
export const RainbowKitChainContext =
  React.createContext<RainbowKitChain | null>(null);

/**
 * RainbowKitAuthenticationStatusContext is a context that provides the
 * authentication status of the RainbowKit.  This context is useful for
 * components that need to know if the user is authenticated.
 *
 * By default this context is null, and needs to be replaced with a context
 * that represents the actual authentication status.
 */
export const RainbowKitAuthenticationStatusContext =
  React.createContext<AuthenticationStatus | null>(null);
