import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import React from 'react';

export interface NodeSummaryData {
  name: null | string;
  address: null | ArrayBuffer;
  companyDetails: null | {
    name: null | string;
    website: null | string;
  };
  location: {
    coords: null | [number, number];
    country: null | string;
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
