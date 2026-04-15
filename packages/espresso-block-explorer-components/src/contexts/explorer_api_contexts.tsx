import { ExplorerBlockDetail } from '@/service/hotshot_query_service/explorer/block_detail';
import { ExplorerBlockSummary } from '@/service/hotshot_query_service/explorer/block_summary';
import { ExplorerSummary } from '@/service/hotshot_query_service/explorer/explorer_summary';
import { SummaryHistograms } from '@/service/hotshot_query_service/explorer/summary_histograms';
import { ExplorerTransactionDetail } from '@/service/hotshot_query_service/explorer/transaction_detail';
import { ExplorerTransactionDetailData } from '@/service/hotshot_query_service/explorer/transaction_detail_data';
import { ExplorerTransactionSummary } from '@/service/hotshot_query_service/explorer/transaction_summary';
import React from 'react';

/**
 * ExplorerSummaryContext is a react context that provides access to the
 * response of an Explorer API Summary.
 */
export const ExplorerSummaryContext =
  React.createContext<null | ExplorerSummary>(null);

/**
 * ExplorerBlockDetailContext is a react context that provides access to
 * an Explorer API Block Detail.
 */
export const ExplorerBlockDetailContext =
  React.createContext<null | ExplorerBlockDetail>(null);

/**
 * ExplorerTransactionDetailContext is a react context that provides access to
 * a single Transaction Detail from the Explorer API.
 */
export const ExplorerTransactionDetailsContext =
  React.createContext<null | ExplorerTransactionDetail>(null);

/**
 * ExplorerBlockSummaryContext is a react context that provides access to
 * a single Block Summary from the Explorer API.
 */
export const ExplorerBlockSummaryContext =
  React.createContext<null | ExplorerBlockSummary>(null);

/**
 * ExplorerBlockSummariesContext is a react context that provides access to
 * a full list of Block Summaries from the Explorer API.
 *
 */
export const ExplorerBlockSummariesContext = React.createContext<
  ExplorerBlockSummary[]
>([]);

/**
 * ExplorerTransactionSummaryContext is a react context that provides access to
 * a single Transaction Summary from the Explorer API.
 */
export const ExplorerTransactionSummaryContext =
  React.createContext<null | ExplorerTransactionSummary>(null);

/**
 * ExplorerTransactionSummariesContext is a react context that provides access
 * to a full list of Transaction Summaries from the Explorer API.
 */
export const ExplorerTransactionSummariesContext = React.createContext<
  ExplorerTransactionSummary[]
>([]);

/**
 * ExplorerSummaryHistogramsContext is a react context that provides access to
 * the Explorer Summary Histograms from the Explorer API.
 */
export const ExplorerSummaryHistogramsContext =
  React.createContext<null | SummaryHistograms>(null);

export const ExplorerTransactionDetailDataContext =
  React.createContext<null | ExplorerTransactionDetailData>(null);
