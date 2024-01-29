import React from 'react';
import { RollUpDetailAsyncRetriever } from '../../../types/data_source/rollup_detail/types';
/**
 * NamespaceContext is a React Context that holds a reference to the
 * current Namespace
 */
export declare const NamespaceContext: React.Context<number>;
/**
 * RetrieverContext is a React Context that holds a reference to a
 * RollUpDetailAsyncRetriever
 */
export declare const RetrieverContext: React.Context<RollUpDetailAsyncRetriever>;
interface TransactionsSummaryProps {
}
/**
 * TransactionsSummary component shows the Transaction Summary Data Table
 * with fetched data.
 */
declare const TransactionsSummary: React.FC<TransactionsSummaryProps>;
export default TransactionsSummary;
