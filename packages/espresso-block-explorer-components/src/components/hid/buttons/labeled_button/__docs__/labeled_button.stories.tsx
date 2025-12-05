import Text from '@/text/text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import LabeledButtonComp from '../labeled_button';

interface ExampleProps {
  label: string;
  disabled: boolean;
  onClick?: () => void;
}

const Example: React.FC<ExampleProps> = ({
  label,
  disabled,
  onClick,
  ...props
}) => (
  <LabeledButtonComp {...props} onClick={onClick} disabled={disabled}>
    <Text text={label} />
  </LabeledButtonComp>
);

const meta: Meta<typeof Example> = {
  title: 'Components/HID/buttons/Labeled Button',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const LabeledButton: Story = {
  args: {
    disabled: false,
    onClick: () => {},
    label: 'View All',
  },
};
