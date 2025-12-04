import React from 'react';
import { TaggedBase64TextProps } from './tagged_base64_text';
import './inline.css';

/**
 * TaggedBase64Text is a simple Text component that renders a TaggedBase64 value
 * in it's own way.
 */
const FullTaggedBase64Text: React.FC<TaggedBase64TextProps> = (props) => {
  const string = props.value.toString();

  return string;
};

export default FullTaggedBase64Text;
