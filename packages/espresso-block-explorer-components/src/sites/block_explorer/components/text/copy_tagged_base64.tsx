import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import React from 'react';
import CopyButton from '../hid/buttons/copy_button/copy_button';
import './inline.css';

export interface CopyTaggedBase64Props {
  value: TaggedBase64;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * CopyTaggedBase64 is a component that will display a `CopyButton` with the contents
 * for the `CopyButton` being the base64 representation of the given TaggedBase64
 * given in the `value` prop.
 */
const CopyTaggedBase64: React.FC<CopyTaggedBase64Props> = (props) => {
  return (
    <span className="inline">
      {props.children}
      <CopyButton content={props.value.toString()} />
    </span>
  );
};

export default CopyTaggedBase64;
