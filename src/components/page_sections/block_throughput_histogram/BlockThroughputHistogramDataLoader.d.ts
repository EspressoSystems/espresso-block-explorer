import { default as React } from 'react';
import { AsyncRetriever } from '../../../../../../../../../../../src/async/AsyncRetriever';

export interface BlockThroughputHistogramData {
    blocks: number[];
    blockThroughput: number[];
}
export interface BlockThroughputHistogramAsyncRetriever extends AsyncRetriever<void, BlockThroughputHistogramData> {
}
export declare const BlockThroughputHistogramAsyncRetrieverContext: React.Context<BlockThroughputHistogramAsyncRetriever>;
export interface BlockThroughputHistogramLoaderProps {
    children?: React.ReactNode | React.ReactNode[];
}
export declare const BlockThroughputHistogramLoader: React.FC<BlockThroughputHistogramLoaderProps>;
