import MoneyText from '@/components/text/MoneyText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { LifetimeClaimedRewardsContext } from '@/sites/delegation_ui/contexts/claimed_rewards_context';
import { ModalContext } from '@/sites/delegation_ui/contexts/modal_context';
import { EspressoRewardClaimInputContext } from '@/sites/delegation_ui/contexts/reward_claim_input_context';
import {
  ClaimRewards,
  SetValidatorSelectionContext,
} from '@/sites/delegation_ui/contexts/validator_selection_context';
import React from 'react';
import ButtonLarge from '../buttons/button_large';
import { CardContentValue } from './card_content_value';
import { CardValue } from './card_value';
import './claimable_rewards_card.css';

/**
 * ClaimableRewardsCard is a component that displays the Claimable Rewards
 * amount.
 *
 * This is meant to represent the total amount of ESP that can be claimed as
 * rewards by the active wallet.
 */
export const ClaimableRewardsCard: React.FC = () => {
  const claimableRewardsInput = React.useContext(
    EspressoRewardClaimInputContext,
  );
  const lifetimeClaimedRewards =
    React.useContext(LifetimeClaimedRewardsContext) ?? 0n;

  const claimableRewards =
    (claimableRewardsInput?.lifetimeRewards ?? lifetimeClaimedRewards) -
    lifetimeClaimedRewards;

  return (
    <CardValue className="claimable-rewards-card">
      <h2>
        <Text text="Claimable Rewards" />
      </h2>
      <ClaimAllButton />

      <CardContentValue>
        <MoneyText money={MonetaryValue.ESP(claimableRewards)} />
      </CardContentValue>
    </CardValue>
  );
};

const ClaimAllButton: React.FC = () => {
  const claimableRewardsInput = React.useContext(
    EspressoRewardClaimInputContext,
  );
  const lifetimeClaimedRewards =
    React.useContext(LifetimeClaimedRewardsContext) ?? 0n;

  const claimableRewards =
    (claimableRewardsInput?.lifetimeRewards ?? lifetimeClaimedRewards) -
    lifetimeClaimedRewards;
  const modalControls = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);

  if (claimableRewards <= 0n) {
    return (
      <ButtonLarge className="action" disabled>
        <Text text="Claim All" />
      </ButtonLarge>
    );
  }

  return (
    <ButtonLarge
      className="action"
      onClick={() => {
        setSelection(new ClaimRewards());
        modalControls.open();
      }}
    >
      <Text text="Claim All" />
    </ButtonLarge>
  );
};
