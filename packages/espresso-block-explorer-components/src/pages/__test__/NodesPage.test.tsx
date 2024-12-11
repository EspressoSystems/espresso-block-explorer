import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/NodesPage.stories';

const { Nodes } = composeStories(stories);

window.HTMLElement.prototype.scrollIntoView = function () {};

describe('NodesPage', async () => {
  it('should render the story', async () => {
    render(<Nodes data-testid="1" />);

    // Wait for the main page to be present.
    await waitFor(() => {
      const ele = screen.getByTestId('1');
      expect(ele).toBeInTheDocument();
    });

    const nodePage = screen.getByTestId('1');
    expect(nodePage).toBeInTheDocument();

    // Wait for the cards to all be rendered
    await waitFor(
      () => {
        const cards = nodePage.querySelectorAll('.card');
        // we should have 12 card sections
        expect(cards).toHaveLength(12);
      },
      { container: nodePage },
    );

    // Latest Block Section
    {
      const latestBlockSection: HTMLElement | null =
        nodePage.querySelector('.latest-block.card');
      expect(latestBlockSection).not.toBeNull();
      if (!latestBlockSection) {
        // This is here just to satisfy typescript. In reality, this should
        // be unreachable.
        return;
      }

      // Wait until we have row data in the latest block table
      await waitFor(
        () => {
          const summaryValues = latestBlockSection.querySelectorAll(
            '.summary-tabled-labeled-value',
          );
          expect(summaryValues).toHaveLength(5);
        },
        { container: latestBlockSection },
      );
    }

    // Latest Block Producers Section
    {
      const latestBlockProducersSection: HTMLElement | null =
        nodePage.querySelector('.latest-block-producers.card');
      expect(latestBlockProducersSection).not.toBeNull();
      if (!latestBlockProducersSection) {
        // This is here just to satisfy typescript. In reality, this should
        // be unreachable.
        return;
      }

      // Wait until we have row data in the latest block producers table
      await waitFor(
        () => {
          const rows = latestBlockProducersSection.querySelectorAll(
            '.summary-tabled-labeled-value',
          );
          expect(rows.length).toBeGreaterThan(0);
        },
        { container: latestBlockProducersSection },
      );
    }

    // Block Time Histogram Section
    {
      const blockTimeHistogramSection: HTMLElement | null =
        nodePage.querySelector('.block-time-histogram.card');
      expect(blockTimeHistogramSection).not.toBeNull();
      if (!blockTimeHistogramSection) {
        // This is here just to satisfy typescript. In reality, this should
        // be unreachable.
        return;
      }

      // Wait for histogram plot graphics datagroup
      await waitFor(
        () => {
          const histogramPlotGraphics: HTMLElement | null =
            blockTimeHistogramSection.querySelector(
              '.histogram-plot[role="graphics-datagroup"]',
            );
          expect(histogramPlotGraphics).not.toBeNull();
        },
        { container: blockTimeHistogramSection },
      );

      const histogramPlotGraphics: HTMLElement | null =
        blockTimeHistogramSection.querySelector(
          '.histogram-plot[role="graphics-datagroup"]',
        );

      if (!histogramPlotGraphics) {
        return;
      }

      // Wait until we have row data in the block time graph
      await waitFor(
        () => {
          expect(histogramPlotGraphics.children).toHaveLength(50);
        },
        { container: histogramPlotGraphics },
      );
    }

    // Block Size Histogram Section
    {
      const blockSizeHistogramSection: HTMLElement | null =
        nodePage.querySelector('.block-size-histogram.card');
      expect(blockSizeHistogramSection).not.toBeNull();
      if (!blockSizeHistogramSection) {
        // This is here just to satisfy typescript. In reality, this should
        // be unreachable.
        return;
      }

      // Wait for histogram plot graphics datagroup
      await waitFor(
        () => {
          const histogramPlotGraphics: HTMLElement | null =
            blockSizeHistogramSection.querySelector(
              '.histogram-plot[role="graphics-datagroup"]',
            );
          expect(histogramPlotGraphics).not.toBeNull();
        },
        { container: blockSizeHistogramSection },
      );

      const histogramPlotGraphics: HTMLElement | null =
        blockSizeHistogramSection.querySelector(
          '.histogram-plot[role="graphics-datagroup"]',
        );

      if (!histogramPlotGraphics) {
        return;
      }

      // Wait until we have row data in the block time graph
      await waitFor(
        () => {
          expect(histogramPlotGraphics.children).toHaveLength(50);
        },
        { container: histogramPlotGraphics },
      );
    }

    // Throughput Histogram Section
    {
      const throughputHistogramSection: HTMLElement | null =
        nodePage.querySelector('.throughput-histogram.card');
      expect(throughputHistogramSection).not.toBeNull();
      if (!throughputHistogramSection) {
        // This is here just to satisfy typescript. In reality, this should
        // be unreachable.
        return;
      }

      // Wait for histogram plot graphics datagroup
      await waitFor(
        () => {
          const histogramPlotGraphics: HTMLElement | null =
            throughputHistogramSection.querySelector(
              '.histogram-plot[role="graphics-datagroup"]',
            );
          expect(histogramPlotGraphics).not.toBeNull();
        },
        { container: throughputHistogramSection },
      );

      const histogramPlotGraphics: HTMLElement | null =
        throughputHistogramSection.querySelector(
          '.histogram-plot[role="graphics-datagroup"]',
        );

      if (!histogramPlotGraphics) {
        return;
      }

      // Wait until we have row data in the block time graph
      await waitFor(
        () => {
          expect(histogramPlotGraphics.children).toHaveLength(50);
        },
        { container: histogramPlotGraphics },
      );
    }

    // Network Map Section
    {
      const networkMapSection: HTMLElement | null =
        nodePage.querySelector('.network-map.card');
      expect(networkMapSection).not.toBeNull();
      if (!networkMapSection) {
        // This is here just to satisfy typescript. In reality, this should
        // be unreachable.
        return;
      }

      // Wait until we have row data in the network map
      await waitFor(
        () => {
          const worldMapPopulationDots = networkMapSection.querySelector(
            '.world-map-population-dots',
          );
          expect(worldMapPopulationDots).not.toBeNull();
          if (!worldMapPopulationDots) {
            return;
          }
          expect(worldMapPopulationDots).toBeInTheDocument();
          expect(worldMapPopulationDots.children.length).toBeGreaterThan(0);
        },
        { container: networkMapSection },
      );
    }

    // Nodes Table Section
    {
      const nodesSection: HTMLElement | null =
        nodePage.querySelector('.nodes.card');
      expect(nodesSection).not.toBeNull();
      if (!nodesSection) {
        // This is here just to satisfy typescript. In reality, this should
        // be unreachable.
        return;
      }

      // Wait until we have row data in the nodes table
      await waitFor(
        () => {
          const rows = nodesSection.querySelectorAll('tr');
          expect(rows.length).toBeGreaterThan(10);
        },
        { container: nodesSection },
      );
    }

    expect(nodePage).toBeInTheDocument();
  });
});
