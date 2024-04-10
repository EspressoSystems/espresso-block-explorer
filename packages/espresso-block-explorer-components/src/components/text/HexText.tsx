import React from 'react';
import { hexArrayBufferCodec } from '../../convert/codec/array_buffer';
import './inline.css';

export interface HexTextProps {
  value: ArrayBuffer;
}

/**
 * HexText is a simple Text component that renders the given ArrayBuffer as
 * a hex string
 */
const HexText: React.FC<HexTextProps> = (props) => {
  const string = hexArrayBufferCodec.encode(props.value);

  if (string.length <= 14) {
    return string;
  }

  return (
    <span title={string}>
      {string.substring(0, 8)}...{string.substring(string.length - 6)}
    </span>
  );
};

export default HexText;
