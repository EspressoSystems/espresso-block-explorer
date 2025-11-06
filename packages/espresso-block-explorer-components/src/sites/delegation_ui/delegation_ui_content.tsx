import Text from '@/components/text/Text';
import Plus from '@/components/visual/icons/feather/plus';
import React from 'react';
import './colors.css';
import './delegation_ui_content.css';
import ButtonLarge from './elements/buttons/button_large';
import { SegmentedButton } from './elements/buttons/segmented_button';
import { MyBalance } from './my_balance';
import { NetworkStats } from './network_stats';
import { ValidatorTableSortStateProvider } from './validator_nodes_table/common/validator_table_sort_state';
import { DelegationTable } from './validator_nodes_table/table/delegation_table';
import { DelegationTableHeader } from './validator_nodes_table/table/delegation_table_header';

/**
 * Sections enum defines the different sections available in the Delegation UI.
 */
enum Sections {
  all,
  myStakes,
}

/**
 * CurrentSectionContext is a React context that holds the current section
 * being viewed in the Delegation UI.
 */
const CurrentSectionContext = React.createContext<Sections>(Sections.all);

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
            <ButtonLarge onClick={() => {}}>
              <Plus />
              <Text text="Delegate" />
            </ButtonLarge>
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
  const section = React.useContext(CurrentSectionContext);
  switch (section) {
    case Sections.all:
      return (
        <ValidatorTableSortStateProvider>
          <DelegationTable />
        </ValidatorTableSortStateProvider>
      );

    case Sections.myStakes:
      return <EmptyTable />;
  }
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
  const [section, setSection] = React.useState<Sections>(Sections.all);

  return (
    <section className="delegation-ui-content edge-margin">
      <NetworkStats />

      <MyBalance />

      <div className="delegation-ui-table-controls">
        <SegmentedButton
          selected={section}
          onSelectionChange={(section) => {
            setSection(section);
          }}
          segments={[
            { value: Sections.all, label: <Text text="All" /> },
            { value: Sections.myStakes, label: <Text text="My Stakes" /> },
          ]}
        />

        <ButtonLarge onClick={() => {}}>
          <Plus />
          <Text text="Delegate" />
        </ButtonLarge>
      </div>

      <CurrentSectionContext.Provider value={section}>
        <ContentTable />
      </CurrentSectionContext.Provider>
      <br />
      <br />
    </section>
  );
};
