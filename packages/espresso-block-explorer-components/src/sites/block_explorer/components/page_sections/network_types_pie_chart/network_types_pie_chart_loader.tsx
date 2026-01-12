import AsyncIterableResolver from '@/components/data/async_data/async_iterable_resolver';
import { PieChartEntry } from '@/components/visual/pie_chart/pie_chart';
import { ErrorCarry, ErrorJoiner } from '@/contexts/error_provider';
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
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
