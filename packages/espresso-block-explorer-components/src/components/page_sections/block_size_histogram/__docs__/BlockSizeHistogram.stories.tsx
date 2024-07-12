import { DataContext } from '@/components/contexts';
import { dropIterator, inf, takeIterator } from '@/functional/functional';
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
  title: 'Components/Page Sections/Histogram/Block Size',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: {
      blocks: [...takeIterator(dropIterator(inf(), 1), 10)],
      blockSize: [...takeIterator(dropIterator(inf(), 1), 10)],
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
