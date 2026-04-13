import { default as Text } from '@/text/text';
import { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as ButtonComp } from '../button/button';

interface ExampleProps {
  disabled: boolean;
}

const Example: React.FC<ExampleProps> = (props) => (
  <ButtonComp disabled={props.disabled} onClick={() => {}}>
    <Text text="Click Me" />
  </ButtonComp>
);

const meta: Meta = {
  title: 'Block Explorer/Components/HID/buttons',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Button: Story = {
  args: {
    disabled: false,
  },
};
