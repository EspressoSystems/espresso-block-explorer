import { DataContext } from '@/components/contexts/DataProvider';
import { PromiseResolver } from '@/components/data';
import { ActiveNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_active/active_node_set_snapshot';
import React from 'react';
import { L1ValidatorServiceContext } from './l1_validator_api_context';

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
  const l1DelegationAPI = React.useContext(L1ValidatorServiceContext);
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
