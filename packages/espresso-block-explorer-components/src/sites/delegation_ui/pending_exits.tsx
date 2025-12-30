import { Now } from '@/components/contexts/now_provider';
import Text from '@/components/text/text';
import PadlockSquare2 from '@/components/visual/icons/sharp_line/padlock_square_2';
import { compareIterables } from '@/functional/functional';
import React from 'react';
import {
  CollapsableHeader,
  CollapsableSection,
  CollapseGuard,
} from './collapsable_section';
import { NodeAddressListContext } from './contexts/all_validators_context';
import { PendingExitsContext } from './contexts/pending_exits_context';
import './pending_exits.css';
import {
  CellType,
  ValidatorTableSortStateProvider,
} from './validator_nodes_table/common/validator_table_sort_state';
import { PendingExitsDelegationTable } from './validator_nodes_table/table/pending_exits_delegation_table';

/**
 * PendingExits is a React component that displays the current wallet's
 * available pending exits.
 *
 * If there are no pending exits available, then nothing should be displayed,
 * otherwise a collapsable section with the pending exits table is shown.
 */
export const PendingExits: React.FC = () => {
  return (
    <FilterToAvailablePendingExits>
      <PendingExitsSection />
    </FilterToAvailablePendingExits>
  );
};

/**
 * FilterToAvailablePendingExits is a component that filters the pending exits
 * to only include those that are available to be claimed.
 */
const FilterToAvailablePendingExits: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const pendingExits = React.useContext(PendingExitsContext);
  const nodeAddressList = React.useContext(NodeAddressListContext);
  const now = React.useContext(Now);

  const [pendingExitsList, setPendingExitsList] = React.useState<
    `0x${string}`[]
  >([]);

  React.useEffect(() => {
    let setNextPendingExitsList = setPendingExitsList;
    const nextPendingExitsList = Array.from(pendingExits.keys());

    if (compareIterables(pendingExitsList, nextPendingExitsList) !== 0) {
      setNextPendingExitsList(nextPendingExitsList);
    }

    return () => {
      setNextPendingExitsList = () => {};
    };
  }, [nodeAddressList, now, pendingExits, pendingExitsList]);

  return (
    <NodeAddressListContext.Provider value={pendingExitsList}>
      {children}
    </NodeAddressListContext.Provider>
  );
};

/**
 * PendingExitsSection is a component that displays the pending exits
 * section including the header and the content table.
 */
const PendingExitsSection: React.FC = () => {
  const pendingExitAddresses = React.useContext(NodeAddressListContext);

  if (pendingExitAddresses.length <= 0) {
    return null;
  }

  return (
    <CollapsableSection className="pending-exits">
      <CollapsableHeader>
        <PadlockSquare2 />
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

/**
 * PendingExitsContent is a component that renders the table of pending exits.
 */
const PendingExitsContent: React.FC = () => {
  return (
    <ValidatorTableSortStateProvider sortBy={CellType.pendingExit}>
      <PendingExitsDelegationTable />
    </ValidatorTableSortStateProvider>
  );
};
