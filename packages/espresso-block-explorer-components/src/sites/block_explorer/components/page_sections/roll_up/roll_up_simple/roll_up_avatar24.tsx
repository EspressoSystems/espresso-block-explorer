import { kInfiniteGardenNamespace } from '@/models/block_explorer/rollup_entry/data';
import { rollUpImagesMap } from '@/models/block_explorer/rollup_entry/data_images';
import {
  With24PxSquare,
  WithCircleBorder,
} from '@/models/block_explorer/rollup_entry/higher_order';
import { EspressoAvatarLogo } from '@/models/block_explorer/rollup_entry/rollups/espresso/espresso';
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
  if (namespace === kInfiniteGardenNamespace) {
    return React.createElement(
      WithCircleBorder(With24PxSquare(EspressoAvatarLogo)),
    );
  }

  const images = rollUpImagesMap.get(namespace);
  if (!images) {
    return <></>;
  }

  return React.createElement(images.logo24);
};

export default RollUpAvatar24;
