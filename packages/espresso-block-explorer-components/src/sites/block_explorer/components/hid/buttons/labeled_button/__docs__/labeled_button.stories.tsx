import { default as Text } from '@/text/text';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as LabeledButtonComp } from '../labeled_button';

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
  title: 'Block Explorer/Components/HID/buttons/Labeled Button',
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
