import React from 'react';
import { RollUpEntry } from '../../../../types/data_source/rollup_entry/types';

export interface RollUpAvatar24Props {
  entry: RollUpEntry;
}

/**
 * RollUpAvatar24 is a convenience Component for automatically building the
 * logo24 stored within the given RollUpEntry.
 */
const RollUpAvatar24: React.FC<RollUpAvatar24Props> = (props) => {
  return React.createElement(props.entry.logo24);
};

export default RollUpAvatar24;
