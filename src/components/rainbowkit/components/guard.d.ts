import { default as React } from 'react';
export interface RainbowKitMountedGuardProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * RainbowKitMountedGuard is a React component that will only render its
 * children if the RainbowKit is mounted.
 *
 * This is a useful guard to ensure that components relying on
 * RainbowKit's context are only rendered when RainbowKit is fully initialized.
 * This prevents potential issues with accessing context values before
 * RainbowKit is ready, such as when using the ConnectButton or other
 * RainbowKit components that depend on the mounted state.
 */
export declare const RainbowKitMountedGuard: React.FC<RainbowKitMountedGuardProps>;
/**
 * WalletConnectedGuard is a React component that will only render its
 * children if the user has a wallet connected.
 *
 * This guard checks the RainbowKit context to determine if a wallet
 * address is available, indicating that a wallet is connected.
 * If no wallet is connected, it will not render the children components.
 * This is useful for protecting routes or components that should
 * only be accessible when a user has connected their wallet.
 */
export declare const WalletConnectedGuard: React.FC<RainbowKitMountedGuardProps>;
