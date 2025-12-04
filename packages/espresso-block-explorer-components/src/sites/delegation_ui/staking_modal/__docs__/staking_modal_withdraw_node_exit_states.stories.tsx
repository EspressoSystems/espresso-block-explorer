import {
  AsyncSnapshot,
  AsyncState,
} from '@/components/data/async_data/async_snapshot';
import { nodeList } from '@/data_source/fake_data_source';
import { ValidatorConfirmedExitWithdraw } from '@/sites/delegation_ui/contexts/validator_selection_context';
import { Meta, StoryObj } from '@storybook/react-vite';
import {
  FAKE_RECEIPT,
  FAKE_TRANSACTION_HASH,
  fullValidatorSet,
  INDEX_EXIT,
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
  title: 'Sites/Delegation UI/Staking Modal/States/Withdraw Exit',
  ...DefaultMeta,
  args: {
    ...DefaultMeta.args,
    selection: new ValidatorConfirmedExitWithdraw(nodeList[INDEX_EXIT].address),
    validator: fullValidatorSet.nodes[INDEX_EXIT],
  },
};

export default meta;
type Story = StoryObj<typeof ValidatorConfirmedExample>;

export const None: Story = {
  args: {},
};

export const Submitting: Story = {
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.waiting(),
  },
};

export const Waiting: Story = {
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionWaiting(),
    ),
  },
};

export const Submitted: Story = {
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH),
    ),
  },
};

export const WaitingForReceipt: Story = {
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH),
    ),
  },
};

export const ReceiptRetrieved: Story = {
  args: {
    claimExitAsyncSnapshot: AsyncSnapshot.withData(
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
    claimExitAsyncSnapshot: AsyncSnapshot.withError(
      AsyncState.done,
      new Error('Validator Exit failed'),
    ),
  },
};
