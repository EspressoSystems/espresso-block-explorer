import { default as Text } from '@/text/text';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as LabeledAnchorButtonComp } from '../labeled_anchor_button';

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
  title: 'Block Explorer/Components/HID/buttons/Labeled Anchor Button',
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
