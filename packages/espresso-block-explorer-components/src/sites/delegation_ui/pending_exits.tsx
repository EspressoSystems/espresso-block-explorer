import { Text } from '@/components/text';
import { PadlockSquare2 } from '@/components/visual/icons/sharp_line';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { compareIterables } from '@/functional/functional';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { RatioRational } from '@/service/espresso_staking_api_service/common/ratio';
import { default as React } from 'react';
import { CollapsableHeader, CollapsableSection } from './collapsable_section';
import {
  AllValidatorsContext,
  NodeAddressListContext,
} from './contexts/all_validators_context';
import { CollapseState } from './contexts/collapse_context';
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
  }, [pendingExits, pendingExitsList]);

  return (
    <NodeAddressListContext.Provider value={pendingExitsList}>
      <EnsureValidatorEntries>{children}</EnsureValidatorEntries>
    </NodeAddressListContext.Provider>
  );
};

/**
 * EnsureValidatorEntries is a component that ensures that we have entries
 * present in the `AllValidatorsContext` for validator entries that might
 * be missing.
 *
 * This is specifically to account for the Pending Exits, which will no longer
 * have a nodes entry in the `AllValidatorsContext` since they have exited,
 * but we still want to present the relevant information to the user.
 */
const EnsureValidatorEntries: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const allValidators = React.useContext(AllValidatorsContext);
  const nodeAddressList = React.useContext(NodeAddressListContext);

  const nextAllValidators = React.useMemo(() => {
    const next = new Map(allValidators);

    for (const address of nodeAddressList) {
      const found = next.get(address);
      if (found) {
        // Already present, ignore
        continue;
      }

      // We need to create a placeholder for the validator
      next.set(
        address,
        new NodeSetEntry(
          hexArrayBufferCodec.decode(address),
          new TaggedBase64('', new ArrayBuffer(0)),
          0n,
          new RatioRational(0n, 1n),
          null,
        ),
      );
    }

    return next;
  }, [allValidators, nodeAddressList]);

  return (
    <AllValidatorsContext.Provider value={nextAllValidators}>
      {children}
    </AllValidatorsContext.Provider>
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
    <CollapsableSection
      className="pending-exits"
      initialState={CollapseState.expanded}
    >
      <CollapsableHeader>
        <PadlockSquare2 />
        <h2>
          <Text text="Validators you have delegated to have exited the Staking Table.  You can manage your pending withdraws here." />
        </h2>
      </CollapsableHeader>
      <PendingExitsContent />
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
