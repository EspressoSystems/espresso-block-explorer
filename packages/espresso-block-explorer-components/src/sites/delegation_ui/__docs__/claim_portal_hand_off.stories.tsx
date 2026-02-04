import {
  environmentArgsDecafWithContracts,
  environmentArgsFakeDataWithContracts,
  environmentArgsLocalDevNetWithContracts,
  environmentArgsMainnetWithContracts,
} from '@/models/config/storybook/controls';
import { Meta, StoryObj } from '@storybook/react-vite';
import { kIntentClaimAndStake } from 'delegation-ui';
import ExampleMeta, { Example } from './delegation_ui.stories';

const meta: Meta = {
  ...ExampleMeta,
  title: 'Delegation UI/Pages/Claim Hand Off',
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Decaf: Story = {
  args: {
    ...environmentArgsDecafWithContracts,
    intentType: kIntentClaimAndStake,
    l1ValidatorServiceURL:
      'https://staking-api.decaf.testnet.espresso.network/v0/staking/',
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnetWithContracts,
    l1ValidatorServiceURL:
      'https://staking-api.main.net.espresso.network/v0/staking/',
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeDataWithContracts,
    intentType: kIntentClaimAndStake,
  },
};

export const LocalDevNet: Story = {
  args: {
    ...environmentArgsLocalDevNetWithContracts,
    intentType: kIntentClaimAndStake,
    l1ValidatorServiceURL: 'http://localhost:8080/v0/staking/',
  },
};
