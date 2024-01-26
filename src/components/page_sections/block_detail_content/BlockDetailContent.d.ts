import React from 'react';
export declare const BlockNumberContext: React.Context<number>;
/**
 * BlockNavigation is a component that displays the current BlockID
 * and provides the corresponding Previous and Next block navigation
 * components.
 */
export declare const BlockNavigation: React.FC;
/**
 * RetrieverContext is a React Context for retrieving a BlockDetail from a
 * BlockDetailAsyncRetriever.
 */
export declare const RetrieverContext: React.Context<BlockDetailAsyncRetriever>;
export interface BlockDetailsProp {
}
/**
 * BlockDetails kicks off the retrieval of the details for the individual
 * Block, and ensures that the data is available for BlockDetailsContent
 */
declare const BlockDetails: React.FC<BlockDetailsProp>;
export default BlockDetails;
