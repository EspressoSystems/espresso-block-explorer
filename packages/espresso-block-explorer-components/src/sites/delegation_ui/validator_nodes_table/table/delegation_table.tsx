import { NodeAddressListContext } from '@/sites/delegation_ui/contexts/all_validators_context';
import { ProvideValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import { default as React } from 'react';
import { NodeAddressContext } from '../../contexts/node_address_context';
import '../table.css';
import { DelegationTableHeader } from './delegation_table_header';
import { NodeValidatorTableRow } from './node_validator_table_row';

/**
 * DelegationTable is a component that renders
 * the table of validator nodes in the delegation UI.
 */
export const DelegationTable: React.FC = () => {
  const nodeAddressList = React.useContext(NodeAddressListContext);

  if (nodeAddressList.length <= 0) {
    return <></>;
  }

  return (
    <table className="all-validators-table">
      <DelegationTableHeader />
      <tbody>
        {nodeAddressList.map((address, index) => {
          return (
            <NodeAddressContext.Provider key={index} value={address}>
              <ProvideValidatorNodeContext>
                <NodeValidatorTableRow />
              </ProvideValidatorNodeContext>
            </NodeAddressContext.Provider>
          );
        })}
      </tbody>
    </table>
  );
};
