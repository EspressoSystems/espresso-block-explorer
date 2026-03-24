import {
  AsyncSnapshot,
  AsyncState,
} from '@/components/data/async_data/async_snapshot';
import { ClaimRewards } from '@/sites/delegation_ui/contexts/validator_selection_context';
import { Meta, StoryObj } from '@storybook/react-vite';
import {
  FAKE_RECEIPT,
  FAKE_TRANSACTION_HASH,
  fullValidatorSet,
  INDEX_STAKED,
} from '../__shared__/example_data';
import {
  DefaultMeta,
  ValidatorConfirmedExample,
} from '../__shared__/validator_confirmed_example';
import {
  FailedToPerformWriteToContract,
  PerformWriteTransactionReceiptRetrieved,
  PerformWriteTransactionReceiptWaiting,
  PerformWriteTransactionSucceeded,
  PerformWriteTransactionWaiting,
  TransactionReverted,
} from '../contexts/perform_write_states';
import RewardClaimAbi from '@/contracts/reward_claim/reward_claim_abi';
import '../staking_modal.css';
import {
  ContractFunctionExecutionError,
  ContractFunctionRevertedError,
} from 'viem';

const meta: Meta = {
  title: 'Delegation UI/Staking Modal/States/Claim Rewards',
  ...DefaultMeta,
  args: {
    ...DefaultMeta.args,
    selection: new ClaimRewards(),
    validator: fullValidatorSet.nodes[INDEX_STAKED],
  },
};

export default meta;
type Story = StoryObj<typeof ValidatorConfirmedExample>;

export const None: Story = {
  args: {},
};

export const Submitting: Story = {
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.waiting(),
  },
};

export const Waiting: Story = {
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionWaiting(),
    ),
  },
};

export const Submitted: Story = {
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH),
    ),
  },
};

export const WaitingForReceipt: Story = {
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH),
    ),
  },
};

export const ReceiptRetrieved: Story = {
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.done,
      new PerformWriteTransactionReceiptRetrieved(
        FAKE_TRANSACTION_HASH,
        FAKE_RECEIPT,
      ),
    ),
  },
};

export const SubmissionError: Story = {
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(
      AsyncState.done,
      new Error('Claim Rewards failed'),
    ),
  },
};

/**
 * Regression: when a tx is mined but reverts on-chain (receipt.status ===
 * 'reverted'), the UI should show an error -- not "Claim Successful".
 */
export const ReceiptReverted: Story = {
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(
      AsyncState.done,
      new TransactionReverted({ ...FAKE_RECEIPT, status: 'reverted' }),
    ),
  },
};

/**
 * AlreadyClaimed revert means a previous tx already succeeded.
 * Show success-like UI with Close button instead of Retry.
 */
export const AlreadyClaimedError: Story = {
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(
      AsyncState.done,
      new FailedToPerformWriteToContract(
        new ContractFunctionExecutionError(
          new ContractFunctionRevertedError({
            abi: RewardClaimAbi,
            data: '0x646cf558',
            functionName: 'claimRewards',
          }),
          {
            abi: RewardClaimAbi,
            functionName: 'claimRewards',
            args: ['0x', '0x'],
          },
        ),
      ),
    ),
  },
};

/**
 * Regression: InvalidAuthRoot revert should show a specific message
 * encouraging the user to retry.
 */
export const InvalidAuthRootError: Story = {
  args: {
    claimRewardsAsyncSnapshot: AsyncSnapshot.withError(
      AsyncState.done,
      new FailedToPerformWriteToContract(
        new ContractFunctionExecutionError(
          new ContractFunctionRevertedError({
            abi: RewardClaimAbi,
            data: '0x328b8878',
            functionName: 'claimRewards',
          }),
          {
            abi: RewardClaimAbi,
            functionName: 'claimRewards',
            args: ['0x', '0x'],
          },
        ),
      ),
    ),
  },
};
