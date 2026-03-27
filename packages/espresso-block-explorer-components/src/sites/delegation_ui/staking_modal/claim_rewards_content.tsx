import { AsyncState } from '@/components/data/async_data/async_snapshot';
import { addClassToClassName } from '@/components/higher_order';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import Text from '@/components/text/text';
import { L1MethodsContext } from '@/contexts/l1_methods_context';
import { RewardClaimContractContext } from '@/contexts/reward_claim_contract_context';
import { extractContractFunctionRevertedError } from '@/contracts/error_helpers';
import {
  isAlreadyClaimedError,
  isInvalidAuthRootError,
} from '@/contracts/reward_claim/error_helpers';
import React from 'react';
import { LifetimeClaimedRewardsContext } from '../contexts/claimed_rewards_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import { EspressoRewardClaimInputContext } from '../contexts/reward_claim_input_context';
import { ButtonProps } from '../elements/buttons/button_base';
import ButtonLarge from '../elements/buttons/button_large';
import { ClaimableRewardsOverviewArea } from './claimable_rewards_overview_area';
import { ClaimableRewardsSummaryAndInteraction } from './claimable_rewards_summary_and_interaction';
import { CloseStakingModalButton } from './close_staking_modal';
import {
  ClaimRewardsAsyncSnapshotContext,
  performClaimRewards,
  ProvideClaimRewardsAsyncIterableContext,
  SetClaimRewardsAsyncIterableContext,
} from './contexts/perform_claim_rewards_context';
import {
  extractContractErrorName,
  PerformWriteTransactionStatus,
} from './contexts/perform_write_states';
import { StakingModalCloseContext } from './contexts/staking_modal_close_context';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

/**
 * ClaimRewardsContent is a React component that displays the content
 * for claiming rewards in the staking modal.
 */
export const ClaimRewardsContent: React.FC = () => {
  return (
    <ProvideClaimRewardsAsyncIterableContext>
      <ClaimRewardsModalContent />
    </ProvideClaimRewardsAsyncIterableContext>
  );
};

export const ClaimRewardsModalContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <Text text="Claim All" />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ClaimableRewardsSummaryAndInteraction />
        <ClaimableRewardsOverviewArea />
        <ClaimRewardsActionsArea />
      </StakingContent>
    </>
  );
};

/**
 * ClaimRewardsActionsArea is a React component that displays the actions area
 * for claiming rewards in the staking modal.
 */
const ClaimRewardsActionsArea: React.FC = () => {
  const asyncSnapshot = React.useContext(ClaimRewardsAsyncSnapshotContext);
  const child = (
    <>
      <ClaimRewardsStatus />
      <ClaimRewardsButton />
    </>
  );

  if (asyncSnapshot.hasError) {
    const isAlreadyClaimed =
      extractContractErrorName(asyncSnapshot.error) === 'AlreadyClaimed';
    return (
      <div
        className={`staking-modal-unstaking-actions-area ${isAlreadyClaimed ? 'succeeded' : 'error'}`}
      >
        {child}
      </div>
    );
  }

  if (
    asyncSnapshot.hasData &&
    (asyncSnapshot.data?.status ?? 0) >=
      PerformWriteTransactionStatus.receiptRetrieved
  ) {
    // We have received the receipt, we *should* be good to go
    return (
      <div className="staking-modal-unstaking-actions-area succeeded">
        {child}
      </div>
    );
  }

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    asyncSnapshot.asyncState == AsyncState.active
  ) {
    // We are waiting for the transaction to be completed
    return (
      <div className="staking-modal-unstaking-actions-area waiting">
        {child}
      </div>
    );
  }

  return <div className="staking-modal-unstaking-actions-area">{child}</div>;
};

const ClaimRewardsStatus: React.FC = () => {
  const asyncSnapshot = React.useContext(ClaimRewardsAsyncSnapshotContext);

  if (asyncSnapshot.hasError) {
    const revertedError = extractContractFunctionRevertedError(
      asyncSnapshot.error,
    );

    if (isAlreadyClaimedError(revertedError)) {
      return (
        <div>
          <Text text="Your rewards have already been claimed." />
        </div>
      );
    }

    if (isInvalidAuthRootError(revertedError)) {
      return (
        <div>
          <div>
            <Text text="Claim Failed" />
          </div>
          <div>
            <Text text="Authorization data is stale. Please retry." />
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>
          <Text text="Claim Failed" />
        </div>
      </div>
    );
  }

  if (
    asyncSnapshot.hasData &&
    (asyncSnapshot.data?.status ?? 0) >=
      PerformWriteTransactionStatus.receiptRetrieved
  ) {
    // We have received the receipt, we *should* be good to go
    return (
      <div>
        <Text text="Claim Successful" />
      </div>
    );
  }

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    asyncSnapshot.asyncState == AsyncState.active
  ) {
    // We are waiting for the transaction to be completed
    return (
      <div>
        <Text text="Claiming..." />
      </div>
    );
  }

  return <div>&nbsp;</div>;
};

const ClaimRewardsButton: React.FC = () => {
  const l1Methods = React.useContext(L1MethodsContext);
  const rewardClaimContract = React.useContext(RewardClaimContractContext);
  const rewardClaimInput = React.useContext(EspressoRewardClaimInputContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  const lifetimeClaimedRewards =
    React.useContext(LifetimeClaimedRewardsContext) ?? 0n;
  const asyncSnapshot = React.useContext(ClaimRewardsAsyncSnapshotContext);
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const close = React.useContext(StakingModalCloseContext);
  const setClaimRewardsAsyncIterable = React.useContext(
    SetClaimRewardsAsyncIterableContext,
  );
  const claimableRewardsBalance =
    (rewardClaimInput?.lifetimeRewards ?? lifetimeClaimedRewards) -
    lifetimeClaimedRewards;
  const debounceGuard = React.useRef(false);
  const performClaimRewardsAction = React.useMemo(
    () => () => {
      if (debounceGuard.current) {
        return;
      }

      if (
        !l1Methods ||
        !rewardClaimContract ||
        !rewardClaimInput ||
        !accountAddress
      ) {
        return;
      }

      debounceGuard.current = true;

      setClaimRewardsAsyncIterable(
        performClaimRewards(
          l1Methods,
          rewardClaimContract,
          rewardClaimInput,
          accountAddress,
          () => {
            setL1Timestamp(new Date());
          },
        ),
      );
    },
    [
      l1Methods,
      rewardClaimContract,
      rewardClaimInput,
      accountAddress,
      setL1Timestamp,
      setClaimRewardsAsyncIterable,
    ],
  );

  // Reset the Debounce Guard when applicable
  React.useEffect(() => {
    if (!debounceGuard.current) {
      return;
    }
    if (asyncSnapshot.asyncState !== AsyncState.done) {
      return;
    }

    debounceGuard.current = false;
  }, [asyncSnapshot]);

  const isAlreadyClaimed =
    asyncSnapshot.hasError &&
    extractContractErrorName(asyncSnapshot.error) === 'AlreadyClaimed';

  // Refresh balances when AlreadyClaimed -- rewards were claimed by a previous tx
  const hasRefreshedForAlreadyClaimed = React.useRef(false);
  React.useEffect(() => {
    if (isAlreadyClaimed && !hasRefreshedForAlreadyClaimed.current) {
      hasRefreshedForAlreadyClaimed.current = true;
      setL1Timestamp(new Date());
    }
  }, [isAlreadyClaimed, setL1Timestamp]);

  const ButtonComponent = asyncSnapshot.hasError ? RetryButton : NormalButton;

  if (asyncSnapshot.hasError && isAlreadyClaimed) {
    return (
      <ButtonLarge onClick={close}>
        <Text text="Close" />
      </ButtonLarge>
    );
  }

  if (
    // If the Contracts are not set
    l1Methods === null ||
    rewardClaimContract === null ||
    // We do not have a reward claim input
    rewardClaimInput === null ||
    // We do not have an account address
    accountAddress === null
  ) {
    return <ButtonComponent disabled />;
  }

  if (asyncSnapshot.hasError) {
    return <ButtonComponent onClick={performClaimRewardsAction} />;
  }

  if (
    asyncSnapshot.hasData &&
    (asyncSnapshot.data?.status ?? 0) >=
      PerformWriteTransactionStatus.receiptRetrieved
  ) {
    // We have received the receipt, we *should* be good to go
    return (
      <ButtonLarge onClick={close}>
        <Text text="Close" />
      </ButtonLarge>
    );
  }

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    asyncSnapshot.asyncState == AsyncState.active
  ) {
    // We are waiting for the transaction to be completed
    return <ButtonComponent disabled />;
  }

  if (claimableRewardsBalance <= 0n) {
    // We have no rewards to claim
    return <ButtonComponent disabled />;
  }

  return <ButtonComponent onClick={performClaimRewardsAction} />;
};

const NormalButton: React.FC<ButtonProps> = ({
  onClick,
  className,
  ...rest
}) => {
  return (
    <ButtonLarge
      className={addClassToClassName(className, 'btn-undelegate')}
      onClick={onClick}
      {...rest}
    >
      <Text text="Claim Rewards" />
    </ButtonLarge>
  );
};

const RetryButton: React.FC<ButtonProps> = ({
  onClick,
  className,
  ...rest
}) => {
  return (
    <ButtonLarge
      className={addClassToClassName(className, 'btn-undelegate')}
      onClick={onClick}
      {...rest}
    >
      <Text text="Retry" />
    </ButtonLarge>
  );
};
