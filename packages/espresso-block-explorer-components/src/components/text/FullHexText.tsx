import React from 'react';
import { mapIterable, mapIterator } from '../../types/functional';

export interface FullHexTextProps {
  value: ArrayBuffer;
}

/**
 * FullHexText is a simple Text component that renders the given ArrayBuffer as
 * a hex string
 */
const FullHexText: React.FC<FullHexTextProps> = (props) => {
  const hexBytes = Array.from(
    mapIterator(
      mapIterator(mapIterable(new Uint8Array(props.value), Number), (byte) =>
        byte.toString(16),
      ),
      (byte) => byte.padStart(2, '0'),
    ),
  ).join('');

  return `0x${hexBytes}`;
};

export default FullHexText;
