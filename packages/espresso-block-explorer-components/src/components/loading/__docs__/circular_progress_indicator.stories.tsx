import type { Meta, StoryObj } from '@storybook/react-vite';
import { default as CircularProgressIndicatorComp } from '../circular_progress_indicator';

const Example: React.FC = () => (<CircularProgressIndicatorComp />);

const meta: Meta<typeof CircularProgressIndicator> = {
  title: 'Components/Loading/Circular Progress Indicator',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof CircularProgressIndicatorComp>;

export const CircularProgressIndicator: Story = {
  args: {},
};
