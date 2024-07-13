import { DataContext } from '@/components/contexts';
import { iota, mapIterator } from '@/functional/functional';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PieChartFromData } from '../PieChart';
import {
  exitHoverAll,
  hoverOverIthSlice,
} from '../__shared__/pie_chart_shared';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = () => {
  return (
    <DataContext.Provider
      value={[
        ...mapIterator(iota(10), (i) => ({ label: `Entry ${i}`, value: 1 })),
      ]}
    >
      <PieChartFromData />
    </DataContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Pie Chart/Interactions',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const HoverOverSlices: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  async play({ canvasElement, step }) {
    await step('Hover over the first slice', async () => {
      await hoverOverIthSlice(canvasElement, 0);
    });

    await step('Hover over the second slice', async () => {
      await hoverOverIthSlice(canvasElement, 1);
    });

    await step('Hover over the third slice', async () => {
      await hoverOverIthSlice(canvasElement, 2);
    });

    await step('Hover over the fourth slice', async () => {
      await hoverOverIthSlice(canvasElement, 3);
    });

    await step('Hover over the fifth slice', async () => {
      await hoverOverIthSlice(canvasElement, 4);
    });

    await step('Hover over the sixth slice', async () => {
      await hoverOverIthSlice(canvasElement, 5);
    });

    // await step('Hover over the seventh slice', async () => {
    //   await hoverOverIthSlice(canvasElement, 6);
    // });

    // await step('Hover over the eighth slice', async () => {
    //   await hoverOverIthSlice(canvasElement, 7);
    // });

    // await step('Hover over the ninth slice', async () => {
    //   await hoverOverIthSlice(canvasElement, 8);
    // });

    // await step('Hover over the tenth slice', async () => {
    //   await hoverOverIthSlice(canvasElement, 9);
    // });

    await step('Unhover all', async () => {
      await exitHoverAll(canvasElement);
    });
  },
};
