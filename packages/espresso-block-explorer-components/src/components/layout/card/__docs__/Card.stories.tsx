import Text from '@/text/Text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import CardComp from '../Card';

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
  title: 'Components/layout/Card',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Card: Story = {
  args: {
    text: 'Card Content',
  },
};
