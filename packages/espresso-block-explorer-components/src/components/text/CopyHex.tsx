import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import React from 'react';
import CopyButton from '../hid/buttons/copy_button/CopyButton';
import { CopyArrayBufferAsTextProps } from './CopyArrayBufferAsTextProps';
import './inline.css';

/**
 * CopyHex is a component that will display a `CopyButton` with the contents
 * for the `CopyButton` being the hex representation of the given ArrayBuffer
 * given in the `value` prop.
 */
const CopyHex: React.FC<CopyArrayBufferAsTextProps> = (props) => {
  const string = hexArrayBufferCodec.encode(props.value);

  return (
    <span className="inline">
      {props.children}
      <CopyButton content={string} />
    </span>
  );
};

export default CopyHex;
