import AsyncIterableResolver from '@/components/data/async_data/async_iterable_resolver';
import { ErrorCarry, ErrorJoiner } from '@/contexts/error_provider';
import {
  ExplorerSummaryContext,
  ExplorerSummaryHistogramsContext,
} from '@/contexts/explorer_api_contexts';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import { default as React } from 'react';

/**
 * The BlockTimeHistogramData type is the data type that is expected to be
 * displayed on the Block Time Histogram. It is expected to represent a
 * block time value for the y axis against a block height for the x-axis.
 */
export interface BlockTimeHistogramData {
  blocks: (null | number)[];
  blockTime: (null | number)[];
}

/**
 *
 */
export const HistogramDataLoader: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = React.useContext(ExplorerSummaryContext);

  return (
    <ExplorerSummaryHistogramsContext.Provider value={data?.histograms ?? null}>
      {children}
    </ExplorerSummaryHistogramsContext.Provider>
  );
};

/**
 * BlockSizeHistogramStreamContext is a React context that is used to store the
 * BlockSizeHistogramData.  This data can be used to stream the size histogram
 * data.
 */
export const BlockTimeHistogramStreamContext = React.createContext<
  AsyncIterable<BlockTimeHistogramData>
>(unimplementedAsyncIterable());

/**
 * BlockTimeHistogramStreamConsumer is a component that is used to consume the
 * data that is stored in the BlockSizeHistogramStreamContext.  This data is
 * expected to be streamed to the children of this component.
 */
export const BlockTimeHistogramStreamConsumer: React.FC<
  React.PropsWithChildren
> = (props) => {
  const stream = React.useContext(BlockTimeHistogramStreamContext);

  return (
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
