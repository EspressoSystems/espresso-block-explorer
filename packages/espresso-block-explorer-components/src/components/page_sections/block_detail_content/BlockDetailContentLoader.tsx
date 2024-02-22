import React from 'react';
import { TaggedBase64 } from '../../../types/TaggedBase64';
import {
  BlockDetailAsyncRetriever,
  BlockDetailEntry,
} from '../../../types/data_source/block_detail/types';
import UnimplementedError from '../../../types/errors/UnimplementedError';
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
    height: 0,
    time: new Date(),
    transactions: 0,
    proposer: new TaggedBase64('PUBKEY', new ArrayBuffer(0)),
    size: 0,
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
