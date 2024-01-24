import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { curatedRollupMap } from '../../../../../types/data_source/rollup_entry/data';
import RollUpSimpleComp from '../RollUpSimple';

interface ExampleProps {
  namespace: number;
}
const Example: React.FC<ExampleProps> = (props) => (
  <RollUpSimpleComp namespace={props.namespace} />
);

function* rollupEntries() {
  for (const entry of curatedRollupMap) {
    yield [entry[1].name, entry[0]];
  }
}

const namespaces = {
  ...Object.fromEntries(rollupEntries()),
  'Unregistered Rollup (1)': 1,
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Roll Up Simple',
  component: Example,
  argTypes: {
    namespace: {
      options: Object.keys(namespaces),
      mapping: namespaces,
      control: {
        type: 'select',
        labels: Object.keys(namespaces),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const RollUpSimple: Story = {
  args: {
    namespace: namespaces[Object.keys(namespaces)[0]],
  },
};
