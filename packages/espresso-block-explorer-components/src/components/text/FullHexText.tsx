import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import React from 'react';
import { HexTextProps } from './HexText';

/**
 * FullHexText is a simple Text component that renders the given ArrayBuffer as
 * a hex string
 */
const FullHexText: React.FC<HexTextProps> = (props) => {
  return hexArrayBufferCodec.encode(props.value);
};

export default FullHexText;
