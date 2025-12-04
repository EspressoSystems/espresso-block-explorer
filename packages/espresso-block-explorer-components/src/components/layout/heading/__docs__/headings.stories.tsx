import Text from '@/text/text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Heading1 from '../heading1';
import Heading2 from '../heading2';

interface ExampleProps {
  heading: 'h1' | 'h2';
  text: string;
}
const Example: React.FC<ExampleProps> = ({ heading, text, ...props }) => {
  switch (heading) {
    case 'h2':
      return (
        <Heading2 {...props}>
          <Text text={text} />
        </Heading2>
      );

    default:
      return (
        <Heading1 {...props}>
          <Text text={text} />
        </Heading1>
      );
  }
};

const headings = {
  'Heading 1': 'h1',
  'Heading 2': 'h2',
};

const meta: Meta<typeof Example> = {
  title: 'Components/layout/Headings',
  component: Example,
  argTypes: {
    heading: {
      options: Object.keys(headings),
      mapping: headings,
      control: {
        type: 'select',
        labels: Object.keys(headings),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Headings: Story = {
  args: {
    heading: 'h1',
    text: 'Page Title',
  },
};
