import { PromiseResolver } from '@/components/data/async_data';
import { DataContext } from '@/contexts/data_provider';
import { ExplorerTransactionDetailsContext } from '@/contexts/explorer_api_contexts';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { ExplorerGetTransactionDetailRequest } from '@/service/hotshot_query_service/explorer/get_transaction_detail_request';
import { ExplorerGetTransactionDetailResponse } from '@/service/hotshot_query_service/explorer/get_transaction_detail_response';
import { default as React } from 'react';
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
 * ProvideTransactionDetails ensures that the TransactionDetails data is
 * available for the children.
 */
const ProvideTransactionDetails: React.FC<React.PropsWithChildren> = (
  props,
) => {
  const data = React.useContext(DataContext) as
    | undefined
    | ExplorerGetTransactionDetailResponse;

  if (data === undefined) {
    return props.children;
  }

  const transactionDetail = data.transactionDetail;

  return (
    <ExplorerTransactionDetailsContext.Provider value={transactionDetail}>
      <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
    </ExplorerTransactionDetailsContext.Provider>
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
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const block = React.useContext(BlockNumberContext);
  const offset = React.useContext(TransactionOffsetContext);

  const request = ExplorerGetTransactionDetailRequest.heightAndOffset(
    block,
    offset,
  );
  return (
    <PromiseResolver promise={service.explorer.getTransactionDetail(request)}>
      <ProvideTransactionDetails>{props.children}</ProvideTransactionDetails>
    </PromiseResolver>
  );
};
