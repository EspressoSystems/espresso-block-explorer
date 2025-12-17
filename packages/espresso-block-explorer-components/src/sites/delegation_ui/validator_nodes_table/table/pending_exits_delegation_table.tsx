import { NodeAddressListContext } from '@/sites/delegation_ui/contexts/all_validators_context';
import { ProvideValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';
import { NodeAddressContext } from '../../contexts/node_address_context';
import '../table.css';
import { PendingExitsDelegationTableHeader } from './pending_exits_table_header';
import { PendingExitsNodeValidatorTableRow } from './pending_exits_table_row';

/**
 * PendingExitsDelegationTable is a component that renders
 * the table of validator nodes in the delegation UI for Pending Exits
 */
export const PendingExitsDelegationTable: React.FC = () => {
  const nodeAddressList = React.useContext(NodeAddressListContext);

  if (nodeAddressList.length <= 0) {
    return <></>;
  }

  return (
    <table className="all-validators-table pending-claims">
      <PendingExitsDelegationTableHeader />
      <tbody>
        {nodeAddressList.map((address, index) => {
          return (
            <NodeAddressContext.Provider key={index} value={address}>
              <ProvideValidatorNodeContext>
                <PendingExitsNodeValidatorTableRow />
              </ProvideValidatorNodeContext>
            </NodeAddressContext.Provider>
          );
        })}
      </tbody>
    </table>
  );
};
