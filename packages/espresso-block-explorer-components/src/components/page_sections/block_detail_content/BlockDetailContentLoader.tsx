import React from 'react';
import UnimplementedError from '../../../errors/UnimplementedError';
import {
  BlockDetailAsyncRetriever,
  BlockDetailEntry,
} from '../../../models/block_explorer/block_detail';
import MonetaryValue from '../../../models/block_explorer/monetary_value';
import { TaggedBase64 } from '../../../models/espresso/tagged_base64/TaggedBase64';
import PromiseResolver from '../../data/async_data/PromiseResolver';
import './block_detail_content.css';

export const BlockNumberContext = React.createContext(0);

/**
 * BlockDetailContext is a React Context for holding the current BlockDetail.
 * It is useful for making BlockDetail information available to descendent
 * components.
 */
export const BlockDetailContext: React.Context<BlockDetailEntry> =
  React.createContext({
    hash: new TaggedBase64('', new ArrayBuffer(0)),
    height: 0,
    time: new Date(),
    transactions: 0,
    proposer: new ArrayBuffer(0),
    recipient: new ArrayBuffer(0),
    size: 0,
    rewards: [] as MonetaryValue[],
  });

/**
 * RetrieverContext is a React Context for retrieving a BlockDetail from a
 * BlockDetailAsyncRetriever.
 */
export const BlockDetailAsyncRetrieverContext =
  React.createContext<BlockDetailAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

export interface BlockDetailsLoaderProp {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * BlockDetails kicks off the retrieval of the details for the individual
 * Block, and ensures that the data is available for BlockDetailsContent
 */
export const BlockDetailsLoader: React.FC<BlockDetailsLoaderProp> = ({
  children,
}) => {
  const blockID = React.useContext(BlockNumberContext);
  const retriever = React.useContext(BlockDetailAsyncRetrieverContext);

  return (
    <PromiseResolver promise={retriever.retrieve(blockID)}>
      {children}
    </PromiseResolver>
  );
};
