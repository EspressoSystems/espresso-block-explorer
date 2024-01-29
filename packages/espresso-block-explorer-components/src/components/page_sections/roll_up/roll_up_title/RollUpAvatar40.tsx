import React from 'react';
import { RollUpEntry } from '../../../../types/data_source/rollup_entry/types';

export interface RollUpAvatar40Props {
  entry: RollUpEntry;
}

/**
 * RollUpAvatar40 is a convenience Component for automatically building the
 * logo40 stored within the given RollUpEntry.
 */
const RollUpAvatar40: React.FC<RollUpAvatar40Props> = (props) => {
  return React.createElement(props.entry.logo40);
};

export default RollUpAvatar40;
