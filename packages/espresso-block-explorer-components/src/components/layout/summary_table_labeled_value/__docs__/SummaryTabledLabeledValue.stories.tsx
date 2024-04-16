import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Text from '../../../text/Text';
import SummaryTabledLabeledValueComp from '../SummaryTabledLabeledValue';

interface ExampleProps {
  label: string;
  value: string;
}

const Example: React.FC<ExampleProps> = ({ label, value, ...props }) => (
  <SummaryTabledLabeledValueComp {...props}>
    <Text text={label} />
    <Text text={value} />
  </SummaryTabledLabeledValueComp>
);

const meta: Meta<typeof Example> = {
  title: 'Components/Layout/Summary Tabled Labeled Value',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const SummaryTabledLabeledValue: Story = {
  args: {
    label: 'Label',
    value: '100',
  },
};
