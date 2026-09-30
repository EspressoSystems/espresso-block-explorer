import { Text } from '@/components/text';
import { default as React } from 'react';
import './blob_text.css';

/** What the explorer calls a blob, shown on hover wherever the word appears. */
export const BLOB_DEFINITION = 'Blob: An Espresso Transaction';

export interface BlobTextProps {
  text: string;
}

/**
 * BlobText renders a label naming blobs, such as "Latest Blobs", with the
 * term's definition on hover.
 */
const BlobText: React.FC<BlobTextProps> = (props) => (
  <span className="defined-term" title={BLOB_DEFINITION}>
    <Text text={props.text} />
  </span>
);

export default BlobText;
