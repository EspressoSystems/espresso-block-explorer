import { default as React } from '../../../../../../node_modules/react';

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
export declare const RainbowKitContextInjector: React.FC<RainbowKitContextProviderProps>;
