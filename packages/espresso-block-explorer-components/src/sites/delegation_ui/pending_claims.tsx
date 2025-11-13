import { Now } from '@/components/contexts/NowProvider';
import Text from '@/components/text/Text';
import Unlock from '@/components/visual/icons/feather/unlock';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
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
import { ProvideCollapseState } from './contexts/collapse_context';
import { PendingUndelegationsContext } from './contexts/pending_undelegations_context';
import './pending_claims.css';
import { ValidatorTableSortStateProvider } from './validator_nodes_table/common/validator_table_sort_state';
import { PendingClaimsDelegationTable } from './validator_nodes_table/table/pending_claims_delegation_table';

export const PendingClaims: React.FC = () => {
  return (
    <EnsureOnlyPendingClaims>
      <ProvideCollapseState>
        <PendingClaimsSection />
      </ProvideCollapseState>
    </EnsureOnlyPendingClaims>
  );
};

const EnsureOnlyPendingClaims: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const pendingUndelegations = React.useContext(PendingUndelegationsContext);

  if (pendingUndelegations.size <= 0) {
    return null;
  }

  return (
    <ExpensiveEnsureOnlyPendingClaims>
      {children}
    </ExpensiveEnsureOnlyPendingClaims>
  );
};

const ExpensiveEnsureOnlyPendingClaims: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Somewhat expensive to evaluate this every second?
  const now = React.useContext(Now);
  const pendingUndelegations = React.useContext(PendingUndelegationsContext);

  // We only want to consider undelegations that are ready
  // We don't want to display anything that is not yet claimable.

  const claimableUndelegations = filterIterable(
    pendingUndelegations.values(),
    (pending) => pending.availableTime <= now,
  );

  if (claimableUndelegations.next().done) {
    // This iterable doesn't contain anything
    return null;
  }

  return children;
};

const PendingClaimsSection: React.FC = () => {
  return (
    <CollapsableSection className="pending-claims">
      <CollapsableHeader>
        <h2>
          <Unlock />
          <Text text="Your recently unstaked your delegation.  You can claim back your delegation now." />
        </h2>
      </CollapsableHeader>
      <CollapseGuard>
        <PendingClaimsContent />
      </CollapseGuard>
    </CollapsableSection>
  );
};

function filterAllValidators(
  allValidators: null | FullNodeSetSnapshot,
  pendingUndelegations: Map<`0x${string}`, PendingWithdrawal>,
): null | FullNodeSetSnapshot {
  if (!allValidators) {
    return null;
  }

  return new FullNodeSetSnapshot(
    allValidators.l1Block,
    Array.from(
      filterIterable(allValidators.nodes, (node) =>
        pendingUndelegations.has(hexArrayBufferCodec.encode(node.address)),
      ),
    ),
  );
}

const PendingClaimsContent: React.FC = () => {
  const pendingUndelegations = React.useContext(PendingUndelegationsContext);
  const allValidators = React.useContext(AllValidatorsContext);

  // Implementation for the content of pending claims goes here
  return (
    <AllValidatorsContext.Provider
      value={filterAllValidators(allValidators, pendingUndelegations)}
    >
      <ValidatorTableSortStateProvider>
        <PendingClaimsDelegationTable />
      </ValidatorTableSortStateProvider>
    </AllValidatorsContext.Provider>
  );
};
