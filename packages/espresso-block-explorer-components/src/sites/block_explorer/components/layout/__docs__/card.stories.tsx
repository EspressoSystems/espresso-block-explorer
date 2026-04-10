import { default as Text } from '@/text/text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as CardComp } from '../card/card';

interface ExampleProps {
  text: string;
}
const Example: React.FC<ExampleProps> = ({ text, ...props }) => {
  return (
    <CardComp {...props}>
      <Text text={text} />
    </CardComp>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Components/LayoutCard',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Card: Story = {
  args: {
    text: 'Card Content',
  },
};
