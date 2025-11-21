import { Now } from '@/components/contexts/NowProvider';
import Text from '@/components/text/Text';
import Unlock from '@/components/visual/icons/feather/unlock';
import { filterIterable } from '@/functional/functional';
import { PendingWithdrawal } from '@/service/espresso_l1_validator_service/common/pending_withdrawal';
import { FullNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_all/full_node_set_snapshot';
import React from 'react';
import {
  CollapsableHeader,
  CollapsableSection,
  CollapseGuard,
} from './collapsable_section';
import { AllValidatorsContext } from './contexts/all_validators_context';
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

function filterAllValidators(
  allValidators: null | FullNodeSetSnapshot,
  pendingExits: Map<`0x${string}`, PendingWithdrawal>,
): null | FullNodeSetSnapshot {
  if (!allValidators) {
    return null;
  }

  return new FullNodeSetSnapshot(
    allValidators.l1Block,
    Array.from(
      filterIterable(allValidators.nodes, (node) =>
        pendingExits.has(node.addressText),
      ),
    ),
  );
}

const PendingExitsContent: React.FC = () => {
  const pendingExits = React.useContext(PendingExitsContext);
  const allValidators = React.useContext(AllValidatorsContext);

  // Implementation for the content of pending claims goes here
  return (
    <AllValidatorsContext.Provider
      value={filterAllValidators(allValidators, pendingExits)}
    >
      <ValidatorTableSortStateProvider>
        <PendingExitsDelegationTable />
      </ValidatorTableSortStateProvider>
    </AllValidatorsContext.Provider>
  );
};
