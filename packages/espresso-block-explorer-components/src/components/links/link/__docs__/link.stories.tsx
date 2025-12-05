import type { Meta, StoryObj } from '@storybook/react-vite';
import { InternalLink } from '../link';

const meta: Meta<typeof InternalLink> = {
  title: 'Components/Links/InternalLink',
  component: InternalLink,
};

export default meta;
type Story = StoryObj<typeof InternalLink>;

export const Normal: Story = {
  args: {
    children: ['Sample Text'],
  },
};

export const WithHref: Story = {
  args: {
    href: '/?path=/story/style-guide-all-icons--all-icons',
    children: ['All Icons'],
  },
};
