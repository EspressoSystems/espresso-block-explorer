import PromiseResolver from '@/components/data/async_data/promise_resolver';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { CappuccinoHotShotQueryServiceAPIContext } from '@/contexts/cappuccino_hot_shot_query_service_api_context';
import { DataContext } from '@/contexts/data_provider';
import { neverPromise } from '@/functional/functional_async';
import { HeightAndAddress } from '@/service/hotshot_query_service/cappuccino/reward_state/height_and_address';
import { RewardClaimInput } from '@/service/hotshot_query_service/cappuccino/reward_state/reward_claim_input';
import React from 'react';
import { LightClientFinalizedStateContext } from './light_client_finalized_state_context';

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
  const lightClientFinalizedState = React.useContext(
    LightClientFinalizedStateContext,
  );
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

  const finalizedStateBlockHeight =
    lightClientFinalizedState?.blockHeight ?? 0n;

  const promise = React.useMemo(
    () =>
      !accountAddress || !hotShotQueryService || !finalizedStateBlockHeight
        ? neverPromise
        : hotShotQueryService.rewardState.getRewardClaimInput(
            new HeightAndAddress(
              Number(finalizedStateBlockHeight),
              accountAddress,
            ),
          ),
    [finalizedStateBlockHeight, accountAddress, hotShotQueryService],
  );

  return (
    <PromiseResolver promise={promise}>
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
