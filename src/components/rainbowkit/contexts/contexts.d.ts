import { AuthenticationStatus } from '@rainbow-me/rainbowkit';
import { default as React } from '../../../../../../node_modules/react';

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
export declare const RainbowKitModalContext: React.Context<ModalContextValue>;
/**
 * RainbowKitMountedContext is a context that provides a boolean value to
 * indicate whether the RainbowKit has been mounted.  This context is useful
 * to guard interactions with RainbowKit that may not be available until the
 * RainbowKit has been mounted.
 *
 * By default this context is false, and needs to be replaced with a context
 * that represents the actual mounted state of the RainbowKit.
 */
export declare const RainbowKitMountedContext: React.Context<boolean>;
/**
 * RainbowKitAccount represents the account information that is available from
 * the RainbowKit.
 */
export interface RainbowKitAccount {
    address: `0x${string}`;
    balanceDecimals?: number;
    balanceFormatted?: string;
    balanceSymbol?: string;
    displayBalance?: string;
    displayName: string;
    ensAvatar?: string;
    ensName?: string;
    hasPendingTransactions: boolean;
}
/**
 * RainbowKitAccountContext is a context that provides the RainbowKitAccount
 * object to the consuming components.  This context is useful for components
 * that need to display account information.
 *
 * By default this context is null, and needs to be replaced with a context
 * that represents the actual account linked information.
 */
export declare const RainbowKitAccountContext: React.Context<RainbowKitAccount | null>;
/**
 * RainbowKitChain represents the chain information that is available from
 * the RainbowKit.
 */
export interface RainbowKitChain {
    hasIcon: boolean;
    iconUrl?: string;
    iconBackground?: string;
    id: number;
    name?: string;
    unsupported?: boolean;
}
/**
 * RainbowKitChainContext is a context that provides the RainbowKitChain
 * object to the consuming components.  This context is useful for components
 * that need to display chain information.
 *
 * By default this context is null, and needs to be replaced with a context
 * that represents the actual chain linked information.
 */
export declare const RainbowKitChainContext: React.Context<RainbowKitChain | null>;
/**
 * RainbowKitAuthenticationStatusContext is a context that provides the
 * authentication status of the RainbowKit.  This context is useful for
 * components that need to know if the user is authenticated.
 *
 * By default this context is null, and needs to be replaced with a context
 * that represents the actual authentication status.
 */
export declare const RainbowKitAuthenticationStatusContext: React.Context<AuthenticationStatus | null>;
