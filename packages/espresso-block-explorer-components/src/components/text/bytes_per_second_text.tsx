import { CurrentNumberFormatters } from '@/contexts/NumberFormattersProvider';
import React, { useContext } from 'react';

export interface BytesPerSecondTextProps {
  bytesPerSecond: number;
}

/**
 * BytesPerSecondText attempts to render the given value as a quantity
 * of bytes per second.
 *
 * It achieves this by using the `bytesPerSecond` formatter from the
 * `CurrentNumberFormatters` context.
 */
const BytesPerSecondText: React.FC<BytesPerSecondTextProps> = (props) => {
  const formatters = useContext(CurrentNumberFormatters);
  return formatters.bytesPerSecond.format(props.bytesPerSecond);
};

export default BytesPerSecondText;
