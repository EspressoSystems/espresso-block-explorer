import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import React from 'react';

export interface NodeSummaryData {
  name: string;
  address: ArrayBuffer;
  companyDetails: {
    name: string;
    website: string;
  };
  location: {
    coords: [number, number];
    country: string;
  };
}

export const NodeSummaryStreamContext = React.createContext<
  AsyncIterable<NodeSummaryData[]>
>(unimplementedAsyncIterable());

interface NodeSummaryStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const NodeSummaryStreamConsumer: React.FC<
  NodeSummaryStreamConsumerProps
> = (props) => {
  const stream = React.useContext(NodeSummaryStreamContext);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      {props.children}
    </AsyncIterableResolver>
  );
};
