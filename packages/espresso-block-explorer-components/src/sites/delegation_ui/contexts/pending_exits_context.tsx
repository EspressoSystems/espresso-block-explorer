import { emptyIterator, mapIterable } from '@/functional/functional';
import { PendingWithdrawal } from '@/service/espresso_l1_validator_service/common/pending_withdrawal';
import React from 'react';
import { WalletSnapshotContext } from './wallet_snapshot_context';

/**
 * PendingExitsContext provides a React Context
 * for the current map of validators who have exited, and your pending amount
 */
export const PendingExitsContext = React.createContext<
  Map<`0x${string}`, PendingWithdrawal>
>(new Map());

/**
 * DerivePendingExits is a React Component that
 * derives the current mapping of all of the pending exits for the
 * current wallet.
 */
export const DerivePendingExits: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const walletSnapshot = React.useContext(WalletSnapshotContext);

  const pendingExits = new Map(
    mapIterable(
      walletSnapshot?.pendingExits ?? emptyIterator<PendingWithdrawal>(),
      (pendingWithdrawal) => [pendingWithdrawal.nodeText, pendingWithdrawal],
    ),
  );

  return (
    <PendingExitsContext.Provider value={pendingExits}>
      {children}
    </PendingExitsContext.Provider>
  );
};
