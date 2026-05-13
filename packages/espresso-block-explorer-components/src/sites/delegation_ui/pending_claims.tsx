import { Text } from '@/components/text';
import { PadlockSquare2 } from '@/components/visual/icons/sharp_line';
import { Now } from '@/contexts/now_provider';
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
 * EnsureValidatorEntries is a component that ensures that we have entries
 * present in the `AllValidatorsContext` for validator entries that might
 * be missing.
 *
 * This is specifically to account for the Pending Claims, which will no longer
 * have a nodes entry in the `AllValidatorsContext` this is not expected, but
 * can still occur.
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
 * FilterToAvailablePendingExits is a component that filters the pending exits
 * to only include those that are available to be claimed.
 */
const FilterToAvailablePendingClaims: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const pendingClaims = React.useContext(PendingUndelegationsContext);
  const nodeAddressList = React.useContext(NodeAddressListContext);
  const now = React.useContext(Now);

  const [pendingClaimsList, setPendingClaimsList] = React.useState<
    `0x${string}`[]
  >([]);

  React.useEffect(() => {
    let setNextPendingExitsList = setPendingClaimsList;
    const nextPendingClaimsList = Array.from(pendingClaims.keys());

    if (compareIterables(pendingClaimsList, nextPendingClaimsList) !== 0) {
      setNextPendingExitsList(nextPendingClaimsList);
    }

    return () => {
      setNextPendingExitsList = () => {};
    };
  }, [nodeAddressList, now, pendingClaims, pendingClaimsList]);

  return (
    <NodeAddressListContext.Provider value={pendingClaimsList}>
      <EnsureValidatorEntries>{children}</EnsureValidatorEntries>
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
    <CollapsableSection
      className="pending-claims"
      initialState={CollapseState.expanded}
    >
      <CollapsableHeader>
        <PadlockSquare2 />
        <h2>
          <Text text="Your recently unstaked your delegation.  You can manage your pending withdraws here." />
        </h2>
      </CollapsableHeader>
      <PendingClaimsContent />
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
