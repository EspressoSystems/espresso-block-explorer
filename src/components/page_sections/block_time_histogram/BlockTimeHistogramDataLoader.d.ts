import { default as React } from 'react';
import { AsyncRetriever } from '../../../../../../../../../../../src/async/AsyncRetriever';

export interface BlockTimeHistogramData {
    blocks: number[];
    blockTime: number[];
}
export interface BlockTimeHistogramAsyncRetriever extends AsyncRetriever<void, BlockTimeHistogramData> {
}
export declare const BlockTimeHistogramAsyncRetrieverContext: React.Context<BlockTimeHistogramAsyncRetriever>;
export interface BlockTimeHistogramLoaderProps {
    children?: React.ReactNode | React.ReactNode[];
}
export declare const BlockTimeHistogramLoader: React.FC<BlockTimeHistogramLoaderProps>;
