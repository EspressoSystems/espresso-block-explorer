import { EspressoConfigContext } from '@/components/config';
import { RewardClaimContract } from '@/contracts/reward_claim/reward_claim_interface';
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

  const rewardClaim = !espressoConfig?.stakeTableContractAddress
    ? null
    : new RewardClaimRemote(
        config,
        config.chains[0].id,
        espressoConfig.stakeTableContractAddress,
      );

  return (
    <RewardClaimContractContext.Provider value={rewardClaim}>
      {children}
    </RewardClaimContractContext.Provider>
  );
};
