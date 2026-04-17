import { ExplorerBlockDetail } from '../../../../../../../../../src/service/hotshot_query_service/explorer/block_detail';
import { ExplorerBlockSummary } from '../../../../../../../../../src/service/hotshot_query_service/explorer/block_summary';
import { ExplorerSummary } from '../../../../../../../../../src/service/hotshot_query_service/explorer/explorer_summary';
import { GenesisOverview } from '../../../../../../../../../src/service/hotshot_query_service/explorer/genesis_overview';
import { SummaryHistograms } from '../../../../../../../../../src/service/hotshot_query_service/explorer/summary_histograms';
import { ExplorerTransactionDetail } from '../../../../../../../../../src/service/hotshot_query_service/explorer/transaction_detail';
import { ExplorerTransactionDetailData } from '../../../../../../../../../src/service/hotshot_query_service/explorer/transaction_detail_data';
import { ExplorerTransactionSummary } from '../../../../../../../../../src/service/hotshot_query_service/explorer/transaction_summary';
import { default as React } from 'react';
/**
 * ExplorerSummaryContext is a react context that provides access to the
 * response of an Explorer API Summary.
 */
export declare const ExplorerSummaryContext: React.Context<ExplorerSummary | null>;
/**
 * ExplorerBlockDetailContext is a react context that provides access to
 * an Explorer API Block Detail.
 */
export declare const ExplorerBlockDetailContext: React.Context<ExplorerBlockDetail | null>;
/**
 * ExplorerTransactionDetailContext is a react context that provides access to
 * a single Transaction Detail from the Explorer API.
 */
export declare const ExplorerTransactionDetailsContext: React.Context<ExplorerTransactionDetail | null>;
/**
 * ExplorerBlockSummaryContext is a react context that provides access to
 * a single Block Summary from the Explorer API.
 */
export declare const ExplorerBlockSummaryContext: React.Context<ExplorerBlockSummary | null>;
/**
 * ExplorerBlockSummariesContext is a react context that provides access to
 * a full list of Block Summaries from the Explorer API.
 *
 */
export declare const ExplorerBlockSummariesContext: React.Context<ExplorerBlockSummary[]>;
/**
 * ExplorerTransactionSummaryContext is a react context that provides access to
 * a single Transaction Summary from the Explorer API.
 */
export declare const ExplorerTransactionSummaryContext: React.Context<ExplorerTransactionSummary | null>;
/**
 * ExplorerTransactionSummariesContext is a react context that provides access
 * to a full list of Transaction Summaries from the Explorer API.
 */
export declare const ExplorerTransactionSummariesContext: React.Context<ExplorerTransactionSummary[]>;
/**
 * ExplorerSummaryHistogramsContext is a react context that provides access to
 * the Explorer Summary Histograms from the Explorer API.
 */
export declare const ExplorerSummaryHistogramsContext: React.Context<SummaryHistograms | null>;
/**
 * ExplorerTransactionDetailDataContext is a react context that provides access
 * to a Transaction Detail from the Explorer API.
 */
export declare const ExplorerTransactionDetailDataContext: React.Context<ExplorerTransactionDetailData | null>;
/**
 * ExplorerGenesisOverviewContext is a react context that provides access to
 * Genesis Overview from the Explorer API.
 */
export declare const ExplorerGenesisOverviewContext: React.Context<GenesisOverview | null>;
