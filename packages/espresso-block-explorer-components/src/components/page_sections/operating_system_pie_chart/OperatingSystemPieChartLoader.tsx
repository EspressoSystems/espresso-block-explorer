import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { PieChartEntry } from '@/components/visual/pie_chart/PieChart';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import React from 'react';

export const OperatingSystemPieChartStreamContext = React.createContext<
  AsyncIterable<PieChartEntry[]>
>(unimplementedAsyncIterable());

interface OperatingSystemPieChartStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const OperatingSystemPieChartStreamConsumer: React.FC<
  OperatingSystemPieChartStreamConsumerProps
> = (props) => {
  const stream = React.useContext(OperatingSystemPieChartStreamContext);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      {props.children}
    </AsyncIterableResolver>
  );
};
