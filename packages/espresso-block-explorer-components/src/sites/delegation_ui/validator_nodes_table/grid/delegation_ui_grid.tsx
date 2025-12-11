import { NodeAddressListContext } from '@/sites/delegation_ui/contexts/all_validators_context';
import { ProvideValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';
import { NodeAddressContext } from '../../contexts/node_address_context';
import { DelegationGridHeader } from './delegation_grid_header';
import { NodeValidatorGridRow } from './node_validator_grid_row';

/**
 * DelegationUIGrid is a component that renders
 * the grid of validator nodes in the delegation UI.
 */
export const DelegationUIGrid: React.FC = () => {
  const nodeAddressList = React.useContext(NodeAddressListContext);

  if (nodeAddressList.length <= 0) {
    return <></>;
  }

  return (
    <div className="all-validators-grid">
      <DelegationGridHeader />
      {nodeAddressList.map((address, index) => {
        return (
          <NodeAddressContext.Provider key={index} value={address}>
            <ProvideValidatorNodeContext>
              <NodeValidatorGridRow />
            </ProvideValidatorNodeContext>
          </NodeAddressContext.Provider>
        );
      })}
    </div>
  );
};
