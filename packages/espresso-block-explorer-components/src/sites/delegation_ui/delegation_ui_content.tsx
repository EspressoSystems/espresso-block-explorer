import { TextEditingValue } from '@/components/input/text/types';
import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import Text from '@/components/text/text';
import Add1 from '@/components/visual/icons/sharp_line/add_1';
import {
  compareIterables,
  filterIterable,
  mapIterable,
  takeIterable,
} from '@/functional/functional';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import { WalletSnapshot } from '@/service/espresso_l1_validator_service/wallet/wallet_snapshot';
import React from 'react';
import './colors.css';
import {
  AllValidatorsContext,
  NodeAddressListContext,
} from './contexts/all_validators_context';
import {
  CurrentSectionContext,
  ProvideSectionSelection,
  Sections,
} from './contexts/current_section_context';
import {
  ModalContext,
  ProvideDialogModalControls,
} from './contexts/modal_context';
import {
  OnlyShowTop100Context,
  ProvideShowTop100Filter,
} from './contexts/only_shot_top_100_context';
import {
  ProvideSearchFilter,
  SearchFilterContext,
} from './contexts/search_filter_context';
import { WalletSnapshotContext } from './contexts/wallet_snapshot_context';
import './delegation_ui_content.css';
import ButtonLarge from './elements/buttons/button_large';
import { MyBalance } from './my_balance';
import { NetworkStats } from './network_stats';
import { OnlyTop100Filter } from './only_show_top_100_button';
import { PendingClaims } from './pending_claims';
import { PendingExits } from './pending_exits';
import { applySearchTermNodeFilter } from './search_term_node_filter';
import { SearchValidator } from './search_validator';
import { SectionFilter } from './section_filter';
import { StakingModal } from './staking_modal/staking_modal';
import { ValidatorTableSortStateProvider } from './validator_nodes_table/common/validator_table_sort_state';
import { DelegationTable } from './validator_nodes_table/table/delegation_table';
import { DelegationTableHeader } from './validator_nodes_table/table/delegation_table_header';

/**
 * EmptyTable is a placeholder table displayed when there is no data to show
 * in the delegation UI for a users "My Stakes" section.
 */
const EmptyTable: React.FC = () => {
  return (
    <table className="all-validators-table">
      <DelegationTableHeader />
      <tbody>
        <tr>
          <td className="no-data" colSpan={8}>
            <Text text="Nothing brewing yet..." />
            <br />
            <br />
            <DelegateButton />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

/**
 * ContentTable renders the appropriate table based on the current section
 * selected in the Delegation UI.
 */
const ContentTable: React.FC = () => {
  const nodeAddressList = React.useContext(NodeAddressListContext);
  const section = React.useContext(CurrentSectionContext);

  if (section === Sections.myStakes) {
    if (nodeAddressList.length <= 0) {
      return <EmptyTable />;
    }
  }

  return <DelegationTable />;
};

/**
 * DelegationUIContent is the main content area for the Delegation UI page.
 *
 * It defines the layout and structure of the content that is displayed within
 * the Delegation UI.
 *
 * All of the content is displayed within a dedicated element to define the
 * area for styling purposes, and for content display.
 */
export const DelegationUIContent: React.FC = () => {
  return (
    <ProvideSectionSelection>
      <ProvideShowTop100Filter>
        <ProvideSearchFilter>
          <ProvideDialogModalControls>
            <StakingModal />
            <section className="delegation-ui-content edge-margin">
              <NetworkStats />

              <MyBalance />
              <PendingClaims />
              <PendingExits />
              <TableControls />

              <ApplyFiltersToSnapshot>
                <ValidatorTableSortStateProvider>
                  <ContentTable />
                  <br />
                </ValidatorTableSortStateProvider>
              </ApplyFiltersToSnapshot>
            </section>
          </ProvideDialogModalControls>
        </ProvideSearchFilter>
      </ProvideShowTop100Filter>
    </ProvideSectionSelection>
  );
};

/**
 * sectionFilter creates a filter function based on the current section
 * and the user's wallet snapshot.
 */
function sectionFilter(section: Sections, myStakes: null | WalletSnapshot) {
  if (section !== Sections.myStakes) {
    return () => true;
  }

  const myStakedNodes = new Set(
    mapIterable(myStakes?.nodes ?? [], (n) => n.nodeText),
  );

  return (node: `0x${string}`) => {
    if (!myStakes) {
      return false;
    }

    myStakedNodes.has(node);
  };
}

/**
 * top100Filter creates a filter function based on whether to show the top
 * 100 validators by stake.
 */
function top100Filter(
  showTop100: boolean,
  allValidators: Map<`0x${string}`, NodeSetEntry>,
) {
  if (!showTop100) {
    return () => true;
  }

  const top100Nodes = new Set(
    takeIterable(
      mapIterable(
        Array.from(
          mapIterable(allValidators, ([address, node]) => {
            return [address, node.stake] as const;
          }),
        ).toSorted((a, b) => Number(b[1] - a[1])),
        (entry) => entry[0],
      ),
      100,
    ),
  );

  return (node: `0x${string}`) => {
    return top100Nodes.has(node);
  };
}

/**
 * applySectionFilter applies various filters to the snapshot of all validators
 * and returns a filtered snapshot based on the current section, top 100 filter,
 * and search term.
 */
function applySectionFilter(
  nodeAddressList: `0x${string}`[],
  allValidators: Map<`0x${string}`, NodeSetEntry>,
  walletSnapshot: null | WalletSnapshot,
  section: Sections,
  showTop100: boolean,
  searchTerm: TextEditingValue,
): `0x${string}`[] {
  return Array.from(
    filterIterable(
      filterIterable(
        filterIterable(
          nodeAddressList,
          top100Filter(showTop100, allValidators),
        ),
        sectionFilter(section, walletSnapshot),
      ),
      applySearchTermNodeFilter(searchTerm, allValidators),
    ),
  );
}

/**
 * ApplyFiltersToSnapshot is a React component that applies various filters
 * to the snapshot of all validators and provides the filtered snapshot
 * to its children via context.
 */
const ApplyFiltersToSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const nodeList = React.useContext(NodeAddressListContext);
  const allValidators = React.useContext(AllValidatorsContext);
  const walletSnapshot = React.useContext(WalletSnapshotContext);
  const section = React.useContext(CurrentSectionContext);
  const searchTerm = React.useContext(SearchFilterContext);
  const showTop100 = React.useContext(OnlyShowTop100Context);
  const [filteredList, setFilteredList] = React.useState<`0x${string}`[]>([]);

  // The process of filtering the list computes a new array every time, which
  // is expected.  If we were to pass this naively into a context, the
  // downstream consumers of the context would be revaluated causing a lot
  // of unnecessary component re-evaluations.
  //
  // To avoid this, we compare the filtered state of the List to the previous
  // filtered state, and only update the state if it has changed.
  React.useEffect(() => {
    let setNextFilteredList = setFilteredList;
    const nextFilteredList = applySectionFilter(
      nodeList,
      allValidators,
      walletSnapshot,
      section,
      showTop100,
      searchTerm,
    );

    // We only want to update the filtered list if it has changed
    if (compareIterables(filteredList, nextFilteredList) !== 0) {
      setNextFilteredList(nextFilteredList);
    }

    return () => {
      setNextFilteredList = () => {};
    };
  }, [
    nodeList,
    allValidators,
    walletSnapshot,
    section,
    showTop100,
    searchTerm,
    filteredList,
  ]);

  return (
    <NodeAddressListContext.Provider value={filteredList}>
      {children}
    </NodeAddressListContext.Provider>
  );
};

/**
 * TableControls is a React component that renders the controls for the
 * delegation UI table, including search, section filter, and top 100 filter.
 */
const TableControls: React.FC = () => {
  return (
    <div className="delegation-ui-table-controls">
      <div>
        <SearchValidator />
        <SectionFilter />
        <OnlyTop100Filter />
      </div>
      <DelegateButton />
    </div>
  );
};

/**
 * DelegateButton is a React component that renders a button for delegating.
 * It handles the state of the user's connection and opens the appropriate
 * modal.
 */
const DelegateButton: React.FC = () => {
  const address = React.useContext(RainbowKitAccountAddressContext);
  const rainbowKtiModalControls = React.useContext(RainbowKitModalContext);
  const modalControls = React.useContext(ModalContext);

  if (!address || rainbowKtiModalControls.connectModalOpen) {
    return (
      <ButtonLarge onClick={rainbowKtiModalControls.openConnectModal}>
        <Add1 />
        <Text text="Delegate" />
      </ButtonLarge>
    );
  }

  return (
    <ButtonLarge onClick={modalControls.open}>
      <Add1 />
      <Text text="Delegate" />
    </ButtonLarge>
  );
};
