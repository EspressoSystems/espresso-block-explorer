import type { Meta, StoryObj } from '@storybook/react';
import LocalLink from '../Link';

const meta: Meta<typeof LocalLink> = {
  title: 'Components/Links/Link',
  component: LocalLink,
};

export default meta;
type Story = StoryObj<typeof LocalLink>;

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
