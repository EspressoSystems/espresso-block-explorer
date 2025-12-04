import { ErrorCarry, ErrorJoiner } from '@/components/contexts';
import AsyncIterableResolver from '@/components/data/async_data/async_iterable_resolver';
import { PieChartEntry } from '@/components/visual/pie_chart/pie_chart';
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
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
