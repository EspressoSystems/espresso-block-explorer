import { default as React } from 'react';

interface TransactionsPageProps {
    block: number;
    offset?: number;
}
/**
 * TransactionsForBlockPage is a component that renders the Transactions Page
 * but only filtered to the transactions for a specific block.
 */
declare const TransactionsForBlockPage: React.FC<TransactionsPageProps>;
export default TransactionsForBlockPage;
