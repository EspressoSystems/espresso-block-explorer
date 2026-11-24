import { default as React } from 'react';
interface BlockPageProps {
    /** A position in the block; its page of transactions is shown. */
    transactionsPosition?: number;
}
/**
 * BlockPage is a component that renders the Block Page.
 */
declare const BlockPage: React.FC<BlockPageProps>;
export default BlockPage;
