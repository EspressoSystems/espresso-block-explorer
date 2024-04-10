import React from 'react';
import { RollUpEntry } from '../../../../models/block_explorer/rollup_entry/types';
import Text from '../../../text/Text';

export interface RollUpNameProps {
  entry: RollUpEntry;
}

const RollUpName: React.FC<RollUpNameProps> = (props) => {
  return <Text text={props.entry.name} />;
};

export default RollUpName;
