import { EspressoConfigContext } from '@/components/config';
import { RewardClaimContractGasEstimatorRemote } from '@/contracts/reward_claim/reward_claim_gas_estimator_remote';
import {
  RewardClaimContract,
  RewardClaimContractGasEstimator,
} from '@/contracts/reward_claim/reward_claim_interface';
import { RewardClaimRemote } from '@/contracts/reward_claim/reward_claim_remote';
import React from 'react';
import { useConfig } from 'wagmi';

/**
 * RewardClaimContractContext is a React context that provides
 * the Reward Claim contract instance.
 */
export const RewardClaimContractContext =
  React.createContext<null | RewardClaimContract>(null);

/**
 * RewardClaimContractGasEstimatorContext is a React context that provides
 * the Reward Claim contract gas estimator instance.
 */
export const RewardClaimContractGasEstimatorContext =
  React.createContext<null | RewardClaimContractGasEstimator>(null);

/**
 * ProvideRewardClaimContract is a React component that provides
 * the Reward Claim contract via RewardClaimContractContext.
 */
export const ProvideRewardClaimContract: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProvideRewardClaimContractUtilizingWagmi>
      {children}
    </ProvideRewardClaimContractUtilizingWagmi>
  );
};

/**
 * ProvideRewardClaimContractUtilizingWagmi is a React component that provides
 * the Reward Claim contract via RewardClaimContractContext.  It is created
 * and configured to use Wagmi for blockchain interactions.
 */
const ProvideRewardClaimContractUtilizingWagmi: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const config = useConfig();
  const espressoConfig = React.useContext(EspressoConfigContext);

  const rewardClaim = !espressoConfig?.rewardClaimContractAddress
    ? null
    : new RewardClaimRemote(
        config,
        config.chains[0].id,
        espressoConfig.rewardClaimContractAddress,
      );

  const rewardClaimGasEstimator = !espressoConfig?.rewardClaimContractAddress
    ? null
    : new RewardClaimContractGasEstimatorRemote(
        config,
        config.chains[0].id,
        espressoConfig.rewardClaimContractAddress,
      );

  return (
    <RewardClaimContractContext.Provider value={rewardClaim}>
      <RewardClaimContractGasEstimatorContext.Provider
        value={rewardClaimGasEstimator}
      >
        {children}
      </RewardClaimContractGasEstimatorContext.Provider>
    </RewardClaimContractContext.Provider>
  );
};
