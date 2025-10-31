import Text from '@/components/text/Text';
import React from 'react';
import './colors.css';
import { AllValidatorsContext } from './contexts/all_validators_context';
import './delegation_ui_content.css';
import { NetworkStats } from './network_stats';
import { ValidatorTableSortStateProvider } from './validator_nodes_table/common/validator_table_sort_state';
import { DelegationTable } from './validator_nodes_table/table/delegation_table';

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
  const allValidators = React.useContext(AllValidatorsContext) ?? null;

  if (allValidators === null) {
    return (
      <>
        <Text text="Missing data" />
      </>
    );
  }

  return (
    <section className="delegation-ui-content edge-margin">
      <NetworkStats />

      <ValidatorTableSortStateProvider>
        <DelegationTable />
      </ValidatorTableSortStateProvider>
      <br />
      <br />
    </section>
  );
};
