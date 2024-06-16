import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { PieChartEntry } from '@/components/visual/pie_chart/PieChart';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import React from 'react';

export const CountriesPieChartStreamContext = React.createContext<
  AsyncIterable<PieChartEntry[]>
>(unimplementedAsyncIterable());

interface CountriesPieChartStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const CountriesPieChartStreamConsumer: React.FC<
  CountriesPieChartStreamConsumerProps
> = (props) => {
  const stream = React.useContext(CountriesPieChartStreamContext);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      {props.children}
    </AsyncIterableResolver>
  );
};
