import {
  DataContext,
  ErrorContext,
  LoadingContext,
} from '@/components/contexts';
import { iota, mapIterator } from '@/functional/functional';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { BlockSizeHistogram } from '../BlockSizeHistogram';
import { BlockSizeHistogramData } from '../BlockSizeHistogramDataLoader';

interface ExampleProps {
  data: BlockSizeHistogramData;
  loading: boolean;
  error: unknown;
}

const Example: React.FC<ExampleProps> = ({
  data,
  error,
  loading,
  ...props
}) => (
  <LoadingContext.Provider value={loading}>
    <ErrorContext.Provider value={error}>
      <DataContext.Provider value={data}>
        <BlockSizeHistogram {...props} />
      </DataContext.Provider>
    </ErrorContext.Provider>
  </LoadingContext.Provider>
);

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Histogram/Block Size/States',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const RandomData: Story = {
  args: {
    data: {
      blocks: [...iota(10)],
      blockSize: [...mapIterator(iota(10), () => Math.random() * 100)],
    },
    loading: false,
    error: null,
  },
};

export const MissingData: Story = {
  args: {
    data: {
      blocks: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
      blockSize: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
    },
    loading: false,
    error: null,
  },
};

export const EmptyData: Story = {
  args: {
    data: {
      blocks: [],
      blockSize: [],
    },
    loading: false,
    error: null,
  },
};

export const LoadingData: Story = {
  args: {
    data: {
      blocks: [],
      blockSize: [],
    },
    loading: true,
    error: null,
  },
};
