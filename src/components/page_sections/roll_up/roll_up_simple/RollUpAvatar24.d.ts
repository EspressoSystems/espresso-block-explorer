import { default as React } from 'react';
import { RollUpEntry } from '../../../../../../../../../../../../src/models/block_explorer/rollup_entry/types';

export interface RollUpAvatar24Props {
    entry: RollUpEntry;
}
/**
 * RollUpAvatar24 is a convenience Component for automatically building the
 * logo24 stored within the given RollUpEntry.
 */
declare const RollUpAvatar24: React.FC<RollUpAvatar24Props>;
export default RollUpAvatar24;
