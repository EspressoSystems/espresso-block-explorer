import { foldRIterable } from '@/functional/functional';
import { default as React } from 'react';
import { WalletSnapshotContext } from './wallet_snapshot_context';

/**
 * CurrentTotalPendingUndelegationAmountContext provides a React Context for
 * the total sum amount of withdrawal amounts from pending undelegations (
 * undelegations that have yet to be withdrawan.
 * )
 */
export const CurrentTotalPendingUndelegationAmountContext =
  React.createContext<bigint>(0n);

/**
 * DeriveCurrentTotalStaked is a component that Provides the
 * CurrentTotalStakedContext by calculating the total mount Staked to all
 * current Validators from the Wallet SnapshotContext.
 */
export const DeriveCurrentTotalPendingUndelegationAmount: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  return (
    <DeriveCurrentTotalPendingUndelegationAmountFromWalletSnapshot>
      {children}
    </DeriveCurrentTotalPendingUndelegationAmountFromWalletSnapshot>
  );
};

const DeriveCurrentTotalPendingUndelegationAmountFromWalletSnapshot: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const snapshot = React.useContext(WalletSnapshotContext);

  const totalStaked = foldRIterable(
    (acc, withdrawal) => acc + withdrawal.amount,
    0n,
    snapshot?.pendingUndelegations ?? [],
  );

  return (
    <CurrentTotalPendingUndelegationAmountContext.Provider value={totalStaked}>
      {children}
    </CurrentTotalPendingUndelegationAmountContext.Provider>
  );
};
