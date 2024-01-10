import React from 'react';

export type TextProps = {
  text: string;
};

/**
 * Text simply represents a Text node without any other details. The text
 * passed into the Text element will be presented as is without change or
 * adjustments.
 */
const Text: React.FC<TextProps> = (props) => {
  return props.text;
};

export default Text;
