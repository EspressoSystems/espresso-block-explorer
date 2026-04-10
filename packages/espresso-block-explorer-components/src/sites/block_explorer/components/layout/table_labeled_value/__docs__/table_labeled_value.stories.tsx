import { default as Text } from '@/text/text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as TableLabeledValueComp } from '../table_labeled_value';

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
  title: 'Block Explorer/Components/Layout/Tabled Labeled Value',
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
