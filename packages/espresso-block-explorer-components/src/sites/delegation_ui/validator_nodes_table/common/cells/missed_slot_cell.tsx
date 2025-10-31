import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import React from 'react';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';

/**
 * MissedSlotsCell displays the percentage of missed slots for a validator.
 */
export const MissedSlotsCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  if (validator.leadershipParticipation === null) {
    return <Text text="-" />;
  }

  return <PercentageText percentage={1 - validator.leadershipParticipation} />;
};
