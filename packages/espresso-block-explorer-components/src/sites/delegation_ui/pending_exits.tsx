import { Now } from '@/components/contexts/now_provider';
import Text from '@/components/text/text';
import Unlock from '@/components/visual/icons/feather/unlock';
import { filterIterable } from '@/functional/functional';
import React from 'react';
import {
  CollapsableHeader,
  CollapsableSection,
  CollapseGuard,
} from './collapsable_section';
import { NodeAddressListContext } from './contexts/all_validators_context';
import { PendingExitsContext } from './contexts/pending_exits_context';
import './pending_exits.css';
import { ValidatorTableSortStateProvider } from './validator_nodes_table/common/validator_table_sort_state';
import { PendingExitsDelegationTable } from './validator_nodes_table/table/pending_exits_delegation_table';

export const PendingExits: React.FC = () => {
  return (
    <EnsureOnlyPendingExits>
      <PendingExitsSection />
    </EnsureOnlyPendingExits>
  );
};

const EnsureOnlyPendingExits: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const pendingExits = React.useContext(PendingExitsContext);

  if (pendingExits.size <= 0) {
    return null;
  }

  return (
    <ExpensiveEnsureOnlyPendingExits>
      {children}
    </ExpensiveEnsureOnlyPendingExits>
  );
};

const ExpensiveEnsureOnlyPendingExits: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Somewhat expensive to evaluate this every second?
  const now = React.useContext(Now);
  const pendingExits = React.useContext(PendingExitsContext);

  // We only want to consider undelegations that are ready
  // We don't want to display anything that is not yet claimable.

  const claimableUndelegations = filterIterable(
    pendingExits.values(),
    (pending) => pending.availableTime <= now,
  );

  if (claimableUndelegations.next().done) {
    // This iterable doesn't contain anything
    return null;
  }

  return children;
};

const PendingExitsSection: React.FC = () => {
  return (
    <CollapsableSection className="pending-exits">
      <CollapsableHeader>
        <Unlock />
        <h2>
          <Text text="Validators you have delegated to have exited the Staking Table.  You can claim back your delegation now." />
        </h2>
      </CollapsableHeader>
      <CollapseGuard>
        <PendingExitsContent />
      </CollapseGuard>
    </CollapsableSection>
  );
};

const PendingExitsContent: React.FC = () => {
  const pendingExits = React.useContext(PendingExitsContext);
  const nodeList = React.useContext(NodeAddressListContext);
  const pending = new Set(pendingExits.keys());
  const addressList = new Set(nodeList);
  const intersection = Array.from(
    filterIterable(pending, (x) => addressList.has(x)),
  );

  return (
    <NodeAddressListContext.Provider value={intersection}>
      <ValidatorTableSortStateProvider>
        <PendingExitsDelegationTable />
      </ValidatorTableSortStateProvider>
    </NodeAddressListContext.Provider>
  );
};
