import React from 'react';
import { RainbowKitMountedContext } from '../contexts/contexts';

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
export const RainbowKitMountedGuard: React.FC<RainbowKitMountedGuardProps> = ({
  children,
}) => {
  const isMounted = React.useContext(RainbowKitMountedContext);
  if (!isMounted) {
    return null; // If RainbowKit is not mounted, do not render the children
  }

  return children;
};
