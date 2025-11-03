import React from 'react';
import { AllValidatorsContext } from 'sites/delegation_ui/contexts/all_validators_context';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';
import { DelegationGridHeader } from './delegation_grid_header';
import { NodeValidatorGridRow } from './node_validator_grid_row';

/**
 * DelegationUIGrid is a component that renders
 * the grid of validator nodes in the delegation UI.
 */
export const DelegationUIGrid: React.FC = () => {
  const allValidators = React.useContext(AllValidatorsContext);

  if (allValidators === null) {
    return <></>;
  }

  return (
    <div className="all-validators-grid">
      <DelegationGridHeader />
      {allValidators.nodes.map((node, index) => {
        return (
          <ValidatorNodeContext.Provider key={index} value={node}>
            <NodeValidatorGridRow />
          </ValidatorNodeContext.Provider>
        );
      })}
    </div>
  );
};
