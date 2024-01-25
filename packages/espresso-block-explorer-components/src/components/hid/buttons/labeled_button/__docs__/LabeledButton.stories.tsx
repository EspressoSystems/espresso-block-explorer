import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Text from '../../../../text/Text';
import LabeledButtonComp from '../LabeledButton';

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
