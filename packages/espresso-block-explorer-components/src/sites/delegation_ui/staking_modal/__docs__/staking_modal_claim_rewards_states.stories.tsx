import {
  AsyncSnapshot,
  AsyncState,
} from '@/components/data/async_data/AsyncSnapshot';
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
  PerformWriteTransactionReceiptRetrieved,
  PerformWriteTransactionReceiptWaiting,
  PerformWriteTransactionSucceeded,
  PerformWriteTransactionWaiting,
} from '../contexts/perform_write_states';
import '../staking_modal.css';

const meta: Meta = {
  title: 'Sites/Delegation UI/Staking Modal/States/Claim Rewards',
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
