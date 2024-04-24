import { addClassToClassName } from '@/higher_order';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
import React from 'react';
import RollUpAvatar24 from './RollUpAvatar24';
import RollUpName from './RollUpName';
import './roll_up_simple.css';

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
