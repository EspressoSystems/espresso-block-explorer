import { DataContext } from '@/components/contexts';
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
  title: 'Components/Page Sections/Pie Chart',
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
