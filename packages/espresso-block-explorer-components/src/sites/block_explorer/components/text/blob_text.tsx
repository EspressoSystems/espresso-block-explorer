import { Text } from '@/components/text';
import { default as React } from 'react';

/** What a blob is, shown on hover over the page and table titles naming them. */
const BLOB_DEFINITION = 'Espresso Transactions';

export interface BlobTextProps {
  text: string;
}

/**
 * BlobText renders a page or table title naming blobs, such as "Latest
 * Blobs", with what they are on hover.
 */
const BlobText: React.FC<BlobTextProps> = (props) => (
  <span title={BLOB_DEFINITION}>
    <Text text={props.text} />
  </span>
);

export default BlobText;
