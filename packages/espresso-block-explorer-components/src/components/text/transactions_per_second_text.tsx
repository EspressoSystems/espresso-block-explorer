import { CurrentNumberFormatters } from '@/contexts/number_formatters_provider';
import React, { useContext } from 'react';

export interface TransactionsPerSecondTextProps {
  transactionsPerSecond: number;
}

/**
 * TransactionsPerSecondText attempts to render the given value as a quantity
 * of transactions per second.
 *
 * It achieves this by using the `transactionsPerSecond` formatter from the
 * `CurrentNumberFormatters` context.
 */
const TransactionsPerSecondText: React.FC<TransactionsPerSecondTextProps> = (
  props,
) => {
  const formatters = useContext(CurrentNumberFormatters);
  return formatters.transactionsPerSecond.format(props.transactionsPerSecond);
};

export default TransactionsPerSecondText;
