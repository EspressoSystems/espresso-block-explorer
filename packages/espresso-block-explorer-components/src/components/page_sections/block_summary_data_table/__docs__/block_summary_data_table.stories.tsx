import { DataContext } from '@/components/contexts';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { iota, mapIterable } from '@/functional/functional';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { BlockSummary } from '../block_summary_data_loader';
import { BlockSummaryDataTable as BlockSummaryDataTableComponent } from '../block_summary_data_table';

interface ExampleProps {
  blockSummaries: BlockSummary[];
}

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <DataContext.Provider value={props.blockSummaries}>
      <BlockSummaryDataTableComponent />
    </DataContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'components/Data/Block Summary Data Table',
  component: Example,
  args: {
    blockSummaries: [],
  },
  argTypes: {
    blockSummaries: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

const prng = new PseudoRandomNumberGenerator();
const blockSummaries = Array.from(
  mapIterable(iota(20), (i): BlockSummary => {
    return {
      block: i,
      proposer: [prng.fillBytes(20)],
      transactions: i,
      size: prng.nextRange(1000, 100000) * 10,
      time: new Date(Date.now() + i * 1000),
    };
  }),
);

export const BlockSummaryDataTable: Story = {
  args: {
    blockSummaries,
  },
};
