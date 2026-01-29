import {
  environmentArgsDecafWithContracts,
  environmentArgsFakeDataWithContracts,
  environmentArgsLocalDevNetWithContracts,
} from '@/models/config/storybook/controls';
import { Meta, StoryObj } from '@storybook/react-vite';
import { delegationUIInteractions } from '../__shared__/delegation_ui_shared';

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
    l1ValidatorServiceURL:
      'https://staking-api.decaf.testnet.espresso.network/v0/staking/',
  },
};

// export const Mainnet: Story = {
//   args: environmentArgsMainnetWithContracts,
// };

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeDataWithContracts,
    intentType: 'claim-and-stake',
  },
};

/**
export const FakeDataInteractions: Story = {
  args: environmentArgsFakeDataWithContracts,
  async play({ canvasElement, step }) {
    await delegationUIInteractions(canvasElement, step);
  },
};
*/

export const LocalDevNet: Story = {
  args: {
    ...environmentArgsLocalDevNetWithContracts,
    l1ValidatorServiceURL: 'http://localhost:8080/v0/staking/',
  },
};
