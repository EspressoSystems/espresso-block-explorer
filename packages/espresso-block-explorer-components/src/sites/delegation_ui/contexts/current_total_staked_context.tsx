import { foldRIterable } from '@/functional/functional';
import { WalletSnapshotContext } from 'delegation-ui';
import React from 'react';

/**
 * TotalStakedContext provides a React Context for the total amount of
 * allocated stake the current wallet has for its validators.
 */
export const CurrentTotalStakedContext = React.createContext<bigint>(0n);

/**
 * DeriveCurrentTotalStaked is a component that Provides the
 * CurrentTotalStakedContext by calculating the total mount Staked to all
 * current Validators from the Wallet SnapshotContext.
 */
export const DeriveCurrentTotalStaked: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <DeriveTotalStakedFromWalletSnapshot>
      {children}
    </DeriveTotalStakedFromWalletSnapshot>
  );
};

const DeriveTotalStakedFromWalletSnapshot: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const snapshot = React.useContext(WalletSnapshotContext);

  const totalStaked = foldRIterable(
    (acc, node) => acc + node.amount,
    0n,
    snapshot?.nodes ?? [],
  );

  return (
    <CurrentTotalStakedContext.Provider value={totalStaked}>
      {children}
    </CurrentTotalStakedContext.Provider>
  );
};
