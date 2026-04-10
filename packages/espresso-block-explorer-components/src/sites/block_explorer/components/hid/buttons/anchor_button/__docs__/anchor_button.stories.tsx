import { default as Text } from '@/text/text';
import { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as AnchorButtonComp } from '../anchor_button';

interface ExampleProps {
  href: string;
  disabled: boolean;
}

const Example: React.FC<ExampleProps> = (props) => (
  <AnchorButtonComp href={props.href} disabled={props.disabled} target="_blank">
    <Text text="Click Me" />
  </AnchorButtonComp>
);

const meta: Meta = {
  title: 'Block Explorer/Components/HID/buttons/Anchor Button',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const AnchorButton: Story = {
  args: {
    disabled: false,
    href: 'https://example.com/',
  },
};
