import { PromiseResolver } from '@/components/data';
import { DataContext } from '@/contexts/data_provider';
import { StakingAPIServiceContext } from '@/contexts/staking_api_service_context';
import { neverPromise } from '@/functional/functional_async';
import { FullNodeSetSnapshot } from '@/service/espresso_staking_api_service/validators_all/full_node_set_snapshot';
import { default as React } from 'react';
import { L1BlockIDContext } from './l1_block_id_context';

/**
 * FullNodeSetSnapshotContext provides a React Context
 * for the current full validator set snapshot.
 */
export const FullNodeSetSnapshotContext =
  React.createContext<null | FullNodeSetSnapshot>(null);

/**
 * RetrieveFullNodeSetSnapshot is a React Component that retrieves
 * the current full validator set and provides it
 * via the AllValidatorsContext to its children.
 */
export const RetrieveFullNodeSetSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const l1DelegationAPI = React.useContext(StakingAPIServiceContext);
  const l1BlockID = React.useContext(L1BlockIDContext);

  const fullValidatorListPromise = !l1BlockID
    ? neverPromise
    : l1DelegationAPI.validatorsAll.snapshot(l1BlockID.hash);

  return (
    <PromiseResolver promise={fullValidatorListPromise}>
      <ResolveFullNodeSetSnapshot>{children}</ResolveFullNodeSetSnapshot>
    </PromiseResolver>
  );
};

/**
 * ResolveFullNodeSetSnapshot is a React Component that
 * resolves the full validator set snapshot from the DataContext
 * and provides it via the AllValidatorsContext to its children.
 */
const ResolveFullNodeSetSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ??
    null) as null | FullNodeSetSnapshot;
  return (
    <FullNodeSetSnapshotContext.Provider value={data}>
      {children}
    </FullNodeSetSnapshotContext.Provider>
  );
};
