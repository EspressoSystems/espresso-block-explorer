import { default as Text } from '@/text/text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { Label } from '../label';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <Label {...props}>
      <Text text="label" />
    </Label>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Components/LayoutLabel',
  component: Example,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Labels: Story = {
  args: {},
};
