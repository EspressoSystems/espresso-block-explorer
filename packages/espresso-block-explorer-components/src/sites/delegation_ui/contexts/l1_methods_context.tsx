import { L1Methods } from '@/contracts/l1/l1_interface';
import { L1MethodsRemote } from '@/contracts/l1/l1_remote';
import React from 'react';
import { Config, useConfig } from 'wagmi';

/**
 * L1MethodsContext is a React context that provides
 * the L1Methods instance.
 */
export const L1MethodsContext = React.createContext<null | L1Methods<
  Config,
  number
>>(null);

/**
 * ProvideL1Methods is a React component that provides
 * the L1Methods via L1MethodsContext.
 */
export const ProvideL1Methods: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProvideL1MethodsUtilizingWagmi>{children}</ProvideL1MethodsUtilizingWagmi>
  );
};

/**
 * ProvideL1MethodsUtilizingWagmi is a React component that provides
 * the L1Methods via L1MethodsContext.  It is created
 * and configured to use Wagmi for blockchain interactions.
 */
const ProvideL1MethodsUtilizingWagmi: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const config = useConfig();
  const l1Methods = new L1MethodsRemote(config, config.chains[0].id);

  return (
    <L1MethodsContext.Provider value={l1Methods}>
      {children}
    </L1MethodsContext.Provider>
  );
};
