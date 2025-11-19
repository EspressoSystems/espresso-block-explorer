import {
  AsyncSnapshot,
  AsyncState,
} from '@/components/data/async_data/AsyncSnapshot';
import { nodeList } from '@/data_source/fake_data_source';
import { ValidatorConfirmedStake } from '@/sites/delegation_ui/contexts/validator_selection_context';
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
  title: 'Sites/Delegation UI/Staking Modal/States/Staking',
  ...DefaultMeta,
  args: {
    ...DefaultMeta.args,
    selection: new ValidatorConfirmedStake(nodeList[INDEX_STAKED].address),
    validator: fullValidatorSet.nodes[INDEX_STAKED],
  },
};

export default meta;
type Story = StoryObj<typeof ValidatorConfirmedExample>;

export const None: Story = {
  args: {
    amount: '0',
  },
};

export const InsufficientBalance: Story = {
  args: {
    amount: '500000000000000000000000000',
  },
};

export const SufficientBalance: Story = {
  args: {
    amount: '1250000000000000000',
  },
};

export const ApproveSubmitting: Story = {
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.waiting(),
  },
};

export const ApproveWaiting: Story = {
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionWaiting(),
    ),
  },
};

export const ApproveSubmitted: Story = {
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH),
    ),
  },
};

export const ApproveWaitingForReceipt: Story = {
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH),
    ),
  },
};

export const ApproveReceiptRetrieved: Story = {
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.done,
      new PerformWriteTransactionReceiptRetrieved(
        FAKE_TRANSACTION_HASH,
        FAKE_RECEIPT,
      ),
    ),
  },
};

export const ApproveSubmissionError: Story = {
  args: {
    amount: '1250000000000000000',
    approvalAsyncSnapshot: AsyncSnapshot.withError(
      AsyncState.done,
      new Error('Approval failed'),
    ),
  },
};

export const DelegateSubmitting: Story = {
  args: {
    amount: '1250000000000000000',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.waiting(),
  },
};

export const DelegateWaiting: Story = {
  args: {
    amount: '1250000000000000000',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionWaiting(),
    ),
  },
};

export const DelegateSubmitted: Story = {
  args: {
    amount: '1250000000000000000',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH),
    ),
  },
};

export const DelegateWaitingForReceipt: Story = {
  args: {
    amount: '1250000000000000000',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH),
    ),
  },
};

export const DelegateReceiptRetrieved: Story = {
  args: {
    amount: '1250000000000000000',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.done,
      new PerformWriteTransactionReceiptRetrieved(
        FAKE_TRANSACTION_HASH,
        FAKE_RECEIPT,
      ),
    ),
  },
};

export const DelegateSubmissionError: Story = {
  args: {
    amount: '1250000000000000000',
    allowance: '1250000000000000000',
    delegationAsyncSnapshot: AsyncSnapshot.withError(
      AsyncState.done,
      new Error('Delegation failed'),
    ),
  },
};
