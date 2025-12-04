import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import React from 'react';
import './inline.css';

export interface TaggedBase64TextProps {
  value: TaggedBase64;
}

/**
 * TaggedBase64Text is a simple Text component that renders a TaggedBase64 value
 * in it's own way.
 */
const TaggedBase64Text: React.FC<TaggedBase64TextProps> = (props) => {
  const string = props.value.toString();

  if (string.length <= 16) {
    return string;
  }

  // Now this string is too long... So we will need to truncate it
  // strategically.  Luckily this will be guaranteed to be an ascii
  // string, so we should be able to truncate it in the middle independently.
  return (
    <span className="inline">
      <span title={string}>
        {string.substring(0, 8)}…
        {string.substring(string.length - 8, string.length)}
      </span>
    </span>
  );
};

export default TaggedBase64Text;
