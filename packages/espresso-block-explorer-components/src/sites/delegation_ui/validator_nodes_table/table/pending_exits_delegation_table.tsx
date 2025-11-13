import React from 'react';
import { AllValidatorsContext } from 'sites/delegation_ui/contexts/all_validators_context';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';
import '../table.css';
import { ClaimsDelegationTableHeader } from './claims_table_header';
import { PendingExitsNodeValidatorTableRow } from './pending_exits_table_row';

/**
 * PendingExitsDelegationTable is a component that renders
 * the table of validator nodes in the delegation UI for Pending Exits
 */
export const PendingExitsDelegationTable: React.FC = () => {
  const allValidators = React.useContext(AllValidatorsContext);

  if (!allValidators) {
    return <></>;
  }

  return (
    <table className="all-validators-table pending-claims">
      <ClaimsDelegationTableHeader />
      <tbody>
        {allValidators.nodes.map((node, index) => {
          return (
            <ValidatorNodeContext.Provider key={index} value={node}>
              <PendingExitsNodeValidatorTableRow />
            </ValidatorNodeContext.Provider>
          );
        })}
      </tbody>
    </table>
  );
};
