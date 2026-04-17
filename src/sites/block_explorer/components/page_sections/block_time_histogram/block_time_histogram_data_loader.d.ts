import { default as React } from 'react';
/**
 * The BlockTimeHistogramData type is the data type that is expected to be
 * displayed on the Block Time Histogram. It is expected to represent a
 * block time value for the y axis against a block height for the x-axis.
 */
export interface BlockTimeHistogramData {
    blocks: (null | number)[];
    blockTime: (null | number)[];
}
/**
 *
 */
export declare const HistogramDataLoader: React.FC<React.PropsWithChildren>;
/**
 * BlockSizeHistogramStreamContext is a React context that is used to store the
 * BlockSizeHistogramData.  This data can be used to stream the size histogram
 * data.
 */
export declare const BlockTimeHistogramStreamContext: React.Context<AsyncIterable<BlockTimeHistogramData>>;
/**
 * BlockTimeHistogramStreamConsumer is a component that is used to consume the
 * data that is stored in the BlockSizeHistogramStreamContext.  This data is
 * expected to be streamed to the children of this component.
 */
export declare const BlockTimeHistogramStreamConsumer: React.FC<React.PropsWithChildren>;
