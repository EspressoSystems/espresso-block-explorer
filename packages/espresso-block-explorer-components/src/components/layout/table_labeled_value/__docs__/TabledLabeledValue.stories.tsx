import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Text from '../../../text/Text';
import TabledLabeledValueComp from '../TabledLabeledValue';

interface ExampleProps {
  label: string;
  value: string;
}

const Example: React.FC<ExampleProps> = ({ label, value, ...props }) => (
  <TabledLabeledValueComp {...props}>
    <Text text={label} />
    <Text text={value} />
  </TabledLabeledValueComp>
);

const meta: Meta<typeof Example> = {
  title: 'Components/Layout/Tabled Labeled Value',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const TabledLabeledValue: Story = {
  args: {
    label: 'Label',
    value: '100',
  },
};
