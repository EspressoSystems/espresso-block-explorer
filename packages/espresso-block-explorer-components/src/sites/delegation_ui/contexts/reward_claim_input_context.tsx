import { DataContext } from '@/components/contexts/DataProvider';
import { PromiseResolver } from '@/components/data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { neverPromise } from '@/functional/functional_async';
import { HeightAndAddress } from '@/service/hotshot_query_service/cappuccino/reward_state/height_and_address';
import { RewardClaimInput } from '@/service/hotshot_query_service/cappuccino/reward_state/reward_claim_input';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages';
import React from 'react';
import { EspressoBlockHeightContext } from './espresso_block_height_context';
import { EspressoRefreshTimestampContext } from './espresso_refresh_timestamp_context';

/**
 * EspressoRewardClaimInputContext provides a React Context
 * for the RewardClaimInput for the current wallet and espresso height
 */
export const EspressoRewardClaimInputContext =
  React.createContext<null | RewardClaimInput>(null);

/**
 * RetrieveActiveValidators is a React Component that retrieves
 * the RewardClaimInput for the current wallet and espresso height and provides
 * it via the EspressoRewardClaimInputContext to its children.
 */
export const RetrieveEspressoRewardClaimInput: React.FC<
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
      : hotShotQueryService.rewardState.getRewardClaimInput(
          new HeightAndAddress(Number(espressoHeight), accountAddress),
        );

  return (
    <PromiseResolver promise={currentBlockHeight}>
      <ResolveRewardClaimInput>{children}</ResolveRewardClaimInput>
    </PromiseResolver>
  );
};

/**
 * ResolveRewardClaimInput is a React Component that
 * resolves the RewardClaimInput from the DataContext
 * and provides it via the EspressoRewardClaimInputContext to its children.
 */
const ResolveRewardClaimInput: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ??
    null) as null | RewardClaimInput;

  return (
    <EspressoRewardClaimInputContext.Provider value={data}>
      {children}
    </EspressoRewardClaimInputContext.Provider>
  );
};
