import { DataContext } from '@/components/contexts';
import { iota, mapIterator } from '@/functional/functional';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { PieChartEntry, PieChartFromData } from '../pie_chart';

interface ExampleProps {
  data: PieChartEntry[];
}

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <DataContext.Provider value={props.data}>
      <PieChartFromData />
    </DataContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Pie Chart/States',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    data: [
      {
        label: 'Fifty',
        value: 50,
      },
      {
        label: 'Twenty',
        value: 20,
      },
      {
        label: 'Thirty',
        value: 30,
      },
    ],
  },
};

export const OverHalfOfPieChart: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    data: [
      {
        label: 'Seventy',
        value: 70,
      },
      {
        label: 'Thirty',
        value: 30,
      },
    ],
  },
};

export const OneDataElement: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    data: [
      {
        label: 'Hundred',
        value: 100,
      },
    ],
  },
};

export const Empty: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    data: [],
  },
};

export const AllColors: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    data: [
      ...mapIterator(iota(11), (i) => ({ label: `Entry ${i}`, value: 1 })),
    ],
  },
};

export const RepeatedColors: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    data: [
      ...mapIterator(iota(22), (i) => ({ label: `Entry ${i}`, value: 1 })),
    ],
  },
};
