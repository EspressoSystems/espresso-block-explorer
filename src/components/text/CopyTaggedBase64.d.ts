import { TaggedBase64 } from '../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { default as React } from 'react';
export interface CopyTaggedBase64Props {
    value: TaggedBase64;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * CopyTaggedBase64 is a component that will display a `CopyButton` with the contents
 * for the `CopyButton` being the base64 representation of the given TaggedBase64
 * given in the `value` prop.
 */
declare const CopyTaggedBase64: React.FC<CopyTaggedBase64Props>;
export default CopyTaggedBase64;
