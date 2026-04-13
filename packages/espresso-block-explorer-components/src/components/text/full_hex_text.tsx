import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { default as React } from 'react';
import { HexTextProps } from './hex_text';

/**
 * FullHexText is a simple Text component that renders the given ArrayBuffer as
 * a hex string
 */
const FullHexText: React.FC<HexTextProps> = (props) => {
  return hexArrayBufferCodec.encode(props.value);
};

export default FullHexText;
