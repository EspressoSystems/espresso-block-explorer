import { DataContext } from '@/contexts/data_provider';
import UnimplementedError from '@/errors/unimplemented_error';
import {
  TransactionDetailAsyncRetriever,
  TransactionDetailEntry,
} from '@/models/block_explorer/transaction_detail';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import React from 'react';
import PromiseResolver from '../../data/async_data/promise_resolver';
import { BlockNumberContext } from '../block_detail_content/block_detail_content_loader';
import './transaction_detail_content.css';

/**
 * TransactionCommitContext represents the current hash for a Transaction.
 */
export const TransactionCommitContext = React.createContext(new ArrayBuffer(0));

/**
 * TransactionOffsetContext represents the current offset for this Transaction
 * within a block.
 */
export const TransactionOffsetContext = React.createContext(0);

/**
 * TransactionDetailContext is a context that indicates the current
 * TransactionDetail to make available to the descendants of the component
 * tree.
 */
export const TransactionDetailContext: React.Context<TransactionDetailEntry> =
  React.createContext({
    block: 0,
    index: 0,
    total: 0,
    size: 0,
    hash: new TaggedBase64('ERR', new ArrayBuffer(0)),
    time: new Date(),
    sender: new TaggedBase64('ERR', new ArrayBuffer(0)),

    tree: {
      namespace: 0,
      data: new ArrayBuffer(0),
    },
  });

/**
 * RetrieverContext is a context for retrieving the TransactionDetail
 * response.
 */
export const TransactionDetailAsyncRetrieverContext =
  React.createContext<TransactionDetailAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

interface ProvideTransactionDetailsProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideTransactionDetails ensures that the TransactionDetails data is
 * available for the children.
 */
const ProvideTransactionDetails: React.FC<ProvideTransactionDetailsProps> = (
  props,
) => {
  const data = React.useContext(DataContext) as
    | undefined
    | TransactionDetailEntry;

  if (data === undefined) {
    return props.children;
  }

  return (
    <TransactionDetailContext.Provider value={data}>
      {props.children}
    </TransactionDetailContext.Provider>
  );
};

export interface TransactionDetailContentLoaderProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * TransactionDetailContent uses the retriever from the RetrieverContext
 * to retrieve the data using the hash retrieved from the
 * TransactionCommitContext
 */
export const TransactionDetailContentLoader: React.FC<
  TransactionDetailContentLoaderProps
> = (props) => {
  const block = React.useContext(BlockNumberContext);
  const offset = React.useContext(TransactionOffsetContext);
  const retriever = React.useContext(TransactionDetailAsyncRetrieverContext);

  return (
    <PromiseResolver promise={retriever.retrieve({ height: block, offset })}>
      <ProvideTransactionDetails>{props.children}</ProvideTransactionDetails>
    </PromiseResolver>
  );
};
