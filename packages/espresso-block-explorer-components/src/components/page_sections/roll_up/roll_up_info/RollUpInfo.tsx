import { addClassToClassName } from '@/higher_order';
import Card from '@/layout/card/Card';
import ValueLabeled from '@/layout/value_labeled/ValueLabeled';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
import React from 'react';
import Link from '../../../links/link/Link';
import './roll_up_info.css';

export interface RollUpInfoProps {
  className?: string;
  namespace: number;
}

/**
 * RollUpInfo is a small section of information concerning the rollup in
 * question. It contains, if known, the Rollup's name, namespace, website link
 * and block explorer link.
 */
const RollUpInfo: React.FC<RollUpInfoProps> = ({
  namespace,
  className,
  ...props
}) => {
  const rollUp = curatedRollupMap.get(namespace);

  if (rollUp) {
    return (
      <Card
        {...props}
        className={addClassToClassName(className, 'rollup-info')}
      >
        <ValueLabeled>
          <NumberText number={namespace} />
          <Text text="Namespace" />
        </ValueLabeled>
        <ValueLabeled>
          <Link href={rollUp.site.toString()}>
            <Text text={rollUp.site.toString()} />
          </Link>
          <Text text="Site" />
        </ValueLabeled>
        <ValueLabeled>
          <Link href={rollUp.blockExplorer.toString()}>
            <Text text={rollUp.blockExplorer.toString()} />
          </Link>
          <Text text="Block Explorer" />
        </ValueLabeled>
      </Card>
    );
  }

  return (
    <Card {...props} className={addClassToClassName(className, 'rollup-info')}>
      <ValueLabeled>
        <NumberText number={namespace} />
        <Text text="Namespace" />
      </ValueLabeled>
      <ValueLabeled>
        <Text text="-" />
        <Text text="Site" />
      </ValueLabeled>
      <ValueLabeled>
        <Text text="-" />
        <Text text="Block Explorer" />
      </ValueLabeled>
    </Card>
  );
};

export default RollUpInfo;
