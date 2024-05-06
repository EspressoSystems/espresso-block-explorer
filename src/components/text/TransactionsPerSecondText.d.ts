import { default as React } from 'react';

export interface TransactionsPerSecondTextProps {
    transactionsPerSecond: number;
}
/**
 * TransactionsPerSecondText attempts to render the given value as a quantity
 * of transactions per second.
 *
 * It achieves this by using the `transactionsPerSecond` formatter from the
 * `CurrencyNumberFormatters` context.
 */
declare const TransactionsPerSecondText: React.FC<TransactionsPerSecondTextProps>;
export default TransactionsPerSecondText;
