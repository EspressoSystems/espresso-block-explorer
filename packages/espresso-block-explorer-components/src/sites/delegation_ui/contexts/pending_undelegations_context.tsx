import { emptyIterator, mapIterable } from '@/functional/functional';
import { PendingWithdrawal } from '@/service/espresso_staking_api_service/common/pending_withdrawal';
import { default as React } from 'react';
import { WalletSnapshotContext } from './wallet_snapshot_context';

/**
 * PendingUndelegationsContext provides a React Context
 * for the current map of validators with whom we have undelegated already.
 */
export const PendingUndelegationsContext = React.createContext<
  Map<`0x${string}`, PendingWithdrawal>
>(new Map());

/**
 * DerivePendingUndelegations is a React Component that
 * derives the current mapping of all of the pending undelegations for the
 * current wallet.
 */
export const DerivePendingUndelegations: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const walletSnapshot = React.useContext(WalletSnapshotContext);

  const pendingUndelegations = new Map(
    mapIterable(
      walletSnapshot?.pendingUndelegations ??
        emptyIterator<PendingWithdrawal>(),
      (pendingWithdrawal) => [pendingWithdrawal.nodeText, pendingWithdrawal],
    ),
  );

  return (
    <PendingUndelegationsContext.Provider value={pendingUndelegations}>
      {children}
    </PendingUndelegationsContext.Provider>
  );
};
