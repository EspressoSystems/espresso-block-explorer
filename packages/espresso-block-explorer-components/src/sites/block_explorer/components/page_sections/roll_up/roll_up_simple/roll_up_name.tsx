import { RollUpEntry } from '@/models/block_explorer/rollup_entry/types';
import { default as Text } from '@/text/text';
import { default as React } from 'react';

export interface RollUpNameProps {
  entry: RollUpEntry;
}

const RollUpName: React.FC<RollUpNameProps> = (props) => {
  return <Text text={props.entry.name} />;
};

export default RollUpName;
