import { stdEncoding } from '@/convert/base64/base64';
import React from 'react';
import CopyButton from '../hid/buttons/copy_button/CopyButton';
import { CopyArrayBufferAsTextProps } from './CopyArrayBufferAsTextProps';
import './inline.css';

/**
 * CopyBase64 is a component that will display a `CopyButton` with the contents
 * of the given ArrayBuffer given in the `value` automatically converted to a
 * standard encoding of base64 as the `content` of the `CopyButton` to be
 * copied into the end-users clipboard.
 */
const CopyBase64: React.FC<CopyArrayBufferAsTextProps> = (props) => {
  const string = stdEncoding.encodeToString(props.value);

  return (
    <span className="inline">
      {props.children}
      <CopyButton content={string} />
    </span>
  );
};

export default CopyBase64;
