import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { PieChartEntry } from '@/components/visual/pie_chart/PieChart';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import React from 'react';

export const NetworkTypesPieChartStreamContext = React.createContext<
  AsyncIterable<PieChartEntry[]>
>(unimplementedAsyncIterable());

interface NetworkTypesPieChartStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const NetworkTypesPieChartStreamConsumer: React.FC<
  NetworkTypesPieChartStreamConsumerProps
> = (props) => {
  const stream = React.useContext(NetworkTypesPieChartStreamContext);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      {props.children}
    </AsyncIterableResolver>
  );
};
