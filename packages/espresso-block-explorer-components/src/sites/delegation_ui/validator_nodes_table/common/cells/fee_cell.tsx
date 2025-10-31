import PercentageText from '@/components/text/PercentageText';
import React from 'react';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';

/**
 * FeeCell displays the commission fee of a validator as a percentage.
 */
export const FeeCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  return <PercentageText percentage={validator.commission.valueOf()} />;
};
