import Text from '@/text/text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import SummaryTableLabeledValueComp from '../summary_table_labeled_value';

interface ExampleProps {
  label: string;
  value: string;
}

const Example: React.FC<ExampleProps> = ({ label, value, ...props }) => (
  <SummaryTableLabeledValueComp {...props}>
    <Text text={label} />
    <Text text={value} />
  </SummaryTableLabeledValueComp>
);

const meta: Meta<typeof Example> = {
  title: 'Components/Layout/Summary Tabled Labeled Value',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const SummaryTableLabeledValue: Story = {
  args: {
    label: 'Label',
    value: '100',
  },
};
