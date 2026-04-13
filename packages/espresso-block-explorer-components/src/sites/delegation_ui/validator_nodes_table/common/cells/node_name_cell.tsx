import { ValidatorImage14x14 } from '@/sites/delegation_ui/elements/validator/validator_image';
import { ValidatorName } from '@/sites/delegation_ui/elements/validator/validator_name';
import { default as React } from 'react';
import './node_name_cell.css';

/**
 * NameNodeCell displays the wallet address of a validator node. It is
 * actually intended to show the name, and an icon for the validator,
 * but it's currently unclear how we would source this information.
 */
export const NodeNameCell: React.FC = () => {
  return (
    <div className="node-name-cell">
      <ValidatorImage14x14 />
      <div className="validator-name-shrinkable">
        <ValidatorName />
      </div>
    </div>
  );
};
