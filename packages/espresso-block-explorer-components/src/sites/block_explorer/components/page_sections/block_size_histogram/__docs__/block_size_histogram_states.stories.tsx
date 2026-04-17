import { DataContext } from '@/contexts/data_provider';
import { ErrorContext } from '@/contexts/error_provider';
import { ExplorerSummaryHistogramsContext } from '@/contexts/explorer_api_contexts';
import { LoadingContext } from '@/contexts/loading_provider';
import { iota, mapIterator } from '@/functional/functional';
import { SummaryHistograms } from '@/service/hotshot_query_service/explorer/summary_histograms';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { BlockSizeHistogram } from '../block_size_histogram';

interface ExampleProps {
  data: {
    blockHeights: (number | null)[];
    blockSize: (number | null)[];
  };
  loading: boolean;
  error: unknown;
}

const Example: React.FC<ExampleProps> = ({
  data,
  error,
  loading,
  ...props
}) => {
  const histograms = new SummaryHistograms(
    data.blockSize.map((_, index) => index),
    data.blockSize,
    data.blockSize.map((_, index) => index),
    data.blockHeights,
  );

  return (
    <LoadingContext.Provider value={loading}>
      <ErrorContext.Provider value={error}>
        <ExplorerSummaryHistogramsContext.Provider value={histograms}>
          <DataContext.Provider value={histograms}>
            <BlockSizeHistogram {...props} />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>
      </ErrorContext.Provider>
    </LoadingContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Components/Page Sections/Histogram/Block Size/States',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const RandomData: Story = {
  args: {
    data: {
      blockHeights: [...iota(10)],
      blockSize: [...mapIterator(iota(10), () => Math.random() * 100)],
    },
    loading: false,
    error: null,
  },
};

export const MissingData: Story = {
  args: {
    data: {
      blockHeights: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
      blockSize: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
    },
    loading: false,
    error: null,
  },
};

export const EmptyData: Story = {
  args: {
    data: {
      blockHeights: [],
      blockSize: [],
    },
    loading: false,
    error: null,
  },
};

export const LoadingData: Story = {
  args: {
    data: {
      blockHeights: [],
      blockSize: [],
    },
    loading: true,
    error: null,
  },
};
