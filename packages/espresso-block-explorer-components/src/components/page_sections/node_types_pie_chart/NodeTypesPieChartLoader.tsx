import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { PieChartEntry } from '@/components/visual/pie_chart/PieChart';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import React from 'react';

export const NodeTypesPieChartStreamContext = React.createContext<
  AsyncIterable<PieChartEntry[]>
>(unimplementedAsyncIterable());

interface NodeTypesPieChartStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const NodeTypesPieChartStreamConsumer: React.FC<
  NodeTypesPieChartStreamConsumerProps
> = (props) => {
  const stream = React.useContext(NodeTypesPieChartStreamContext);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      {props.children}
    </AsyncIterableResolver>
  );
};
