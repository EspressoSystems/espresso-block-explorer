import React from 'react';
import { curatedRollupMap } from '../../../../types/data_source/rollup_entry/data';
import NumberText from '../../../text/NumberText';
import Text from '../../../text/Text';
import RollUpAvatar24 from './RollUpAvatar24';
import RollUpName from './RollUpName';
import './roll_up_simple.css';
import { addClassToClassName } from '../../../higher_order';

export interface RollUpSimpleProps {
  className?: string;
  namespace: number;
}

/**
 * RollUpSimple is a simple element for displaying an inline representation of
 * a Registered Rollup's logo, and name.
 *
 * If the namespace given does not correspond to any known rollup, then this
 * will display the Unregistered Rollup text with the namespace for reference.
 * @param props
 * @returns
 */
const RollUpSimple: React.FC<RollUpSimpleProps> = ({
  namespace,
  className,
  ...props
}) => {
  const rollUp = curatedRollupMap.get(namespace);

  if (rollUp) {
    return (
      <div
        {...props}
        className={addClassToClassName(className, 'rollup-simple')}
      >
        <RollUpAvatar24 entry={rollUp} />
        <RollUpName entry={rollUp} />
      </div>
    );
  }

  return (
    <div {...props} className={addClassToClassName(className, 'rollup-simple')}>
      <Text text="Unregistered Rollup" /> (<NumberText number={namespace} />)
    </div>
  );
};

export default RollUpSimple;
