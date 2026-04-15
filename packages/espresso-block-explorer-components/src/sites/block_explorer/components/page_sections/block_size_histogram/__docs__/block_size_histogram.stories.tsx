import { DataContext } from '@/contexts/data_provider';
import { ExplorerSummaryHistogramsContext } from '@/contexts/explorer_api_contexts';
import { dropIterator, inf, takeIterator } from '@/functional/functional';
import { SummaryHistograms } from '@/service/hotshot_query_service/explorer/summary_histograms';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { BlockSizeHistogram } from '../block_size_histogram';

interface ExampleProps {
  data: {
    blockHeights: (number | null)[];
    blockSize: (number | null)[];
  };
}

const Example: React.FC<ExampleProps> = ({ data, ...props }) => {
  const histograms = new SummaryHistograms(
    data.blockSize.map((_, index) => index),
    data.blockSize,
    data.blockSize.map((_, index) => index),
    data.blockHeights,
  );

  return (
    <ExplorerSummaryHistogramsContext.Provider value={histograms}>
      <DataContext.Provider value={histograms}>
        <BlockSizeHistogram {...props} />
      </DataContext.Provider>
    </ExplorerSummaryHistogramsContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Components/Page Sections/Histogram/Block Size',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: {
      blockHeights: [...takeIterator(dropIterator(inf(), 1), 10)],
      blockSize: [...takeIterator(dropIterator(inf(), 1), 10)],
    },
  },
};

export const MissingData: Story = {
  args: {
    data: {
      blockHeights: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
      blockSize: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
    },
  },
};
