import { DataContext } from '@/components/contexts';
import {
  getDataTable,
  selectAllTableHeaderCellsTwice,
} from '@/components/data/data_table/__shared__/data_table_shared';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { iota, mapIterable } from '@/functional/functional';
import { TaggedBase64 } from '@/models/espresso';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { TransactionSummary } from '../TransactionSummaryDataLoader';
import { TransactionsSummaryDataTable as TransactionsSummaryDataTableComponent } from '../TransactionSummaryDataTable';

interface ExampleProps {
  transactionSummaries: TransactionSummary[];
}

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <DataContext.Provider value={props.transactionSummaries}>
      <TransactionsSummaryDataTableComponent />
    </DataContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'components/Data/Transaction Summary Data Table/Interactions',
  component: Example,
  args: {
    transactionSummaries: [],
  },
  argTypes: {
    transactionSummaries: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

const prng = new PseudoRandomNumberGenerator();
const transactionSummaries = Array.from(
  mapIterable(iota(20), (i): TransactionSummary => {
    return {
      hash: new TaggedBase64('TxHash', prng.fillBytes(32)),
      rollups: [1],
      block: i,
      offset: i,
      time: new Date(Date.now() + i * 1000),
    };
  }),
);

export const TransactionSummaryDataTable: Story = {
  args: {
    transactionSummaries,
  },
  play: async ({ canvasElement, step }) => {
    await step('retrieve the data table element', async () => {
      await getDataTable(canvasElement);
    });

    await step('sort all columns', async () => {
      await selectAllTableHeaderCellsTwice(canvasElement);
    });
  },
};
