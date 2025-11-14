import { DataContext } from '@/components/contexts/DataProvider';
import { PromiseResolver } from '@/components/data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { neverPromise } from '@/functional/functional_async';
import { HeightAndAddress } from '@/service/hotshot_query_service/cappuccino/reward_state/height_and_address';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages';
import React from 'react';
import { EspressoBlockHeightContext } from './espresso_block_height_context';
import { EspressoRefreshTimestampContext } from './espresso_refresh_timestamp_context';

/**
 * EspressoRewardClaimInput provides a React Context
 * for the Claimable Reward Balance for the current wallet and espresso height
 */
export const ClaimableRewardsBalanceContext = React.createContext<
  null | bigint
>(null);

/**
 * RetrieveActiveValidators is a React Component that retrieves
 * the RewardClaimInput for the current wallet and espresso height and provides
 * it via the EspressoRewardClaimInput to its children.
 */
export const RetrieveEspressoClaimableRewardsBalance: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  // We'll refresh every time this timestamp updates
  React.useContext(EspressoRefreshTimestampContext);
  const espressoHeight = React.useContext(EspressoBlockHeightContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);

  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

  const currentBlockHeight =
    espressoHeight === undefined || espressoHeight === null || !accountAddress
      ? neverPromise
      : hotShotQueryService.rewardState.getRewardBalance(
          new HeightAndAddress(
            Number(espressoHeight),

            accountAddress,
          ),
        );

  return (
    <PromiseResolver promise={currentBlockHeight}>
      <ResolveClaimableRewardsBalance>
        {children}
      </ResolveClaimableRewardsBalance>
    </PromiseResolver>
  );
};

/**
 * ResolveRewardClaimInput is a React Component that
 * resolves the RewardClaimInput from the DataContext
 * and provides it via the EspressoRewardClaimInput to its children.
 */
const ResolveClaimableRewardsBalance: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ?? null) as null | bigint;

  return (
    <ClaimableRewardsBalanceContext.Provider value={data}>
      {children}
    </ClaimableRewardsBalanceContext.Provider>
  );
};
