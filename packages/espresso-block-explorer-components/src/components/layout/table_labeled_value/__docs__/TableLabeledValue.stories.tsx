import Text from '@/text/Text';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TableLabeledValueComp from '../TableLabeledValue';

interface ExampleProps {
  label: string;
  value: string;
}

const Example: React.FC<ExampleProps> = ({ label, value, ...props }) => (
  <TableLabeledValueComp {...props}>
    <Text text={label} />
    <Text text={value} />
  </TableLabeledValueComp>
);

const meta: Meta<typeof Example> = {
  title: 'Components/Layout/Tabled Labeled Value',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const TableLabeledValue: Story = {
  args: {
    label: 'Label',
    value: '100',
  },
};
