import { ExplorerSummaryAsyncRetriever, ExplorerSummaryEntry } from '../../../../../../../../../../../src/models/block_explorer/explorer_summary';
import { default as React } from '../../../../../../node_modules/react';

export declare const ExplorerSummaryLoaderContext: React.Context<ExplorerSummaryAsyncRetriever>;
export declare const ExplorerSummaryProvider: React.Context<ExplorerSummaryEntry>;
interface ExplorerSummaryLoaderProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const ExplorerSummaryLoader: React.FC<ExplorerSummaryLoaderProps>;
export {};
