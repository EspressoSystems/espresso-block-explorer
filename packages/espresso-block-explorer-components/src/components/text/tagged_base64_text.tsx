import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { default as React } from 'react';

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
  //
  // This intentionally does not wrap in the "inline" (display: inline-flex)
  // class used elsewhere for icon alignment: an inline-flex box is atomic,
  // which blocks a wrapping <a>'s text-decoration (e.g. the underline-on-
  // hover from link.css) from propagating into it, so this text would
  // never visibly underline inside a link even though the anchor computes
  // the style correctly.
  return (
    <span title={string}>
      {string.substring(0, 8)}…
      {string.substring(string.length - 8, string.length)}
    </span>
  );
};

export default TaggedBase64Text;
