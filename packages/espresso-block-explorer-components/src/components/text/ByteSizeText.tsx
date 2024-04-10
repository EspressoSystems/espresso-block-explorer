import React, { useContext } from 'react';
import { CurrentNumberFormatters } from '../contexts/NumberFormattersProvider';

export interface ByteSizeTextProps {
  bytes: number;
}

/**
 * ByteSizeText is a simple Text element for rendering the bytes given
 * in a localized format.
 *
 * It achieves this by using the `bytes` formatter from the
 * `CurrencyNumberFormatters` context.
 */
const ByteSizeText: React.FC<ByteSizeTextProps> = (props) => {
  const formatters = useContext(CurrentNumberFormatters);
  return formatters.bytes.format(props.bytes);
};

export default ByteSizeText;
