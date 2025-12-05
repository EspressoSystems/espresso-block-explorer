import type { Meta, StoryObj } from '@storybook/react-vite';
import CircularProgressIndicatorComp from '../circular_progress_indicator';

const meta: Meta<typeof CircularProgressIndicator> = {
  title: 'Components/Loading/Circular Progress Indicator',
  component: CircularProgressIndicatorComp,
};

export default meta;
type Story = StoryObj<typeof CircularProgressIndicatorComp>;

export const CircularProgressIndicator: Story = {
  args: {},
};
