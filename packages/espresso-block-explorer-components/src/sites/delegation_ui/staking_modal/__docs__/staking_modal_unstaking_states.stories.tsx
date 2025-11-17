import {
  AsyncSnapshot,
  AsyncState,
} from '@/components/data/async_data/AsyncSnapshot';
import { nodeList } from '@/data_source/fake_data_source';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ValidatorConfirmedUndelegate } from 'sites/delegation_ui/contexts/validator_selection_context';
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
  title: 'Sites/Delegation UI/Staking Modal/States/Unstaking',
  ...DefaultMeta,
  args: {
    ...DefaultMeta.args,
    selection: new ValidatorConfirmedUndelegate(nodeList[INDEX_STAKED].address),
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

export const Option25Percent: Story = {
  args: {
    amount: '1250000000000000000000',
  },
};

export const Option50Percent: Story = {
  args: {
    amount: '2500000000000000000000',
  },
};

export const Option75Percent: Story = {
  args: {
    amount: '3750000000000000000000',
  },
};

export const OptionAll: Story = {
  args: {
    amount: '5000000000000000000000',
  },
};

export const InsufficientStake: Story = {
  args: {
    amount: '50000000000000000000000',
  },
};

export const SufficientStake: Story = {
  args: {
    amount: '0',
  },
};

export const Submitting: Story = {
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.waiting(),
  },
};

export const Waiting: Story = {
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionWaiting(),
    ),
  },
};

export const Submitted: Story = {
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionSucceeded(FAKE_TRANSACTION_HASH),
    ),
  },
};

export const WaitingForReceipt: Story = {
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(
      AsyncState.active,
      new PerformWriteTransactionReceiptWaiting(FAKE_TRANSACTION_HASH),
    ),
  },
};

export const ReceiptRetrieved: Story = {
  args: {
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withData(
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
    amount: '1250000000000000000',
    undelegationAsyncSnapshot: AsyncSnapshot.withError(
      AsyncState.done,
      new Error('Undelegation failed'),
    ),
  },
};
