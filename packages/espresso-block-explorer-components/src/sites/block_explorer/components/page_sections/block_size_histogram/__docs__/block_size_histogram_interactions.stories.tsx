import { DataContext } from '@/contexts/data_provider';
import { ExplorerSummaryHistogramsContext } from '@/contexts/explorer_api_contexts';
import { iota } from '@/functional/functional';
import { SummaryHistograms } from '@/service/hotshot_query_service/explorer/summary_histograms';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import {
  interactionHoverOverIthBar,
  interactionUnhoverAll,
} from '../__shared__/block_histogram_shared';
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
  title:
    'Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const MouseOverBar: Story = {
  args: {
    data: {
      blockHeights: [...iota(10)],
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
