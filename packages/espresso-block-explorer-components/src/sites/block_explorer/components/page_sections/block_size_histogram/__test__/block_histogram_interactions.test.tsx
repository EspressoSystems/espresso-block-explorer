import { DataContext } from '@/contexts/data_provider';
import { ExplorerSummaryHistogramsContext } from '@/contexts/explorer_api_contexts';
import { iota } from '@/functional/functional';
import { SummaryHistograms } from '@/service/hotshot_query_service/explorer/summary_histograms';
import { act, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import {
  getHistogram,
  interactionHoverOverIthBar,
} from '../__shared__/block_histogram_shared';
import { BlockSizeHistogram } from '../block_size_histogram';

describe('Block Size Histogram Interactions', () => {
  const data = new SummaryHistograms(
    Array.from(iota(10)),
    Array.from(iota(10)),
    Array.from(iota(10)),
    Array.from(iota(10)),
  );

  it('should get the histogram', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await getHistogram(histogram.container);
  });

  it('should show tooltip for the first bar', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await interactionHoverOverIthBar(histogram.container, 0);
  });

  it('should show tooltip for the second bar', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await interactionHoverOverIthBar(histogram.container, 1);
  });

  it('should show tooltip for the third bar', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await interactionHoverOverIthBar(histogram.container, 2);
  });

  it('should show tooltip for the fourth bar', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await interactionHoverOverIthBar(histogram.container, 3);
  });

  it('should show tooltip for the fifth bar', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await interactionHoverOverIthBar(histogram.container, 4);
  });

  it('should show tooltip for the sixth bar', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await interactionHoverOverIthBar(histogram.container, 5);
  });

  it('should show tooltip for the seventh bar', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await interactionHoverOverIthBar(histogram.container, 6);
  });

  it('should show tooltip for the eighth bar', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await interactionHoverOverIthBar(histogram.container, 7);
  });

  it('should show tooltip for the ninth bar', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await interactionHoverOverIthBar(histogram.container, 8);
  });

  it('should show tooltip for the tenth bar', async () => {
    const histogram = await act(() =>
      render(
        <ExplorerSummaryHistogramsContext.Provider value={data}>
          <DataContext.Provider value={data}>
            <BlockSizeHistogram />
          </DataContext.Provider>
        </ExplorerSummaryHistogramsContext.Provider>,
      ),
    );

    await interactionHoverOverIthBar(histogram.container, 9);
  });
});
