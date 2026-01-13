import { Meta, StoryObj } from '@storybook/react-vite';
import { Example, exampleMeta } from '../__shared__/example';

const meta: Meta<typeof Example> = {
  ...exampleMeta,
  title: 'Components/HID/Inputs/ESPInput',
};

export default meta;
type Story = StoryObj<typeof Example>;

export const ESPInput: Story = {
};

export const EdgeCase: Story = {
  args: {
    initialValue: '0x152d02c7e14af6800000',
  },
};

