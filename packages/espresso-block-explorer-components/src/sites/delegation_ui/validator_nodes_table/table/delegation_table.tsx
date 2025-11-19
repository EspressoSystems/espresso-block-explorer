import { AllValidatorsContext } from '@/sites/delegation_ui/contexts/all_validators_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';
import '../table.css';
import { DelegationTableHeader } from './delegation_table_header';
import { NodeValidatorTableRow } from './node_validator_table_row';

/**
 * DelegationTable is a component that renders
 * the table of validator nodes in the delegation UI.
 */
export const DelegationTable: React.FC = () => {
  const allValidators = React.useContext(AllValidatorsContext);

  if (!allValidators) {
    return <></>;
  }

  return (
    <table className="all-validators-table">
      <DelegationTableHeader />
      <tbody>
        {allValidators.nodes.map((node, index) => {
          return (
            <ValidatorNodeContext.Provider key={index} value={node}>
              <NodeValidatorTableRow />
            </ValidatorNodeContext.Provider>
          );
        })}
      </tbody>
    </table>
  );
};
