import { default as React } from 'react';
import { TaggedBase64 } from '../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';

export interface TaggedBase64TextProps {
    value: TaggedBase64;
}
/**
 * TaggedBase64Text is a simple Text component that renders a TaggedBase64 value
 * in it's own way.
 */
declare const TaggedBase64Text: React.FC<TaggedBase64TextProps>;
export default TaggedBase64Text;
