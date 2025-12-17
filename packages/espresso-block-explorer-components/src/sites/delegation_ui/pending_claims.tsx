import { Now } from '@/components/contexts/now_provider';
import Text from '@/components/text/text';
import PadlockSquare2 from '@/components/visual/icons/sharp_line/padlock_square_2';
import {
  compareIterables,
  filterIterable,
  mapIterable,
} from '@/functional/functional';
import React from 'react';
import {
  CollapsableHeader,
  CollapsableSection,
  CollapseGuard,
} from './collapsable_section';
import { NodeAddressListContext } from './contexts/all_validators_context';
import { PendingUndelegationsContext } from './contexts/pending_undelegations_context';
import './pending_claims.css';
import {
  CellType,
  ValidatorTableSortStateProvider,
} from './validator_nodes_table/common/validator_table_sort_state';
import { PendingClaimsDelegationTable } from './validator_nodes_table/table/pending_claims_delegation_table';

/**
 * PendingClaims is a React component that displays the current wallet's
 * available pending claims.
 *
 * If there are no pending claims available, then nothing should be displayed,
 * otherwise a collapsable section with the pending claims table is shown.
 */
export const PendingClaims: React.FC = () => {
  return (
    <FilterToAvailablePendingClaims>
      <PendingClaimsSection />
    </FilterToAvailablePendingClaims>
  );
};

/**
 * FilterToAvailablePendingExits is a component that filters the pending exits
 * to only include those that are available to be claimed.
 */
const FilterToAvailablePendingClaims: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const pendingClaims = React.useContext(PendingUndelegationsContext);
  const nodeAddressList = React.useContext(NodeAddressListContext);
  const now = React.useContext(Now);

  const [pendingExitsList, setPendingExitsList] = React.useState<
    `0x${string}`[]
  >([]);

  React.useEffect(() => {
    const nodeAddressSet = new Set(nodeAddressList);
    let setNextPendingExitsList = setPendingExitsList;
    const eligiblePendingExits = mapIterable(
      filterIterable(
        pendingClaims,
        ([, pending]) => pending.availableTime.valueOf() <= now.valueOf(),
      ),
      ([address]) => address,
    );

    const pendingExitsSet = new Set(eligiblePendingExits);

    const nextPendingExitsList = Array.from(
      filterIterable(nodeAddressSet, (address) => pendingExitsSet.has(address)),
    );

    if (compareIterables(pendingExitsList, nextPendingExitsList) !== 0) {
      setNextPendingExitsList(nextPendingExitsList);
    }

    return () => {
      setNextPendingExitsList = () => {};
    };
  }, [nodeAddressList, now, pendingClaims, pendingExitsList]);

  return (
    <NodeAddressListContext.Provider value={pendingExitsList}>
      {children}
    </NodeAddressListContext.Provider>
  );
};

/**
 * PendingClaimsSection is a component that displays the pending exits
 * section including the header and the content table.
 */
const PendingClaimsSection: React.FC = () => {
  const pendingClaimAddresses = React.useContext(NodeAddressListContext);

  if (pendingClaimAddresses.length <= 0) {
    return null;
  }

  return (
    <CollapsableSection className="pending-claims">
      <CollapsableHeader>
        <PadlockSquare2 />
        <h2>
          <Text text="Your recently unstaked your delegation.  You can claim back your delegation now." />
        </h2>
      </CollapsableHeader>
      <CollapseGuard>
        <PendingClaimsContent />
      </CollapseGuard>
    </CollapsableSection>
  );
};

/**
 * PendingClaimsContent is a component that renders the table of pending exits.
 */
const PendingClaimsContent: React.FC = () => {
  return (
    <ValidatorTableSortStateProvider sortBy={CellType.pendingClaim}>
      <PendingClaimsDelegationTable />
    </ValidatorTableSortStateProvider>
  );
};
