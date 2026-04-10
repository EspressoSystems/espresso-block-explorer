import { MoneyText } from '@/components/text';
import { Text } from '@/components/text';
import { MonetaryValue } from '@/models/block_explorer';
import { default as React } from 'react';
import { LifetimeClaimedRewardsContext } from '../contexts/claimed_rewards_context';
import { EspressoRewardClaimInputContext } from '../contexts/reward_claim_input_context';

export const ClaimableRewardsSummaryAndInteraction: React.FC = () => {
  return (
    <div className="staking-modal-initial-summary-and-interaction">
      <ClaimableESPArea />
    </div>
  );
};

const ClaimableESPArea: React.FC = () => {
  const claimableRewardsInput = React.useContext(
    EspressoRewardClaimInputContext,
  );
  const lifetimeClaimedRewards =
    React.useContext(LifetimeClaimedRewardsContext) ?? 0n;

  const claimableRewardsBalance =
    (claimableRewardsInput?.lifetimeRewards ?? lifetimeClaimedRewards) -
    lifetimeClaimedRewards;

  return (
    <div className="staking-modal-esp-input-area">
      <label htmlFor="staking-modal-esp-input">
        <Text text="Claimable Rewards" />
      </label>
      <div className="staking-modal-esp-display">
        <MoneyText money={MonetaryValue.ESP(claimableRewardsBalance)} />
      </div>
    </div>
  );
};
