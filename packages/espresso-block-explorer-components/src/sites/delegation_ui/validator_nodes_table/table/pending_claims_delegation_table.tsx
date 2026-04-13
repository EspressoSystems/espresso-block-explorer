import { NodeAddressListContext } from '@/sites/delegation_ui/contexts/all_validators_context';
import { ProvideValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import { default as React } from 'react';
import { NodeAddressContext } from '../../contexts/node_address_context';
import '../table.css';
import { PendingClaimsDelegationTableHeader } from './pending_claims_table_header';
import { PendingClaimsNodeValidatorTableRow } from './pending_claims_table_row';

/**
 * PendingClaimsDelegationTable is a component that renders
 * the table of validator nodes in the delegation UI for Pending Claims
 */
export const PendingClaimsDelegationTable: React.FC = () => {
  const nodeAddressList = React.useContext(NodeAddressListContext);

  if (nodeAddressList.length <= 0) {
    return <></>;
  }

  return (
    <table className="all-validators-table pending-claims">
      <PendingClaimsDelegationTableHeader />
      <tbody>
        {nodeAddressList.map((address, index) => {
          return (
            <NodeAddressContext.Provider key={index} value={address}>
              <ProvideValidatorNodeContext>
                <PendingClaimsNodeValidatorTableRow />
              </ProvideValidatorNodeContext>
            </NodeAddressContext.Provider>
          );
        })}
      </tbody>
    </table>
  );
};
