import { AsyncIterableResolver } from '@/components/data/async_data';
import { PieChartEntry } from '@/components/visual/pie_chart/pie_chart';
import { ErrorCarry, ErrorJoiner } from '@/contexts/error_provider';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import { default as React } from 'react';

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
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
