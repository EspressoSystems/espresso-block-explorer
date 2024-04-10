import React, { useContext } from 'react';
import { CurrentNumberFormatters } from '../contexts/NumberFormattersProvider';

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
const TransactionsPerSecondText: React.FC<TransactionsPerSecondTextProps> = (
  props,
) => {
  const formatters = useContext(CurrentNumberFormatters);
  return formatters.transactionsPerSecond.format(props.transactionsPerSecond);
};

export default TransactionsPerSecondText;
