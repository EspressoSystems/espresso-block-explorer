import { default as React } from 'react';
/**
 * BlockNavigation leads from the block being shown to its neighbours and to
 * the newest block, with the same controls the Blocks page pages with, named
 * for where they lead: "Newer" is the block after this one, "Older" the block
 * before it.
 *
 * "Older" cannot go below the first block, and "Newer" cannot go past the
 * newest one once its height is known -- until then it is left enabled, as a
 * failed or slow answer should not strand the reader on this block. "Latest"
 * needs that height to lead anywhere, so it waits for it, and has nowhere to
 * go from the newest block itself.
 */
export interface BlockNavigationProps {
    className?: string;
}
export declare const BlockNavigation: React.FC<BlockNavigationProps>;
export declare const BlockDetailsContentPlaceholder: React.FC<BlockDetailsContentProps>;
interface BlockDetailsContentProps {
}
/**
 * BlockDetailsContext represents the component that displays all of the
 * information about the Block Detail.
 */
export declare const BlockDetailsContent: React.FC<BlockDetailsContentProps>;
export {};
