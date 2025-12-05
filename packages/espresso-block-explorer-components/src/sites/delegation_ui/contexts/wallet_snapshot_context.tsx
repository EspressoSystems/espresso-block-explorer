import { DataContext } from '@/components/contexts/data_provider';
import { PromiseResolver } from '@/components/data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { neverPromise } from '@/functional/functional_async';
import { WalletSnapshot } from '@/service/espresso_l1_validator_service/wallet/wallet_snapshot';
import React from 'react';
import { L1BlockIDContext } from './l1_block_id_context';
import { L1RefreshTimestampContext } from './l1_refresh_timestamp_context';
import { L1ValidatorServiceContext } from './l1_validator_api_context';

/**
 * WalletSnapshotContext provides a React Context
 * for the current wallet snapshot.
 */
export const WalletSnapshotContext = React.createContext<null | WalletSnapshot>(
  null,
);

/**
 * RetrieveWalletSnapshot is a React Component that retrieves
 * a Wallet Snapshot from the L1 Validator API Service.
 */
export const RetrieveWalletSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  React.use(L1RefreshTimestampContext);
  const l1DelegationAPI = React.useContext(L1ValidatorServiceContext);
  const l1BlockInfo = React.useContext(L1BlockIDContext);
  const walletAddress = React.useContext(RainbowKitAccountAddressContext);

  const walletSnapShotPromise =
    !l1BlockInfo || !walletAddress
      ? neverPromise
      : l1DelegationAPI.wallet.snapshot(
          hexArrayBufferCodec.decode(walletAddress),
          l1BlockInfo?.hash,
        );

  return (
    <PromiseResolver promise={walletSnapShotPromise}>
      <ResolveWalletSnapshot>{children}</ResolveWalletSnapshot>
    </PromiseResolver>
  );
};

/**
 * ResolveWalletSnapshot is a React Component that
 * resolves the wallet snapshot from the DataContext
 * and provides it via the WalletSnapshotContext to its children.
 */
const ResolveWalletSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ?? null) as null | WalletSnapshot;

  return (
    <WalletSnapshotContext.Provider value={data}>
      {children}
    </WalletSnapshotContext.Provider>
  );
};
