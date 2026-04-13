import { NumberText, Text } from '@/components/text';
import { addClassToClassName } from '@/higher_order';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import { default as React } from 'react';
import { default as RollUpName } from '../roll_up_simple/roll_up_name';
import { default as RollUpAvatar40 } from './roll_up_avatar40';
import './roll_up_title.css';

export interface RollUpTitleProps {
  className?: string;
  namespace: number;
}

/**
 * RollUpTitle is a simple element for displaying an inline representation of
 * a Registered Rollup's logo, and name.
 *
 * If the namespace given does not correspond to any known rollup, then this
 * will display the Unregistered Rollup text with the namespace for reference.
 */
const RollUpTitle: React.FC<RollUpTitleProps> = ({
  namespace,
  className,
  ...props
}) => {
  const rollUp = curatedRollupMap.get(namespace);

  if (rollUp) {
    return (
      <div
        {...props}
        className={addClassToClassName(className, 'rollup-title')}
      >
        <RollUpName entry={rollUp} />
        <RollUpAvatar40 entry={rollUp} />
      </div>
    );
  }

  return (
    <div {...props} className={addClassToClassName(className, 'rollup-title')}>
      <Text text="Unregistered Rollup" /> (<NumberText number={namespace} />)
    </div>
  );
};

export default RollUpTitle;
