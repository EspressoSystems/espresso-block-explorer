import MoneyText from '@/components/text/MoneyText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { LifetimeClaimedRewardsContext } from '../contexts/claimed_rewards_context';
import { ESPBalanceContext } from '../contexts/esp_balance_context';
import { EspressoRewardClaimInputContext } from '../contexts/reward_claim_input_context';
import { LabelValueSplit } from './label_value_split';

export const ClaimableRewardsOverviewArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-overview-area">
      <CurrentBalance />
      <NewBalance />
      <TxFee />
    </div>
  );
};

const CurrentBalance: React.FC = () => {
  const balance = React.useContext(ESPBalanceContext);

  return (
    <LabelValueSplit>
      <span>
        <Text text="Current Balance" />
      </span>
      <span>
        <MoneyText money={MonetaryValue.ESP(balance)} />
      </span>
    </LabelValueSplit>
  );
};

const NewBalance: React.FC = () => {
  const balance = React.useContext(ESPBalanceContext);
  const claimableRewardsInput = React.useContext(
    EspressoRewardClaimInputContext,
  );
  const lifetimeClaimedRewards =
    React.useContext(LifetimeClaimedRewardsContext) ?? 0n;

  const claimableRewardsBalance =
    (claimableRewardsInput?.lifetimeRewards ?? lifetimeClaimedRewards) -
    lifetimeClaimedRewards;

  return (
    <LabelValueSplit>
      <span>
        <Text text="New Balance" />
      </span>
      <span>
        <MoneyText
          money={MonetaryValue.ESP(balance + claimableRewardsBalance)}
        />
      </span>
    </LabelValueSplit>
  );
};

const TxFee: React.FC = () => {
  return (
    <LabelValueSplit>
      <span>
        <Text text="Tx Fee" />
      </span>
      <span>
        <Text text="-" />
      </span>
    </LabelValueSplit>
  );
};
