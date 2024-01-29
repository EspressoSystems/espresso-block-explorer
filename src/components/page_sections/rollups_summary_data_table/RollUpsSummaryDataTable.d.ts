import React from 'react';
import { RollUpSummaryAsyncRetriever } from '../../../types/data_source/rollup_summary/types';
export interface RollUpSummary {
    namespace: number;
    transactions: number;
}
/**
 * RetrieverContext represents the retriever to be utilized for retrieving
 * the BlockSummary data.
 */
export declare const RetrieverContext: React.Context<RollUpSummaryAsyncRetriever>;
export interface RollUpsSummaryProps {
}
declare const RollUpsSummary: React.FC<RollUpsSummaryProps>;
export default RollUpsSummary;
