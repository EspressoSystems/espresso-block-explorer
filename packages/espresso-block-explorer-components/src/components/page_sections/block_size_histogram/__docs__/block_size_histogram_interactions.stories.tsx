import { DataContext } from '@/components/contexts';
import { iota } from '@/functional/functional';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { BlockSizeHistogram } from '../BlockSizeHistogram';
import { BlockSizeHistogramData } from '../BlockSizeHistogramDataLoader';
import {
  interactionHoverOverIthBar,
  interactionUnhoverAll,
} from '../__shared__/block_histogram_shared';

interface ExampleProps {
  data: BlockSizeHistogramData;
}

const Example: React.FC<ExampleProps> = ({ data, ...props }) => (
  <DataContext.Provider value={data}>
    <BlockSizeHistogram {...props} />
  </DataContext.Provider>
);

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Histogram/Block Size/Interactions',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const MouseOverBar: Story = {
  args: {
    data: {
      blocks: [...iota(10)],
      blockSize: [...iota(10)],
    },
  },

  play: async ({ canvasElement, step }) => {
    await step('Hover over first bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 0);
    });

    await step('Hover over second bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 1);
    });

    await step('Hover over third bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 2);
    });

    await step('Hover over fourth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 3);
    });

    await step('Hover over fifth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 4);
    });

    await step('Hover over sixth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 5);
    });

    await step('Hover over seventh bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 6);
    });

    await step('Hover over eighth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 7);
    });

    await step('Hover over ninth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 8);
    });

    await step('Hover over tenth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 9);
    });

    await step('Mouse off', async () => {
      await interactionUnhoverAll(canvasElement);
    });
  },
};
