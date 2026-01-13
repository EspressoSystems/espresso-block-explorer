import type { Meta, StoryObj } from '@storybook/react-vite';
import ContainerLoading from '../container_loading';

const meta: Meta<typeof ContainerLoading> = {
  title: 'Block Explorer/Components/Loading/Container',
  component: ContainerLoading,
};

export default meta;
type Story = StoryObj<typeof ContainerLoading>;

export const Container: Story = {
  args: {},
};
