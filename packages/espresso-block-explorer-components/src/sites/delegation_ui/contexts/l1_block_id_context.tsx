import { DataContext } from '@/components/contexts/DataProvider';
import { PromiseResolver } from '@/components/data';
import { L1BlockID } from '@/service/espresso_l1_validator_service/common/l1_block_id';
import React from 'react';
import { L1ValidatorServiceContext } from './l1_validator_api_context';

/**
 * L1BlockIDContext defines a React Context for the current L1 Block ID.
 */
export const L1BlockIDContext = React.createContext<null | L1BlockID>(null);

/**
 * RetrieveLatestL1BlockID is a React Component that retrieves
 * the latest L1 Block ID and provides it via the L1BlockIDContext
 * to its children.
 */
export const RetrieveLatestL1BlockID: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const l1DelegationAPI = React.useContext(L1ValidatorServiceContext);

  const latestL1BlockPromise = l1DelegationAPI.l1Block.getLatestBlock();

  return (
    <PromiseResolver promise={latestL1BlockPromise}>
      <ResolveL1BlockID>{children}</ResolveL1BlockID>
    </PromiseResolver>
  );
};

/**
 * ResolveL1BlockID is a React Component that
 * resolves the L1 Block ID from the DataContext
 * and provides it via the L1BlockIDContext to its children.
 */
const ResolveL1BlockID: React.FC<React.PropsWithChildren> = ({ children }) => {
  const data = React.useContext(DataContext) as null | L1BlockID;
  return (
    <L1BlockIDContext.Provider value={data}>
      {children}
    </L1BlockIDContext.Provider>
  );
};
