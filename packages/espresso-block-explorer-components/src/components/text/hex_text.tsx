import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import React from 'react';
import './inline.css';

export interface HexTextProps {
  value: ArrayBuffer;
  leadingChars?: number;
  trailingChars?: number;
}

/**
 * HexText is a simple Text component that renders the given ArrayBuffer as
 * a hex string
 */
const HexText: React.FC<HexTextProps> = (props) => {
  const string = hexArrayBufferCodec.encode(props.value);
  const leadingChars = props.leadingChars ?? 4;
  const trailingChars = props.trailingChars ?? 4;

  if (
    string.length <= 14 ||
    leadingChars + trailingChars + 2 >= string.length
  ) {
    return string;
  }

  return (
    <span title={string}>
      {string.substring(0, 2 + leadingChars)}…
      {string.substring(string.length - trailingChars)}
    </span>
  );
};

export default HexText;
