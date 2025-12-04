import Text from '@/text/Text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import LabeledAnchorButtonComp from '../LabeledAnchorButton';

interface ExampleProps {
  label: string;
  disabled: boolean;
  href: string;
}

const Example: React.FC<ExampleProps> = ({
  label,
  disabled,
  href,
  ...props
}) => (
  <LabeledAnchorButtonComp
    {...props}
    href={href}
    disabled={disabled}
    target="_blank"
  >
    <Text text={label} />
  </LabeledAnchorButtonComp>
);

const meta: Meta<typeof Example> = {
  title: 'Components/HID/buttons/Labeled Anchor Button',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const LabeledAnchorButton: Story = {
  args: {
    disabled: false,
    label: 'View All',
    href: 'https://example.com/',
  },
};
