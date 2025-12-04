import { ErrorCarry, ErrorJoiner } from '@/components/contexts';
import AsyncIterableResolver from '@/components/data/async_data/async_iterable_resolver';
import { PieChartEntry } from '@/components/visual/pie_chart/pie_chart';
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
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
