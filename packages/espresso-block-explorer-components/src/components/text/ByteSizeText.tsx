import React, { useContext } from 'react';
import { CurrentNumberFormatters } from '../contexts/NumberFormattersProvider';

export interface ByteSizeTextProps {
  bytes: number;
}

/**
 * ByteSizeText is a simple Text element for rendering the bytes given
 * in a localized format.
 */
const ByteSizeText: React.FC<ByteSizeTextProps> = (props) => {
  const formatters = useContext(CurrentNumberFormatters);
  // TODO: threshold splitting
  return formatters.bytes.format(props.bytes);
};

export default ByteSizeText;
