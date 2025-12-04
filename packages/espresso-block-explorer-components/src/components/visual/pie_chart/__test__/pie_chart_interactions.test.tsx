import { DataContext } from '@/components/contexts';
import { iota, mapIterator } from '@/functional/functional';
import { act, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { PieChartFromData } from '../pie_chart';
import {
  getPieChart,
  interactionExitHoverAll,
  interactionHoverOverIthSlice,
} from '../__shared__/pie_chart_shared';

describe('Block Size Histogram Interactions', () => {
  it('should get the histogram', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await getPieChart(chart.container);
  });

  it('should show tooltip for the first slice', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionHoverOverIthSlice(chart.container, 0);
  });

  it('should show tooltip for the second slice', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionHoverOverIthSlice(chart.container, 1);
  });

  it('should show tooltip for the third slice', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionHoverOverIthSlice(chart.container, 2);
  });

  it('should show tooltip for the fourth slice', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionHoverOverIthSlice(chart.container, 3);
  });

  it('should show tooltip for the fifth slice', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionHoverOverIthSlice(chart.container, 4);
  });

  it('should show tooltip for the sixth slice', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionHoverOverIthSlice(chart.container, 5);
  });

  it('should show tooltip for the seventh slice', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionHoverOverIthSlice(chart.container, 6);
  });

  it('should show tooltip for the eighth slice', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionHoverOverIthSlice(chart.container, 7);
  });

  it('should show tooltip for the ninth slice', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionHoverOverIthSlice(chart.container, 8);
  });

  it('should show tooltip for the tenth slice', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionHoverOverIthSlice(chart.container, 9);
  });

  it('should exit hover overall elements', async () => {
    const chart = await act(() =>
      render(
        <DataContext.Provider
          value={[
            ...mapIterator(iota(10), (i) => ({
              label: `Entry ${i}`,
              value: 1,
            })),
          ]}
        >
          <PieChartFromData />
        </DataContext.Provider>,
      ),
    );

    await interactionExitHoverAll(chart.container);
  });
});
