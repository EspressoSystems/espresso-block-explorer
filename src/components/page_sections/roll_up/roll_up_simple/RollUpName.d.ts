import React from 'react';
import { RollUpEntry } from '../../../../types/data_source/rollup_entry/types';
export interface RollUpNameProps {
    entry: RollUpEntry;
}
declare const RollUpName: React.FC<RollUpNameProps>;
export default RollUpName;
