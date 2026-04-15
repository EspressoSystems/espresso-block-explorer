import { DataContext } from '@/contexts/data_provider';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { iota, mapIterable } from '@/functional/functional';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { ExplorerBlockSummary } from '@/service/hotshot_query_service/explorer/block_summary';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { BlockSummaryDataTable as BlockSummaryDataTableComponent } from '../block_summary_data_table';

interface ExampleProps {
  blockSummaries: ExplorerBlockSummary[];
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
  mapIterable(iota(20), (i): ExplorerBlockSummary => {
    return new ExplorerBlockSummary(
      new TaggedBase64('BLOCK', prng.fillBytes(32)),
      i,
      [prng.fillBytes(20)],
      i,
      prng.nextRange(1000, 100000) * 10,
      new Date(Date.now() + i * 1000),
    );
  }),
);

export const BlockSummaryDataTable: Story = {
  args: {
    blockSummaries,
  },
};
