import { rollUpImagesMap } from '@/models/block_explorer/rollup_entry/data_images';
import { RollUpEntry } from '@/models/block_explorer/rollup_entry/types';
import React from 'react';

export interface RollUpAvatar24Props {
  entry: RollUpEntry;
}

/**
 * RollUpAvatar24 is a convenience Component for automatically building the
 * logo24 stored within the given RollUpEntry.
 */
const RollUpAvatar24: React.FC<RollUpAvatar24Props> = (props) => {
  const namespace = props.entry.namespace;
  const images = rollUpImagesMap.get(namespace);
  return React.createElement(images!.logo24);
};

export default RollUpAvatar24;
