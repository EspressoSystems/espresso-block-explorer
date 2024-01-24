import React from 'react';
import { mapIterable, mapIterator } from '../../types/functional';

export interface HexTextProps {
  value: ArrayBuffer;
}

/**
 * HexText is a simple Text component that renders the given ArrayBuffer as
 * a hex string
 */
const HexText: React.FC<HexTextProps> = (props) => {
  const hexBytes = Array.from(
    mapIterator(
      mapIterator(mapIterable(new Uint8Array(props.value), Number), (byte) =>
        byte.toString(16),
      ),
      (byte) => byte.padStart(2, '0'),
    ),
  ).join('');

  if (hexBytes.length <= 12) {
    return `0x${hexBytes}`;
  }

  return (
    <span title={`0x${hexBytes}`}>
      0x{hexBytes.substring(0, 6)}...{hexBytes.substring(hexBytes.length - 6)}
    </span>
  );
};

export default HexText;
