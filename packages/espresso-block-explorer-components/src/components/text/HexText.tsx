import React from 'react';
import { mapIterable, mapIterator } from '../../types/functional';
import CopyButton from '../hid/buttons/copy_button/CopyButton';
import './inline.css';

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
    <span className="inline">
      <span title={`0x${hexBytes}`}>
        0x{hexBytes.substring(0, 6)}...{hexBytes.substring(hexBytes.length - 6)}
      </span>
      <CopyButton
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();

          navigator.clipboard.writeText(hexBytes);
        }}
      />
    </span>
  );
};

export default HexText;
