import { DataContext } from '@/components/contexts/DataProvider';
import { PromiseResolver } from '@/components/data';
import { FullValidatorSetSnapshot } from '@/service/espresso_l1_validator_service/validators_all/full_validator_set_snapshot';
import React from 'react';
import { L1ValidatorServiceContext } from './l1_validator_api_context';

/**
 * AllValidatorsContext provides a React Context
 * for the current full validator set snapshot.
 */
export const AllValidatorsContext =
  React.createContext<null | FullValidatorSetSnapshot>(null);

/**
 * RetrieveAllValidators is a React Component that retrieves
 * the current full validator set and provides it
 * via the AllValidatorsContext to its children.
 */
export const RetrieveAllValidators: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const l1DelegationAPI = React.useContext(L1ValidatorServiceContext);

  const fullValidatorListPromise = l1DelegationAPI.validatorsAll.snapshot();

  return (
    <PromiseResolver promise={fullValidatorListPromise}>
      <ResolveAllValidators>{children}</ResolveAllValidators>
    </PromiseResolver>
  );
};

/**
 * ResolveAllValidators is a React Component that
 * resolves the full validator set snapshot from the DataContext
 * and provides it via the AllValidatorsContext to its children.
 */
const ResolveAllValidators: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = React.useContext(DataContext) as null | FullValidatorSetSnapshot;
  return (
    <AllValidatorsContext.Provider value={data}>
      {children}
    </AllValidatorsContext.Provider>
  );
};
