import { addClassToClassName } from '@/higher_order';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import { default as React } from 'react';
import { default as RollUpAvatar24 } from './roll_up_avatar24';
import { default as RollUpName } from './roll_up_name';
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
 * will display the namespace on its own, since there is no name to show. In
 * both cases the title spells out what the element is referring to, as
 * neither a logo nor a bare number says so by itself.
 *
 * The namespace is rendered without group separators: it identifies a rollup
 * rather than counting anything, so it reads as an identifier, not a quantity.
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
        title={`${rollUp.name} ID ${namespace}`}
      >
        <RollUpAvatar24 entry={rollUp} />
        <RollUpName entry={rollUp} />
      </div>
    );
  }

  return (
    <div
      {...props}
      className={addClassToClassName(className, 'rollup-simple')}
      title={`Unregistered Rollup ID ${namespace}`}
    >
      {namespace}
    </div>
  );
};

export default RollUpSimple;
