import { default as React } from 'react';
import { AsyncRetriever } from '../../../../../../../../../../../src/async/AsyncRetriever';

export interface LatestBlock {
    height: number;
    time: Date;
    size: number;
    transactions: number;
    proposer: ArrayBuffer;
}
export declare const LatestBlockSummaryLoaderContext: React.Context<AsyncRetriever<void, LatestBlock>>;
export declare const LatestBlockSummaryProvider: React.Context<LatestBlock>;
interface LatestBlockSummaryDataLoader {
    children: React.ReactNode | React.ReactNode[];
}
export declare const LatestBlockSummaryDataLoader: React.FC<LatestBlockSummaryDataLoader>;
export {};
