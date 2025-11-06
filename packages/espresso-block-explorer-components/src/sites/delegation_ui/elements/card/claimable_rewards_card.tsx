import MoneyText from '@/components/text/MoneyText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import ButtonLarge from '../buttons/button_large';
import { CardContentValue } from './card_content_value';
import { CardValue } from './card_value';

/**
 * ClaimableRewardsCard is a component that displays the Claimable Rewards
 * amount.
 *
 * This is meant to represent the total amount of ESP that can be claimed as
 * rewards by the active wallet.
 */
export const ClaimableRewardsCard: React.FC = () => {
  return (
    <CardValue className="estimated-apr-card">
      <h2>
        <Text text="Claimable Rewards" />
      </h2>
      <ButtonLarge className="action" onClick={() => {}}>
        <Text text="Claim All" />
      </ButtonLarge>
      <CardContentValue>
        <MoneyText money={MonetaryValue.ESP(0n)} />
      </CardContentValue>
    </CardValue>
  );
};
