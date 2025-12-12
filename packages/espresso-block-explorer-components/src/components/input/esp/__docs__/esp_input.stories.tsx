import { Meta, StoryObj } from '@storybook/react-vite';
import { Example } from '../__shared__/example';

const meta: Meta<typeof Example> = {
  title: 'Components/HID/Inputs/ESPInput',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const ESPInput: Story = {
  args: {},
};

export const EdgeCase: Story = {
  args: {
    initialValue: '0x152d02c7e14af6800000',
  },
};
