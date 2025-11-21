import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import Text from '@/components/text/Text';
import React from 'react';
import { AvailableBalanceCard } from './elements/card/available_balance_card';
import {
  ClaimableRewardsCard,
  ClaimAllButton,
} from './elements/card/claimable_rewards_card';
import { TotalBalanceCard } from './elements/card/total_balance_card';
import { TotalStakedCard } from './elements/card/total_staked_card';
import './my_balance.css';

export const MyBalance: React.FC = () => {
  const address = React.useContext(RainbowKitAccountAddressContext);
  if (!address) {
    return null;
  }

  return (
    <section className="my-balance">
      <h2>
        <Text text="My Balance" />
      </h2>

      <div className="my-balance-stats">
        <TotalBalanceCard />
        <AvailableBalanceCard />
        <TotalStakedCard />
        <ClaimableRewardsCard />
      </div>

      <ClaimAllButton>
        <Text text="Claim All Rewards" />
      </ClaimAllButton>
    </section>
  );
};
