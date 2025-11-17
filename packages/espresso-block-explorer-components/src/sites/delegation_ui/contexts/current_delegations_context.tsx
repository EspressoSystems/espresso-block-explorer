import { emptyIterator, mapIterable } from '@/functional/functional';
import { Delegation } from '@/service/espresso_l1_validator_service/common/delegation';
import React from 'react';
import { WalletSnapshotContext } from './wallet_snapshot_context';

/**
 * CurrentDelegationsContext provides a React Context
 * for the current map of validators with whom we are currently delegated.
 */
export const CurrentDelegationsContext = React.createContext<
  Map<`0x${string}`, Delegation>
>(new Map());

/**
 * DeriveCurrentDelegations is a React Component that
 * derives the current mapping of all of the current wallet's delegations.
 */
export const DeriveCurrentDelegations: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const walletSnapshot = React.useContext(WalletSnapshotContext);

  const pendingExits = new Map(
    mapIterable(
      walletSnapshot?.nodes ?? emptyIterator<Delegation>(),
      (pendingWithdrawal) => [pendingWithdrawal.nodeText, pendingWithdrawal],
    ),
  );

  return (
    <CurrentDelegationsContext.Provider value={pendingExits}>
      {children}
    </CurrentDelegationsContext.Provider>
  );
};
