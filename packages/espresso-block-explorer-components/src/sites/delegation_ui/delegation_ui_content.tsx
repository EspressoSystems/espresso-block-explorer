import { TextEditingValue } from '@/components/input/text/types';
import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import Text from '@/components/text/Text';
import Plus from '@/components/visual/icons/feather/plus';
import {
  compareArrayBuffer,
  filterIterable,
  firstWhereIterable,
  mapIterable,
} from '@/functional/functional';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import { FullNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_all/full_node_set_snapshot';
import { WalletSnapshot } from '@/service/espresso_l1_validator_service/wallet/wallet_snapshot';
import React from 'react';
import './colors.css';
import { AllValidatorsContext } from './contexts/all_validators_context';
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
  const allValidators = React.useContext(AllValidatorsContext);
  const section = React.useContext(CurrentSectionContext);

  if (section === Sections.myStakes) {
    if ((allValidators?.nodes.length ?? 0) === 0) {
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

  return (node: NodeSetEntry) => {
    if (!myStakes) {
      return false;
    }

    return Boolean(
      firstWhereIterable(
        myStakes.nodes,
        (n) => compareArrayBuffer(node.address, n.node) === 0,
      ),
    );
  };
}

/**
 * top100Filter creates a filter function based on whether to show the top
 * 100 validators by stake.
 */
function top100Filter(showTop100: boolean, targetStake: bigint) {
  if (!showTop100) {
    return () => true;
  }

  return (node: NodeSetEntry) => {
    return node.stake >= targetStake && node.stake > 0n;
  };
}

/**
 * applySectionFilter applies various filters to the snapshot of all validators
 * and returns a filtered snapshot based on the current section, top 100 filter,
 * and search term.
 */
function applySectionFilter(
  allValidators: null | FullNodeSetSnapshot,
  walletSnapshot: null | WalletSnapshot,
  section: Sections,
  showTop100: boolean,
  searchTerm: TextEditingValue,
): null | FullNodeSetSnapshot {
  if (!allValidators) {
    return null;
  }

  const allStakes = Array.from(
    mapIterable(allValidators.nodes, (node) => node.stake),
  ).toSorted();

  const targetStake =
    allStakes.length < 100
      ? allStakes[0] - 1n
      : allStakes[allStakes.length - 100];

  return new FullNodeSetSnapshot(
    allValidators.l1Block,

    Array.from(
      filterIterable(
        filterIterable(
          filterIterable(
            allValidators.nodes,
            top100Filter(showTop100, targetStake),
          ),
          sectionFilter(section, walletSnapshot),
        ),
        applySearchTermNodeFilter(searchTerm),
      ),
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
  const allValidators = React.useContext(AllValidatorsContext);
  const walletSnapshot = React.useContext(WalletSnapshotContext);
  const section = React.useContext(CurrentSectionContext);
  const searchTerm = React.useContext(SearchFilterContext);
  const showTop100 = React.useContext(OnlyShowTop100Context);

  return (
    <AllValidatorsContext.Provider
      value={applySectionFilter(
        allValidators,
        walletSnapshot,
        section,
        showTop100,
        searchTerm,
      )}
    >
      {children}
    </AllValidatorsContext.Provider>
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
        <Plus />
        <Text text="Delegate" />
      </ButtonLarge>
    );
  }

  return (
    <ButtonLarge onClick={modalControls.open}>
      <Plus />
      <Text text="Delegate" />
    </ButtonLarge>
  );
};
