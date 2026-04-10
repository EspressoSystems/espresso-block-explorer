import { PromiseResolver } from '@/components/data';
import { DataContext } from '@/contexts/data_provider';
import { StakingAPIServiceContext } from '@/contexts/staking_api_service_context';
import { ActiveNodeSetSnapshot } from '@/service/espresso_staking_api_service/validators_active/active_node_set_snapshot';
import { default as React } from 'react';

/**
 * ActiveValidatorsContext provides a React Context
 * for the current active validator set snapshot.
 */
export const ActiveValidatorsContext =
  React.createContext<null | ActiveNodeSetSnapshot>(null);

/**
 * RetrieveActiveValidators is a React Component that retrieves
 * the current active validator set and provides it
 * via the ActiveValidatorsContext to its children.
 */
export const RetrieveActiveValidators: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const l1DelegationAPI = React.useContext(StakingAPIServiceContext);
  const activeValidatorListPromise = l1DelegationAPI.validatorsActive.active();

  return (
    <PromiseResolver promise={activeValidatorListPromise}>
      <ResolveActiveValidators>{children}</ResolveActiveValidators>
    </PromiseResolver>
  );
};

/**
 * ResolveActiveValidators is a React Component that
 * resolves the active validator set snapshot from the DataContext
 * and provides it via the ActiveValidatorsContext to its children.
 */
const ResolveActiveValidators: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ??
    null) as null | ActiveNodeSetSnapshot;
  return (
    <ActiveValidatorsContext.Provider value={data}>
      {children}
    </ActiveValidatorsContext.Provider>
  );
};
