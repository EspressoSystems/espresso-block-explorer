import { DataContext } from '@/components/contexts';
import { iota } from '@/functional/functional';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BlockSizeHistogram } from '../BlockSizeHistogram';
import {
  getHistogram,
  hoverOverIthBar,
} from '../__shared__/block_histogram_shared';

describe('Block Size Histogram Interactions', () => {
  it('should get the histogram', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await getHistogram(histogram.container);
  });

  it('should show tooltip for the first bar', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await hoverOverIthBar(histogram.container, 0);
  });

  it('should show tooltip for the second bar', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await hoverOverIthBar(histogram.container, 1);
  });

  it('should show tooltip for the third bar', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await hoverOverIthBar(histogram.container, 2);
  });

  it('should show tooltip for the fourth bar', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await hoverOverIthBar(histogram.container, 3);
  });

  it('should show tooltip for the fifth bar', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await hoverOverIthBar(histogram.container, 4);
  });

  it('should show tooltip for the sixth bar', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await hoverOverIthBar(histogram.container, 5);
  });

  it('should show tooltip for the seventh bar', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await hoverOverIthBar(histogram.container, 6);
  });

  it('should show tooltip for the eighth bar', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await hoverOverIthBar(histogram.container, 7);
  });

  it('should show tooltip for the ninth bar', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await hoverOverIthBar(histogram.container, 8);
  });

  it('should show tooltip for the tenth bar', async () => {
    const histogram = render(
      <DataContext.Provider
        value={{ blocks: [...iota(10)], blockSize: [...iota(10)] }}
      >
        <BlockSizeHistogram />
      </DataContext.Provider>,
    );

    await hoverOverIthBar(histogram.container, 9);
  });
});
