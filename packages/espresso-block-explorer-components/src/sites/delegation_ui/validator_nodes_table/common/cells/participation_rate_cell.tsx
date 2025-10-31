import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import React from 'react';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';

/**
 * ParticipationRateCell displays the voter participation rate for a validator.
 */
export const ParticipationRateCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  if (validator.voterParticipation === null) {
    return <Text text="-" />;
  }

  return <PercentageText percentage={validator.voterParticipation} />;
};
