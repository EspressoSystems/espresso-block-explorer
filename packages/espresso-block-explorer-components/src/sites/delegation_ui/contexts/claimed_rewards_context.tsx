import { DataContext } from '@/components/contexts/data_provider';
import { PromiseResolver } from '@/components/data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { neverPromise } from '@/functional/functional_async';
import React from 'react';
import { L1RefreshTimestampContext } from './l1_refresh_timestamp_context';
import { RewardClaimContractContext } from './reward_claim_contract_context';

/**
 * ClaimedRewardsContext provides a React Context
 * for the total lifetime claimed rewards from the RewardClaim contract.
 */
export const LifetimeClaimedRewardsContext = React.createContext<null | bigint>(
  null,
);

/**
 * RetrieveLifetimeClaimedRewards is a React Component that retrieves
 * the total lifetime claimed rewards from the RewardClaim contract.
 */
export const RetrieveLifetimeClaimedRewards: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  // We'll refresh every time this timestamp updates
  React.useContext(L1RefreshTimestampContext);
  const accountAddress = (React.useContext(RainbowKitAccountAddressContext) ??
    null) as null | `0x${string}`;
  const rewardClaimContract = React.useContext(RewardClaimContractContext);

  const claimedRewards =
    !accountAddress || !rewardClaimContract
      ? neverPromise
      : rewardClaimContract.claimedRewards(accountAddress);

  return (
    <PromiseResolver promise={claimedRewards}>
      <ResolveLifetimeClaimedRewardsBalance>
        {children}
      </ResolveLifetimeClaimedRewardsBalance>
    </PromiseResolver>
  );
};

/**
 * ResolveLifetimeClaimedRewardsBalance is a React Component that
 * resolves the lifetime claimed rewards from the DataContext
 * and provides it via the LifetimeClaimedRewardsContext to its children.
 */
const ResolveLifetimeClaimedRewardsBalance: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const data = (React.useContext(DataContext) ?? null) as null | bigint;

  return (
    <LifetimeClaimedRewardsContext.Provider value={data}>
      {children}
    </LifetimeClaimedRewardsContext.Provider>
  );
};
