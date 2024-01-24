import React from 'react';
import { Meta, StoryObj } from 'storybook';
import Text from '../../../text/Text';
import ButtonComp from '../button/Button';

interface ExampleProps {
  disabled: boolean;
}

const Example: React.FC<ExampleProps> = (props) => (
  <ButtonComp disabled={props.disabled} onClick={() => {}}>
    <Text text="Click Me" />
  </ButtonComp>
);

const meta: Meta = {
  title: 'components/hid/buttons',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Button: Story = {
  args: {
    disabled: false,
  },
};
