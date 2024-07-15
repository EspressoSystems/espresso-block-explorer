import { BlockDetailAsyncRetriever, BlockDetailEntry } from '../../../../../../../../../../../src/models/block_explorer/block_detail';
import { default as React } from 'react';

export declare const BlockNumberContext: React.Context<number>;
/**
 * BlockDetailContext is a React Context for holding the current BlockDetail.
 * It is useful for making BlockDetail information available to descendent
 * components.
 */
export declare const BlockDetailContext: React.Context<BlockDetailEntry>;
/**
 * RetrieverContext is a React Context for retrieving a BlockDetail from a
 * BlockDetailAsyncRetriever.
 */
export declare const BlockDetailAsyncRetrieverContext: React.Context<BlockDetailAsyncRetriever>;
export interface BlockDetailsLoaderProp {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * BlockDetails kicks off the retrieval of the details for the individual
 * Block, and ensures that the data is available for BlockDetailsContent
 */
export declare const BlockDetailsLoader: React.FC<BlockDetailsLoaderProp>;
