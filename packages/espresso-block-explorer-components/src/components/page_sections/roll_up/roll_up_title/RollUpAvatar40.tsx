import React from 'react';
import { rollUpImagesMap } from '../../../../models/block_explorer/rollup_entry/data_images';
import { RollUpEntry } from '../../../../models/block_explorer/rollup_entry/types';

export interface RollUpAvatar40Props {
  entry: RollUpEntry;
}

/**
 * RollUpAvatar40 is a convenience Component for automatically building the
 * logo40 stored within the given RollUpEntry.
 */
const RollUpAvatar40: React.FC<RollUpAvatar40Props> = (props) => {
  const namespace = props.entry.namespace;
  const images = rollUpImagesMap.get(namespace);
  return React.createElement(images!.logo40);
};

export default RollUpAvatar40;
