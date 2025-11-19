import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import { ConsensusMapContext } from '@/sites/delegation_ui/contexts/consensus_map_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';

/**
 * MissedSlotsCell displays the percentage of missed slots for a validator.
 */
export const MissedSlotsCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);

  const activeValidator = consensusMap.get(validator.addressText);

  if (!activeValidator || activeValidator.leaderParticipation == null) {
    return <Text text="-" />;
  }

  return (
    <PercentageText
      percentage={1 - activeValidator.leaderParticipation.ratio}
    />
  );
};
