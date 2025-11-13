import { L1Methods } from '@/contracts/l1/l1_interface';
import { L1MethodsRemote } from '@/contracts/l1/l1_remote';
import React from 'react';
import { Config, useConfig } from 'wagmi';

export const L1MethodsContext = React.createContext<null | L1Methods<
  Config,
  number
>>(null);

export const ProvideL1Methods: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProvideL1MethodsUtilizingWagmi>{children}</ProvideL1MethodsUtilizingWagmi>
  );
};

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
