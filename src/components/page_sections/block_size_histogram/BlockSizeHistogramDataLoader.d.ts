import { default as React } from 'react';
import { AsyncRetriever } from '../../../../../../../../../../../src/async/AsyncRetriever';

export interface BlockSizeHistogramData {
    blocks: number[];
    blockSize: number[];
}
export interface BlockSizeHistogramAsyncRetriever extends AsyncRetriever<void, BlockSizeHistogramData> {
}
export declare const BlockSizeHistogramAsyncRetrieverContext: React.Context<BlockSizeHistogramAsyncRetriever>;
export interface BlockSizeHistogramLoaderProps {
    children?: React.ReactNode | React.ReactNode[];
}
export declare const BlockSizeHistogramLoader: React.FC<BlockSizeHistogramLoaderProps>;
