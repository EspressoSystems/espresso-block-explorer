import { AsyncRetriever } from '../../../../../../../../../../../src/async/AsyncRetriever';
import { default as React } from 'react';

export interface ExplorerOverview {
    rollups: number;
    transactions: number;
    blocks: number;
    sequencerNodes: number;
}
export declare const ExplorerOverviewLoaderContext: React.Context<AsyncRetriever<void, ExplorerOverview>>;
export declare const ExplorerOverviewProvider: React.Context<ExplorerOverview>;
interface ExplorerOverviewLoaderProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const ExplorerOverviewLoader: React.FC<ExplorerOverviewLoaderProps>;
export {};
