import PercentageText from '@/components/text/percentage_text';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';

/**
 * FeeCell displays the commission fee of a validator as a percentage.
 */
export const FeeCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  return <PercentageText percentage={validator.commission.valueOf()} />;
};
