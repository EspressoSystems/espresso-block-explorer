import { nodeList } from '@/data_source/fake_data_source';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ValidatorConfirmed } from 'sites/delegation_ui/contexts/validator_selection_context';
import { fullValidatorSet, INDEX_STAKED } from '../__shared__/example_data';
import {
  DefaultMeta,
  ValidatorConfirmedExample,
} from '../__shared__/validator_confirmed_example';
import '../staking_modal.css';

const meta: Meta = {
  title: 'Sites/Delegation UI/Staking Modal/States',

  ...DefaultMeta,
  args: {
    ...DefaultMeta.args,
    selection: new ValidatorConfirmed(nodeList[INDEX_STAKED].address),
    validator: fullValidatorSet.nodes[INDEX_STAKED],
    amount: '0',
  },
};

export default meta;
type Story = StoryObj<typeof ValidatorConfirmedExample>;

export const ManageStake: Story = {
  args: {
    amount: '0',
  },
};
