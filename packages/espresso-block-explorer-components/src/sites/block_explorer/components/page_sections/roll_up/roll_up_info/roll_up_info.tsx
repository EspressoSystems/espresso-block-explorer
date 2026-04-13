import { default as Card } from '@/block_explorer/components/layout/card/card';
import { default as ValueLabeled } from '@/block_explorer/components/layout/value_labeled/value_labeled';
import { NumberText, Text } from '@/components/text';
import { addClassToClassName } from '@/higher_order';
import {
  NamespaceContext,
  RollUpEntryContext,
} from '@/models/block_explorer/rollup_entry/contexts';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import { default as React } from 'react';
import { EgressLink } from '../../../links/link/link';
import './roll_up_info.css';

export interface RollUpInfoProps {
  className?: string;
}

const RollupWebsiteLink: React.FC = () => {
  const rollUp = React.useContext(RollUpEntryContext);
  if (!rollUp || !rollUp.site) {
    return <Text text="-" />;
  }

  return (
    <EgressLink href={rollUp.site.toString()}>
      <Text text={rollUp.site.toString()} />
    </EgressLink>
  );
};

const RollupExplorerLink: React.FC = () => {
  const rollUp = React.useContext(RollUpEntryContext);
  if (!rollUp || !rollUp.blockExplorer) {
    return <Text text="-" />;
  }

  return (
    <EgressLink href={rollUp.blockExplorer.toString()}>
      <Text text={rollUp.blockExplorer.toString()} />
    </EgressLink>
  );
};

/**
 * RollUpInfo is a small section of information concerning the rollup in
 * question. It contains, if known, the Rollup's name, namespace, website link
 * and block explorer link.
 */
const RollUpInfo: React.FC<RollUpInfoProps> = ({ className, ...props }) => {
  const namespace = React.useContext(NamespaceContext);
  const rollUp = curatedRollupMap.get(namespace) ?? null;

  return (
    <RollUpEntryContext.Provider value={rollUp}>
      <Card
        {...props}
        className={addClassToClassName(className, 'rollup-info')}
      >
        <ValueLabeled>
          <NumberText number={namespace} />
          <Text text="Namespace" />
        </ValueLabeled>
        <ValueLabeled>
          <RollupWebsiteLink />
          <Text text="Site" />
        </ValueLabeled>
        <ValueLabeled>
          <RollupExplorerLink />
          <Text text="Block Explorer" />
        </ValueLabeled>
      </Card>
    </RollUpEntryContext.Provider>
  );
};

export default RollUpInfo;
