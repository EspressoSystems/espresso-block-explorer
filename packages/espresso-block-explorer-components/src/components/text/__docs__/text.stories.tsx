import type { Meta, StoryObj } from '@storybook/react-vite';
import TextComponent from '../Text';

const meta: Meta<typeof TextComponent> = {
  title: 'Components/Text',
  component: TextComponent,
};

export default meta;
type Story = StoryObj<typeof TextComponent>;

export const Text: Story = {
  args: {
    text: 'Hello, World!',
  },
};
