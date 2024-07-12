import { DataContext } from '@/components/contexts';
import { iota, mapIterator } from '@/functional/functional';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BlockSizeHistogram } from '../BlockSizeHistogram';
import { BlockSizeHistogramData } from '../BlockSizeHistogramDataLoader';

interface ExampleProps {
  data: BlockSizeHistogramData;
}

const Example: React.FC<ExampleProps> = ({ data, ...props }) => (
  <DataContext.Provider value={data}>
    <BlockSizeHistogram {...props} />
  </DataContext.Provider>
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
  },
};

export const MissingData: Story = {
  args: {
    data: {
      blocks: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
      blockSize: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
    },
  },
};

export const EmptyData: Story = {
  args: {
    data: {
      blocks: [],
      blockSize: [],
    },
  },
};
