import { DataContext } from '@/components/contexts';
import { iota, mapIterable } from '@/functional/functional';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { RollUpsSummaryDataTable as RollUpsSummaryDataTableComponent } from '../roll_ups_summary_data_table';
import { RollUpSummary } from '../roll_ups_summary_loader';

interface ExampleProps {
  rollupSummaries: RollUpSummary[];
}

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <DataContext.Provider value={props.rollupSummaries}>
      <RollUpsSummaryDataTableComponent />
    </DataContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'components/Data/Rollups Summary Data Table',
  component: Example,
  args: {
    rollupSummaries: [],
  },
  argTypes: {
    rollupSummaries: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

const rollupSummaries = Array.from(
  mapIterable(iota(20), (i): RollUpSummary => {
    return {
      namespace: i,
      transactions: i * 2,
    };
  }),
);

export const RollUpsSummaryDataTable: Story = {
  args: {
    rollupSummaries,
  },
};
